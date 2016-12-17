var Board = function() {
  this.spaces = [];

  for(var i = 0; i < 9; i++){
    var dom = document.getElementById('box-' + i);
    this.spaces.push(new Space(i, dom));
  }
  //
  this.spaces[5].setContent('kittens');
  // console.log(this.spaces);
};
