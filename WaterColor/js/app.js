$(function() {

	// Fixed Header //
	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();

	checkScroll(scrollPos, introH)

	$(window).on("scroll resize", function() {
		let introH = intro.innerHeight();
		scrollPos = $(this).scrollTop()

		checkScroll(scrollPos, introH)
	});

	function checkScroll(scrollPos, introH) {
		if(scrollPos > introH) {
			header.addClass("fixed")
		} else {
			header.removeClass("fixed")
		}
	}

	// Reviews //
	let slider = $("#reviewsSlider");

	slider.slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  fade: true,
	  arrows: false,
	  dots:true
	});

});

