package gajumaru_api.response;

public class HealthCheckResponse extends ApiResponse {
    private HealthCheckResponse(String statusCode, String msg) {
        super(statusCode, msg);
    }

    public static HealthCheckResponse ok() {
        return new HealthCheckResponse("200", "OK");
    }

    public static HealthCheckResponse ng() {
        return new HealthCheckResponse("500", "Failed...");
    }
}
