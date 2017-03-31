var chai = require('chai');
var expect = chai.expect;

var scoreThrows = require("../script.js");

describe('scoreThrows', () => {

  it('should be a function', () => {
    expect(scoreThrows).to.be.a('function');
  });

  it('should return a score based on throws', () => {
    expect(scoreThrows([1, 5, 11])).to.be.equal(15);
    expect(scoreThrows([15, 20, 30])).to.be.equal(0);
  });

  it('should award bonus points if all throws are perfect', () => {
    expect(scoreThrows([1, 2, 1, 4, 4, 2])).to.be.equal(160);
  });

  it('should return -1 if score collection is empty', () => {
    expect(scoreThrows([])).to.be.equal(-1);
  });

});