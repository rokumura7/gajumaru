import { describe, it } from 'mocha';
import { assert } from 'chai';
import * as utils from '../../../src/lib/util/Utils';

describe('Test for utils.ts', () => {
  it('replaceIndex', () =>
    assert.equal(utils.replaceIndex('td[_INDEX]', 1), 'td[1]'));
});
