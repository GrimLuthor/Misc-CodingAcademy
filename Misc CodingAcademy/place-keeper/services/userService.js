"use strict"

window.addEventListener('submit', (ev) => {
    ev.preventDefault()
})

function showAge(value){
    $('#sAge').text(value)
}

function onSubmit(ev){
    ev.preventDefault()
    console.log('ev', ev);
}