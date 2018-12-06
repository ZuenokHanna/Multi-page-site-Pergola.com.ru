$(document).ready(function() {

	new Swiper('.swiper-container', {
		spaceBetween: 30,
		effect: 'fade',
		centeredSlides: true,
		autoplay: {
			delay: 35000000000000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});

	new Swiper('.swiper-container_tenty_pvh', {
		spaceBetween: 30,
		effect: 'fade',
		centeredSlides: true,
		autoplay: {
			delay: 6000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});

	$('.sliders').owlCarousel({
		loop: true,
		items: 1,
		animateOut: 'fadeOut',
		autoplayHoverPause: true,
		autoplay: true
	});

	$('.slider_owl').owlCarousel({
		center: true,
		loop: true,
		margin:40,
		autoWidth:true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		autoplay: true
	});

	$('.c_wrap').owlCarousel({
		center: true,
		loop:true,
		autoWidth:true,
		margin:30,
		autoplay: true
	});

	$('.carusel_about').owlCarousel({
		center: true,
		loop:true,
		autoWidth:true,
		margin:0,
		autoplay: true
	});

	$('[data-fancybox]').fancybox({
		fullScreen : {
			autoStart : true,
		},
		margin : [0, 0],
	})
// поворачивает стрелки 
	/*$(".dropdown a.dropdown-toggle").on("click",function(o){
		$(this).toggleClass("on");
	});*/



	/*$(".dropdown a.dropdown-toggle_1_2").on("click",function(o){
		$(this).toggleClass("on");
	});*/

// открывает подменю - второй уровень 
	/*$(".dropdown-menu a.dropdown-toggle").on("click",function(o){
		$(this).next().hasClass("show")||$(this).parents(".dropdown-menu").first().find(".show").removeClass("show");
		return $(this).next(".dropdown-menu").toggleClass("show"),
		$(this).parents("li.nav-item.dropdown.show").on("hidden.bs.dropdown",function(o){
			$(".dropdown-submenu .show").removeClass("show")}),
		!1
	});*/

// скроллбар 
$(window).on("load",function(){
	$(".simple-nav").mCustomScrollbar();
});

/*jQuery('.dropdown').hover(function() {
  jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
}, function() {
  jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
})*/

 /*$('.dropdown').on('show.bs.dropdown', function () {
        $('.dropdown-menu', this).stop(true, true).slideDown('fast');
        $(this).addClass('open');
    }, function () {
        $('.dropdown-menu', this).stop(true, true).slideUp('fast');
        $(this).removeClass('open');
      });*/

      $(".dropdown").click(function(e) {
      	$(this).toggleClass("active_collapse");
      });

      $("a.top_btn").click(function() {
      	$("html, body").animate({
      		scrollTop: $($(this).attr("href")).offset().top - 120 + "px"
      	}, {
      		duration: 500,
      		easing: "swing"
      	});
      	return false;
      });

      $('.owl-carousel-news-new').owlCarousel({
      	loop:true,
      	margin:20,
      	nav:true,
      	navText: [],
      	dots:false,
      	responsiveClass:true,
      	responsive:{
      		0:{
      			items:1
      		},
      		992:{
      			items:2
      		},
      		1200:{
      			items:3
      		},
      		2800:{
      			items:4,
      			nav:true
      		}
      	}
      });

      $('.owl-carousel-pir').owlCarousel({
      	loop:true,
      	nav:true,
      	navText: [],
      	dots:false,
      	items:1
      });

      $('.owl-carousel-datchiki').owlCarousel({
      	nav:false,
      	dots:true,
      	animateOut: 'fadeOut',
				items:1,
				margin:0,
				autoplay: false
      });

    })