// js jquery
$(document).ready(function() {
	var galleryTop = new Swiper('.top-slider__full', {
		effect: 'fade'
	});
	$(".top-slider__thumbs").on('click', '.top-slider__prev', function(){
		galleryTop.slideTo($(this).index(), 500);
		$('.top-slider__prev').removeClass('active');
		$(this).addClass('active');
	});

	var swiper = new Swiper('.partners__slider', {
		nextButton: '.swiper-next',
		prevButton: '.swiper-prev',
		slidesPerView: 5,
		spaceBetween: 60
	});
});