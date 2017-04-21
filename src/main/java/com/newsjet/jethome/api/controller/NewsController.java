package com.newsjet.jethome.api.controller;

import com.alibaba.fastjson.JSON;
import com.newsjet.common.net.ApiRequest;
import com.newsjet.common.net.ApiResponse;
import org.apache.http.HttpStatus;
import org.apache.solr.client.solrj.SolrClient;
import org.apache.solr.common.SolrDocumentList;
import org.apache.solr.common.SolrInputDocument;
import org.apache.solr.common.params.CommonParams;
import org.apache.solr.common.params.ModifiableSolrParams;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.stream.Collectors;

/**
 * Created by kezhenxu on 2/18/17.
 *
 * @author kezhenxu (zhenxuke@newsjet-inc.com)
 */
@Component("news")
public class NewsController extends AbstractNewsjetController {

    public ApiResponse hello(ApiRequest request) {
        return ApiResponse.ok().setResponseMsg("Hello");
    }

    @Resource
    private SolrClient newsSolrClient;

    public ApiResponse fixCID(ApiRequest request) {
        try {
            getLogger().info("Request = [{}]. ", JSON.toJSONString(request));

            String aid = request.getParamAsStr("aid");

            Objects.requireNonNull(aid, "Aid cannot be empty. ");

            List<String> ids = getIDByAID(aid);

            for (String id : ids) {
                SolrInputDocument solrInputDocument = new SolrInputDocument();
                solrInputDocument.addField("id", id);

                String cid = request.getParamAsStr("cid");
                Map<String, String> operation = new HashMap<>();
                operation.put("set", cid);

                solrInputDocument.addField("cid", operation);
                newsSolrClient.add(solrInputDocument);
                newsSolrClient.commit();
            }

            return ApiResponse.ok();
        } catch (NullPointerException e) {
            getLogger().error(e.getMessage(), e);
            return response(HttpStatus.SC_NOT_FOUND, e.getMessage());
        } catch (Exception e) {
            return response(HttpStatus.SC_INTERNAL_SERVER_ERROR, e.getMessage());
        }
    }

    private List<String> getIDByAID(String aid) throws Exception {
        ModifiableSolrParams params = new ModifiableSolrParams();
        params.add(CommonParams.FQ, String.format("aid:%s", aid));

        SolrDocumentList results = newsSolrClient.query(params).getResults();

        getLogger().info("Result.size = [{}]. ", results.size());

        return results.stream()
                .map(doc -> Objects.toString(doc.getFieldValue("id")))
                .collect(Collectors.toList());
    }
}
