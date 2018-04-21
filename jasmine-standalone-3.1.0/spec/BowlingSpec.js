describe('Bowling', function(){
  var game;

  beforeEach(function() {
    game = new Bowling();
  });

  describe ('Constructor', function() {
    it ('constructs a Bowling object with a default firstRollScore of 0', function() {
      expect (game.firstRollScore).toEqual(0);
    });
  });

  describe ('Rolling', function(){
    it ('adds increases rollCount by 1 when rolling', function(){
      game.firstRoll();
      expect (game.rollCount).toEqual(2);
    });
  });
  
  describe ('Total', function(){
    it ('sums the scores of the first and second rolls', function(){
      game.firstRoll(4);
      game.secondRoll(3);
      expect (game.total()).toBe(7);
    });
  });


});
