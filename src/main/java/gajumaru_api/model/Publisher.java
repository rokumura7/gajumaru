package gajumaru_api.model;

import gajumaru_api.model.vo.publisher.Name;

public class Publisher extends IdentifiableModel {
  private gajumaru_api.model.vo.publisher.Id id;
  private Name name;

  private Publisher(Builder builder) {

  }

  static class Builder {
    private gajumaru_api.model.vo.publisher.Id id;
    private Name name;

    Builder(Name name) {
      this.name = name;
    }

    Builder id(gajumaru_api.model.vo.publisher.Id id) {
      this.id = id;
      return this;
    }

    Builder name(Name name) {
      this.name = name;
      return this;
    }

    Publisher build() {
      if (id == null || name == null) throw new NullPointerException();
      return new Publisher(this);
    }
  }

  @Override
  public gajumaru_api.model.vo.publisher.Id getId() {
    return this.id;
  }

  public Name getName() {
    return this.name;
  }
}