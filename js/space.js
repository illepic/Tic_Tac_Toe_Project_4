var Space = function(position, dom) {
  this.position = position;
  this.dom = dom;
  this.symbol = '';

  var space = this;
  this.dom.addEventListener('click', function(event) {
    space.setContent('X');
  });
};

Space.prototype.setContent = function(content) {
  if (!this.symbol) {
    this.symbol = content;
    this.dom.innerHTML = this.symbol;
  }

  console.log(this);
}
