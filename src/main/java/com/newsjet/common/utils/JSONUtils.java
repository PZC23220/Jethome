package com.newsjet.common.utils;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.TypeReference;
import com.alibaba.fastjson.serializer.SerializerFeature;

import java.util.List;

/**
 * JSON 工具类
 *
 * @author Shell
 * @since 1.0 2016-02-29
 */
public class JSONUtils {

    public enum SerializeFormatter {
        /**
         * TIMESTAMP format as 'yyyy-MM-dd HH:mm:ss'
         */
        NO_REF_FORMAT(SerializerFeature.DisableCircularReferenceDetect),
        DEFAULT_DATE(SerializerFeature.WriteDateUseDateFormat);

        private SerializerFeature seria;

        SerializeFormatter(SerializerFeature seria) {
            this.seria = seria;
        }
    }

    public static Object parse(String json) {
        return JSONObject.parse(json);
    }

    /**
     * json to bean
     */
    public static <T> T parse(String json, Class<T> clazz) {
        return JSON.parseObject(json, clazz);
    }

    /**
     * json to bean
     */
    public static <T> T parseObject(String json, TypeReference<T> ref) {
        return JSON.parseObject(json, ref);
    }

    /**
     * bean to json
     */
    public static String toJSONString(Object obj) {
        return JSON.toJSONString(obj);
    }

    /**
     * 定制化格式
     *
     * @param obj
     * @param sf
     * @return
     */
    public static String toJSONString(Object obj, SerializeFormatter sf) {
        return JSON.toJSONString(obj, sf.seria);
    }

    /**
     * json to bean list
     */
    public static <T> List<T> parseArray(String json, Class<T> clazz) {
        return JSON.parseArray(json, clazz);
    }

}
