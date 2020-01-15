jQuery(document).ready(function($){
window.onresize = init;
window.onload = init;
init;

ofst = 360;
if ($(window).width() > 991) ofst = 120;

////////////////
// Mediaqueries
////////////////

function init()	{
      	if (window.matchMedia("(min-width:992px)").matches) {

        }

      	else {

        }




}





function script_callback() {


	/*
	* Replace all SVG images with inline SVG
	*/

	$('img.svg').each(function(){
		var $img = $(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		$.get(imgURL, function(data) {
	// Get the SVG tag, ignore the rest
	var $svg = $(data).find('svg');

	// Add replaced image's ID to the new SVG
	if(typeof imgID !== 'undefined') {
		$svg = $svg.attr('id', imgID);
	}
	// Add replaced image's classes to the new SVG
	if(typeof imgClass !== 'undefined') {
		$svg = $svg.attr('class', imgClass+' replaced-svg');
	}

	// Remove any invalid XML tags as per http://validator.w3.org
	$svg = $svg.removeAttr('xmlns:a');

	// Replace image with new SVG
	$img.replaceWith($svg);

	}, 'xml');

	});

	// Search Icon Toggle

	$( ".search-icon" ).click(function() {
	  $(this).toggleClass("open");
	});

	// Header change on scroll


	$(document).on("scroll", function(){
		if ($(document).scrollTop() > 66){
		  	$("#header").addClass("has-scrolled");
		}
		else
		{
			$("#header").removeClass("has-scrolled");
		}
	});

	// Toggle menu


  	$(".toggle-menu").click(function(e) {
		$(this).toggleClass("is-on");
		$('.main-content').toggleClass("menu-is-open");
		$('#header').toggleClass('is-active');
		e.preventDefault();
	});


}




	// Call Fonction
	script_callback();
	init();
});
