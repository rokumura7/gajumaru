import { Closable } from '../lib/helpers/Closable';

export default class ClosableMock implements Closable {
  private closed = false;
  getStatus = (): boolean => this.closed;
  close = async (): Promise<void> => {
    const promise = Promise.resolve(true);
    await promise.then((result) => (this.closed = result));
  };
  test = (): Promise<string> => new Promise((resolve) => resolve('test'));
}
