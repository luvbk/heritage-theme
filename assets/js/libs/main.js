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
      		$('#header .search-icon').appendTo('.search-trigger-wrapper');
      		$('#header .block-language').insertAfter('.main-nav nav');
        }

      	else {
      		$('#header .block-language').insertAfter('.main-nav .menu');
      		$('#header .search-icon').insertBefore('#header .toggle-wrapper')
        }


        if (window.matchMedia("(min-width:1180px)").matches) {
      		$('.page-footer-wrapper .external-credit').appendTo('.page-footer-wrapper');

      		$(".sticky").stick_in_parent({
		        offset_top: 60,
		        inner_scrolling: false,

		    });
        }

      	else {
      		$('.page-footer-wrapper .external-credit').insertAfter('.credit .wysiwyg');

      		$(".sticky").trigger("sticky_kit:detach");
        }

}


// SlideToggle Function

 function toggleFunction() {

    var toggleButton = $(".toggle-button");
    toggleHeightclose = "120px";

    toggleButton.click(function(e) {
    	var $this= $(this);
    	var toggleHeight = $this.closest('.toggle-container-wrapper').find(".inner-height").innerHeight();

    	if ($this.hasClass('is-on')) {
    		$this.removeClass("is-on");
      		$this.closest('.toggle-container-wrapper').find(".toggle-container").css("height", toggleHeightclose);
      		$this.closest('.toggle-container-wrapper').removeClass("is-open");
      		$('html, body').animate({
	            scrollTop: $this.closest('.toggle-container-wrapper').offset().top - 160
	          }, 200);
    	} else {
    		$this.addClass("is-on");
		    $this.closest('.toggle-container-wrapper').find(".toggle-container").css("height", toggleHeight);
		    $this.closest('.toggle-container-wrapper').addClass("is-open");
    	}


    e.preventDefault();
  });

}


function userToggle() {

	$('.team-wrapper .user-toggle').click(function(e) {
    	var $this= $(this);
    	$this.toggleClass('is-on');
    	$this.next('.wysiwyg').slideToggle(400).toggleClass('is-open');

    e.preventDefault();
  });
}


function script_callback() {

	toggleFunction();
	userToggle();

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



// Init Function

$( document ).ready(function() {

	// Call Fonction
	script_callback();
	init();
});
