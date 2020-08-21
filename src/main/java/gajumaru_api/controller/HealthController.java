package gajumaru_api.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
class HelloWorldController {

  @RequestMapping(value = "/h", method = RequestMethod.GET)
  public String healthCheck() {
    return "OK";
  }
}