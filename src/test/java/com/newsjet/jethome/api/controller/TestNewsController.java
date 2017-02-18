package com.newsjet.jethome.api.controller;

import com.newsjet.common.net.ApiRequest;
import io.netty.handler.codec.http.DefaultFullHttpRequest;
import io.netty.handler.codec.http.FullHttpRequest;
import io.netty.handler.codec.http.HttpMethod;
import io.netty.handler.codec.http.HttpVersion;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.annotation.Resource;

/**
 * Created by kezhenxu on 2/18/17.
 *
 * @author kezhenxu (zhenxuke@newsjet-inc.com)
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:spring-application.xml")
public class TestNewsController {

    @Resource
    private NewsController newsController;

    @Test
    public void fixCID() throws Exception {
        newsController.fixCID(
                ApiRequest.create(new DefaultFullHttpRequest(HttpVersion.HTTP_1_1,
                        HttpMethod.GET, "hhttp://localhost:9999/news/fixCID?aid=3354&cid=girl")));
    }
}