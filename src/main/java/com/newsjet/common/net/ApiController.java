package com.newsjet.common.net;

import com.google.common.base.Strings;
import com.newsjet.common.LoggerAware;
import io.netty.handler.codec.http.HttpResponseStatus;

import java.lang.reflect.Method;

/**
 * <p>api路径反射调用
 *
 * @author Shell
 * @since 1.0 2016-06-20
 */
public abstract class ApiController implements LoggerAware {

    /**
     * @param request
     * @return
     */
    public ApiResponse invoke(ApiRequest request) {
        String methodName = request.getInvokeMethod();
        // 解决坑爹的路径包含'.'的问题
        methodName = methodName.replace(".", "");
        if (Strings.isNullOrEmpty(methodName)) methodName = "defaults";

        try {
            Method method = this.getClass().getMethod(methodName, ApiRequest.class);

            ApiResponse obj = (ApiResponse) method.invoke(this, request);
            return obj;
        } catch (NoSuchMethodException e) {
            getLogger().error("method={} not found !", methodName);
        } catch (Exception e) {
            getLogger().error("Exception caused : {}", e.getMessage());
            e.printStackTrace();
        }

        return ApiResponse.error(HttpResponseStatus.INTERNAL_SERVER_ERROR);
    }

}
