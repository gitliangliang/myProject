var myApp = angular.module('myApp', []);

myApp.controller('myCtrl', ['$scope', function($scope) {
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

    function getData() {
        var sumCount = 0;
        var price = 0;
        for (var i = 0; i < $scope.books.length; i++) {
            sumCount += $scope.books[i].count;
            price += $scope.books[i].count * $scope.books[i].price;
        }
        $scope.sumCount = sumCount;
        $scope.price = price;
    }

    getData();

    $scope.clearAll = function() {
        this.books.splice(0);
    };

    $scope.deleteRow = function(index) {
        this.books.splice(index, 1);
    };

    $scope.$watch('books', function(newValue, oldValue, scope) {
        getData();
    }, true);
}]);

