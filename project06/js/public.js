window.onload = function() {
	var rm1 = document.getElementById("rightmenu1");
	var banner_wcode = document.getElementById("banner_wechatcode");
	rm1.onmouseenter = function() {
		banner_wcode.style.display = "block";
	};
	rm1.onmouseleave = function() {
		banner_wcode.style.display = "none";
	};
	
	$('.index_FO').each(function() {
		$(this).on("click", function() {
			$("#mask").css("display", "block");
			$("#mtk").css("display", "block");
		})
	});

	var close_login = document.getElementById("close_freeorder");
	close_login.onclick = function() {
		mask.style.display = "none";
		mtk.style.display = "none";
	};
};

function goBack() { //返回顶部
	var h = document.documentElement.scrollTop || document.body.scrollTop;
	document.documentElement.scrollTop = 0;
	document.body.scrollTop = 0;
};

//banner轮播时间控制	
$(function() {
	$("#myCarousel").carousel({
		interval: 4000
	});
});

/*	$(function(){ //预约栏随着屏幕的滚动而滚动
		$(window).scroll( function(){
			//console.log($('#aaa111').offset().top);
			//console.log($('body').height());
			if($('#aaa111').offset().top>=4080){
				$('#aaa111').css({'bottom':'280px'})
			}
			else{
				$('#aaa111').css({'bottom':'0px'})
			}
		});
	})*/
		


function username(){
	var name=document.getElementById("name").value;
	var span1=document.getElementById("span1");
	var reg=/^[\u4e00-\u9fa5]{2,6}|[a-zA-Z]{1,12}$/;
	if(reg.test(name)){	
		span1.innerHTML="<span class='right'>√</span>";
		return true;
	}else{	
		span1.innerHTML="<span class='wrong'>×</span>";
		return false;
	}
};

function myphone(){
	var phone=document.getElementById("phone").value;
	var span2=document.getElementById("span2");
	var reg=/^\d{11}$/;
	var reg2=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
	if(reg.test(phone)||reg2.test(phone)){
		span2.innerHTML="<span class='right'>√</span>";
		return true;
	}else{
		span2.innerHTML="<span class='wrong'>×</span>"
	}
};

function myemail(){
	var email=document.getElementById("email").value;
	var span3=document.getElementById("span3");
	var reg=/^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;
	if(reg.test(email)){
		span3.innerHTML="<span class='right'>√</span>";
		return true;
	}else{
		span3.innerHTML="<span class='wrong'>×</span>"
	}
};

function formCheck()
{
   for(var i=0;i<document.form.elements.length-1;i++)
   {
	  if(document.form.elements[i].value=="")
	  {
		 document.form.elements[i].focus();
		 return false;
	  }
   }
   return true;
}



function botusername(){
	var botname=document.getElementById("botname").value;
	var span1=document.getElementById("span1");
	var reg=/^[\u4e00-\u9fa5]{2,6}|[a-zA-Z]{1,12}$/;
	if(reg.test(botname)){
		return true;
	}else{
		return false;
	}
};

function botphone(){
	var botphone=document.getElementById("botphone").value;
	var span2=document.getElementById("span2");
	var reg=/^\d{11}$/;
	var reg2=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
	if(reg.test(botphone)||reg2.test(botphone)){
		return true;
	}else{
		return false;
	}
};

function botmyemail(){
	var botemail=document.getElementById("botemail").value;
	var reg=/^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;
	if(reg.test(botemail)){		
		return true;
	}else{		
		return false;
	}
};

function botCheck()
{
   for(var i=0;i<document.botform.elements.length-1;i++)
   {
	  if(document.botform.elements[i].value=="")
	  {
		 document.form.elements[i].focus();
		 return false;
	  }
   }
   return true;
}

		
		
var DEFAULT_VERSION = "8.0";
var ua = navigator.userAgent.toLowerCase();
var isIE = ua.indexOf("msie")>-1;



var safariVersion;
if(isIE){
    safariVersion = ua.match(/msie ([\d.]+)/)[1];
    if(safariVersion <= DEFAULT_VERSION ){
        window.location.href="error.html"; //如果IE浏览器版本低于9，则跳转到报错页面。
    }else{
        window.Location.href="index.html";
    }
}else{
    window.Location.href="index.html";
}