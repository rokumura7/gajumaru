package gajumaru_api.model.vo.book;

import gajumaru_api.model.vo.IdentifiableValueObject;

public final class Id extends IdentifiableValueObject {

  private Id(int value) {
    super(value);
  }

  public static Id of(int value) {
    return new Id(value);
  }
}