describe('Bowling', function(){
  var bowling_game;

  beforeEach(function() {
      bowling_game = new Bowling();
    });

  describe ('Constructor', function() {
      it ('constructs a Bowling object with a default firstRollScore of 0', function() {
          expect (bowling_game.firstRollScore).toEqual(0);
      });
  });

});
