"use strict"

$('.to-user-settings').click(toUS)
$('.to-map').click(toMap)


function toUS(){
    console.log('going to settings');
    window.location.href = 'user-settings.html'
}

function toMap(){
    console.log('going to map');
    window.location.href = 'map.html'
}