var app = angular.module('myApp', ['headerComponent', 'userList']);

app.controller('myController', ['$scope', function ($scope) {
    $scope.texts = ['hola'];
}]);