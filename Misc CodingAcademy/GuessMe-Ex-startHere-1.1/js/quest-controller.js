'use strict';

// NOTE: This is a global used only in the controller
var gLastRes = null;

$(document).ready(init);
$('.btn-start').click(onStartGuessing);
$('.btn-yes').click({ans: 'yes'}, onUserResponse);
$('.btn-no').click({ans: 'no'}, onUserResponse);
$('.btn-add-guess').click(onAddGuess);

function init() {
  console.log('Started...');
  if(localStorage.questTree){
    gQuestsTree = JSON.parse(localStorage.questTree)
    gCurrQuest = gQuestsTree;
    gPrevQuest = null;
  }else{
    createQuestsTree();
  }
}

function onStartGuessing() {

  $('.game-start').hide()

  renderQuest();

  $('.quest').show()
}

function renderQuest() {
  // TODO: select the <h2> inside quest and update
  // its text by the currQuest text

  $('h2').text(getCurrQuest().txt)


}

function onUserResponse(ev) {
  console.log('ev', ev);
  var res = ev.data.ans;
  // If this node has no children
  if (isChildless(getCurrQuest())) {
    if (res === 'yes') {
      alert('Yes, I knew it!');

      $('.quest').hide()
      onRestartGame()
      // TODO: improve UX
    } else {
      alert('I dont know...teach me!');

      
      $('.quest').hide()
      $('h2').text('OK, I gave up...')
      $('.new-quest').show()
    }
  } else {
    gLastRes = res
    moveToNextQuest(res);
    renderQuest();
  }
}

function onAddGuess(ev) {
  ev.preventDefault();
  var newGuess = $('#newGuess').val();
  var newQuest = $('#newQuest').val();

  console.log(newGuess,newQuest)


  addGuess(newQuest,newGuess,gLastRes)

  updateLocalStorage()

  onRestartGame();
}

function onRestartGame() {
  $('.new-quest').hide();
  $('h2').text('Let\'s try again!')
  $('.game-start').show();
  gLastRes = null;
  gCurrQuest = gQuestsTree
}
