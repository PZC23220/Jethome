package com.newsjet.jethome.api.controller;

import com.google.common.base.Strings;
import com.mobi.core.net.http.ApiRequest;
import com.mobi.core.net.http.ApiResponse;
import com.mobi.dao.entity.NewsSpecialTopic;
import com.mobi.dao.entity.NewsSpecialTopicInfo;
import com.mobi.dao.entity.OperationLog;
import com.mobi.dao.mapper.NewsSpecialTopicInfoMapper;
import com.mobi.dao.mapper.NewsSpecialTopicMapper;
import com.mobi.dao.mapper.OperationLogMapper;
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
    private SolrClient newsSolrClient;
    @Resource
    private SolrClient videoSolrClient;
    @Resource
    private OperationLogMapper operationLogMapper;

    public TopicNewsController() {
        executor = Executors.newCachedThreadPool();
    }

    public ApiResponse hello(ApiRequest request) {
        return ApiResponse.ok().setResponseMsg("Hello");
    }

    public ApiResponse init(ApiRequest request) {
        String result = "Unknown";
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

                    List<SolrDocument> solrDocuments = searchApplicableDocuments(topicTime);

                    List<String> aids = newsSpecialTopicInfoMapper.selectAllNewsID(specialTopic.getId());
                    List<NewsSpecialTopicInfo> topicInfos = solrDocuments.stream()
                            .filter(d -> !aids.contains(Objects.toString(d.getFieldValue("aid"))))
                            .filter(d -> !aids.contains(Objects.toString(d.getFieldValue("vid"))))
                            .filter(d -> {
                                if (!Strings.isNullOrEmpty(keywordInclusion))
                                    return Objects.toString(d.getFieldValue("title")).matches(keywordInclusion);
                                return false;
                            })
                            .filter(d -> {
                                if (!Strings.isNullOrEmpty(keywordExclusion)) {
                                    return !Objects.toString(d.getFieldValue("title")).matches(keywordExclusion);
                                }
                                return true;
                            })
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
            result = "success";
            return ApiResponse.ok();
        } catch (NullPointerException e) {
            result = "fail";
            getLogger().warn(e.getMessage(), e);
            return ApiResponse.error(HttpResponseStatus.NOT_ACCEPTABLE).setResponseMsg(e.getMessage());
        } catch (Exception e) {
            result = "fail";
            getLogger().warn(e.getMessage(), e);
            return ApiResponse.error(HttpResponseStatus.INTERNAL_SERVER_ERROR).setResponseMsg(e.getMessage());
        } finally {
            OperationLog operationLog = new OperationLog();
            operationLog.setResult(result);
            operationLog.setAction(request.getInvokeMethod());
            operationLog.setTable("newsTopicInfo");
            operationLog.setRole(request.ip());
            operationLog.setParameters(request.getBody());
            operationLogMapper.insertSelective(operationLog);
        }
    }

    private List<SolrDocument> searchApplicableDocuments(Long topicTime)
            throws IOException, SolrServerException {
        ModifiableSolrParams params = new ModifiableSolrParams();
        params.add(CommonParams.QT, "select");
        params.add(CommonParams.ROWS, String.valueOf(Integer.MAX_VALUE));
        params.add(CommonParams.FL, "aid,vid,cid,ctime,publishTime,title");
        params.add(CommonParams.SORT, "ctime desc");
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
