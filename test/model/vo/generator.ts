import { describe, it } from 'mocha';
import { assert } from 'chai';
import of from '../../../src/model/vo/generator';
import { Title } from '../../../src/model/vo/book';

describe('Test for generator.ts', () => {
  it('title', () => assert.equal(of<Title>('title'), of<Title>('title')));
  it('not title', () =>
    assert.notEqual(of<Title>('title'), of<Title>('not title')));
});
