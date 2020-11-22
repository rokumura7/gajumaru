import { AbstractValueObject } from './AbstractValueObject';

export abstract class PrimitiveValueObject<T> extends AbstractValueObject<T> {
  get value(): T {
    return this._value;
  }
}

export abstract class StringValueObject extends PrimitiveValueObject<string> {}
export abstract class NumberValueObject extends PrimitiveValueObject<number> {}
