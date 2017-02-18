package com.newsjet.jethome.api.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.newsjet.common.net.ApiRequest;
import com.newsjet.common.net.ApiResponse;
import com.newsjet.jethome.dao.entity.NewsUploadWithBLOBs;
import com.newsjet.jethome.dao.mapper.NewsUploadMapper;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;

/**
 * Created by kezhenxu on 2/14/17.
 *
 * @author kezhenxu (zhenxuke@newsjet-inc.com)
 */
@Component("newsUpload")
public class NewsUploadController extends AbstractNewsjetController {

    @Resource
    private NewsUploadMapper newsUploadMapper;

    public ApiResponse hello(ApiRequest request) {
        return ApiResponse.ok().setResponseMsg("Hello");
    }

    public ApiResponse create(ApiRequest request) {
        try {
            String requestBody = request.getBody();
            NewsUploadWithBLOBs newsUpload = JSONObject.parseObject(requestBody, NewsUploadWithBLOBs.class);
            getLogger().info("NewsUpload = [{}]. ", JSON.toJSONString(newsUpload, true));

            int countEffected = newsUploadMapper.insertSelective(newsUpload);
            getLogger().info("CountEffected = [{}]. ", countEffected);
            if (countEffected != 1) {
                getLogger().error("Failed to Insert News, countEffected is [{}]. ", countEffected);
                return ApiResponse.error();
            }
            return ApiResponse.ok();
        } catch (Exception e) {
            getLogger().error(e.getMessage(), e);
        }
        return ApiResponse.error();
    }
}
