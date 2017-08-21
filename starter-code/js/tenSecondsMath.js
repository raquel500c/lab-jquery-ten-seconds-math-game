function TenSecondsMathGame(ops, numberLimit) {
  this.ops = ops;
  this.numberLimit = numberLimit;
  this.underlimit = 0;
  this.result = 0;
}

// Returns a random integer between [1..numberLimit]
TenSecondsMathGame.prototype._getRandomNumber = function() {
  return parseInt(Math.random() * this.numberLimit + 1);
};

// Returns an object with {question, answer}
TenSecondsMathGame.prototype.question = function() {
  var num1 = this._getRandomNumber();
  var num2 = this._getRandomNumber();
  this.result = num1 + num2;
  console.log('La operacion es : ' + num1 + '' + this.ops + '' + '' + num2);
  console.log('Y el resultado es : ' + this.result);

  TenSecondsMathGame.prototype.answer();
};

// Checks a user answer
TenSecondsMathGame.prototype.answer = function(result) {
  if (this.result === result) {
    console.log('Eres un crack!');
  } else {
    console.log('Jubilate, padre...');
  }
};
