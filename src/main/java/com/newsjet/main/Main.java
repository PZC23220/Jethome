package com.newsjet.main;

import com.mobi.core.net.NetServer;
import com.newsjet.common.TrackControllerAdapter;
import com.newsjet.common.utils.NumberUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * 
 * track api server
 * 
 * @author Shell
 * @since 1.0 2016-06-20
 */
public class Main {

	private static Logger logger = LoggerFactory.getLogger(Main.class);
	
	public static void main(String[] args) {
		Integer inetPort = 9999;
		if(null == args || 0 == args.length) {
			logger.warn("args empty, listen on default port {}.", inetPort);
		} else {
			if(null == (inetPort = NumberUtils.parse(args[0]))) {
				logger.error("invalid port [{}], server exits. ", args[0]);
				System.exit(1);
			}
		}
		
		NetServer netServer = new NetServer();
		netServer.initControllerAdapter(new TrackControllerAdapter());
		netServer.startup(inetPort);
		
	}
	
}
