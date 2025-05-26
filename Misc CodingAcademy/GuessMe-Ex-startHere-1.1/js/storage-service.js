"use strict"

function updateLocalStorage(){
    if(localStorage.questTree){
        localStorage.questTree = JSON.stringify(gQuestsTree)
    }else{
        localStorage.setItem('questTree',JSON.stringify(gQuestsTree))
    }
}


//TODO load from storage