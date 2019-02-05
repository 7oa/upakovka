// js jquery
$(document).ready(function() {
	var galleryTop = new Swiper('.top-slider__full', {
		effect: 'fade',
        autoplay: 5000,
        autoplayStopOnLast: false,
        speed: 600,
        autoplayDisableOnInteraction: false,
        onSlideChangeStart: function(swiper) {
			// console.log('slide '+swiper.realIndex);
            $('.top-slider__prev').removeClass('active');
            $('.top-slider__prev:eq('+swiper.realIndex+')').addClass('active');
        }
	});
	$(".top-slider__thumbs").on('click', '.top-slider__prev', function(){
		galleryTop.slideTo($(this).index(), 500);
        // console.log('page '+$(this).index());
		$('.top-slider__prev').removeClass('active');
		$(this).addClass('active');
	});

	var swiper = new Swiper('.partners__slider', {
		nextButton: '.swiper-next',
		prevButton: '.swiper-prev',
		slidesPerView: 5,
		spaceBetween: 60
	});

	var swiper = new Swiper('.viewed__body', {
		nextButton: '.viewed__next',
		prevButton: '.viewed__prev',
		slidesPerView: 6,
		spaceBetween: 30
	});

	var swiper = new Swiper('.detail__gallery', {
		nextButton: '.detail-next',
		prevButton: '.detail-prev',
		spaceBetween: 10,
		autoHeight: true,
		slidesPerView: 'auto',
		direction: 'vertical'
	});

	$(".js-tab").click(function(){
		var tab = $(this).data("tab");
		$(".js-tab.selected").removeClass("selected");
		$(this).addClass("selected");
		$(".js-page.selected").removeClass("selected");
		$("." + tab).addClass("selected");
	});

	$("#phone").mask("+7 (999) 999-99-99", {placeholder: "+7 (___) ___-__-__" });

	$('.js-prev').click(function () {
		$('.js-prev').removeClass('active');
		$(this).addClass('active');
		var bg =  $(this).css('background-image');
        var link = bg.replace('url(','').replace(')','').replace(/\"/gi, "");
		$('.js-big').css('background-image', bg).attr('href', link);
	});
	$(".js-menu-link").click(function(){
		$(this).next(".js-menu-child").slideToggle();
		$(this).parent().toggleClass("active");
		return false;
	});
});