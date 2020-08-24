package gajumaru_api.model.vo.book;

import gajumaru_api.model.vo.StringValueObject;

public class Title extends StringValueObject {
  private Title(String value) {
    super(value);
  }

  public static Title of(String value) {
    return new Title(value);
  }
}