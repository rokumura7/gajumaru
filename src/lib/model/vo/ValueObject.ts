import { shallowEqual } from 'shallow-equal-object';

export abstract class ValueObject<T> {
  protected readonly _value: T;

  protected constructor(_value: T) {
    this._value = Object.freeze(_value);
  }

  equals = (vo?: ValueObject<T>): boolean => {
    if (vo == null) return false;
    return shallowEqual(this._value, vo._value);
  };
}

export abstract class PrimitiveValueObject<T> extends ValueObject<T> {
  get value(): T {
    return this._value;
  }
}

export abstract class StringValueObject extends PrimitiveValueObject<string> {}
export abstract class NumberValueObject extends PrimitiveValueObject<number> {}
