var script = require( './../script.js' ); // import the file we are testing
var chai = require( 'chai' );
var should = chai.should();

function scoreThrows(throwArr) {
  var perfectThrows = true;
  var score = 0;

  for (let i = 0; i < throwArr.length; i++) {

    if (throwArr[i] >= 5) {
      perfectThrows = false;
    }

    if (throwArr[i] < 5) {
      score += 10;
    }
    else if (throwArr[i] <= 10 && throwArr[i] >= 5) {
      score += 5;
    }

  }

  if (perfectThrows) {
    score += 100;
  }

  return score;

}


describe( 'Dart Throwing Scores', function() {

  it( 'should return the value \'15\' if given [1, 5, 11] as an argument', function() {
    var sum = scoreThrows( [1, 5, 11] );
    sum.should.equal( 15 );
  });

  it( 'should return \'0\' if given [15, 20, 30] as an argument', function() {
    var sum = scoreThrows( [15, 20, 30] );
    sum.should.equal( 0 );
  });

  // when your tests pass, uncomment the next two and
  // change the expected value to your calculated result

  it( 'should return \'160\' if given [1, 2, 1, 4, 4, 2] as an argument', function() {
    var sum = scoreThrows([1, 2, 1, 4, 4, 2]);

    // Change the argument given to .equal() to the correct number
    sum.should.equal(160);
  });

});
