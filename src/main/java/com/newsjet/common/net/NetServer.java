package com.newsjet.common.net;

import io.netty.bootstrap.ServerBootstrap;
import io.netty.channel.ChannelOption;
import io.netty.channel.EventLoopGroup;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.nio.NioServerSocketChannel;
import io.netty.util.concurrent.DefaultThreadFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Net server:
 * -
 *
 * @author Shell
 * @since 1.0 2016-07-11
 */
public class NetServer {

    private static Logger logger = LoggerFactory.getLogger(NetServer.class);

    private AbstractControllerAdapter adapter;

    /**
     * startup server ...
     *
     * @param inetPort listening port
     */
    public void startup(int inetPort) {
        if (null == adapter) {
            throw new RuntimeException("The controller adapter could not be null !");
        }

		/*
         * default nThreads：
		 * 1) "io.netty.eventLoopThreads"
		 * 2) Runtime.getRuntime().availableProcessors() * 2
		 */
        int nThreads = Runtime.getRuntime().availableProcessors() * 2;
        EventLoopGroup bossGroup = new NioEventLoopGroup(nThreads, new DefaultThreadFactory("boss", false));
        EventLoopGroup workerGroup = new NioEventLoopGroup(nThreads, new DefaultThreadFactory("worker", false));

        ServerBootstrap bootstrap = new ServerBootstrap();
        bootstrap.group(bossGroup, workerGroup)
                .channel(NioServerSocketChannel.class) // server socket
                .childHandler(new HttpChannelInitializer(adapter))
                .option(ChannelOption.SO_BACKLOG, 128) // determining the number of connections queued
                .childOption(ChannelOption.SO_KEEPALIVE, Boolean.TRUE);

        try {
            bootstrap.bind(inetPort).sync();
        } catch (InterruptedException e) {
            e.printStackTrace();
            throw new RuntimeException("The server fail to listen on port " + inetPort);
        }

        logger.info("Server startup, listening on {} ...", inetPort);
    }

    /**
     * init controller adapter
     *
     * @param adapter
     */
    public void initControllerAdapter(AbstractControllerAdapter adapter) {
        this.adapter = adapter;
    }

}
