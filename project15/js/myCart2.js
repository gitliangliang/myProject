angular.module("myApp",[])
	.controller("myCon",["$scope",function($scope) {
		
		/**
		 * 
		 */
		var each =  angular.forEach;
		var jqLite = angular.element;
		
		
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
		 * 
		 */
		$scope.$watch("books",function(newVal,oldVal) {
			each($scope.books,function(ele,index) {
				if (ele.count <= 0 ) {
					ele.count = 0;
				}
			});
		},true);//在angularJS1.3之后，为了效率问题，通过第三个参数来控制是否检测对象内部属性变化
		
		
		/**
		 * 通过id减少对应数据的数量
		 * @param {Object} id
		 */
		$scope.sub = function(id) {
			var index = getIndex(id);
			$scope.books[index].count--;
		}
		
		/**
		 * 通过id增加对应数据的数量
		 * @param {Object} id
		 */
		$scope.add = function(id) {
			var index = getIndex(id);
			$scope.books[index].count++;
		}
		
		/**
		 * 获取总数量的方法
		 */
		$scope.getAllCount = function() {
			var allCount = 0;
			each($scope.books,function(ele,index) {
				allCount += ele.count;
			})
			return allCount;
		}
	
		/**
		 * 获取总价格的方法
		 */
		$scope.getAllPrice = function() {
			var allPrice = 0;
			each($scope.books,function(ele,index) {
				allPrice += ele.count*ele.price;
			})
			return allPrice;
		}
		
		/**
		 * 清除所有数据
		 */
		$scope.allClear = function() {
			var isClear = window.confirm("您确定要清空购物车吗？");
			if (isClear) {
				$scope.books = {};
			}
		}
		
		/**
		 * 清除所有数据
		 */
		$scope.del = function(id) {
			var isClear = window.confirm("您确定要删除该物品吗？");
			if (isClear) {
				$scope.books.splice(getIndex(id),1);
			}
		}
		
		/**
		 * 通过id得到id所对应数据的索引
		 * @param {Object} id 
		 * @return 索引
		 */
		function getIndex(id) {
			var i = 0;
			each($scope.books,function(ele,index) {
				if (ele.id === id) {
					i = index;
				}
			});
			return i;
		}
		
		$scope.order = "id";
		
		$scope.orderBy = function(e,msg) {
			//TODO 这个有个小BUG
			jqLite(e.target).parent().children().removeClass("selected");
			jqLite(e.target).toggleClass("selected");
			
			if (msg == $scope.order) {
				$scope.order = "-"+msg;
			} else {
				$scope.order = msg;
			}
		}
		
		$scope.myStyle = {
			"cursor" : "pointer"
		}
		
	}]);