angular.module('userDetail', [])
    .component('userDetail', {
        templateUrl: '/components/user-detail/user-detail.html',
        controller: function ($http, $scope) {
            $scope.data = this;

        },
        bindings: {
            usuario: "="
        }
    });