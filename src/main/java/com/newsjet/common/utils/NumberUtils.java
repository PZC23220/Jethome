package com.newsjet.common.utils;

import java.util.Random;

/**
 * Number工具类
 *
 * @author Shell
 * @since 1.0 2016-03-01
 */
public class NumberUtils {

    /**
     * 只支持正整数
     *
     * @param str
     * @param defaultVal
     * @return
     */
    public static Integer parse(String str, Integer defaultVal) {
        if (null == str || str.trim().length() == 0) return defaultVal;

        try {
            return Integer.valueOf(str);
        } catch (Exception e) {
            return defaultVal;
        }
    }

    /**
     * 只支持正整数
     *
     * @param str
     * @return
     */
    public static Integer parse(String str) {
        return parse(str, null);
    }

    /**
     * 是否获取默认值
     *
     * @return
     */
    public static int nullDefault(Integer num, int defaultVal) {
        return null == num ? defaultVal : num.intValue();
    }

    public static Long parseLong(String str) {
        return parseLong(str, 0l);
    }

    public static Long parseLong(String str, Long defaultVal) {
        if (StringUtils.isEmpty(str)) {
            return defaultVal;
        }

        try {
            return Long.valueOf(str);
        } catch (Exception e) {
            return defaultVal;
        }
    }

    /**
     * return int [0. bound)
     *
     * @param bound
     * @return
     */
    public static Integer randomInt(int bound) {
        return new Random().nextInt(bound);
    }
}
