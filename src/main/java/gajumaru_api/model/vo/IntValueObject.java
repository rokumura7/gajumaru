package gajumaru_api.model.vo;

public class IntValueObject implements ValueObject<Integer> {
  private final int value;

  protected IntValueObject(int value) {
    this.value = value;
  }

  @Override
  public Integer getValue() {
    return this.value;
  }

  @Override
  public boolean equals(Object obj) {
    if (this == obj) return true;
    if (obj == null || getClass() != obj.getClass()) return false;
    IntValueObject targetObj = (IntValueObject) obj;
    return this.value == targetObj.value;
  }
}