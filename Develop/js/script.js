var buttonKaraoke = document.getElementById("btnKaraoke");
var modalKaraoke = document.getElementById("modal1");
var close = document.getElementsByClassName("modal-close")[0];


// modal
buttonKaraoke.onclick = function(){
    modalKaraoke.style.display = "block"
}
close.onclick = function(){
    modalKaraoke.style.display = "none";
}
close.onclick = function(){
    modalKaraoke.style.display = "none";
}
window.onclick = function(event){
    if(event.target.className == "modal-background") {
        modalKaraoke.style.display = "none"
    }
}



// select element sunction
const selectEl= function (element) {
    return document.querySelector(element);
};

let menuToggler = selectEl(".nav-toggle");
let body = selectEl("body");

menuToggler.addEventListener("click", function () {
    body.classList.toggle("open")
});


// Google Maps API
function initMap() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap'
    };

    // Display a map on the page
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    map.setTilt(45);

    // Multiple Markers
    var markers = [
        ['Letys 1', 36.772137, -119.737592],
        ['Letys 2', 36.794266, -119.827257],
        ['Letys 3', 36.773133, -119.861743]
    ];

    // Info Window Content
    var infoWindowContent = [
        ['<div class="info_content">' +
            '<h3>Letys 1</h3>' +
            '<p>4770 E. Clinton Ave. #101<br> Fresno, CA 93703<br> (559) 456-8690 <br></p>' + '</div>'],
        ['<div class="info_content">' +
            '<h3>Letys 2</h3>' +
            '<p>1432 W. Ashlan Ave.<br>Fresno, CA 93705<br>(559) 226-7390<br></p>' +
            '</div>'],
        ['<div class="info_content">' +
        '<h3>Letys 3</h3>' +
        '<p>2450 N. Brawley Ave. #104<br>Fresno, CA 93722<br>(559) 271-4558<br></p>' +
        '</div>']
    ];

    // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;

    // Loop through our array of markers & place each one on the map  
    for (i = 0; i < markers.length; i++) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });

        // Allow each marker to have an info window    
        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
    }
}


// Storage
var saveButton = document.querySelector(".button");

saveButton.addEventListener("click", function() {
    var inputEmail = document.querySelector(".input");
    localStorage.setItem(".input", inputEmail.value);   
}
)
