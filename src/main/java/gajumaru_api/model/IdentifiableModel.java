package gajumaru_api.model;

import gajumaru_api.model.vo.IdentifiableValueObject;

public abstract class IdentifiableModel {

  protected abstract IdentifiableValueObject getId();

  @Override
  public boolean equals(Object obj) {
    if (obj == this) return true;
    if (obj == null || getClass() != obj.getClass()) return false;
    IdentifiableModel model = (IdentifiableModel) obj;
    return model.getId().equals(this.getId());
  }
}