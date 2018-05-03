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
                strokeColor: 'rgb(233, 30, 99)',
                strokeOpacity: 1,
                strokeWeight: 2,
                fillColor: 'rgb(233, 30, 99)',
                fillOpacity: 1
            });
            buildingEnhancement.setMap(map);

            /* Creates the data locations */
            var contentABK =
                '<div class="infowindow">' +
                '<div class="background" style=" padding:4px; background-image: url(\'img/buildings/0.jpg\'); padding-top: 80px;">ABK</div>' +
                '<div id="bodyContent">' +
                '<p>Augusta Ada King-Noel was a famous mathematician and writer who was mainly known for her work on Charles Babbages mechanical general-purpose computer which was named: the Analytical Engine. She was the first to recognise that the machine had applications beyond pure calculation, and published the first algorithm intended to be carried out by such a machine. Because of this, many people recognise here as the first ever programmer. </p>' +
                '<div class="row"><button class="btn waves-effect waves-light col s12" type="submit" name="action" onclick="app.components.map.drawPath(52.912114, -1.185164)">Track<i class="material-icons right">location_searching</i></button>' +
                '<button class="waves-effect col s12 btn-flat" type="submit" name="action" onclick="app.components.map.openData(0)">More Info<i class="material-icons right">info</i></button></div></div></div>';
            var contentISTEC =
                '<div class="infowindow">' +
                '<div class="background" style=" padding:4px; background-image: url(\'img/buildings/1.jpg\'); padding-top: 80px;">ISTEC</div>' +
                '<div id="bodyContent">' +
                '<p>Our very latest building, the Interdisciplinary Science and Technology Centre (ISTeC). This impressive facility is the result of a £13m investment from the government and NTU in recognition of the importance of STEM teaching. The building will contain state-of-the-art laboratories for teaching, and this is where engineering practical and workshop sessions will initially be held. All lecture theatres and teaching and learning spaces will be equipped with the latest IT and Wi-Fi technology.</p>' +
                '<div class="row"><button class="btn waves-effect waves-light col s12" type="submit" name="action" onclick="app.components.map.drawPath(52.912114, -1.185164)">Track<i class="material-icons right">location_searching</i></button>' +
                '<button class="waves-effect col s12 btn-flat" type="submit" name="action" onclick="app.components.map.openData(1)">More Info<i class="material-icons right">info</i></button></div></div></div>';
            var contentMAE =
                '<div class="infowindow">' +
                '<div class="background" style=" padding:4px; background-image: url(\'img/buildings/2.jpg\'); padding-top: 80px;">Mary Anne Evans</div>' +
                '<div id="bodyContent">' +
                '<p>Mary Ann Evans was an English novelist, author, poet, journalist and translator by the pen name of George Elliot who was one of the leading writers of the Victorian era. This building is mainly used for computer based courses, such as computer science, and humanities. This building is also the home of Dev Soc, a club that continually pushes the boundaries in an attempt to make new technological discoveries. A very ideal place to be for those tech geeks out there.</p>' +
                '<div class="row"><button class="btn waves-effect waves-light col s12" type="submit" name="action" onclick="app.components.map.drawPath(52.911487, -1.184370)">Track<i class="material-icons right">location_searching</i></button>' +
                '<button class="waves-effect col s12 btn-flat" type="submit" name="action" onclick="app.components.map.openData(2)">More Info<i class="material-icons right">info</i></button></div></div></div>';
            var contentERD =
                '<div class="infowindow">' +
                '<div class="background" style=" padding:4px; background-image: url(\'img/buildings/3.jpg\'); padding-top: 80px;">Erasmus Darwin</div>' +
                '<div id="bodyContent">' +
                '<p>Named after an English physician and founding member of the Lunar society of Birmingham, named Erasmus Darwin who was also the grandfather of Charles Darwin. This is the building where the majority of teachers reside during their time between lectures and lessons. As well as this, the Erasmus Darwin building is home to multiple facilities such as: green screen rooms and chemistry labs.</p>' +
                '<div class="row"><button class="btn waves-effect waves-light col s12" type="submit" name="action" onclick="app.components.map.drawPath(52.909893, -1.187050)">Track<i class="material-icons right">location_searching</i></button>' +
                '<button class="waves-effect col s12 btn-flat" type="submit" name="action" onclick="app.components.map.openData(3)">More Info<i class="material-icons right">info</i></button></div></div></div>';
            var contentJCL =
                '<div class="infowindow">' +
                '<div class="background" style=" padding:4px; background-image: url(\'img/buildings/4.jpg\'); padding-top: 80px;">John Clare Lecture Theartre</div>' +
                '<div id="bodyContent">' +
                '<p>John Clare was an English poet who became known for his celebrations of the English countryside and sorrows at its disruption. The John Clare building is used solely for lectures and is outfitted with some of the largest lecture halls for mass teaching. This is where the majority of 1st year lectures will be held due to the large size of the rooms.</p>' +
                '<div class="row"><button class="btn waves-effect waves-light col s12" type="submit" name="action" onclick="app.components.map.drawPath(52.911584, -1.185236)">Track<i class="material-icons right">location_searching</i></button>' +
                '<button class="waves-effect col s12 btn-flat" type="submit" name="action" onclick="app.components.map.openData(4)">More Info<i class="material-icons right">info</i></button></div></div></div>';
            var contentPavilion =
                '<div class="infowindow">' +
                '<div class="background" style=" padding:4px; background-image: url(\'img/buildings/5.jpg\'); padding-top: 80px;">Pavillion</div>' +
                '<div id="bodyContent">' +
                '<p>The Pavilion building is a place for relaxation and it is also where you can grab a bight to eat. With a large cafeteria serving cheap and affordable breakfasts and lunches as well as a small café, where you ca sit and relax over a nice cuppa. On the second floor is a large seating area fitted with multiple comfy chairs and a selection of tables with large monitors for those group projects.</p>' +
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


            //Marker 7
            var infowindow7 = new google.maps.InfoWindow({
                content: contentABK,
                maxWidth: 223
            });

            var marker7 = new google.maps.Marker({
                position: {
                    lat: 52.911158,
                    lng: -1.185074
                },
                map: map,
                title: 'Ada Byron King '

            });
            marker7.addListener('click', function () {
                infowindow7.open(map, marker7);
            });


            //Marker 8
            var infowindow8 = new google.maps.InfoWindow({
                content: contentISTEC,
                maxWidth: 223
            });

            var marker8 = new google.maps.Marker({
                position: {
                    lat: 52.910909,
                    lng: -1.184520
                },
                map: map,
                title: 'ISTEC '

            });
            marker8.addListener('click', function () {
                infowindow8.open(map, marker8);
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
            /*Draws a path between user and the building*/
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
            $('body').css('overflow','hidden');
            var data = [["Ada Byron King", "Andrew Byron King is a building that is mainly used for theory-based classes, with a focus on the theory-based computing and support classes.", "Augusta Ada King-Noel was a famous mathematician and writer who was mainly known for her work on Charles Babbage's mechanical general-purpose computer which was named: the Analytical Engine. She was the first to recognise that the machine had applications beyond pure calculation, and published the first algorithm intended to be carried out by such a machine. Because of this, many people recognise here as the first ever programmer."],
                        ["ISTEC", "This impressive facility is the result of a £13m investment from the government and NTU in recognition of the importance of STEM teaching. The building will contain state-of-the-art laboratories for teaching, and this is where engineering practical and workshop sessions will initially be held. All lecture theatres and teaching and learning spaces will be equipped with the latest IT and Wi-Fi technology.", "Our very latest building, the Interdisciplinary Science and Technology Centre (ISTeC). This impressive facility is the result of a £13m investment from the government and NTU in recognition of the importance of STEM teaching. The building will contain state-of-the-art laboratories for teaching, and this is where engineering practical and workshop sessions will initially be held. All lecture theatres and teaching and learning spaces will be equipped with the latest IT and Wi-Fi technology."],
                        ["Mary Anne Evans", "Mary Anne Evans is a lab-based building in which computing has 2 floors dedicated to practical based classes that take parts in labs.", "Mary Ann Evans was an English novelist, author, poet, journalist and translator by the pen name of George Elliot who was one of the leading writers of the Victorian era. This building is mainly used for computer based courses, such as computer science, and humanities. This building is also the home of Dev Soc, a club that continually pushes the boundaries in an attempt to make new technological discoveries. A very ideal place to be for those tech geeks out there."],
                        ["Erasmus Darwin", "Erasmus Darwin in a speciality building on Clifton Campus, with a state-of-the-art media lab for student who are interested in game design or digital media.", "Named after an English physician and founding member of the Lunar society of Birmingham, named Erasmus Darwin who was also the grandfather of Charles Darwin. This is the building where the majority of teachers reside during their time between lectures and lessons. As well as this, the Erasmus Darwin building is home to multiple facilities such as: green screen rooms and chemistry labs."],
                        ["John Clare Lecture Theatre", "A popular 150-seater lecture theatre for large hour-long lectures that takes place on Clifton Campus", "John Clare was an English poet who became known for his celebrations of the English countryside and sorrows at its disruption. The John Clare building is used solely for lectures and is outfitted with some of the largest lecture halls for mass teaching. This is where the majority of 1st year lectures will be held due to the large size of the rooms."],
                        ["Pavillion", "Live and learn alongside 8,000 students, in a place where buzzing social venues, ultra-modern learning spaces and cosy accommodation combine to create a thriving student community.", "The Pavilion building is a place for relaxation and it is also where you can grab a bight to eat. With a large cafeteria serving cheap and affordable breakfasts and lunches as well as a small café, where you ca sit and relax over a nice cuppa. On the second floor is a large seating area fitted with multiple comfy chairs and a selection of tables with large monitors for those group projects."]]
            $("#main").append("<div class=\"full-page animated slideInDown\"><div class=\"col s12 pink white-text\"><h2 style=\"padding: 0px;\">" + data[building][0] + "</h2></div><div class=\"col s12 pink lighten-1 white-text\"> " + data[building][1] + " </div><div class=\"row\" style=\"margin:0px;\"><div class=\"col s12 m4 black-text image-info\" style=\"background-image: url('img/buildings/" + building + ".jpg');\"></div><div class=\"col s12 m8 white black-text\"><br>" + data[building][2] + " <br> <center><br><a class=\"btn-floating btn-large waves-effect waves-light green\" onclick=\"app.accounts.data.addVotes(" + building + ", 1)\"><i class=\"material-icons\">thumb_up</i></a> <span id=\"" + building + "votes\"></span> Votes <a class=\"btn-floating btn-large waves-effect waves-light red\" onclick=\"app.accounts.data.addVotes(" + building + ", -1)\"><i class=\"material-icons\">thumb_down</i></a><br><br></center> </div></div>" +
                "<div class=\"col s12 pink lighten-1 white-text\"><h3 style=\"padding: 0px;\">" + data[building][0] + " Rankings and Feedback</h3></div><div class=\"row black-text\" id=\"reactionBar\"><a class=\"waves-effect green lighten-2 waves-light btn-large col s3\" style=\"border-radius: 0; font-size: 3em;\" onclick=\"app.accounts.data.addReaction(" + building + ", 'happy')\">😃</a><a class=\"waves-effect blue lighten-2 waves-light btn-large col s3\" style=\"border-radius: 0; font-size: 3em;\" onclick=\"app.accounts.data.addReaction(" + building + ", 'good')\">😊</a><a class=\"waves-effect waves-light btn-large orange lighten-2 col s3\" style=\"border-radius: 0; font-size: 3em;\" onclick=\"app.accounts.data.addReaction(" + building + ", 'notgood')\">😣</a><a class=\"waves-effect red lighten-2 waves-light btn-large col s3\" style=\"border-radius: 0; font-size: 3em;\" onclick=\"app.accounts.data.addReaction(" + building + ", 'bad')\">😒</a></div>" +
                "<div class=\"container\"><div class=\"row\"><div class=\"col s12 m6 offset-m3\" id=\"chartHolder\"></div></div></div>" +
                "<a href='#' style='color: white; position: fixed; top: 8px; right: 8px; font-size: 1.3em;' onclick=\"$('.full-page').remove(); $('body').css('overflow','visible');\">X</a></div>");

            var dataVotes = firebase.database().ref('votes');
            dataVotes.on('value', function (snapshot) {
                for (var i = 0; i < snapshot.val().length; i++) {
                    if ($('#' + i + 'votes').length) {
                        $('#' + i + 'votes').text(snapshot.val()[i]);
                    }
                }
            });
        }
    }
}
