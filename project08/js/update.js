//验证数据格式是否正确

$(function() {
	var words = location.href;
	var word = words.substr(words.indexOf('=') + 1); //获取参数值值
	if(words.indexOf('=') < 0) {
		location.href = 'login.html';
	}
	
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
	 * 现获取再修改
	 */
	var str = location.href;
	var id = str.substr(str.indexOf('=') + 1);

	$.ajax({
		type: "get",
		url: "http://182.92.175.36/users/load?callback=?&id=" + id,
		async: true,
		dataType: 'jsonp',
		success: function(data) {
			if(data.success) {
				if(data.dataInfo.username) {
					$('#user').val(data.dataInfo.username);
					if(patten.test($('#user').val())) {
						checkFormSuccess($('#user'), ".Validform_user");
						obj.flag1 = true;
					} else {
						checkFormError($('#user'), ".Validform_user", '4-10位字符！');
						obj.flag1 = false;
					}
				}

				if(data.dataInfo.password) {
					$('#pass').val(data.dataInfo.password);
					if(patten.test($('#pass').val())) {
						checkFormSuccess($('#pass'), ".Validform_pass");
						obj.flag3 = true;
					} else {
						checkFormError($('#pass'), ".Validform_pass", '4-10位字符！');
						obj.flag3 = false;
					}
				}

				if(data.dataInfo.age) {
					$('#age').val(data.dataInfo.age);
					var value = $('#age').val();
					if(patten2.test(value) && value >= 18 && value <= 120) {
						checkFormSuccess($('#age'), '.Validform_age');
						obj.flag4 = true;
					} else {
						checkFormError($('#age'), '.Validform_age', '年龄为18-120的整数');
						obj.flag4 = false;
					}
				}

				if(data.dataInfo.email) {
					$('#email').val(data.dataInfo.email);
					if(patten4.test($('#email').val())) {
						checkFormSuccess($('#email'), ".Validform_email");
						obj.flag6 = true;
					} else {
						checkFormError($('#email'), ".Validform_email", '邮箱格式不正确！');
						obj.flag6 = false;
					}
				}

				if(data.dataInfo.nickname) {
					$('#nickname').val(data.dataInfo.nickname);
					if(patten.test($('#nickname').val())) {
						checkFormSuccess($('#nickname'), ".Validform_nickname");
						obj.flag2 = true;
					} else {
						checkFormError($('#nickname'), ".Validform_nickname", '4-10位字符！');
						obj.flag2 = false;
					}
				}

				if(data.dataInfo.telphone) {
					$('#phone').val(data.dataInfo.telphone);
					if(patten3.test($('#phone').val())) {
						checkFormSuccess($('#phone'), ".Validform_phone");
						obj.flag5 = true;
					} else {
						checkFormError($('#phone'), ".Validform_phone", '手机号码格式不正确！');
						obj.flag5 = false;
					}
				}

				if(data.dataInfo.sex == 'male') {
					$('input[type=radio]').eq(1).attr('checked', 'checked');
				} else if(data.dataInfo.sex == 'female') {
					$('input[type=radio]').eq(0).attr('checked', 'checked');
				}
			}
		}
	});

	$('#submit').click(function() {
		if(!obj.flag1 || !obj.flag2 || !obj.flag3 || !obj.flag4 || !obj.flag5 || !obj.flag6) {
			alert('修改信息有误！');
			return;
		}
		var info = $('form').serialize();
		$.ajax({
			type: 'get',
			url: 'http://182.92.175.36/users/update?callback=?&id=' + id,
			dataType: 'jsonp',
			data: info,
			success: function(data) {
				if(data.success) {
					$('h3').html('修改成功！')
					$('.btn.btn-info').attr('href', 'main.html?id='+word.substr(word.indexOf('=')+1) ).removeClass('hidden');
				} else {
					alert('用户修改失败！');
				}
			}
		});
	});
});