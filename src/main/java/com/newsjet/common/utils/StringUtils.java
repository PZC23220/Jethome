package com.newsjet.common.utils;

import java.util.List;

public class StringUtils {

    public static boolean isEmpty(String arg) {
        return arg == null || arg.equals("");
    }

    public static boolean isNotEmpty(String arg) {
        return arg != null && !arg.equals("");
    }

    /**
     * 替换origin char 为 target char
     *
     * @return
     */
    public static String replace(String str, char origin, char target) {
        if (null == str || 0 == str.length()) return str;

        StringBuilder buf = new StringBuilder();
        for (char c : str.toCharArray()) {
            if (origin == c) c = target;
            buf.append(c);
        }

        return buf.toString();
    }

    /**
     * @param ids
     * @return
     */
    public static String compositeIds(List<Integer> ids) {
        StringBuilder sb = new StringBuilder();
        for (int id : ids) {
            sb.append("(");
            sb.append(id);
            sb.append("),");
        }
        sb.deleteCharAt(sb.length() - 1);
        return sb.toString();
    }

    /**
     * 返回str+separator+str
     *
     * @param strs
     * @return
     */
    public static String composite(List<String> strs, char seperator) {
        StringBuilder sb = new StringBuilder();
        for (String str : strs) {
            sb.append(str);
            sb.append(seperator);
        }
        sb.deleteCharAt(sb.length() - 1);
        return sb.toString();
    }

    /**
     * @param tracking_link
     * @return
     */
    public static String getAdvAffId(String tracking_link) {
        if (tracking_link == null) {
            return null;
        }
        String[] split = tracking_link.split("&");
        String affIdString = null;
        if (split != null && split.length > 0) {
            affIdString = split[1];
        }
        String adv_aff_id = null;
        if (affIdString != null) {
            String[] split2 = affIdString.split("=");
            if (split2 != null && split2.length > 0) {
                adv_aff_id = split2[1];
            }
        }
        return adv_aff_id;
    }

    /**
     * 把字符串列表转成用逗号分隔的字符串
     *
     * @param list
     * @return
     */
    public static String buildStringByList(List<String> list) {
        StringBuffer sb = new StringBuffer("");
        int size = list.size();
        for (int i = 0; i < size; i++) {
            if (isEmpty(list.get(i))) {
                break;
            }
            sb.append(list.get(i));
            if (i != size - 1) {
                sb.append(",");
            }
        }
        return sb.toString();
    }

    /**
     * 截取url中的文件名,eg:
     * url: http://mobisummer.com/<b>file.zip</b>
     * return: file.zip
     *
     * @param url
     * @return
     */
    public static String getFileNameFromUrl(String url) {
        int index = url.lastIndexOf('/');
        if (index == -1) {
            return null;
        }
        return url.substring(index + 1);
    }

}
