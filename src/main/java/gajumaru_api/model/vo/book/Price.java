package gajumaru_api.model.vo.book;

import gajumaru_api.model.vo.IntValueObject;

public final class Price extends IntValueObject {
  private Price(int value) {
    super(value);
  }

  public static Price of(int value) {
    return new Price(value);
  }
}