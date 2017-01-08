$(function() {
	$('#rightmenu1').hover(function() {
		$('#banner_wechatcode').css('display', 'block');
	}, function() {
		$('#banner_wechatcode').css('display', 'none');
	});

	$('.rightmenu3').on('click', function() {
		if($(window).scrollTop() > $(window).height()) {
			$('html, body').animate({
				'scrollTop': 0
			}, 500);
		}
	});

	$('.tab1 .thumbnail img.img-text1').hover(function() {
		$(this).attr('src', 'images/headico2.png');
	}, function() {
		$(this).attr('src', 'images/headico.png');
	});

	$('.tab1 .thumbnail img.img-text2').hover(function() {
		$(this).attr('src', 'images/teach2.png');
	}, function() {
		$(this).attr('src', 'images/teach.png');
	});

	$('.tab1 .thumbnail img.img-text3').hover(function() {
		$(this).attr('src', 'images/server2.png');
	}, function() {
		$(this).attr('src', 'images/server.png');
	});

	$('.tab2 .nav.nav-pills li a').mouseenter(function() {
		$(this).click();
	});

	$('.grade .ol1').show().siblings().hide().siblings('p').show();

	$('.content-ul li').mouseenter(function() {
		$(this).addClass('active').siblings().removeClass('active');
		var index = $(this).index() + 1;
		$('.grade .ol' + index).removeClass('hidden').show().siblings().hide().siblings('p').show();
	});

	$(".selectList").each(function() {
		var url = "js/list.json";
		var areaJson;
		var temp_html;
		var oStage = $(this).find(".stage");
		var oGrade = $(this).find(".grade");
		var oSubject = $(this).find(".subject");
		//初始化阶段
		var stage = function() {
			$.each(areaJson, function(i, stage) {
				temp_html += "<option value='" + stage.p + "'>" + stage.p + "</option>";
			});
			oStage.html(temp_html);
			grade();
		};
		//赋值年级
		var grade = function() {
			temp_html = "";
			var n = oStage.get(0).selectedIndex;
			$.each(areaJson[n].c, function(i, grade) {
				temp_html += "<option value='" + grade.ct + "'>" + grade.ct + "</option>";
			});
			oGrade.html(temp_html);
			subject();
		};
		//赋值科目
		var subject = function() {
			temp_html = "";
			var m = oStage.get(0).selectedIndex;
			var n = oGrade.get(0).selectedIndex;
			if(typeof(areaJson[m].c[n].d) == "undefined") {
				oSubject.css("display", "none");
			} else {
				oSubject.css("display", "inline");
				$.each(areaJson[m].c[n].d, function(i, subject) {
					temp_html += "<option value='" + subject.dt + "'>" + subject.dt + "</option>";
				});
				oSubject.html(temp_html);
			};
		};
		//选择阶段改变年级
		oStage.change(function() {
			grade();
		});
		//选择年级改变科目
		oGrade.change(function() {
			subject();
		});
		//获取json数据
		$.getJSON(url, function(data) {
			areaJson = data;
			stage();
		});
	});
	
	//tab初中物理化学切换，使用hover出发单机事件
	$('.second2-wuli').hover(function() {
		$(this).click();
	});
	
	$('.second2-wuli').click(function() {
		$('.tab-pane .second2').show().siblings().hide();
	});
	
	$('.sectond4').hover(function() {
		$(this).click();
	});
	
	$('.sectond4').click(function() {
		$('.second1').show().siblings().hide();
	});
	
	$('.second2-wuli').hover(function() {
		$(this).click();
	});
	
	$('.second2-wuli').click(function() {
		$('.second2 p').show();
		$('.second2').removeClass('hidden').siblings().hide();
	});
	
	$('.second3-huaxue').hover(function() {
		$(this).click();
	});
	
	$('.second3-huaxue').click(function() {
		$('.second3 p').show();
		if (!$('second1').hasClass('hidden')) {
			$('second1').addClass('hidden');
		} 
		
		if (!$('.second2').hasClass('hidden')) {
			$('.second2').addClass('hidden');
		} 
		
		$('.second3').removeClass('hidden').css('display', 'block');
	});
	
	$('.fore-dd').hover(function() {
		$(this).click();
	});
	
	$('.fore-dd').click(function() {
		$('.four-show .second1').removeClass('hidden').css('display', 'block').siblings('.second2').addClass('hidden');
	});
	
	$('.fore-cc').hover(function() {
		$(this).click();
	});
	
	$('.fore-cc').click(function() {
		$('.four-show  .second2').removeClass('hidden').css('display', 'block').siblings('.second1').addClass('hidden');
		$('.four-show  p').show();
	});
});