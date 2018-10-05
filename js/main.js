function getState() {
  // bool: true/false
  // arrays
  /*
 var x = 0 through 9
 var y = 0 through 9
  var board = [
  [false, false, true, false, false, ...] // row 1
  [true, fasle, ture, false, false, ...] // row 2
  ... // other rows
  ];
  board [x] [y]
  board [0] [0] = top-left cell
  board [0] [9] = top-right cell
  board [9] [0] = bottom-left cell
  board [9] [9] = bootom-right cell
  */
  var board = [
      [false, false, true, false, false, false, false, false, false, false]
      [true, false, true, false, false, false, false, false, false, false]
      [false, true, true, false, false, false, false, false, false, false]
      [false, false, false, false, false, false, false, false, false, false]
      [false, false, false, false, false, false, false, false, false, false]
      [false, false, false, false, false, false, false, false, false, false]
      [false, false, false, false, false, false, false, false, false, false]
      [false, false, false, false, false, false, false, false, false, false]
      [false, false, false, false, false, false, false, false, false, false]
      [false, false, false, false, false, false, false, false, false, false]
      ]
  //[x,y]:[2,0],[1,[0,2],[2,1],[2,2]
}

function onBeginClicked() {
    console.log('Begin button clicked');
    // Rules
    // any alive cell with < 2 neighbors dies
    // any alive cell with 2 or 3 neighbors survices
    // any alive cell with > 3 neighbors dies
    // any alive cell with 3 alive neighbors becomes alive
}

function initialize() {
    document.getElementById('begin').addEventListener('click', onBeginClicked);
}
