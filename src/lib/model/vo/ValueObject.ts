abstract class ValueObject<T> {
  protected constructor(protected readonly val: T) {
    Object.freeze(this.val);
  }
  get(): T {
    return this.val;
  }
  clazz(): string {
    return this.constructor.name;
  }
  eq(vo: ValueObject<T>): boolean {
    if (this.clazz() !== vo.clazz()) return false;
    return this.val === vo.val;
  }
}

export abstract class StringValueObject extends ValueObject<string> {}
export abstract class NumberValueObject extends ValueObject<number> {}
