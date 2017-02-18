package com.newsjet.common.net;

import com.google.api.client.http.UrlEncodedParser;
import com.google.common.base.Strings;
import io.netty.buffer.ByteBuf;
import io.netty.handler.codec.http.FullHttpRequest;
import io.netty.util.CharsetUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;
import java.util.Map;

/**
 * @author Shell
 * @since 1.0 2016-06-21
 */
public class HttpRequestParser {

    private Logger logger = LoggerFactory.getLogger(HttpRequestParser.class);

    private FullHttpRequest request;

    public HttpRequestParser(FullHttpRequest request) {
        this.request = request;
    }

    public Map<String, List<String>> parseUriParams(Map<String, List<String>> wrapCtn, String uri) {

        int index = -1;
        if (0 <= (index = uri.indexOf("?"))) {
            parseData(wrapCtn, uri.substring(index + 1));
        }
        return wrapCtn;
    }

    public String parseContent(Map<String, List<String>> wrapCtn) {
        if ("POST".equals(request.method().name())) {
            ByteBuf buf = request.content();
            int readable = buf.readableBytes();
            if (0 < readable) {
                byte[] bytes = new byte[readable];
                buf.readBytes(bytes);

//                String content_type = request.headers().get(HttpHeaderNames.CONTENT_TYPE);

                String content = new String(bytes, CharsetUtil.UTF_8);
                char c = content.charAt(0);
                if ('[' == c || '{' == c) {
                    return content;
                }
            }
        }
        return null;
    }

    private Map<String, List<String>> parseData(Map<String, List<String>> data, String content) {
        if (!Strings.isNullOrEmpty(content)) {
            try {
                UrlEncodedParser.parse(content, data);
            } catch (Exception e) {
                logger.info("could not pasrse content={}, err={}", content, e);
            }
        }
        return data;
    }
}