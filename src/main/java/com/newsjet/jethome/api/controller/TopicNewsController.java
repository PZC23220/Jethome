package com.newsjet.jethome.api.controller;

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
import java.util.stream.Stream;

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
    private SolrClient newsSolrClient;
    @Resource
    private SolrClient videoSolrClient;

    public TopicNewsController() {
        executor = Executors.newCachedThreadPool();
    }

    public ApiResponse hello(ApiRequest request) {
        return ApiResponse.ok().setResponseMsg("Hello");
    }

    public ApiResponse init(ApiRequest request) {
        try {
            String title = request.getParamAsStr("title");
            Objects.requireNonNull(title, "Parameter 'title' cannot be null or empty. ");
            getLogger().info("Initialization request for news topic [{}]. ", title);

            Long topicTime = request.getParamAsLong("topic_time", 1);
            Objects.requireNonNull(topicTime, "Parameter 'topic_time' cannot be null or empty. ");

            executor.execute(() -> {
                try {
                    NewsSpecialTopic specialTopic = newsSpecialTopicMapper.selectByTitle(title);
                    String keywordInclusion = specialTopic.getKeywordInclusion();
                    String keywordExclusion = specialTopic.getKeywordExclusion();

                    List<String> keywordInclusionList = Stream.of(keywordInclusion.split(","))
                            .collect(Collectors.toList());
                    List<String> keywordExclusionList = Stream.of(keywordExclusion.split(","))
                            .collect(Collectors.toList());

                    List<SolrDocument> solrDocuments = searchApplicableDocuments(topicTime, keywordInclusionList, keywordExclusionList);

                    List<String> aids = newsSpecialTopicInfoMapper.selectAllNewsID(specialTopic.getId());
                    List<NewsSpecialTopicInfo> topicInfos = solrDocuments.stream()
                            .filter(d -> !aids.contains(Objects.toString(d.getFieldValue("aid"))))
                            .filter(d -> !aids.contains(Objects.toString(d.getFieldValue("vid"))))
                            .map(d -> {
                                NewsSpecialTopicInfo newsSpecialTopicInfo = new NewsSpecialTopicInfo();
                                newsSpecialTopicInfo.setTopicId(specialTopic.getId());
                                if (Objects.equals(d.getFieldValue("newsType"), "news")) {
                                    newsSpecialTopicInfo.setNewsId(Integer.valueOf(Objects.toString(d.getFieldValue("aid"), "-1")));
                                    newsSpecialTopicInfo.setNewsCid(Objects.toString(d.getFieldValue("cid")));
                                    newsSpecialTopicInfo.setNewsTitle(Objects.toString(d.getFieldValue("title")));
                                    newsSpecialTopicInfo.setNewsTime(Integer.valueOf(Objects.toString(d.getFieldValue("ctime"))));
                                    newsSpecialTopicInfo.setNewsType(1);
                                } else if (Objects.equals(d.getFieldValue("newsType"), "video")) {
                                    newsSpecialTopicInfo.setNewsId(Integer.valueOf(Objects.toString(d.getFieldValue("vid"), "-1")));
                                    newsSpecialTopicInfo.setNewsCid(Objects.toString(d.getFieldValue("cid")));
                                    newsSpecialTopicInfo.setNewsTitle(Objects.toString(d.getFieldValue("title")));
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

    private List<SolrDocument> searchApplicableDocuments(Long topicTime, List<String> keywordInclusion, List<String> keywordExclusion)
            throws IOException, SolrServerException {
        ModifiableSolrParams params = new ModifiableSolrParams();
        params.add(CommonParams.QT, "select");
        params.add(CommonParams.ROWS, String.valueOf(Integer.MAX_VALUE));
        params.add(CommonParams.DF, "title");
        params.add(CommonParams.DF, "content");
        params.add(CommonParams.DF, "textContent");
        params.add(CommonParams.FL, "aid,vid,cid,ctime,publishTime,title");
        params.add(CommonParams.SORT, "ctime desc");

        if (!keywordInclusion.isEmpty()) {
            StringBuilder queryString = new StringBuilder();
            for (String s : keywordInclusion) {
                if (s.startsWith("&")) {
                    queryString.append(" AND \"")
                            .append(s.substring(1))
                            .append("\"");
                } else if (s.startsWith("|")) {
                    queryString.append(" OR \"")
                            .append(s.substring(1))
                            .append("\"");
                }
            }
            if (queryString.indexOf(" AND ") == 0) {
                queryString.delete(0, 4);
            } else if (queryString.indexOf(" OR ") == 0) {
                queryString.delete(0, 3);
            }
            getLogger().info("QueryString: [{}]. ", queryString.toString());

            params.add(CommonParams.Q, "(" + queryString.toString() + ")");
        }

        if (!keywordExclusion.isEmpty()) {
            StringBuilder queryString = new StringBuilder();
            for (String s : keywordInclusion) {
                if (s.startsWith("&")) {
                    queryString.append(" AND \"")
                            .append(s.substring(1))
                            .append("\"");
                } else if (s.startsWith("|")) {
                    queryString.append(" OR \"")
                            .append(s.substring(1))
                            .append("\"");
                }
            }
            if (queryString.indexOf(" AND ") == 0) {
                queryString.delete(0, 4);
            } else if (queryString.indexOf(" OR ") == 0) {
                queryString.delete(0, 3);
            }
            getLogger().info("QueryString: [{}]. ", queryString.toString());

            params.add(CommonParams.Q, "-(" + queryString.toString() + ")");
        }

        params.add(CommonParams.FQ, String.format("ctime:[%s TO *]", topicTime));
        QueryResponse query = newsSolrClient.query(params);
        SolrDocumentList results = query.getResults();
        getLogger().info("Results#size: [{}]. ", results.size());
        results.forEach(doc -> doc.setField("newsType", "news"));

        params.remove(CommonParams.FQ);
        params.add(CommonParams.FQ, String.format("publishTime:[%s TO *]", topicTime));
        query = videoSolrClient.query(params);
        query.getResults().forEach(doc -> doc.setField("newsType", "video"));
        results.addAll(query.getResults());

        getLogger().info("Results#size: [{}]. ", results.size());
        return results;
    }
}
