

(function(){
  //console.log("Inside the IIFE!");
  "use strict";

  //Hides the board to start the game
  var hideBoard = document.getElementById('board');
  hideBoard.style.display = 'none';

  //When start button is clicked, the board is shown and the start screen is hidden.
  var clickStartButton = document.getElementById('start-button');
  clickStartButton.addEventListener("click", function (){
    hideBoard.style.display = 'block';
    var hideStart = document.getElementById('start');
    hideStart.style.display = 'none';
  });

 }());
