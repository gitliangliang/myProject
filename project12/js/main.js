var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'template/regist.html',
		controller: 'registCtrl'
	}).when('/login', {
		templateUrl: 'template/login.html',
		controller: 'loginCtrl'
	}).when('/list', {
		templateUrl: 'template/list.html',
		controller: 'listCtrl'
	}).when('/update', {
		templateUrl: 'template/update.html',
		controller: 'updateCtrl'
	}).otherwise({
		redirectTo: '/'
	});
}]);

myApp.controller('myCtrl', ['$scope', function($scope) {

}]);

myApp.factory('mySer', function() {
	return {
		info: ''
	};
});

myApp.controller('listCtrl', ['$scope', '$http', '$location', 'mySer', function($scope, $http, $location, mySer) {
	let storage = window.localStorage;

	if(storage.getItem('loginUser')) {
		$http.jsonp('http://182.92.175.36/users/list?callback=JSON_CALLBACK').then(function(datas) {
			$scope.lists = datas.data.dataInfo;
		}, function() {
			alert('获取数据失败');
		});
	} else {
		$location.path('/login');
		return;
	}

	$scope.update = function(info) {
		$.ajax({
			url: "http://182.92.175.36/users/load?callback=?&id=" + info,
			dataType: 'jsonp',
			success: function(data) {
				if(data.success) {
					mySer.info = data.dataInfo;
					location.href = 'index.html#/update?id=' + info;
				}
			}
		});
	}

	$scope.user = JSON.parse(storage.getItem('loginUser')).username;

	setInterval(function() {
		$scope.$apply(function() {
			$scope.time = new Date();
		});
	}, 1000);

	$scope.loginOut = function() {
		if(window.confirm('确定要退出登录吗？')) {
			window.localStorage.clear();
			$location.path('/login');
			return;
		}
	};

	function getIndex(id) {
		let index = -1;
		angular.forEach($scope.lists, function(item, key) {
			if(item.id == id) {
				index = key;
			}
		});
		return index;
	}

	$scope.deleteData = function(info) {
		var flag = window.confirm('确定要删除这条数据吗？');
		if(flag) {
			$http.jsonp('http://182.92.175.36/users/delete?callback=JSON_CALLBACK', {
				params: {
					id: info
				}
			}).success(function(data) {
				if(data.success) {
					$scope.lists.splice(getIndex(info), 1);
				}
			});
		}
	}

}]);

myApp.controller('updateCtrl', ['$scope', '$location', '$http', 'mySer', function($scope, $location, $http, mySer) {
	//	console.log(mySer.info);
	//此处msg对象可以不用重写，可以直接赋值为myser。
	$scope.msg = mySer.info
		//此处ID不用传过来，因为$scope.msg中已经有ID值了，可以直接获取到
	if(!window.localStorage.getItem('loginUser')) {
		location.href = '#/list';
		return;
	}

	if(location.href.indexOf('=') == -1) {
		$scope.msg = {};
		alert('请从主列表页面进入改修改页面');
		$location.path('/list');
	}

	$scope.updateSubmit = function() {
		$http.jsonp('http://182.92.175.36/users/update?callback=JSON_CALLBACK', {
			'params': $scope.msg
		}).success(function(data) {
			if(data.success) {
				//				console.log(data);
				alert('用户信息修改成功,即将跳转到主页面！');
				setTimeout(function() {
					$scope.$apply(function() {
						location.href = '#/list';
					})
				}, 1000);
			} else {
				alert('用户修改失败！');
			}
		});
		/*var info = $('#registerform').serialize();
		$.ajax({
			url: 'http://182.92.175.36/users/update?callback=?&id=' + id,
			dataType: 'jsonp',
			data: info,
			success: function(data) {
				if(data.success) {
					alert('用户信息修改成功,即将跳转到主页面！');
					setTimeout(function() {
						$scope.$apply(function() {
							$location.path('/list');
						})
					}, 1000);
				} else {
					alert('用户修改失败！');
				}
			}
		});*/
	};
}]);

myApp.controller('registCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {

	$scope.submitData = function() {
		
		var patten = /^[a-zA-Z]\w{3,9}$/;
		var patten3 = /^1[3|4|5|7|8][0-9]{9}$/;
		if (!patten.test($scope.user.username) || $scope.user.username == undefined) {
			alert('用户名必须为英文的4-10个字符');
			return;
		}
		
		if (!patten.test($scope.user.nickname ) || $scope.user.nickname == undefined) {
			alert('昵称必须为英文的4-10个字符');
			return;
		}
		
		if (!patten.test($scope.user.password) || $scope.user.password == undefined) {
			alert('密码必须为英文的4-10个字符');
			return;
		}
		
		if ($scope.user.age == undefined) {
			alert('请输入年龄');
			return;
		} else if ($scope.user.age <18 || $scope.user.age > 120) {
			alert('年龄应该在18-120岁之间');
			return;
		}
		
		if ($scope.user.telphone == undefined) {
			alert('电话不能为空！');
			return;
		}
		
		if (!patten3.test($scope.user.telphone)) {
			alert('手机号码格式不正确！');
			return;
		}
		
		var patten4 = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
		
		if (!patten4.test($scope.user.email)) {
			alert('邮箱格式不正确！');
			return;
		}
		
		if ($scope.user.email == undefined) {
			alert('邮箱不能为空！');
			return;
		}

		$http.jsonp('http://182.92.175.36/users/register?callback=JSON_CALLBACK', {
			'params': $scope.user
				//这里应该是 'params': data， $http.jsonp方法才可以使用， 这是固定模式
		}).success(function(data) {
			if(data.success) {
				alert('注册成功,即将跳转');
				setTimeout(function() {
					$scope.$apply(function() {
						$location.path('/login');
					})
				}, 1000);
			} else {
//				alert(data.msg);
			}
		});
		/*$.ajax({
			'url': 'http://182.92.175.36/users/register?callback?',
			'dataType': 'jsonp',
			'data': data,
			'success': function(data) {
				if(data.success) {
					alert('注册成功,即将跳转');
					setTimeout(function() {
						$scope.$apply(function() {
							$location.path('/login');
						})
					}, 1000);
				}
			}
		});*/
	};
}]);

myApp.controller('loginCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
	$scope.turnUrl = function() {
		$location.path('/');
	};

	$scope.loginSubmit = function() {
		//var info = $('#registerform').serialize();
		//		alert(info);

		$http.jsonp('http://182.92.175.36/users/login?callback=JSON_CALLBACK', {
			'params': $scope.user
		}).success(function(data) {
			console.log(data);
			if(data.success) {
				let storage = window.localStorage;
				let info = JSON.stringify(data.dataInfo);
				storage.setItem('loginUser', info);
				alert('登录成功,即将跳转主页面');
				setTimeout(function() {
					$scope.$apply(function() {
						//						alert(location.href); 拿到的是从#开始的内容
						location.href = '#/list' + '?id=' + data.dataInfo.id;
						//						console.log(location.href)
						//						console.log($location.absUrl())
					});
				}, 1000);
			} else {
				alert(data.msg);
			}
		});

		/*$.ajax({
			'url': 'http://182.92.175.36/users/login?callback=?',
			'dataType': 'jsonp',
			'data': info,
			'success': function(data) {
				if(data.success) {
					alert('登录成功,即将跳转主页面');
					setTimeout(function() {
						$scope.$apply(function() {
							$location.path('/list');
						});
					}, 1000);
				}
			}
		});*/
	};
}]);