$(document).ready(function(){
	// mobile menu js
	$('.menu-trigger').click(function() {
		$('.nav').slideToggle();
		$(this).parent().toggleClass('active-menu');
		return false;
	});
	
});

// for slider
$(document).on('ready', function() {

      $('.fade').slick({
		dots: true,
		autoplay: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear'
	});
 });

//for map
function initMap() {
	var myLatLng = {lat: 28.681601, lng: 77.314852};

	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 18,
	  disableDefaultUI: true,
	  center: myLatLng
	});
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map
    });
}