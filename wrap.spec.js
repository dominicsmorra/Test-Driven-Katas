const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });
  it('Returns same string if string length under max was provided', () => {
    expect(wrap('random', 10)).to.equal('random');
  });
  it('Returns multiple lines if string length greater than max was provided', () => {
    expect(wrap('longlong1 longlong2', 10)).to.equal('longlong1\nlonglong2');
  });
  it('Keeps spaces between words', () => {
    expect(wrap('long long1 long long2', 10)).to.equal(
      'long long1\nlong long2'
    );
  });
  it('Passes given statement', () => {
    expect(
      wrap(
        'Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.',
        20
      )
    ).to.equal(
      'Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula.'
    );
  });
});
