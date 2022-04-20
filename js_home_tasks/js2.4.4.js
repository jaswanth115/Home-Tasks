const compose = (f, g) => (...args) => f(g(...args));
//example
/*const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Sample Tests", () => {
  it("Should work with a single argument", () => {
    const add1 = function(a){return a + 1}
    const id = function(a){return a}

    assert.strictEqual( compose(add1,id)(0), 1 )
  });
  it("Should work with a single argument", () => {
    const add1 = function(a){return a + 1}
    const addAll3 = function(a,b,c){return a + b + c}

    assert.strictEqual( compose(add1,addAll3)(1,2,3), 7 )
  });
});
*/