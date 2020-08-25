import { describe, it } from 'mocha';
import { assert, expect } from 'chai';
import launcher from '../../src/crawlers/launcher';
import { BaseCrawler } from '../../src/crawlers/crawler';

const crawler1LaunchOpts = {
  slack: true,
  crawler: 1,
};

const errorLaunchOpts = {
  slack: true,
  crawler: 0,
};

describe('Test for launcher.ts', () => {
  it('crawler 1', () =>
    assert.instanceOf(launcher(crawler1LaunchOpts), BaseCrawler));
  it('crawler 0', () => {
    try {
      expect(launcher(errorLaunchOpts)).to.throw(new Error());
    } catch (e) {
      assert.equal(e.message, 'Unknown crawler: 0');
    }
  });
});
