$(document).ready(function() {
	$('.currentheading').click(function() {
		$('.current').slideToggle(600);
	});
	$('.upcomingheading').click(function() {
		$('.upcoming').slideToggle(600);
	});
	$('.recentheading').click(function() {
		$('.recent').slideToggle(600);
	});
})