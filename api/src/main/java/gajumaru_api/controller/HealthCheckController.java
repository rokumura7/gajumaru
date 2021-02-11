package gajumaru_api.controller;

import gajumaru_api.response.HealthCheckResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/h")
class HealthCheckController {

    @GetMapping
    public HealthCheckResponse healthCheck() {
        return HealthCheckResponse.ok();
    }
}
