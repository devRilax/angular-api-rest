angular.module('userList', [])
    .component('userList', {
        templateUrl: '/components/user-list/user-list.html',
        controller: function ($http, $scope) {
            $scope.data = this;
            $http.get('https://jsonplaceholder.typicode.com/users')
                .then(function (response) {
                    $scope.url = response.config.url;
                    $scope.data = response.data;
                    console.log(response.config.url);
                    console.log($scope.data);
                })
        }
    });