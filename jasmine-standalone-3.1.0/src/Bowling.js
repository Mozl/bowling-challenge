function Bowling() {
  this.firstRollScore = 0;
  this.secondRollScore = 0;
  this.totalScore;
  this.rollCount = 1;
}

Bowling.prototype.firstRoll = function(number) {
  this.rollCount += 1;
  return (this.firstRollScore = number);
};

Bowling.prototype.secondRoll = function(number) {
  return (this.secondRollScore = number);
};

Bowling.prototype.total = function() {
  return (this.total = this.firstRollScore + this.secondRollScore);
};
