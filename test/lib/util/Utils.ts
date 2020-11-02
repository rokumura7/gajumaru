import { describe, it } from 'mocha';
import { assert } from 'chai';
import * as utils from '../../../src/lib/util/Utils';

describe('Test for Utils.replaceIndex()', () => {
  it('replaceIndex() can replace _INDEX to ${index}', () =>
    assert.equal(utils.replaceIndex('td[_INDEX]', 1), 'td[1]'));

  it('replaceIndex() replace nothing if there are no _INDEX', () =>
    assert.equal(utils.replaceIndex('td[2]', 1), 'td[2]'));
});

describe('Test for Utils.wait()', () => {
  it('wait() force to wait the process for 1 sec.', async () => {
    const before = Date.now();
    await utils.wait();
    const after = Date.now();
    assert.isAbove(after - before, 1000);
    assert.isBelow(after - before, 2000);
  });

  it('wait(3) force to wait the process for 3 sec.', async function () {
    this.timeout(4000);
    const before = Date.now();
    await utils.wait(3);
    const after = Date.now();
    assert.isAbove(after - before, 3000);
    assert.isBelow(after - before, 4000);
  });
});
