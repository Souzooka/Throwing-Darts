var chai = require('chai');
var expect = chai.expect;

var scoreThrows = require("../script.js");

describe('scoreThrows', () => {

  it('should be a function', () => {
    expect(scoreThrows).to.be.a('function');
  });

});