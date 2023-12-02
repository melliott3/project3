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

function initMap() {
        // Use geocoding to get coordinates for the address
        var geocoder = new google.maps.Geocoder();
        var address = '7102 S Stony Is Ave, Chicago, IL 60649';

        geocoder.geocode({ address: address }, function (results, status) {
          if (status === 'OK') {
            var location = results[0].geometry.location;

            var map = new google.maps.Map(
              document.getElementById('map'),
              {
                zoom: 14,
                center: location,
              }
            );

            var marker = new google.maps.Marker({
              position: location,
              map: map,
              icon: 'images/oblock.png',
              title: 'My favorite food place',
              animation: google.maps.Animation.DROP,
              draggable: true,
            });

            var infoWindow = new google.maps.InfoWindow({
              content:
                '<div style="width: 200px; height: 180px;">' +
                '<h3>My favorite food place</h3>' +
                '<p>This is my go-to place for good food!</p>' +
                '</div>',
            });

            marker.addListener('click', function () {
              infoWindow.open(map, marker);
            });
          } else {
            alert(
              'Geocode was not successful for the following reason: ' +
                status
            );
          }
        });
      }
