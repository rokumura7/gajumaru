abstract class ValueObject<T> {
  protected constructor(protected readonly _value: T) {
    Object.freeze(_value);
  }
  get value(): T {
    return this._value;
  }
  clazz = (): string => this.constructor.name;
}

abstract class PrimitiveValueObject<T> extends ValueObject<T> {
  eq = (vo: ValueObject<T>): boolean => {
    if (this.clazz() !== vo.clazz()) return false;
    return this._value === vo.value;
  };
}

export abstract class StringValueObject extends PrimitiveValueObject<string> {}
export abstract class NumberValueObject extends PrimitiveValueObject<number> {}
