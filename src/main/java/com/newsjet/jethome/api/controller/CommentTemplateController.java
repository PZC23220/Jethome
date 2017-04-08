package com.newsjet.jethome.api.controller;

import com.alibaba.fastjson.JSONObject;
import com.mobi.core.net.http.ApiRequest;
import com.mobi.core.net.http.ApiResponse;
import com.mobi.dao.entity.CommentTemplate;
import com.mobi.dao.entity.OperationLog;
import com.mobi.dao.mapper.CommentTemplateMapper;
import com.mobi.dao.mapper.OperationLogMapper;
import com.newsjet.common.CommonResponse;
import org.apache.http.HttpStatus;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

/**
 * Created by kezhenxu on 2/6/17.
 *
 * @author kezhenxu (zhenxuke@newsjet-inc.com)
 */
@Component("commentTemplate")
public class CommentTemplateController extends AbstractNewsjetController {

    @Resource
    private CommentTemplateMapper commentTemplateMapper;
    @Resource
    private OperationLogMapper operationLogMapper;

    public ApiResponse hello(ApiRequest request) {
        return ApiResponse.ok().setResponseMsg("Hello");
    }

    public ApiResponse create(ApiRequest request) {
        String result = "Unknown";
        try {
            String bodyString = request.getBody();
            getLogger().debug("Body string {}. ", bodyString);

            Objects.requireNonNull(bodyString, "request body cannot be empty. ");

            CommentTemplate commentTemplate = JSONObject.parseObject(bodyString, CommentTemplate.class);
            getLogger().debug("Comment Template {}. ", commentTemplate);

            Objects.requireNonNull(commentTemplate, "request body cannot be converted into CommentTemplate. ");
            Objects.requireNonNull(commentTemplate.getContent(), "comment template content cannot be empty. ");

            commentTemplateMapper.insert(commentTemplate);
            result = "success";
            return ApiResponse.ok();
        } catch (NullPointerException e) {
            result = "fail";
            return response(HttpStatus.SC_NOT_FOUND, e.getMessage());
        } catch (Exception e) {
            result = "fail";
            getLogger().error(e.getMessage(), e);
            return response(HttpStatus.SC_INTERNAL_SERVER_ERROR, "failed to insert comment template. ");
        } finally {
            OperationLog operationLog = new OperationLog();
            operationLog.setResult(result);
            operationLog.setAction(request.getInvokeMethod());
            operationLog.setRole(request.ip());
            operationLog.setParameters(request.getBody());
            operationLogMapper.insertSelective(operationLog);
        }
    }

    public ApiResponse read(ApiRequest request) {
        try {
            Integer from = request.getParamAsInt("from", 0);
            Integer size = request.getParamAsInt("size", 10);
            getLogger().debug("from {}, size {}. ", from, size);

            List<CommentTemplate> commentTemplates = commentTemplateMapper.selectRange(from, size);
            Map<String, Object> resultMap = new HashMap<>();
            resultMap.put("count", commentTemplates.size());
            resultMap.put("data", commentTemplates);

            CommonResponse response = CommonResponse.ok();
            response.setData(resultMap);

            return ApiResponse.ok().setResponseMsg(response);
        } catch (NullPointerException e) {
            return response(HttpStatus.SC_NOT_FOUND, e.getMessage());
        } catch (Exception e) {
            getLogger().error(e.getMessage(), e);
            return response(HttpStatus.SC_INTERNAL_SERVER_ERROR, "failed to get comment template(s). ");
        }
    }

    public ApiResponse update(ApiRequest request) {
        String result = "Unknown";
        try {
            String requestBody = request.getBody();
            getLogger().debug("request body {}. ", requestBody);

            Objects.requireNonNull(requestBody, "request body cannot be empty. ");

            CommentTemplate contentTemplate = JSONObject.parseObject(requestBody, CommentTemplate.class);

            Objects.requireNonNull(contentTemplate, "template cannot be empty.");
            Objects.requireNonNull(contentTemplate.getId(), "template id cannot be empty.");
            commentTemplateMapper.updateByPrimaryKeySelective(contentTemplate);
            result = "success";
            return ApiResponse.ok();
        } catch (NullPointerException e) {
            result = "fail";
            return response(HttpStatus.SC_NOT_FOUND, e.getMessage());
        } catch (Exception e) {
            result = "fail";
            getLogger().error(e.getMessage(), e);
            return response(HttpStatus.SC_INTERNAL_SERVER_ERROR, "failed to update template. ");
        } finally {
            OperationLog operationLog = new OperationLog();
            operationLog.setResult(result);
            operationLog.setAction(request.getInvokeMethod());
            operationLog.setRole(request.ip());
            operationLog.setParameters(request.getBody());
            operationLogMapper.insertSelective(operationLog);
        }
    }

    public ApiResponse delete(ApiRequest request) {
        String result = "Unknown";
        try {
            Integer id = request.getParamAsInt("id");
            getLogger().debug("id {}. ", id);
            Objects.requireNonNull(id, "id cannot be empty. ");

            commentTemplateMapper.deleteByPrimaryKey(id);
            result = "success";
            return ApiResponse.ok();
        } catch (NullPointerException e) {
            result = "fail";
            return response(HttpStatus.SC_NOT_FOUND, e.getMessage());
        } catch (Exception e) {
            result = "fail";
            getLogger().error(e.getMessage(), e);
            return response(HttpStatus.SC_INTERNAL_SERVER_ERROR, "failed to delete template. ");
        } finally {
            OperationLog operationLog = new OperationLog();
            operationLog.setResult(result);
            operationLog.setAction(request.getInvokeMethod());
            operationLog.setRole(request.ip());
            operationLog.setParameters(request.getBody());

        }
    }
}
