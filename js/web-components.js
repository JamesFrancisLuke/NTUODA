var app = {}
var map;
var posStore = [];
var lineDraw;
app.components = {
    /* Components is only for document components, all data interaction and database edition shouldn't happen in here. */
    showLogin: function () {
        /* Will take the user to login screen, and append and animate the document. */
        $("#loading-cover").append("<div class=\"container\"><div class=\"row\" style=\"z-index: 5\"><div class=\"col s12 m12 animated zoomIn  center-align\"><img style=\"width: 30px;display: inline-block;\" src=\"img/icon.png\" alt=\"NTUODA Logo\"><h3 class=\"white-text\" style=\"display: inline-block;\">NTU Open Day Assistant</h3><div id=\"logContent\" class=\"card-panel white\"><span><div class=\"row\"><h6>Create an Account or Log In...</h6><div class=\"input-field col s12 m6\"><input id=\"email\" type=\"email\" class=\"validate\"><label for=\"email\" data-error=\"Please use a Correct Email Format.\" data-success=\"Email is Correct Format.\">Email</label></div><div class=\"input-field col s12 m6\"><input id=\"password\" type=\"password\" class=\"validate\"><label for=\"password\">Password</label></div></div><button class=\"btn waves-effect pink waves-light\" type=\"submit\" name=\"action\" onclick=\"app.accounts.signIn($('#email').val(), $('#password').val())\">Login<i class=\"material-icons right\">person</i></button><button class=\"btn pink waves-effect waves-light\" type=\"submit\" name=\"action\" onclick=\"app.accounts.signUp($('#email').val(), $('#password').val())\">Create Account<i class=\"material-icons right\">person_add</i></button></span></div><p class=\"white-text\">A group project by Ji</p></div></div></div>");
        $(".hide-login").remove();
    },
    showOnboarding: function () {
        /* Creates and shows the onboarding proccess. */
        $("#logContent").empty();
        $("#logContent").append("<p>We're going to suggest you a course, select some relevant courses: </p> <span><input type=\"checkbox\" id=\"chckDb\" /><label for=\"chckDb\">Databases</label><br></span><span><input type=\"checkbox\" id=\"chckInWork\" /><label for=\"chckInWork\">IT In Work</label><br></span><span><input type=\"checkbox\" id=\"chckDataMan\" /><label for=\"chckDataMan\">Data Manipulation</label><br></span><span><input type=\"checkbox\" id=\"chckMedia\" /><label for=\"chckMedia\">Media</label><br></span><span><input type=\"checkbox\" id=\"chckMobileDev\" /><label for=\"chckMobileDev\">Mobile Development</label><br></span><span><input type=\"checkbox\" id=\"chckNetwork\" /><label for=\"chckNetwork\">Networking</label><br></span><span><input type=\"checkbox\" id=\"chckHardware\" /><label for=\"chckHardware\">Computer Hardware</label><br></span><span><input type=\"checkbox\" id=\"chckWebDesign\" /><label for=\"chckWebDesign\">Web Design</label><br></span><span><input type=\"checkbox\" id=\"chckWebDev\" /><label for=\"chckWebDev\">Web Development</label></span> <br><br> <button class=\"btn pink waves-effect waves-light\" type=\"submit\" name=\"action\" onclick=\"app.accounts.data.onboardComplete()\">Complete Account<i class=\"material-icons right\">star</i></button>");
    },
    removeOverlay: function (name) {
        /*Removes the overlay*/
        $("#" + name).fadeOut(500);
        $(".button-collapse").sideNav();
        app.components.map.initMap();
    },
    map: {
        /* For the map content */
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
            /* Adds the buildings */
            /* Draws ISTEC Which is missing */
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

            var buildingEnhancement = new google.maps.Polygon({
                paths: istecCoords,
                strokeColor: '#0000000',
                strokeOpacity: 1,
                strokeWeight: 2,
                fillColor: '#121212',
                fillOpacity: 1
            });
            buildingEnhancement.setMap(map);

            /* Creates the data locations */

            var contentString =
                '<div class="infowindow">' +
                '<div class="background" style=" padding:4px; background-image: url(\'img/buildings/5.jpg\'); padding-top: 80px;">Mary Anne Evans</div>' +
                '<div id="bodyContent">' +
                '<p>A building containing Labs, which allow you to complete practical work - such as web development, using Photoshop and other forms that are required by the course. </p>' +
                '<div class="row"><button class="btn waves-effect waves-light col s12" type="submit" name="action" onclick="app.components.map.drawPath(52.911487, -1.184370)">Track<i class="material-icons right">location_searching</i></button>' +
                '<button class="waves-effect col s12 btn-flat" type="submit" name="action" onclick="app.components.map.openData(1)">More Info<i class="material-icons right">info</i></button></div></div></div>';
            var contentMAE =
                '<div class="infowindow">' +
                '<div class="background" style=" padding:4px; background-image: url(\'img/buildings/2.jpg\'); padding-top: 80px;">Mary Anne Evans</div>' +
                '<div id="bodyContent">' +
                '<p>A building containing Labs, which allow you to complete practical work - such as web development, using Photoshop and other forms that are required by the course. </p>' +
                '<div class="row"><button class="btn waves-effect waves-light col s12" type="submit" name="action" onclick="app.components.map.drawPath(52.911487, -1.184370)">Track<i class="material-icons right">location_searching</i></button>' +
                '<button class="waves-effect col s12 btn-flat" type="submit" name="action" onclick="app.components.map.openData(2)">More Info<i class="material-icons right">info</i></button></div></div></div>';
            var contentERD =
                '<div class="infowindow">' +
                '<div class="background" style=" padding:4px; background-image: url(\'img/buildings/3.jpg\'); padding-top: 80px;">Erasmus Darwin</div>' +
                '<div id="bodyContent">' +
                '<p>A building containing Labs, which allow you to complete practical work - such as web development, using Photoshop and other forms that are required by the course. </p>' +
                '<div class="row"><button class="btn waves-effect waves-light col s12" type="submit" name="action" onclick="app.components.map.drawPath(52.909893, -1.187050)">Track<i class="material-icons right">location_searching</i></button>' +
                '<button class="waves-effect col s12 btn-flat" type="submit" name="action" onclick="app.components.map.openData(3)">More Info<i class="material-icons right">info</i></button></div></div></div>';
            var contentJCL =
                '<div class="infowindow">' +
                '<div class="background" style=" padding:4px; background-image: url(\'img/buildings/4.jpg\'); padding-top: 80px;">John Clare Lecture Theartre</div>' +
                '<div id="bodyContent">' +
                '<p>A building containing Labs, which allow you to complete practical work - such as web development, using Photoshop and other forms that are required by the course. </p>' +
                '<div class="row"><button class="btn waves-effect waves-light col s12" type="submit" name="action" onclick="app.components.map.drawPath(52.911584, -1.185236)">Track<i class="material-icons right">location_searching</i></button>' +
                '<button class="waves-effect col s12 btn-flat" type="submit" name="action" onclick="app.components.map.openData(4)">More Info<i class="material-icons right">info</i></button></div></div></div>';
            var contentPavilion =
                '<div class="infowindow">' +
                '<div class="background" style=" padding:4px; background-image: url(\'img/buildings/5.jpg\'); padding-top: 80px;">Pavillion</div>' +
                '<div id="bodyContent">' +
                '<p>A building containing Labs, which allow you to complete practical work - such as web development, using Photoshop and other forms that are required by the course. </p>' +
                '<div class="row"><button class="btn waves-effect waves-light col s12" type="submit" name="action" onclick="app.components.map.drawPath(52.912114, -1.185164)">Track<i class="material-icons right">location_searching</i></button>' +
                '<button class="waves-effect col s12 btn-flat" type="submit" name="action" onclick="app.components.map.openData(5)">More Info<i class="material-icons right">info</i></button></div></div></div>';

            // Marker 3
            var infowindow3 = new google.maps.InfoWindow({
                content: contentMAE,
                maxWidth: 223
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
                maxWidth: 223
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
                maxWidth: 223
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
                maxWidth: 223
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
            /* Reloads the map at location */
            this.initMap();
        },
        getLocation: function () {
            /* Get and display users location. */

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    var pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    posStore = [position.coords.latitude, position.coords.longitude]

                    var marker5 = new google.maps.Marker({
                        position: pos,
                        icon: {
                            path: google.maps.SymbolPath.CIRCLE,
                            scale: 5,
                            strokeColor: 'rgb(233, 30, 99)'
                        },
                        map: map,
                        title: 'User Position'
                    });

                    map.setCenter(pos);
                }, function () {
                    console.log("Geolocation Error.");
                });
            } else {
                console.log("Geolocation Error.");
            }
        },
        drawPath: function (a, b) {
            if (lineDraw != null) {
                lineDraw.setMap(null);
            }

            var lineCoordinates = [
                new google.maps.LatLng(posStore[0], posStore[1]),
                new google.maps.LatLng(a, b)
            ];
            lineDraw = new google.maps.Polyline({
                path: lineCoordinates,
                geodesic: true,
                strokeColor: 'rgb(233, 30, 99)',
                strokeOpacity: 1.0,
                strokeWeight: 4
            });

            lineDraw.setMap(map);
        },
        openData: function (building) {
            $("#main").append("<div class=\"full-page animated slideInDown\"><div class=\"col s12 pink white-text\"><h2 style=\"padding: 0px;\">Building Name.</h2></div><div class=\"col s12 pink lighten-1 white-text\"> Short Description </div><div class=\"row\"><div class=\"col s12 m4 black-text image-info\"></div><div class=\"col s12 m8 white black-text\"> other data </div></div><button onclick=\"$('.full-page').remove();\">Close</button></div>");
        }
    }
}
