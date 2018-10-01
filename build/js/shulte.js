'use strict';

const BOARD_WRAP = document.getElementById('shulte-wrap');
const BOARD = document.createElement('div');

BOARD.className = 'shulte-table';

// Виды функций:
// Те, которые работают с логикой
// Те, которые отвечают за GUI
// Вспомогательные (для логики)

let NUMBERS = [];

const getNumbers = (cells) => {
  for (let i = 1; i <= cells; i++) { NUMBERS.push(i) }

  NUMBERS.map( function() {
    let pos1 = randomNum(cells - 1);
    let pos2 = randomNum(cells - 1);
    let temp = NUMBERS[pos1];
    NUMBERS[pos1] = NUMBERS[pos2];
    NUMBERS[pos2] = temp;
  });
  console.log(NUMBERS);
  return NUMBERS;
};

const getTable = (NUMBERS, CELLS) => {
  getNumbers(CELLS);

  BOARD_WRAP.insertBefore(BOARD, BOARD_WRAP.childNodes[0]);

  for (let i = 0; i < CELLS; i++) {
    let CELL = document.createElement('div');
    CELL.className = 'shulte-table__cell';
    CELL.textContent = NUMBERS[i];
    BOARD.appendChild(CELL);
  }
  getStyle(CELLS);
};

const getNewTable = (CELLS) => {
  console.log(BOARD_WRAP.children);
  BOARD_WRAP.removeChild(BOARD);

  getTable(NUMBERS, CELLS);
};

const updateTable = (arr)  => {
  const cells = document.getElementsByClassName('shulte-table__cell');
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = arr[i];
  }
};

const getStyle = (CELLS) => {
  let cells = document.getElementsByClassName('shulte-table__cell');

  switch(CELLS) {
    case 9:
      BOARD.style.width = "300px";
      for (let i = 0; i < cells.length; i++) {
        cells[i].style.width = "33.333%";
        cells[i].style.height = "100px";
      }
      break;

    case 25:
      BOARD.style.width = "500px";
      for (let i = 0; i < cells.length; i++) {
        cells[i].style.width = "20%";
        cells[i].style.height = "100px";
      }
      break;

    case 36:
      BOARD.style.width = "600px";
      for (let i = 0; i < cells.length; i++) {
        cells[i].style.width = "16.6666%";
        cells[i].style.height = "100px";
      }
      break;

    case 49:
      BOARD.style.width = "560px";
      for (let i = 0; i < cells.length; i++) {
        cells[i].style.width = "14.278%";
        cells[i].style.height = "80px";
      }
      break;
    default: 
      return CELLS;
  }
};

getTable(NUMBERS, 25);