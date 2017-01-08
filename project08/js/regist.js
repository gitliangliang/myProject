//用户验证
//验证用户名
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

	$('#registerform #age').on('keyup', function() {
		var value = $(this).val();
		if(patten2.test(value) && value >= 18 && value <= 120) {
			checkFormSuccess($(this), '.Validform_age');
			obj.flag4 = true;
		} else {
			checkFormError($(this), '.Validform_age', '年龄为18-120的整数');
			obj.flag4 = false;
		}
	});

	$('#registerform #phone').on('keyup', function() {
		if(patten3.test($(this).val())) {
			checkFormSuccess($(this), '.Validform_phone');
			obj.flag5 = true;
		} else {
			checkFormError($(this), '.Validform_phone', '手机号码格式不正确！');
			obj.flag5 = false;
		}
	});

	$('#registerform #email').on('keyup', function() {
		if(patten4.test($(this).val())) {
			checkFormSuccess($(this), '.Validform_email');
			obj.flag6 = true;
		} else {
			checkFormError($(this), '.Validform_email', '邮箱格式不正确！');
			obj.flag6 = false;
		}
	});

	/**
	 * 用户注册
	 */
	$('#submit').click(function() {
		if(!obj.flag1 || !obj.flag2 || !obj.flag3 || !obj.flag4 || !obj.flag5 || !obj.flag6) {
			alert('注册信息不能为空！');
			return;
		} 
		var da = ($('#registerform').serialize());
		$.ajax({
			'url': 'http://182.92.175.36/users/register?callback?',
			'dataType': 'jsonp',
			'data': da,
			'success': function(data) {
				if(data.success) {
					$('.text-right').html('注册成功！');

					setTimeout(function() {
						location.href = 'login.html';
					}, 2000);
				} else {
					$('.text-right').html('注册用户失败！').css('color', 'red');
					return;
				}

			}
		});
	});

});