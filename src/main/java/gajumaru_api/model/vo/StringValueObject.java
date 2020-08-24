package gajumaru_api.model.vo;

public abstract class StringValueObject implements ValueObject<String> {
  private final String value;

  protected StringValueObject(String value) {
    this.value = value;
  }

  public String getValue() {
    return this.value;
  }

  @Override
  public boolean equals(Object obj) {
    if (this == obj) return true;
    if (obj == null || getClass() != obj.getClass()) return false;
    StringValueObject targetObj = (StringValueObject) obj;
    return this.value == targetObj.value;
  }
}