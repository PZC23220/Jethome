package com.newsjet.jethome.api.controller;

import com.alibaba.fastjson.JSON;
import com.mobi.core.net.component.ApiController;
import com.mobi.core.net.http.ApiResponse;
import com.newsjet.common.CommonResponse;
import org.apache.commons.lang.StringUtils;

/**
 * Created by RoyDeng on 16/11/2.
 */
public abstract class AbstractNewsjetController extends ApiController {

    protected ApiResponse response(int status, String errorMsg) {
        return response(status, errorMsg, null);
    }

    protected ApiResponse response(int status, String errorMsg, String alertMsg) {
        getLogger().info("response status:{} errorMsg:{} alertMsg:{}", status, errorMsg, alertMsg);
        ApiResponse response = ApiResponse.ok();
        CommonResponse cr = new CommonResponse(status, errorMsg);
        if (StringUtils.isNotEmpty(alertMsg)) {
            cr.setAlertMsg(alertMsg);
        }
        response.setResponseMsg(JSON.toJSONString(cr));
        return response;
    }

}
