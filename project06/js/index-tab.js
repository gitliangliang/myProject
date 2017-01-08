$(function(){
	$('.father li').each(function(index){
		$(this).on('mouseenter',function(){
			$('.father .active').removeClass('active');
			$(this).addClass('active');
			$('.son>ul').eq(index).show().siblings('.son>ul').hide();
			$('.box').hide();
			$('.sons').eq(index).find('.box').eq($('.son ul:visible').find('.active').index()).show().siblings().hide();
		})
	});
	
	$('.son ul li').each(function(index){
		$(this).on('mouseenter',function(){
			$('.son .active:visible').removeClass('active');
			$(this).addClass('active');
			$('.box').eq(index).show().siblings('.box').hide();
		});
	});		
});