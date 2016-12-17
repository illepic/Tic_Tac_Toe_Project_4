var Game = function(playerOne, playerTwo) {
  this.playerOne = playerOne;
  this.playerTwo = playerTwo;
  this.board = new Board();
  this.currentPlayer = playerOne;
};

Game.prototype.newGame = function () {
  //Hides the board to start the game
  var hideBoard = document.getElementById('board');
  hideBoard.style.display = 'none';
};

//When start button is clicked, the board is shown and the start screen is hidden.
var clickStartButton = document.getElementById('start-button');
clickStartButton.addEventListener("click", function (){
  var hideBoard = document.getElementById('board');
  hideBoard.style.display = 'block';
  var hideStart = document.getElementById('start');
  hideStart.style.display = 'none';
});
