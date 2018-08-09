var app = angular.module('myApp', ['headerComponent', 'userList', 'userDetail']);

app.controller('myController', ['$scope', function ($scope) {
    $scope.texts = ['hola'];
}]);