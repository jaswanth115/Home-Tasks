// return the nested property value if it exists,
// otherwise return undefined
Object.prototype.hash = function(string) {
    try {
      return eval(`this.${string}`);
    } catch (e) {
      return undefined;
    }
  }

  //example
  /*
  const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(obj.hash('person.name'), 'joe');
    assert.strictEqual(obj.hash('person.game.home'), undefined);
  });
});
*/