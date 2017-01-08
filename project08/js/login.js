/**
 * 登录
 */

$(function() {

	var patten = /^[a-zA-Z]\w{3,9}$/;
	var patten2 = /^[1-9]+[0-9]*]*$/;
	var patten3 = /^1[3|4|5|7|8][0-9]{9}$/;
	var patten4 = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
	var obj = {
		flag1: false,
		flag2: false,
		flag3: false,
		flag4: false,
		flag5: false,
		flag6: false
	};

	function checkFormSuccess(node, classname) {
		node.parent().find('span').remove();
		node.parent().append('<span class="glyphicon glyphicon-ok form-control-feedback"></span>').parent().removeClass('has-error').addClass('has-success').find(classname).html('');
	}

	function checkFormError(node, classname, msg) {
		node.parent().find('span').remove();
		node.parent().append(' <span class="glyphicon glyphicon-remove form-control-feedback"></span>').parent().removeClass('has-success').addClass('has-error').find(classname).html(msg);
	}

	$('#registerform #user').on('keyup', function() {
		if(patten.test($(this).val())) {
			checkFormSuccess($(this), ".Validform_user");
			obj.flag1 = true;
		} else {
			checkFormError($(this), ".Validform_user", '4-10位字符！');
			obj.flag1 = false;
		}
	});

	$('#registerform #nickname').on('keyup', function() {
		if(patten.test($(this).val())) {
			checkFormSuccess($(this), ".Validform_nickname");
			obj.flag2 = true;
		} else {
			checkFormError($(this), ".Validform_nickname", '4-10位字符！');
			obj.flag2 = false;
		}
	});

	$('#registerform #pass').on('keyup', function() {
		if(patten.test($(this).val())) {
			checkFormSuccess($(this), '.Validform_pass');
			obj.flag3 = true;
		} else {
			checkFormError($(this), '.Validform_pass', '4-10位字符！');
			obj.flag3 = false;
		}
	});

	//获取验证码
//	$('#registerform #user').blur(function() {
//		$.ajax({
//			type: 'get',
//			dataType: 'jsonp',
//			url: 'http://182.92.175.36/users/checkUsername?callback=?',
//			success: function(data) {
//				console.log(data);
//				//Object {success: true, msg: "该用户名不存在，可以注册"}
//			}
//		});
//	})

	//登录
	$('#submit').click(function() {
		var da = $('form').serialize();
		$.ajax({
			'url': 'http://182.92.175.36/users/login?callback=?',
			'dataType': 'jsonp',
			'data': da,
			'success': function(data) {
				if(data.success) {
//					console.log(data);
					
					var nickname = '欢迎光临' + data.dataInfo.username;
					$('.text-right').html(nickname).css('color', 'green');
					var id = data.dataInfo.id;
					var user = data.dataInfo.username; 
					var storage = window.localStorage;
					var id2 = 'u' + id;
					
					var info = {
						'id': id,
						'username': user,
						'status': true
					};
					
					var info2 = JSON.stringify(info);
					
					storage.setItem(id2, info2);
					
					
					setTimeout(function() {
						location.href = 'main.html?id='+ id2;
					}, 2000);
				} else {
					$('.text-right').html('用户名或密码不正确').css('color', 'red');
					return;
				}
			}
		});
	});
});