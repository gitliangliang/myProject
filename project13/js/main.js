var myApp = angular.module('myApp', []);
myApp.controller('myCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('csl-data.json').success(function(data) {
		$scope.datas = data;
		console.log(data);
	});
	
	$scope.default = 'Round';
	
	$scope.order = function(prop, event) {
		angular.element(event.target).parent().children().removeClass('red').removeClass('dropup');
		angular.element(event.target).addClass('red');
		if ($scope.default == prop) {
			angular.element(event.target).addClass('dropup')
			$scope.default = '-' + prop;
		} else {
			$scope.default = prop;
		}
	};
}]);
