$(function() {
	$('#fullpage').fullpage({

		'anchors': ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
		'menu': '#menu',
		verticalCentered: false,
		scrollOverflow: true,
		controlArrowColor: 'transparent'
		
	});

	$(".slideBox").slide({
		mainCell: ".bd ul",
		autoPlay: true
	});
	
	$(".slideBox2").slide({
		mainCell: ".bd ul",
		autoPlay: true
	});

	$('.section2-show .section-list img').on('click', function() {
		$('.section2-show').hide();
		$('.section2-hide').fadeIn(800);
	});
	
	$('#scroll').scroll(function() {
		if ($(this).scrollTop() > 10) {
			$('#menu li').removeClass('active');
		} else {
			$.fn.fullpage.moveTo(6);
		}
	});
	
	$('.lfanClick').click(function() {
		$('.section2-hide').hide();
		$('.section2-show').fadeIn(800);
	});
	
	$('.changeOne').click(function() {
		$.fn.fullpage.moveTo(2, 0);
	});
	
	$('.changeTwo').click(function() {
		$.fn.fullpage.moveTo(2, 1);
	});
	
});