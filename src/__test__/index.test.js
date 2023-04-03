const { fibonacci } = require('../index.js');

describe('Test A', function () {
  it('fibonacci should work', function () {
    expect(fibonacci(10)).toBe(55);
  });
});
