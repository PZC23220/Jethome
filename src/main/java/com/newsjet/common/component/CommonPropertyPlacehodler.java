package com.newsjet.common.component;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.ConfigurableListableBeanFactory;
import org.springframework.beans.factory.config.PropertyPlaceholderConfigurer;

import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Properties;

/**
 * @author Shell
 * @since 1.0 2016-08-24
 */
public class CommonPropertyPlacehodler extends PropertyPlaceholderConfigurer {

    private Map<String, String> kvs = new HashMap<>();

    @Override
    protected void processProperties(ConfigurableListableBeanFactory beanFactoryToProcess, Properties props)
            throws BeansException {
        super.processProperties(beanFactoryToProcess, props);

        for (Entry<Object, Object> entry : props.entrySet()) {
            kvs.put(entry.getKey().toString().trim(), entry.getValue().toString().trim());
        }
    }

    public Integer getPropAsInt(String key, Integer defaultVal) {
        try {
            return Integer.valueOf(kvs.get(key));
        } catch (NumberFormatException e) {
            return defaultVal;
        }
    }

    public String getPropAsStr(String key, String defaultVal) {
        String val = kvs.get(key);
        return null == val ? defaultVal : val;
    }

    public Integer getPropAsInt(String key) {
        try {
            return Integer.valueOf(kvs.get(key));
        } catch (NumberFormatException e) {
            return null;
        }
    }

    public String getPropAsStr(String key) {
        return kvs.get(key);
    }

}
