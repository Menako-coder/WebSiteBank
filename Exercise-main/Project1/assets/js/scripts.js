$(document).ready(function() {
	$('#link').on('click', function(e) {
		e.preventDefault();

		$('#main').slideDown();
	});
});