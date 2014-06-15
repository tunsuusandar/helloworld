/**
 * Created by kyawtun on 11/6/14.
 */

var runGame = function() {

  var d1 = document.getElementById('d1');
  var i = 0;
  setInterval(function() {
    d1.style.left = i + 'px';
    i = i + 1;
  }, 1000);

};


var createTile = function(name, top, left) {
  var div = document.createElement('div');
  div.style.backgroundImage = 'url("image/pokemon.gif")';
  div.style.position = 'absolute';
  div.style.top = top + 'px';
  div.style.left = left + 'px';
  if (name == 'engine') {
    div.style.width = '66px';
    div.style.height = '87px';
    div.style.backgroundPosition = '-5px -8px';
  } else if (name == 'robot') {
    div.style.width = '32px';
    div.style.height = '32px';
    div.style.backgroundPosition = '-81px -179px';
  } else if (name == 'articuno') {
    div.style.width = '30px';
    div.style.height = '30px';
    div.style.backgroundPosition = '-22px -239px';
  } else if (name == 'pokemon') {
    div.style.width = '30px';
    div.style.height = '30px';
    div.style.backgroundPosition = '-92px -210px';
  } else if (name == 'tree') {
    div.style.width = '23px';
    div.style.height = '30px';
    div.style.backgroundPosition = '-141px -51px';
  } else {
    div.style.width = '0';
    div.style.height = '0';
  }

  document.body.appendChild(div);
  return div;
};


var moveRight = function(d1) {
  var x = parseInt(d1.style.left, 10);
  d1.style.left = (x + 10) + 'px';
};

var moveDown = function(d1) {
  var x = parseInt(d1.style.top, 10);
  d1.style.top = (x + 10) + 'px';
};

var moveLeft = function(d1) {
  var x = parseInt(d1.style.left, 10);
  d1.style.left = (x - 10) + 'px';
};

var moveUp = function(d1) {
  var x = parseInt(d1.style.top, 10);
  d1.style.top = (x - 10) + 'px';
};


var d1 = createTile('pokemon', 50,100);
var d2 = createTile('articuno', 100,100);


document.addEventListener('keyup', function(e) {
  if (e.keyIdentifier == 'Right') {
    moveRight(d1);
  } else if (e.keyIdentifier == 'Down') {
    moveDown(d1);
  } else if (e.keyIdentifier == 'Left')  {
    moveLeft(d1);
  } else if (e.keyIdentifier == 'Up') {
    moveUp(d1);
  //// ---
  } else if (e.keyIdentifier == 'U+0044') {
    moveRight(d2);
  } else if (e.keyIdentifier == 'U+0053') {
    moveDown(d2);
  } else if (e.keyIdentifier == 'U+0041')  {
    moveLeft(d2);
  } else if (e.keyIdentifier == 'U+0057') {
    moveUp(d2);
  }
}, false);


for (var i = 0; i < 30; i++) {
  createTile('tree', 0, 0 + (i * 23));
}
for (var i = 0; i < 30; i++) {
  createTile('tree', 12 * 30, 0 + (i * 23));
}
for (var i = 0; i < 12; i++) {
  createTile('tree', 0 + (i * 30), 0);
}

for (var i = 0; i < 13; i++) {
  createTile('tree', 0 + (i * 30), 23*30);
}


createTile('robot', 200,200)
createTile('robot', 129,346)
createTile('stone', 149,329)