/**
 * 请求列表数据
 */
$(function() {

	var words = location.href;
	var word = words.substr(words.indexOf('=') + 1); //获取参数值

	if(words.indexOf('=') < 0) {
		location.href = 'login.html';
	}
	
	//判断用户是否是登录状态
	var storage = window.localStorage;

	var name = storage.getItem(word);
	var name2 = JSON.parse(name);
	
	//console.log(name2)//Object {id: 956, username: "wxww", status: true}
	
	if((name2.status == true) && (name2.id == word.substr(1))) {
		$.ajax({
			'url': 'http://182.92.175.36/users/list',
			'dataType': 'jsonp',
			'success': function(data) {
				if(data.success) {
					var users = data.dataInfo;
					//alert(users.length);
					var str = "";
					for(var i = 0; i < users.length; i++) {
						str += '<tr><td>';

						str += users[i].id + '</td><td>';
						str += users[i].username + '</td><td>';
						str += users[i].nickname + '</td><td>';
						str += users[i].age + '</td><td>';
						str += users[i].sex + '</td><td>';
						str += users[i].email + '</td><td>';
						str += users[i].telphone + '</td><td>';
						str += "<a class='btn btn-success center-block' href='update.html?id=" + users[i].id + "&user="+word+"'>修改</a></td><td>";
						str += "<button class='btn btn-danger center-block' onclick='delete1(" + users[i].id + ",this)'>删除</button></td></tr>";

					}
					$('#users').html(str);
				}
			}
		});
	} else {
		location.href = 'login.html';
	}
});

/*单机删除按钮删除数据*/
function delete1(id, node) {
	var flag = window.confirm('确定要删除这条数据吗？');
	if(flag) {
		$.getJSON('http://182.92.175.36/users/delete?callback=?&id=' + id, function(data) {
			if(data.success) {
				$(node).parents('tr').remove();
			}
		});
	}
}