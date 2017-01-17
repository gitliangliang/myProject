//调用移动端的fullpage插件
$('.wp-inner').fullpage();

//音乐播放配置
var lanren = {
	changeClass: function(target, id) {
		var className = $(target).attr('class');
		var ids = document.getElementById(id);
		(className == 'on') ? $(target).removeClass('on').addClass('off'): $(target).removeClass('off').addClass('on');
		(className == 'on') ? ids.pause(): ids.play();
	},
	play: function() {
		document.getElementById('media').play();
	}
}
lanren.play();

//移动端轮播滚动
var swiper = new Swiper('.swiper-container', {
	pagination: '.swiper-pagination',
	effect: 'cube',
	grabCursor: true,
	cube: {
		shadow: true,
		slideShadows: true,
		shadowOffset: 20,
		shadowScale: 0.94
	}
});

var swiper2 = new Swiper('.swiper-container2', {
	pagination: '.swiper-pagination',
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 'auto',
	coverflow: {
		rotate: 50,
		stretch: 0,
		depth: 100,
		modifier: 1,
		slideShadows: true
	}
});

var swiper3 = new Swiper('.swiper-container3', {
	pagination: '.swiper-pagination',
	effect: 'flip',
	grabCursor: true,
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev'
});

var swiper4 = new Swiper('.swiper-container4', {
	pagination: '.swiper-pagination',
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	paginationClickable: true,
	spaceBetween: 30,
	centeredSlides: true,
	autoplay: 2500,
	autoplayDisableOnInteraction: false
});

var swiper5 = new Swiper('.swiper-container5', {
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	pagination: '.swiper-pagination',
	paginationClickable: true,
	// Disable preloading of all images
	preloadImages: false,
	// Enable lazy loading
	lazyLoading: true
});

