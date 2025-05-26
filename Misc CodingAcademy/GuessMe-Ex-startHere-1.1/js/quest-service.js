var gQuestsTree;
var gCurrQuest;
var gPrevQuest = null;

function createQuestsTree() {
  gQuestsTree = createQuest('Male?');
  gQuestsTree.yes = createQuest('Gandhi');
  gQuestsTree.no = createQuest('Rita');
  gCurrQuest = gQuestsTree;
  gPrevQuest = null;

  updateLocalStorage()
}

function createQuest(txt) {
  return {
    txt: txt,
    yes: null,
    no: null,
  };
}

function isChildless(node) {
  return node.yes === null && node.no === null;
}

function moveToNextQuest(res) {
  gPrevQuest = gCurrQuest
  if(res === 'yes'){
    gCurrQuest = gPrevQuest.yes
  }else{
    gCurrQuest = gPrevQuest.no
  }
}

function addGuess(newQuestTxt, newGuessTxt, lastRes) {
  console.log(gPrevQuest,lastRes);


  if(lastRes === 'yes'){
    var prevYes = gPrevQuest.yes

    var newQuest = createQuest(newQuestTxt)
    newQuest.yes = createQuest(newGuessTxt)
    newQuest.no = prevYes
    gPrevQuest.yes = newQuest

  }else{
    var prevNo = gPrevQuest.no

    var newQuest = createQuest(newQuestTxt)
    newQuest.no = prevNo
    newQuest.yes = createQuest(newGuessTxt)
    gPrevQuest.no = newQuest
  }
}

function getCurrQuest() {
  return gCurrQuest;
}
