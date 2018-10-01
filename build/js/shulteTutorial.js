$(document).ready(function () {

    const shulteTutorialOpenBtn = $('.shulte-board__about-btn'),
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