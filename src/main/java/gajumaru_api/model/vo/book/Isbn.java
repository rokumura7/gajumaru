package gajumaru_api.model.vo.book;

import gajumaru_api.model.vo.StringValueObject;

public final class Isbn extends StringValueObject {
  private Isbn(String value) {
    super(value);
  }

  public static Isbn of(String value) {
    return new Isbn(value);
  }
}