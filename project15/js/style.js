var myApp = angular.module('myApp', []);

myApp.controller('myCtrl', ['$scope', '$filter', function($scope, $filter) {
    var data = [{
        "id": 100,
        "name": "JavaScript从入门到精通",
        "count": 3,
        "price": 36.5
    }, {
        "id": 104,
        "name": "Java从入门到精通",
        "count": 2,
        "price": 50
    }, {
        "id": 105,
        "name": "PHP从入门到精通",
        "count": 1,
        "price": 25.5
    }, {
        "id": 108,
        "name": "C#从入门到精通",
        "count": 7,
        "price": 40
    }, {
        "id": 110,
        "name": "jQuery从入门到精通",
        "count": 10,
        "price": 39
    }];

    $scope.books = data;
    $scope.flag = true;

    $scope.getAllPrice = function() {
        var price = 0;
        angular.forEach($scope.books, function(value, key) {
            price += value.count * value.price;
        });
        return price;
    };

    $scope.getAllCount = function() {
    	var count = 0;
    	angular.forEach($scope.books, function(value, key){
    		count += value.count;
    	});
    	return count;
    };

    $scope.clearAll = function() {
    	$scope.books = [];
    	$scope.flag = false;
    };

    function getIndex(id) {
    	var ID = -1;
    	angular.forEach($scope.books, function(value, index){
    		if (value.id == id) {
    			ID = index;
    		}
    	});
    	return ID;
    }

    $scope.deleteRow = function(id) {
    	var isTrue = window.confirm('确定要删除这行数据吗？');
    	if (isTrue) {
	    	$scope.books.splice(getIndex(id), 1);
    	}
    };

    $scope.sum = function(id) {
		$scope.books[getIndex(id)].count++;
    };

    $scope.sub = function(id) {
		if ($scope.books[getIndex(id)].count <= 0) {
			$scope.books[getIndex(id)].count = 0;
		} else {
			$scope.books[getIndex(id)].count--;
		}
    };

    $scope.checkInput = function(id) {
		if ($scope.books[getIndex(id)].count < 0) {
			$scope.books[getIndex(id)].count = 0;
		}
    };
    
    $scope.opt = 'id';
    
    $scope.order = function(prop, event) {
    	
//  	console.log(event.target);
		angular.element(event.target).parent().children().removeClass('act').removeClass('dropup');
		angular.element(event.target).addClass('act');
	
    	if ($scope.opt == prop) {
    		$scope.opt = '-' + $scope.opt;
    		angular.element(event.target).addClass('dropup');
    	} else {
    		$scope.opt = prop;
    	}
    };
    
    $scope.addBook = function() {
    	var obj = {};
    	obj.id = parseInt(myForm.addID.value);
    	obj.name = myForm.addName.value;
    	obj.price = parseInt(myForm.addPrice.value);
    	obj.count = parseInt(myForm.addCount.value);
    	for (var i in obj) {
    		if (!obj[i]) {
    			alert('数据内容不能为空！');
    			return;
    		}
    	}
    	data.push(obj);
    	$('#myModal').modal('hide');
    };

}]);
