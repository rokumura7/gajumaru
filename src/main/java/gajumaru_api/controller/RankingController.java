package gajumaru_api.controller;

import org.springframework.http.HttpRequest;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/ranking")
public class RankingController {

  @PostMapping
  public String post(@RequestBody HttpRequest req) {
    return "OK";
  }
}
