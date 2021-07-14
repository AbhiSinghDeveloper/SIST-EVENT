'use strict';
$(document).ready(function() {

    'use strict';

    document.querySelector(".navbar-toggler").addEventListener("click", () => {
		document.querySelector(".collapse").classList.toggle("show");
		document.querySelector(".header").classList.toggle("header-bg");
	});

	$(function () {
		const navLink = document.querySelectorAll(".nav-link");

		function linkAction() {
			navLink.forEach((n) => n.classList.remove("active"));
			this.classList.add("active");
		}

		navLink.forEach((n) => n.addEventListener("click", linkAction));
		$("a[href*=\\#]:not([href=\\#])").click(function () {
			if (
				location.pathname.replace(/^\//, "") ==
					this.pathname.replace(/^\//, "") &&
				location.hostname == this.hostname
			) {
				var target = $(this.hash);
				target = target.length
					? target
					: $("[name=" + this.hash.slice(1) + "]");
				if (target.length) {
					$("html,body").animate(
						{
							scrollTop: target.offset().top,
						},
						1000
					);
					return false;
				}
			}
		});
	});

    /* ==============================================
        STICKY HEADER
        =============================================== */

    $(window).on('scroll', function () {
        if ($(window).scrollTop() < 100) {
            $('.header').removeClass('sticky_header');
        } else {
            $('.header').addClass('sticky_header');
        }
    });
    /* ==============================================
     SLIDER
     =============================================== */
    $(".cover_slider").owlCarousel({
        loop:true,
        autoplay:true,
        smartSpeed:1000,
        autoplayHoverPause:false,
        dots:true,
        nav:false,
        items:1,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        dotsContainer: '.cover_dots'
    });

    $(".brand_carousel").owlCarousel({
        loop:true,
        autoplay:true,
        smartSpeed:450,
        autoplayHoverPause:false,
        dots:false,
        nav:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3

            },
            1000:{
                items:5

            }
        },
        items:5
    });
});