package com.newsjet.common.net;

/**
 * @author Shell
 * @since 1.0 2016-06-20
 */
public abstract class AbstractControllerAdapter {

    public abstract ApiController getControllerByUri(String uri);
}
