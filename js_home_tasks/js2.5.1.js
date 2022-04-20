Array.prototype.square = function() {
    return this.map(v => v * v);
  };
  Array.prototype.cube = function() {
    return this.map(v => v * v * v);
  };
  Array.prototype.sum = function() {
    return this.reduce((a, b) => a + b, 0);
  };
  Array.prototype.average = function() {
    return this.reduce((a, b) => a + b, 0) / this.length;
  };
  Array.prototype.even = function() {
    return this.filter(v => v % 2 == 0);
  };
  Array.prototype.odd = function() {
    return this.filter(v => v % 2 !== 0);
  };


  //example
  /*const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Sample Tests", () => {
  it("test", () => {
    const numbers = [1, 2, 3, 4, 5];
    assert.deepEqual(numbers.square(), [1, 4, 9, 16, 25]);
    assert.deepEqual(numbers.cube(), [1, 8, 27, 64, 125]);
    assert.strictEqual(numbers.sum(), 15, 'Wrong sum');
    assert.strictEqual(numbers.average(), 3, 'Wrong average');
    assert.deepEqual(numbers.even(), [2, 4], 'Wrong result for even()');
    assert.deepEqual(numbers.odd(), [1, 3, 5], 'Wrong result for odd()');
  });
});
*/