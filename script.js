    // This is for Google Maps interactivity
    var map = document.querySelector('gmp-map');

    if (map) {
        // This is an event listener for when the map is loaded
        map.addEventListener('google-map-ready', function () {
            var marker = map.querySelector('gmp-advanced-marker');

            // This checks if the marker exists
            if (marker) {
                // This will add an event listener for when the marker is clicked
                marker.addEventListener('click', function () {
                    // Open an info window when the marker is clicked
                    var infoWindow = new google.maps.InfoWindow({
                        content: 'My favorite food place'
                    });

                    infoWindow.open(map.map, marker.marker);
                });
            }
        });
    }
});
