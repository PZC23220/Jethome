package com.newsjet.common.net;

import com.google.api.client.util.Maps;
import com.newsjet.common.utils.JSONUtils;
import io.netty.buffer.Unpooled;
import io.netty.handler.codec.http.*;
import io.netty.util.AsciiString;

import java.util.Map;

/**
 * 
 * @author Shell
 * @since 1.0 2016-07-13
 */
public class ApiResponse {

	private HttpResponseStatus status = HttpResponseStatus.INTERNAL_SERVER_ERROR;
	private AsciiString contentType = HttpHeaderValues.TEXT_PLAIN;
	private Map<String, String> headProps;
	private String responseBody;
	
	private ApiResponse(HttpResponseStatus status) {
		this.status = status;
	}
	
	/**
	 * 生成http response
	 * @return
	 */
	public DefaultFullHttpResponse wrapHttpResponse() {
		byte[] bytes = (null == responseBody)? new byte[0] : responseBody.getBytes();
		
		DefaultFullHttpResponse response = new DefaultFullHttpResponse(HttpVersion.HTTP_1_1, status,
				Unpooled.wrappedBuffer(bytes));
		HttpHeaders heads = response.headers();
		heads.add(HttpHeaderNames.CONTENT_TYPE, contentType + "; charset=UTF-8");
		heads.add(HttpHeaderNames.CONTENT_LENGTH, response.content().readableBytes());
		heads.add(HttpHeaderNames.CONNECTION, HttpHeaderValues.KEEP_ALIVE);
		
		// 被定制的头部信息
		if(null != headProps) headProps.forEach((k, v) -> heads.add(k, v));
		
		return response;
	}
	
	/**
	 * <p>基础类型，如String，Number将默认设置返回text/plain格式头
	 * <p>其它则返回application/json格式头
	 * @param msg
	 * @return
	 */
	public ApiResponse setResponseMsg(Object msg) {
		if((msg instanceof String) || (msg instanceof Number)) {
			responseBody = msg.toString();
		} else {
			contentType = HttpHeaderValues.APPLICATION_JSON;
			responseBody = JSONUtils.toJSONString(msg,
					JSONUtils.SerializeFormatter.NO_REF_FORMAT);
		}
		
		return this;
	}
	
	/**
	 * <p> 指定html页面内容
	 * @return
	 */
	public ApiResponse responseHtml(String msg) {
		contentType = new AsciiString("text/html");
		responseBody = null == msg? "" : msg;
		
		return this;
	}
	
	public static ApiResponse ok() {
		return error(HttpResponseStatus.OK);
	}
	
	/**
	 * Default http status code 400
	 * @return
	 */
	public static ApiResponse error() {
		return error(HttpResponseStatus.BAD_REQUEST);
	}
	
	public static ApiResponse error(HttpResponseStatus status) {
		return new ApiResponse(status);
	}
	
	public ApiResponse addHead(String key, String value) {
		if(null == headProps) headProps = Maps.newHashMap();
		headProps.put(key, value);
		return this;
	}
}
