package gajumaru_api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/h")
class HelloWorldController {

  @GetMapping
  public String healthCheck() {
    return "OK";
  }
}