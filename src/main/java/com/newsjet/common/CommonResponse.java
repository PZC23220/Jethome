package com.newsjet.common;

/**
 * Created by RoyDeng on 16/11/2.
 */
public class CommonResponse {

    private int status;
    private String errorMsg;
    private String alertMsg;
    private Object data;
    private Object headers;

    public CommonResponse(int status, String errorMsg) {
        this.status = status;
        this.errorMsg = errorMsg;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getErrorMsg() {
        return errorMsg;
    }

    public void setErrorMsg(String errorMsg) {
        this.errorMsg = errorMsg;
    }

    public String getAlertMsg() {
        return alertMsg;
    }

    public void setAlertMsg(String alertMsg) {
        this.alertMsg = alertMsg;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public Object getHeaders() {
        return headers;
    }

    public void setHeaders(Object headers) {
        this.headers = headers;
    }

    public static CommonResponse ok() {
        return new CommonResponse(200, "");
    }

    @Override
    public String toString() {
        return "CommonResponse{" +
                "status=" + status +
                ", errorMsg='" + errorMsg + '\'' +
                ", alertMsg='" + alertMsg + '\'' +
                ", data=" + data +
                ", headers=" + headers +
                '}';
    }
}
