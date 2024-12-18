jQuery('.partners-slider').owlCarousel({
	loop: true,
	responsiveClass: true,
	autoplay: true,
	nav: false,
	items:1,
	margin:20,
	dots: true,
	autoplayTimeout: 5000,
	responsive: {
	  0: {
		items: 1,
		dotsEach: 3,
	  },
	  500: {
		items: 1,
	  },
	  768: {
		items: 2,
	  },
	  991: {
		items: 4,
	  },
	  1366: {
		items: 6,
	  },
	  1700: {
		items: 7,
	    stagePadding: 50,     
	  }
	}
  });
  

  jQuery(document).ready(function(){
	jQuery("#scrollTopButton").click(function(){
	  jQuery("html, body").animate({scrollTop: 0}, 800);
	})
  });