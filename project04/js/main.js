$(function() {
	$('#dowebok').fullpage({
		sectionsColor: ['#dedccf', '#dedccf', '#b6af9f', '#dedccf'],
		anchors: ['page1', 'page2', 'page3', 'page4'],
		menu: '#menu',
		verticalCentered: false,
		controlArrowColor: '#bab3a3'
	});

	var navWidth = $(window).width();
	$('.navbar.navbar-default').css('width', navWidth);
	$(window).on('resize', function() {
		navWidth = $(window).width();
		$('.navbar.navbar-default').css('width', navWidth);
	});

	//设置3D图片旋转
	var imgL = $(".pic img").size();
	var deg = 360 / imgL;
	var roY = 0,
		roX = -10;
	var xN = 0,
		yN = 0;
	var play = null;

	$(".pic img").each(function(i) {
		$(this).css({
			<!--translateZ 定义2d旋转沿着z轴-->
			"transform": "rotateY(" + i * deg + "deg) translateZ(300px)"
		});
		<!--防止图片被拖拽-->
		$(this).attr('ondragstart', 'return false');
	});

	$(document).mousedown(function(ev) {
		var x_ = ev.clientX;
		var y_ = ev.clientY;
		clearInterval(play);
		//		console.log('我按下了');
		$(this).bind('mousemove', function(ev) {
			/*获取当前鼠标的坐标*/
			var x = ev.clientX;
			var y = ev.clientY;
			/*两次坐标之间的距离*/
			xN = x - x_;
			yN = y - y_;

			roY += xN * 0.2;
			roX -= yN * 0.1;
			console.log('移动');

			$('.pic').css({
				transform: 'perspective(800px) rotateX(' + roX + 'deg) rotateY(' + roY + 'deg)'
			});
			/*之前的鼠标坐标*/
			x_ = ev.clientX;
			y_ = ev.clientY;

		});
	}).mouseup(function() {
		$(this).unbind('mousemove');
		var play = setInterval(function() {

			xN *= 0.95;
			yN *= 0.95
			if (Math.abs(xN) < 1 && Math.abs(yN) < 1) {
				clearInterval(play);
			}
			roY += xN * 0.2;
			roX -= yN * 0.1;
			$('.pic').css({
				transform: 'perspective(800px) rotateX(' + roX + 'deg) rotateY(' + roY + 'deg)'
			});

		}, 30);
	});

	//3D互动图片画廊效果
	$(".item").click(function(e) {
		e.stopPropagation();
		$(".item").removeClass("clicked");
		$(this).toggleClass("clicked");
		$("body").addClass("showing-item");

		var offset = $(this).offset();
		var pos = offset.left + $(this).width()
		var center = $(".gallery").width() / 2;
		if (pos > center) {
			var align = "left";
		} else {
			var align = "right";
		}
		$(this).removeClass(".left, .right").addClass(align);

		return false;
	});

	$('html').click(function() {
		$(".item").removeClass("clicked");
		$("body").removeClass("showing-item");
	});

	//添加富文本框插件
	tinymce.init({
		selector: 'textarea',
		language: 'zh_CN'
	});

	$('#regis').click(function() {
		var partten = /^[a-zA-Z]\w{3,15}$/ig;
		var partten2 = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
		$('#registerform #user').on('change', function() {
			if (partten.test($(this).val())) {
				$(this).parent().find('span').remove();
				$(this).parent().append('<span class="glyphicon glyphicon-ok form-control-feedback"></span>').parent().removeClass('has-error').addClass('has-success').find('.Validform_user').html('');
			} else {
				$(this).parent().find('span').remove();
				$(this).parent().append(' <span class="glyphicon glyphicon-remove form-control-feedback"></span>').parent().removeClass('has-success').addClass('has-error').find('.Validform_user').addClass('red').html('4-16位字符！');
			}
		});
		
		$('#registerform #pass').on('change', function() {
			if (partten.test($(this).val())) {
				$(this).parent().find('span').remove();
				$(this).parent().append('<span class="glyphicon glyphicon-ok form-control-feedback"></span>').parent().removeClass('has-error').addClass('has-success').find('.Validform_pass').html('');
			} else {
				$(this).parent().find('span').remove();
				$(this).parent().append(' <span class="glyphicon glyphicon-remove form-control-feedback"></span>').parent().removeClass('has-success').addClass('has-error').find('.Validform_pass').addClass('red').html('4-16位字符！');
			}
		});
		
		$('#registerform #pass2').on('change', function() {
			if ($(this).val() === $('#registerform #pass').val()) {
				$(this).parent().find('span').remove();
				$(this).parent().append('<span class="glyphicon glyphicon-ok form-control-feedback"></span>').parent().removeClass('has-error').addClass('has-success').find('.Validform_pass2').html('');
			} else {
				$(this).parent().find('span').remove();
				$(this).parent().append(' <span class="glyphicon glyphicon-remove form-control-feedback"></span>').parent().removeClass('has-success').addClass('has-error').find('.Validform_pass2').addClass('red').html('密码不一致！');
			}
		});
		
		$('#registerform #email').on('change', function() {
			if (partten2.test($(this).val())) {
				$(this).parent().find('span').remove();
				$(this).parent().append('<span class="glyphicon glyphicon-ok form-control-feedback"></span>').parent().removeClass('has-error').addClass('has-success').find('.Validform_email').html('');
			} else {
				$(this).parent().find('span').remove();
				$(this).parent().append(' <span class="glyphicon glyphicon-remove form-control-feedback"></span>').parent().removeClass('has-success').addClass('has-error').find('.Validform_email').addClass('red').html('格式不正确！');
			}
		});
	});
	
	$('#login').click(function() {
		var partten = /^[a-zA-Z]\w{3,15}$/ig;
		$('#loginForm #user').on('change', function() {
			if (partten.test($(this).val())) {
				$(this).parent().find('span').remove();
				$(this).parent().append('<span class="glyphicon glyphicon-ok form-control-feedback"></span>').parent().removeClass('has-error').addClass('has-success').find('.Validform_user').html('');
			} else {
				$(this).parent().find('span').remove();
				$(this).parent().append(' <span class="glyphicon glyphicon-remove form-control-feedback"></span>').parent().removeClass('has-success').addClass('has-error').find('.Validform_user').addClass('red').html('4-16位字符！');
			}
		});
		
		$('#loginForm #pass').on('change', function() {
			if (partten.test($(this).val())) {
				$(this).parent().find('span').remove();
				$(this).parent().append('<span class="glyphicon glyphicon-ok form-control-feedback"></span>').parent().removeClass('has-error').addClass('has-success').find('.Validform_pass').html('');
			} else {
				$(this).parent().find('span').remove();
				$(this).parent().append(' <span class="glyphicon glyphicon-remove form-control-feedback"></span>').parent().removeClass('has-success').addClass('has-error').find('.Validform_pass').addClass('red').html('4-16位字符！');
			}
		});
	});
	
	

});