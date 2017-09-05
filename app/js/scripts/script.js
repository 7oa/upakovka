// js jquery
$(document).ready(function() {
	var galleryTop = new Swiper('.top-slider__full', {
		effect: 'fade'
	});
	/*var galleryThumbs = new Swiper('.top-slider__thumbs', {
		centeredSlides: false,
		slidesPerView: 'auto',
		touchRatio: 0.2,
		slideToClickedSlide: true
	});
	galleryTop.params.control = galleryThumbs;
	galleryThumbs.params.control = galleryTop;*/
	$(".top-slider__thumbs").on('click', '.top-slider__prev', function(){
		galleryTop.slideTo($(this).index(), 500);
		$('.top-slider__prev').removeClass('active');
		$(this).addClass('active');
	});
});