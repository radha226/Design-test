$(document).ready(function(){
	$('.menu-trigger').click(function() {
		$('.nav').slideToggle();
		$(this).parent().toggleClass('active-menu');
		return false;
		});
});
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
	slideshowSpeed	:3000,
  });
});