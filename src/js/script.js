const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  // using "ratio" endpoints
  breakpoints: {
    '@0.75': {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    '@1.00': {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    '@1.50': {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  }
});

$("#touristButton").on("click", function () {

  $(".container-offer").addClass("hide");
  $(".tourist").removeClass("hide");

})

$("#hotelButton").on("click", function () {

  $(".container-offer").addClass("hide");
  $("#hotel").removeClass("hide");

})

$("#restaurantsButton").on("click", function () {

  $(".container-offer").addClass("hide");
  $("#restaurants").removeClass("hide");

})

$("#carsButton").on("click", function () {

  $(".container-offer").addClass("hide");
  $("#cars").removeClass("hide");

})

$(document).ready(function () {
  var maps = document.getElementsByClassName("maps");

  var ids, gps, mapId = '';


  for(var i=0; i<maps.length; i++) {


    mapId = document.getElementById(maps[i].id);

    gps = mapId.getAttribute('data-gps');

    gps = gps.split(",");

    map = new google.maps.Map(mapId, {
      zoom: 15,
      center: new google.maps.LatLng(parseFloat(gps[0]), parseFloat(gps[1])),
      mapTypeId: 'roadmap',
      mapTypeControl: true,
      zoomControlOptions: {
          position: google.maps.ControlPosition.RIGHT_TOP
      }
    });


    var marker = new google.maps.Marker({

      position: new google.maps.LatLng(parseFloat(gps[0]), parseFloat(gps[1])),
      map: map
    });
  }

});