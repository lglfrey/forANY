var block = document.getElementById("map");
var x = 100;

block.onwheel = function (event) {
  if (event.deltaY < 0 && x < 500) {
    x += 5;
    this.style.width = x + "%";
  }

  if (event.deltaY > 0 && x > 100) {
    x -= 5;
    this.style.width = x + "%";
  }
  return false;
};


var blockmove = document.getElementById("border1");
var left = 0,
  tp = 0,
  xx,
  yy;

blockmove.onmousedown = function (e) {
  e.preventDefault();
  xx = e.pageX;
  yy = e.pageY;

  function moveAt(e) {
    block.style.left = left + e.pageX - xx + "px";
    block.style.top = tp + e.pageY - yy + "px";
  }

  blockmove.onmousemove = function (e) {
    moveAt(e);
  };

  blockmove.onmouseleave = blockmove.onmouseup = function (e) {
    left = parseFloat(block.style.left);
    tp = parseFloat(block.style.top);
    blockmove.onmouseleave = null;
    blockmove.onmousemove = null;
    blockmove.onmouseup = null;
  };
};
