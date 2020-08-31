package gajumaru_api.model;

import gajumaru_api.model.vo.IdentifiableValueObject;
import gajumaru_api.model.vo.author.Name;

public class Author extends IdentifiableModel {
  private gajumaru_api.model.vo.author.Id id;
  private Name name;

  private Author(Builder builder) {
    this.id = builder.id;
    this.name = builder.name;
  }

  static class Builder {
    private gajumaru_api.model.vo.author.Id id;
    private Name name;

    Builder(gajumaru_api.model.vo.author.Id id, Name name) {
      this.id = id;
      this.name = name;
    }

    Builder id(gajumaru_api.model.vo.author.Id id) {
      this.id = id;
      return this;
    }

    Builder name(Name name) {
      this.name = name;
      return this;
    }

    Author build() {
      if (name == null) throw new NullPointerException();
      return new Author(this);
    }
  }

  @Override
  public IdentifiableValueObject getId() {
    return this.id;
  }

  public Name getName() {
    return this.name;
  }
}