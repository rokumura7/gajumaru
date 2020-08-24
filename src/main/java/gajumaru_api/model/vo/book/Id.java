package gajumaru_api.model.vo.book;

import gajumaru_api.model.vo.IntValueObject;

public final class Id extends IntValueObject {

  private Id(int value) {
    super(value);
  }

  public static Id of(int value) {
    return new Id(value);
  }
}