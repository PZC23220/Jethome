package com.newsjet.common;

import com.mobi.core.net.component.AbstractControllerAdapter;
import com.mobi.core.net.component.ApiController;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
//import com.mobi.service.consumer.component.ServiceRegister;

/**
 * 
 * @author Shell
 * @since 1.0 2016-06-20
 */
public class TrackControllerAdapter extends AbstractControllerAdapter {

	private static ApplicationContext ctx;
	
	static {
		ctx = new ClassPathXmlApplicationContext("classpath:spring-application.xml");
		
//		CommonPropertyPlacehodler propertyHolder = ctx.getBean("placeholderConfig", CommonPropertyPlacehodler.class);
//		ServiceRegister.build(propertyHolder.getPropAsStr("zookeeper.server"), propertyHolder.getPropAsInt("zookeeper.port"));
	}
	
	@Override
	public ApiController getControllerByUri(String uri) {
		if(! ctx.containsBean(uri)) {
			return null;
		}
		return ctx.getBean(uri, ApiController.class);
	}

}
