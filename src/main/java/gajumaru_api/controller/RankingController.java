package gajumaru_api.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RankingController {

  @RequestMapping(value = "/ranking", method = RequestMethod.POST)
  public String post() {
    return "OK";
  }
}