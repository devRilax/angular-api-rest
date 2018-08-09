'use strict';

var app = angular.module('myApp', ['headerComponent', 'userList', 'userDetail']);

app.controller('myController', ['$scope', '$log', function (SSS, L) {
    SSS.hola = 'asdf';
}]);