$(document).ready(function($) { // Start of Document Ready Javascript
 'use strict';

	// Smooth Scrolling
	$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 600);
          return false;
        }
      }
    });
  });

	// Toggles auctions
	// $('.currentheading').click(function() {
	// 	$('.current').slideToggle(600);
	// });
	// $('.upcomingheading').click(function() {
	// 	$('.upcoming').slideToggle(600);
	// });
	// $('.recentheading').click(function() {
	// 	$('.recent').slideToggle(600);
	// });
})