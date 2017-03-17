package com.newsjet.jethome.api.controller;

import com.alibaba.fastjson.JSONArray;
import com.newsjet.common.net.ApiRequest;
import com.newsjet.common.net.ApiResponse;
import com.newsjet.jethome.dao.entity.NewsSpecialTopic;
import com.newsjet.jethome.dao.entity.NewsSpecialTopicInfo;
import com.newsjet.jethome.dao.mapper.NewsSpecialTopicInfoMapper;
import com.newsjet.jethome.dao.mapper.NewsSpecialTopicMapper;
import io.netty.handler.codec.http.HttpResponseStatus;
import org.apache.solr.client.solrj.SolrClient;
import org.apache.solr.client.solrj.SolrServerException;
import org.apache.solr.client.solrj.response.QueryResponse;
import org.apache.solr.common.SolrDocument;
import org.apache.solr.common.SolrDocumentList;
import org.apache.solr.common.params.CommonParams;
import org.apache.solr.common.params.ModifiableSolrParams;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.io.IOException;
import java.util.List;
import java.util.Objects;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.stream.Collectors;

/**
 * Created by kezhenxu on 3/17/17.
 *
 * @author kezhenxu (zhenxuke@newsjet-inc.com)
 */
@Component("news_topic")
public class TopicNewsController extends AbstractNewsjetController {

    private ExecutorService executor;
    @Resource
    private NewsSpecialTopicMapper newsSpecialTopicMapper;
    @Resource
    private NewsSpecialTopicInfoMapper newsSpecialTopicInfoMapper;
    @Resource
    private SolrClient solrClient;

    public TopicNewsController() {
        executor = Executors.newCachedThreadPool();
    }

    public ApiResponse hello(ApiRequest request) {
        return ApiResponse.ok().setResponseMsg("Hello");
    }

    public ApiResponse init(ApiRequest request) {
        try {
            Integer topicID = request.getParamAsInt("topicID");
            Objects.requireNonNull(topicID, "Parameter 'topicID' cannot be null or empty. ");
            getLogger().info("Initialization request for news topic [{}]. ", topicID);

            executor.execute(() -> {
                try {
                    NewsSpecialTopic specialTopic = newsSpecialTopicMapper.selectByPrimaryKey(topicID);
                    String keywordInclusion = specialTopic.getKeywordInclusion();
                    String keywordExclusion = specialTopic.getKeywordExclusion();

                    List<String> keywordInclusionList = JSONArray.parseArray(keywordInclusion)
                            .stream()
                            .map(Objects::toString)
                            .collect(Collectors.toList());
                    List<String> keywordExclusionList = JSONArray.parseArray(keywordExclusion)
                            .stream()
                            .map(Objects::toString)
                            .collect(Collectors.toList());

                    List<SolrDocument> solrDocuments = searchApplicableDocuments(keywordInclusionList, keywordExclusionList);

                    List<String> aids = newsSpecialTopicInfoMapper.selectAllNewsID();
                    List<NewsSpecialTopicInfo> topicInfos = solrDocuments.stream()
                            .filter(d -> !aids.contains(Objects.toString(d.getFieldValue("aid"))))
                            .filter(d -> !aids.contains(Objects.toString(d.getFieldValue("vid"))))
                            .map(d -> {
                                NewsSpecialTopicInfo newsSpecialTopicInfo = new NewsSpecialTopicInfo();
                                newsSpecialTopicInfo.setTopicId(topicID);
                                if (Objects.equals(d.getFieldValue("newsType"), "news")) {
                                    newsSpecialTopicInfo.setNewsId(Integer.valueOf(Objects.toString(d.getFieldValue("aid"), "-1")));
                                    newsSpecialTopicInfo.setNewsCid(Objects.toString(d.getFieldValue("cid")));
                                    newsSpecialTopicInfo.setNewsTime(Integer.valueOf(Objects.toString(d.getFieldValue("ctime"))));
                                    newsSpecialTopicInfo.setNewsType(1);
                                } else if (Objects.equals(d.getFieldValue("newsType"), "video")) {
                                    newsSpecialTopicInfo.setNewsId(Integer.valueOf(Objects.toString(d.getFieldValue("vid"), "-1")));
                                    newsSpecialTopicInfo.setNewsCid(Objects.toString(d.getFieldValue("cid")));
                                    long timeInMilliseconds = Long.valueOf(Objects.toString(d.getFieldValue("publishTime")));
                                    newsSpecialTopicInfo.setNewsTime((int) (timeInMilliseconds / 1000));
                                    newsSpecialTopicInfo.setNewsType(2);
                                }
                                return newsSpecialTopicInfo;
                            })
                            .distinct()
                            .collect(Collectors.toList());

                    topicInfos.forEach(info -> {
                        try {
                            newsSpecialTopicInfoMapper.insertSelective(info);
                        } catch (Exception e) {
                            getLogger().warn(e.getMessage(), e);
                        }
                    });
                } catch (Exception e) {
                    getLogger().warn(e.getMessage(), e);
                }
            });
            return ApiResponse.ok();
        } catch (NullPointerException e) {
            getLogger().warn(e.getMessage(), e);
            return ApiResponse.error(HttpResponseStatus.NOT_ACCEPTABLE).setResponseMsg(e.getMessage());
        } catch (Exception e) {
            getLogger().warn(e.getMessage(), e);
            return ApiResponse.error(HttpResponseStatus.INTERNAL_SERVER_ERROR).setResponseMsg(e.getMessage());
        }
    }

    private List<SolrDocument> searchApplicableDocuments(List<String> keywordInclusion, List<String> keywordExclusion)
            throws IOException, SolrServerException {
        ModifiableSolrParams params = new ModifiableSolrParams();
        params.add(CommonParams.QT, "select");
        params.add(CommonParams.ROWS, String.valueOf(Integer.MAX_VALUE));
        params.add(CommonParams.DF, "title");
        params.add(CommonParams.DF, "content");
        params.add(CommonParams.DF, "textContent");
        params.add(CommonParams.FL, "aid,vid,cid,ctime,publishTime");
        params.add(CommonParams.SORT, "ctime desc");

        if (!keywordInclusion.isEmpty())
            params.add(CommonParams.Q, keywordInclusion.stream().collect(Collectors.joining("\" OR \"", "(\"", "\")")));

        if (!keywordExclusion.isEmpty())
            params.add(CommonParams.Q, keywordExclusion.stream().collect(Collectors.joining("\" OR \"", "-(\"", "\")")));

        QueryResponse query = solrClient.query("tnews", params);
        SolrDocumentList results = query.getResults();
        getLogger().info("Results#size: [{}]. ", results.size());
        results.forEach(doc -> doc.setField("newsType", "news"));

        query = solrClient.query("tvideos", params);
        query.getResults().forEach(doc -> doc.setField("newsType", "video"));
        results.addAll(query.getResults());

        getLogger().info("Results#size: [{}]. ", results.size());
        return results;
    }
}
