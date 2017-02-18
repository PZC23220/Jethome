package com.newsjet.common.net;

import com.google.common.collect.Maps;
import com.newsjet.common.utils.NumberUtils;
import io.netty.handler.codec.http.FullHttpRequest;
import io.netty.handler.codec.http.HttpHeaders;

import java.util.List;
import java.util.Map;

/**
 * @author Shell
 * @since 1.0 2016-07-12
 */
@SuppressWarnings("unused")
public class ApiRequest {

    private String uri;
    private Map<String, List<String>> params;
    private HttpHeaders headers;
    private String body;

    private String ip;
    private String url;
    private String controller;
    private String invokeMethod;

    /**
     * 用于单元测试
     *
     * @param _uri
     * @param body
     * @param headers
     * @param params
     */
    public ApiRequest(String _uri, String body, HttpHeaders headers, Map<String, List<String>> params) {
        uri = _uri;
        this.params = params;
        this.headers = headers;

        this.body = body;

        int index = uri.indexOf("?");
        if (index > 0) uri = uri.substring(0, index);

        index = uri.lastIndexOf("/");
        if (0 == index) {
            controller = uri.substring(1);
            invokeMethod = null;
        } else if (index > 0 && (index + 1) < uri.length()) {
            controller = uri.substring(1, index);
            invokeMethod = uri.substring(index + 1);
        }
    }

    public static ApiRequest create(FullHttpRequest httpRequest) {
        String uri = httpRequest.uri();

        HttpRequestParser parser = new HttpRequestParser(httpRequest);

        Map<String, List<String>> params = Maps.newHashMap();
        parser.parseUriParams(params, uri); // GET Parameters
        String body = parser.parseContent(params); // POST Parameters

        return new ApiRequest(uri, body, httpRequest.headers(), params);
    }

    /**
     * 获取头部信息
     *
     * @param name
     * @return
     */
    public String getHeader(String name) {
        return null != headers ? headers.get(name) : null;
    }

    /**
     * 获取controller 路径
     *
     * @return
     */
    public String getControllerUri() {
        return this.controller;
    }

    /**
     * 获取 访问方法名称
     *
     * @return
     */
    public String getInvokeMethod() {
        return this.invokeMethod;
    }

    public String uri() {
        return this.uri;
    }

    public String ip() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public String url() {
        return url;
    }

    public void setRequestUrl(String url) {
        this.url = url;
    }

    public Integer getParamAsInt(String key) {
        return NumberUtils.parse(getParamAsStr(key));
    }

    public Integer getParamAsInt(String key, Integer defaultVal) {
        return NumberUtils.parse(getParamAsStr(key), defaultVal);
    }

    public Long getParamAsLong(String key) {
        return NumberUtils.parseLong(getParamAsStr(key));
    }

    public Long getParamAsLong(String key, long defaultVal) {
        return NumberUtils.parseLong(getParamAsStr(key), defaultVal);
    }

    public String getParamAsStr(String key) {
        List<String> vals = params.get(key);
        return (null == vals) ? null : (0 == vals.size()) ? "" : vals.get(0);
    }

    public String getParamAsStr(String key, String defaultVal) {
        String val = getParamAsStr(key);
        return null == val ? defaultVal : val;
    }

    public Map<String, String> getParamMap() {
        Map<String, String> data = Maps.newHashMap();
        if (null != this.params) {
            this.params.forEach((k, v) -> {
                String val = getParamAsStr(k);
                if (null == val) val = "";
                data.put(k, val);
            });
        }
        return data;
    }

    public Map<String, List<String>> getParamMapList() {
        return this.params;
    }

    /**
     * @return
     */
    public String getBody() {
        return this.body;
    }
}