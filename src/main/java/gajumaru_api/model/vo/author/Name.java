package gajumaru_api.model.vo.author;

import gajumaru_api.model.vo.StringValueObject;

public class Name extends StringValueObject {

  private Name(String value) {
    super(value);
  }

  public static Name of(String value) {
    return new Name(value);
  }
}