var Board = function() {
this.spaces = [];
for(var x = 0; x < 3; x++){
   for(var y = 0; y < 3; y++){
     this.spaces.push(new Space(x, y));
   }
}
};
