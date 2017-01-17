var myApp = angular.module("myApp",[]);

myApp.controller("myCon",function($scope) {
	var data = [
		{
			"id" : 100,
			"name" : "JavaScript从入门到精通",
			"count" : 3,
			"price" : 36.5
		},{
			"id" : 104,
			"name" : "Java从入门到精通",
			"count" : 2,
			"price" : 50
		},{
			"id" : 105,
			"name" : "PHP从入门到精通",
			"count" : 1,
			"price" : 25.5
		},{
			"id" : 108,
			"name" : "C#从入门到精通",
			"count" : 7,
			"price" : 40
		},{
			"id" : 110,
			"name" : "jQuery从入门到精通",
			"count" : 10,
			"price" : 39
		}
	];
	
	
	$scope.books = data;
	
	/**
	 * 计算总数据
	 */
	$scope.getAllCount = function() {
		var allCount = 0;
		angular.forEach($scope.books,function(ele) {
			allCount += ele.count;
		})
		return allCount;
	};
	
	$scope.getAllPrice = function() {
		var allPrice = 0;
		angular.forEach($scope.books,function(ele) {
			allPrice += ele.count*ele.price;
		})
		return allPrice;
	}
	
	$scope.allClear = function() {
		$scope.books = {};
	};
	
	$scope.del = function(id) {
		var index = -1;
		angular.forEach($scope.books,function(ele,key) {
			if (ele.id == id) {
				index = key;
			}
		});
		$scope.books.splice(index,1);
	}
	
	

});

