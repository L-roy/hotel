// Google Maps
function hotelMap() {
    hotelCenter = new google.maps.LatLng(-8.503090, 115.523323);
    var mapOptions = {
        center: hotelCenter,
        zoom: 9,
        scrollwheel: false,
        draggable: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);

    var marker = new google.maps.Marker({
        position: hotelCenter,
    });
    marker.setMap(map);
}
