package com.newsjet.common;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Created by kezhenxu on 2/8/17.
 *
 * @author kezhenxu (zhenxuke@newsjet-inc.com)
 */
public interface LoggerAware {
    default Logger getLogger() {
        return LoggerFactory.getLogger(this.getClass());
    }
}
