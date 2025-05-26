"use strict"



function getPosition() {
    if (!navigator.geolocation) {
        alert("HTML5 Geolocation is not supported in your browser")
        return
    }

    // One shot position getting or continus watch
    navigator.geolocation.getCurrentPosition(showLocation, handleLocationError)
    // navigator.geolocation.watchPosition(showLocation, handleLocationError)
}

function showLocation(position) {
    // console.log(position);
    // document.getElementById("latitude").innerHTML = position.coords.latitude;
    // document.getElementById("longitude").innerHTML = position.coords.longitude;
    // document.getElementById("accuracy").innerHTML = position.coords.accuracy;

    // var date = new Date(position.timestamp);
    // document.getElementById("timestamp").innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    initMap(position.coords.latitude, position.coords.longitude);
}

function handleLocationError(error) {
    var locationError = document.getElementById("locationError");

    switch (error.code) {
        case 0:
            locationError.innerHTML = "There was an error while retrieving your location: " + error.message;
            break;
        case 1:
            locationError.innerHTML = "The user didn't allow this page to retrieve a location.";
            break;
        case 2:
            locationError.innerHTML = "The browser was unable to determine your location: " + error.message;
            break;
        case 3:
            locationError.innerHTML = "The browser timed out before retrieving the location.";
            break;
    }
}

function initMap(lat, lng) {
    //            if (!lat) lat = 29.5581;
    //            if (!lng) lng = 34.9482;
    var elMap = document.querySelector('.map')
    var options = {
        center: { lat, lng },
        zoom: 10
    }

    var map = new google.maps.Map(
        elMap,
        options
    )

    var marker = new google.maps.Marker({
        position: { lat, lng },
        map,
        title: 'Hello World!'
    })
}
