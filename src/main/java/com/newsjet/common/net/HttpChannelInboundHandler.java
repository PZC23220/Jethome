package com.newsjet.common.net;

import com.google.common.base.Strings;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.SimpleChannelInboundHandler;
import io.netty.handler.codec.http.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.regex.Pattern;

/**
 * 
 * 当一个ChannelInboundHandler实现类重写channelRead()方法时，它要负责释放ByteBuf相关的内存 (SimpleChannelInboundHandler除外)。
 * 
 * <p>
 * -Dio.netty.leakDetection.level: simple 默认的1%采样率中发现的任何泄露
 * 
 * @author Shell
 * @since 1.0 2016-07-11
 */
public class HttpChannelInboundHandler extends SimpleChannelInboundHandler<FullHttpRequest> {

	private Logger logger = LoggerFactory.getLogger(HttpChannelInboundHandler.class);
	
	private AbstractControllerAdapter controllerAdapter;
	
	
	public HttpChannelInboundHandler(AbstractControllerAdapter adapter) {
		super();
		this.controllerAdapter = adapter;
	}
	
	@Override
	public void channelReadComplete(ChannelHandlerContext ctx) throws Exception {
		super.channelReadComplete(ctx);
		ctx.flush();
	}
	
	@Override
	public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) throws Exception {
//		super.exceptionCaught(ctx, cause);
		logger.warn("An exceptionCaught() event was fired, {}", cause);
		if(null != cause) cause.printStackTrace();
		if(null != ctx) ctx.close();
	}

	/**
	 * handle http request here !
	 */
	@Override
	protected void channelRead0(ChannelHandlerContext ctx, FullHttpRequest httpRequest) throws Exception {
		long start = System.currentTimeMillis();
		
		String ip = getRemoteIP(ctx, httpRequest);
        logger.debug("channel read from addr={}", ip);
        
		ApiResponse response = null;
		try {
            ApiRequest request = ApiRequest.create(httpRequest);
            request.setIp(ip);
            request.setRequestUrl(ctx.channel().remoteAddress().toString() + httpRequest.uri());
            ApiController controller = controllerAdapter.getControllerByUri(request.getControllerUri());
            if(null == controller) {
            	logger.warn("invalid uri={}, remoteAddr={}", request.uri(), ip);
            	response = ApiResponse.error(HttpResponseStatus.NOT_FOUND);
            }
            else {
            	response = controller.invoke(request);
            }
            
        } catch (Exception e) {
            e.printStackTrace();
            response = ApiResponse.error(HttpResponseStatus.INTERNAL_SERVER_ERROR);
        }
		
		DefaultFullHttpResponse httpResponse = response.wrapHttpResponse();
		ctx.write(httpResponse);
    	logger.debug("request uri={} from {}, cost {}ms", httpRequest.uri(), ip, (System.currentTimeMillis() - start));
	}
	
	/**
	 * 从HttpServletRequest中获取远程IP
	 * @param request
	 * @return
	 */
	static Pattern remotePattern = Pattern.compile("^/[0-9]{1,3}(.[0-9]{1,3}){3}:[0-9]{2,}$");
	public static String getRemoteIP(ChannelHandlerContext ctx, HttpRequest request) {

		HttpHeaders heads = request.headers();
		String ip = heads.get("X-Real-IP");// == null ? null : heads.get("X-Real-IP");
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = heads.get("x-forwarded-for");// == null ? null : heads.get("x-forwarded-for");
		}
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = heads.get("Proxy-Client-IP");// == null ? null : heads.get("Proxy-Client-IP");
		}
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = heads.get("WL-Proxy-Client-IP");// == null ? null : heads.get("WL-Proxy-Client-IP");
		}
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = ctx.channel().remoteAddress().toString();
			if(!Strings.isNullOrEmpty(ip) && remotePattern.matcher(ip).matches()) {
				ip = ip.substring(1, ip.indexOf(":"));
			}
		}
		
		if(null != ip && ip.indexOf(",") > 0) {
			ip = ip.substring(0, ip.indexOf(",")).trim();
		}
		
		return ip;
	}
}
