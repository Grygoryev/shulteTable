'use strict';

var numbers = [],
    board = $('.shulte-table'),
    cell = $('.shulte-table__cell');

for (var i = 1; i <= 25; i++) {
  numbers.push(i);
}

function shuffleNums(arr) {
  for (var i = 0; i < 25; i++) {
    var pos = randomNum(24);
    var pos2 = randomNum(24); 
    var x = arr[pos]; 
    arr[pos] = arr[pos2]; 
    arr[pos2] = x; 

  }
  return arr;
}

function addNumbers(arr) {
  var newCell = document.createElement('div');
  newCell.className = 'shulte-table__cell';

  for (var i = 0; i < numbers.length; i ++) {
    board.append(cell.clone().html(arr[i]));
  }

  cell[0].remove();
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

addNumbers(shuffleNums(numbers));


//===tutorial popup behaviour=====//
$(document).ready(function () {

  var shulteTutorialOpenBtn = $('.shulte-board__about-btn'),
      shulteTutorialCloseBtn = $('.shulte-tutorial__close-btn'),
      shulteTutorialWindow = $('.shulte-tutorial'),
      slowAppearing = 'slow-appearing',
      slowDisappearing = 'slow-disappearing',
      tutorialAppeared = false;

  shulteTutorialOpenBtn.click(function () {
    shulteTutorialWindow.toggleClass('js-show');
  });

  shulteTutorialCloseBtn.click(function () {
    shulteTutorialWindow.toggleClass('js-show');
  });
});