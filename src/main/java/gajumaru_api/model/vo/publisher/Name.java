package gajumaru_api.model.vo.publisher;

import gajumaru_api.model.vo.StringValueObject;

public final class Name extends StringValueObject {
  private Name(String value) {
    super(value);
  }

  public static Name of(String value) {
    return new Name(value);
  }
}