var app = {}
var map;
app.components = {
    /* Components is only for document components, all data interaction and database edition shouldn't happen in here. */
    showLogin: function () {
        /* Will take the user to login screen, and append and animate the document. */
        $("#loading-cover").append("<div class=\"container\"><div class=\"row\" style=\"z-index: 5\"><div class=\"col s12 m12 animated zoomIn  center-align\"><img style=\"width: 30px;display: inline-block;\" src=\"img/icon.png\" alt=\"NTUODA Logo\"><h3 class=\"white-text\" style=\"display: inline-block;\">NTU Open Day Assistant</h3><div id=\"logContent\" class=\"card-panel white\"><span><div class=\"row\"><h6>Create an Account or Log In...</h6><div class=\"input-field col s12 m6\"><input id=\"email\" type=\"email\" class=\"validate\"><label for=\"email\" data-error=\"Please use a Correct Email Format.\" data-success=\"Email is Correct Format.\">Email</label></div><div class=\"input-field col s12 m6\"><input id=\"password\" type=\"password\" class=\"validate\"><label for=\"password\">Password</label></div></div><button class=\"btn waves-effect pink waves-light\" type=\"submit\" name=\"action\" onclick=\"app.accounts.signIn($('#email').val(), $('#password').val())\">Login<i class=\"material-icons right\">person</i></button><button class=\"btn pink waves-effect waves-light\" type=\"submit\" name=\"action\" onclick=\"app.accounts.signUp($('#email').val(), $('#password').val())\">Create Account<i class=\"material-icons right\">person_add</i></button></span></div><p class=\"white-text\">A group project by Ji</p></div></div></div>");
        $(".hide-login").remove();
    },
    showOnboarding: function () {
        $("#logContent").empty();
        $("#logContent").append("<p>We're going to suggest you a course, select some relevant courses: </p> <span><input type=\"checkbox\" id=\"chckDb\" /><label for=\"chckDb\">Databases</label><br></span><span><input type=\"checkbox\" id=\"chckInWork\" /><label for=\"chckInWork\">IT In Work</label><br></span><span><input type=\"checkbox\" id=\"chckDataMan\" /><label for=\"chckDataMan\">Data Manipulation</label><br></span><span><input type=\"checkbox\" id=\"chckMedia\" /><label for=\"chckMedia\">Media</label><br></span><span><input type=\"checkbox\" id=\"chckMobileDev\" /><label for=\"chckMobileDev\">Mobile Development</label><br></span><span><input type=\"checkbox\" id=\"chckNetwork\" /><label for=\"chckNetwork\">Networking</label><br></span><span><input type=\"checkbox\" id=\"chckHardware\" /><label for=\"chckHardware\">Computer Hardware</label><br></span><span><input type=\"checkbox\" id=\"chckWebDesign\" /><label for=\"chckWebDesign\">Web Design</label><br></span><span><input type=\"checkbox\" id=\"chckWebDev\" /><label for=\"chckWebDev\">Web Development</label></span> <br><br> <button class=\"btn pink waves-effect waves-light\" type=\"submit\" name=\"action\" onclick=\"app.accounts.data.onboardComplete()\">Complete Account<i class=\"material-icons right\">star</i></button>");
    },
    removeOverlay: function (name) {
        /*Removes the overlay*/
        $("#" + name).fadeOut(500);
        $(".button-collapse").sideNav();
        app.components.initMap();
    },
    initMap: function () {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {
                lat: 52.911826,
                lng: -1.184794
            },
            zoom: 16,
            disableDefaultUI: true,
            mapTypeId: 'satellite',
            styles: [
                {
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#1d2c4d"
      }
    ]
  },
                {
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
      }
    ]
  },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#8ec3b9"
      }
    ]
  },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#1a3646"
      }
    ]
  },
                {
                    "featureType": "administrative.country",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#4b6878"
      }
    ]
  },
                {
                    "featureType": "administrative.land_parcel",
                    "stylers": [
                        {
                            "visibility": "off"
      }
    ]
  },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#64779e"
      }
    ]
  },
                {
                    "featureType": "administrative.neighborhood",
                    "stylers": [
                        {
                            "visibility": "off"
      }
    ]
  },
                {
                    "featureType": "administrative.province",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#4b6878"
      }
    ]
  },
                {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#334e87"
      }
    ]
  },
                {
                    "featureType": "landscape.natural",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#023e58"
      }
    ]
  },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#283d6a"
      }
    ]
  },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#6f9ba5"
      }
    ]
  },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#1d2c4d"
      }
    ]
  },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#023e58"
      }
    ]
  },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#3C7680"
      }
    ]
  },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#304a7d"
      }
    ]
  },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#98a5be"
      }
    ]
  },
                {
                    "featureType": "road",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#1d2c4d"
      }
    ]
  },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#2c6675"
      }
    ]
  },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#255763"
      }
    ]
  },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#b0d5ce"
      }
    ]
  },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#023e58"
      }
    ]
  },
                {
                    "featureType": "transit",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#98a5be"
      }
    ]
  },
                {
                    "featureType": "transit",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#1d2c4d"
      }
    ]
  },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#283d6a"
      }
    ]
  },
                {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#3a4762"
      }
    ]
  },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#0e1626"
      }
    ]
  },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#4e6d70"
      }
    ]
  }
]
        });

        this.addBuildings();
        this.getLocation();
    },
    addBuildings: function () {
        //draw istec
        var istecCoords = [
            {
                lat: 52.911176,
                lng: -1.184473
            },
            {
                lat: 52.910969,
                lng: -1.184064
            },
            {
                lat: 52.910589,
                lng: -1.184592
            },
            {
                lat: 52.910781,
                lng: -1.185003
            },
            {
                lat: 52.911176,
                lng: -1.184473
            }
        ];

        // Construct the polygon.
        var buildingEnhancement = new google.maps.Polygon({
            paths: istecCoords,
            strokeColor: '#0000000',
            strokeOpacity: 1,
            strokeWeight: 2,
            fillColor: '#121212',
            fillOpacity: 1
        });
        buildingEnhancement.setMap(map);


        var contentString =
            '<div class="infowindow">' +
            '</div>' +
            '<h3>ISTEC</h3>' +
            '<div id="bodyContent">' +
            '<p>Words.</p>' +
            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
            'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
            '(last visited June 22, 2009).</p>' +
            '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 200
        });

        var marker = new google.maps.Marker({
            position: {
                lat: 52.911826,
                lng: -1.184794
            },
            map: map,
            title: 'ISTEC: Building Information'
        });
        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });

        var contentString =
            '<div class="infowindow">' +
            '</div>' +
            '<h3>ISTEC</h3>' +
            '<div id="bodyContent">' +
            '<p>Words.</p>' +
            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
            'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
            '(last visited June 22, 2009).</p>' +
            '</div>';
		var contentMAE =
            '<div class="infowindow">' +
            '</div>' +
            '<h3>Mary Anne Evans</h3>' +
            '<div id="bodyContent">' +
            '<p>Words.</p>' +
            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
            'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
            '(last visited June 22, 2009).</p>' +
            '</div>';
			
		var contentERD =
            '<div class="infowindow">' +
            '</div>' +
            '<h3>ERD</h3>' +
            '<div id="bodyContent">' +
            '<p>Words.</p>' +
            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
            'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
            '(last visited June 22, 2009).</p>' +
            '</div>';
			
		var contentJCL =
            '<div class="infowindow">' +
            '</div>' +
            '<h3>John Clare Lecture Theatre </h3>' +
            '<div id="bodyContent">' +
            '<p>Words.</p>' +
            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
            'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
            '(last visited June 22, 2009).</p>' +
            '</div>';
			
		var contentPavilion =
            '<div class="infowindow">' +
            '</div>' +
            '<h3>The Pavilion </h3>' +
            '<div id="bodyContent">' +
            '<p>Words.</p>' +
            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
            'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
            '(last visited June 22, 2009).</p>' +
            '</div>';
		
        var infowindow2 = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 200
        });

        var marker2 = new google.maps.Marker({
            position: {
                lat: 52.911810,
                lng: -1.184794
            },
			map: map,
            title: 'ISTEC: Building Information'
            
        });
        marker2.addListener('click', function () {
            infowindow2.open(map, marker2);
        });
      
        // Marker 3
		   var infowindow3 = new google.maps.InfoWindow({
            content: contentMAE,
            maxWidth: 200
        });

        var marker3 = new google.maps.Marker({
            position: {
                lat: 52.911487,
                lng: -1.184370
            },
			map: map,
            title: 'Mary Anne Evans '
            
        });
        marker3.addListener('click', function () {
            infowindow3.open(map, marker3);
        });
		
		
		//Marker 4 
		var infowindow4 = new google.maps.InfoWindow({
            content: contentERD,
            maxWidth: 200
        });

        var marker4 = new google.maps.Marker({
            position: {
                lat: 52.909893,
                lng: -1.187050
            },
			map: map,
            title: 'ERD'
            
        });
        marker4.addListener('click', function () {
            infowindow4.open(map, marker4);
        });
		
		//Marker 5 
		var infowindow5 = new google.maps.InfoWindow({
            content: contentJCL,
            maxWidth: 200
        });

        var marker5 = new google.maps.Marker({
            position: {
                lat: 52.911584,
                lng: -1.185236
            },
			map: map,
            title: 'John Clare Lecture Theatre '
            
        });
        marker5.addListener('click', function () {
            infowindow5.open(map, marker5);
        });
		
		
		//Marker 6
		var infowindow6 = new google.maps.InfoWindow({
            content: contentPavilion,
            maxWidth: 200
        });

        var marker6 = new google.maps.Marker({
            position: {
                lat: 52.912114,
                lng: -1.185164
            },
			map: map,
            title: 'Pavilion '
            
        });
        marker6.addListener('click', function () {
            infowindow6.open(map, marker6);
        });
    },
    resetMap: function () {
        this.initMap();
    },
    getLocation: function () {
        infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                infoWindow.setPosition(pos);
                infoWindow.setContent('Your Current Position');
                infoWindow.open(map);
                map.setCenter(pos);
            }, function () {
                handleLocationError(true, infoWindow, map.getCenter());
            });
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
        }

        function handleLocationError(browserHasGeolocation, infoWindow, pos) {
            infoWindow.setPosition(pos);
            infoWindow.setContent(browserHasGeolocation ?
                'Error: The Geolocation service failed.' :
                'Error: Your browser doesn\'t support geolocation.');
            infoWindow.open(map);
        }
    }
}
