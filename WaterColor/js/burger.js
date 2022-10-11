$(function() {
	let nav = $("#nav");
	let navToggle = $("#navToggle");
		// NavToggle //
		navToggle.on("click", function(event) {
			event.preventDefault();
	
			nav.toggleClass("show");
		});

			// Smooth scroll //
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		let elementID = $(this).data('scroll');
		let elementOffset = $(elementID).offset().top;

		nav.removeClass("show");

		$("html, body").animate({
			scrollTop:elementOffset - 70
		}, 700);
	});
});