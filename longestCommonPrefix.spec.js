const { expect } = require('chai');
const func = require('./longestCommonPrefix');

describe('func', () => {
    it('you know', () => {
    expect(func(['foobar', 'foo', 'foolish'])).to.equal('foo')});
  });