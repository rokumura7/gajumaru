package gajumaru_api.response;

public abstract class ApiResponse {
    protected String statusCode;
    protected String msg;
    protected ApiResponse(String statusCode, String msg) {
        this.statusCode = statusCode;
        this.msg = msg;
    }
}
