const { expect } = require('chai');
const func = require('./twoSum');

describe('func', () => {
    it('returns an empty array if an empty array is sent in', () => {
    expect(func([], 10).length).to.equal(0)});
    it('returns an empty array if sum isnt found', () => {
        expect(func([1,5], 10).length).to.equal(0)});
    it('returns an array if sum exists', () => {
        expect(func([6,3,4], 10)[0]).to.equal(0);
        expect(func([6,3,4], 10)[1]).to.equal(2)});
  });