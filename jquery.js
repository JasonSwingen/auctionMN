$(document).ready(function() {
	$('.currentheading').click(function() {
		$(this).next().slideToggle(600);
	});
	$('.upcomingheading').click(function() {
		$(this).next().slideToggle(600);
	});
	$('.recentheading').click(function() {
		$('.recent').slideToggle(600);
	});
})