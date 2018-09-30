'use strict';

var TABLE_SIZE = 5;
var CELLS = TABLE_SIZE * TABLE_SIZE;
var BOARD_WRAP = document.getElementById('shulte-wrap');
var BOARD = document.createElement('div');
var CELL;
var NUMBERS = [];

BOARD.className = 'shulte-table';

function clearTable() {
    BOARD_WRAP.removeChild(BOARD);
    NUMBERS = [];
    console.log(NUMBERS);
}

for (var i = 1; i <= CELLS; i++ ) {
    NUMBERS.push(i);
};

function defineTableSize(size) {
  TABLE_SIZE = size;
  generateTable(CELLS);
  console.log(NUMBERS);
}


function generateTable() {
    BOARD_WRAP.insertBefore(BOARD, BOARD_WRAP.childNodes[0]);

    for (var i = 1; i <= NUMBERS.length; i++) {
        CELL = document.createElement('div');
        CELL.className = "shulte-table__cell";
        CELL.innerHTML = i;
        BOARD.appendChild(CELL);
    }

    refreshNumbers(shuffleNums(NUMBERS));
}

function shuffleNums(arr) {

  for (var i = 0; i < CELLS; i++) {
    var pos = randomNum(CELLS - 1);
    var pos2 = randomNum(CELLS - 1); 
    var x = arr[pos]; 
    arr[pos] = arr[pos2]; 
    arr[pos2] = x; 
  }
  return arr;
}

function randomNum(max) {
  return Math.round(max - ((max * Math.random())));
}

function refreshNumbers(arr) {
  var cells = document.getElementsByClassName('shulte-table__cell');
  for (var i = 0; i < cells.length; i++) {
    cells[i].textContent = arr[i];
  }
}


generateTable(CELLS);