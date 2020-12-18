import * as utils from '@/lib/utils/Utils';

describe('Test for Utils.replaceIndex()', () => {
  test('replaceIndex() can replace _INDEX to ${index}', () => {
    const result = utils.replaceIndex('td[_INDEX]', 1);
    expect(result).toBe('td[1]');
  });
  test('replaceIndex() replace nothing if there are no _INDEX', () => {
    const result = utils.replaceIndex('td[2]', 1);
    expect(result).toBe('td[2]');
  });
});

describe('Test for Utils.wait()', () => {
  test('wait() force to wait the process for 1 sec.', async () => {
    const before = Date.now();
    await utils.wait();
    const after = Date.now();
    expect(after - before).toBeGreaterThan(1000);
    expect(after - before).toBeLessThan(2000);
  });

  test('wait(3) force to wait the process for 3 sec.', async () => {
    const before = Date.now();
    await utils.wait(3);
    const after = Date.now();
    expect(after - before).toBeGreaterThan(3000);
    expect(after - before).toBeLessThan(4000);
  });
});

describe('Test for Utils.f2h()', () => {
  test('f2h() can replace target to half-width.', () => {
    const result = utils.f2h('Ａ１b2');
    expect(result).toBe('A1b2');
  });
});

describe('Test for Utils.fetchNum()', () => {
  test('fetchNum() can fetch number', () => {
    const result = utils.fetchNum('123,456円');
    expect(result).toBe(123456);
  });

  test('fetchNum() can replace target, and then fetch number', () => {
    const result = utils.fetchNum('１２３、４５６円');
    expect(result).toBe(123456);
  });
});
