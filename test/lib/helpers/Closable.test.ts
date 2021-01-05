import { Closable, using } from '@/lib/helpers/Closable';

class ClosableMock implements Closable {
  private closed = false;
  getStatus = (): boolean => this.closed;
  close = async (): Promise<void> => {
    const promise = Promise.resolve(true);
    await promise.then((result) => (this.closed = result));
  };
  test = (): Promise<string> => new Promise((resolve) => resolve('test'));
}

describe('Closable', () => {
  test('using', async () => {
    const mock = new ClosableMock();
    expect(mock.getStatus()).toBe(false);
    const result = await using(mock, async (mock) => await mock.test());
    expect(result).toBe('test');
    expect(mock.getStatus()).toBe(true);
  });
});
