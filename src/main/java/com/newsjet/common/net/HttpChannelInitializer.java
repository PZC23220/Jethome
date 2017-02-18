package com.newsjet.common.net;

import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelPipeline;
import io.netty.channel.socket.SocketChannel;
import io.netty.handler.codec.http.HttpObjectAggregator;
import io.netty.handler.codec.http.HttpRequestDecoder;
import io.netty.handler.codec.http.HttpResponseEncoder;
import io.netty.handler.stream.ChunkedWriteHandler;

/**
 * 
 * socket channel 初始化
 * - 挂载组件
 * 
 * @author Shell
 * @since 1.0 2016-07-21
 */
public class HttpChannelInitializer extends ChannelInitializer<SocketChannel> {

	private AbstractControllerAdapter adapter;
	
	public HttpChannelInitializer(AbstractControllerAdapter adapter) {
		this.adapter = adapter;
	}
	
	@Override
	protected void initChannel(SocketChannel ch) throws Exception {
		ChannelPipeline pipeline = ch.pipeline();
		pipeline
			.addLast("decoder", new HttpRequestDecoder())
			.addLast("aggregator", new HttpObjectAggregator(65536))
			.addLast("encoder", new HttpResponseEncoder())
			.addLast("chunkedWriter", new ChunkedWriteHandler())
			.addLast("handler", new HttpChannelInboundHandler(adapter))
//			.addLast(new StringEncoder(Charset.forName("GBK")))
//			.addLast(new StringDecoder(CharsetUtil.UTF_8))
			;
		
	}

	
}
