package com.newsjet.common.net;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * 
 * @author Shell
 * @since 1.0 2016-06-20
 */
public class TrackControllerAdapter extends AbstractControllerAdapter {

	private static ApplicationContext ctx;
	
	static {
		ctx = new ClassPathXmlApplicationContext("classpath:spring-application.xml");
	}
	
	@Override
	public ApiController getControllerByUri(String uri) {
		if(! ctx.containsBean(uri)) {
			return null;
		}
		return ctx.getBean(uri, ApiController.class);
	}

}
