const sum = require('./sum');

describe('sum function', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('adds -1 + 5 to equal 4', () => {
    expect(sum(-1, 5)).toBe(4);
  });
});
