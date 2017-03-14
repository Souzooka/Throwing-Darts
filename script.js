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
