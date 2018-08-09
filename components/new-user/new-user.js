'use strict';


app.factory('HomeFactory', function ($http) {
    var url = 'http://jsonplaceholder.typicode.com/users';
    var HomeFactory = {
        createUser: function (user) {
            return $http.post(path, user).success(function (data) {
                    return data;
                })
                .error(function (err) {
                    console.log(err)
                })
        }
    };
    return HomeFactory;
});

app.controller('newUser', function (HomeFactory) {
    var vm = this;
    vm.user = {};
    vm.createUser = function (user) {
        console.log(user);
        HomeFactory.createUser(user).then(function (data) {
            console.log(data.data);
        });
    }
})
console.log('a');

// 'use strict';

// angular.module('userList', [])
//     .factory('HomeFactory', function() {
//         var HomeFactory = {
//             createUser: function (user) {
//                 return $http.post(path, user).success(function (data) {
//                         return data;
//                     })
//                     .error(function (err) {
//                         console.log(err)
//                     })
//             }
//         };
//         return HomeFactory;
//     })
//     .component('newUser', {
//         templateUrl: '/components/user-list/user-list.html',
//         controller: function ($http, $ HomeFactory) {
//             var vm = this;
//             vm.user = {};
//             vm.createUser = function (user) {
//                 console.log(user);
//                 HomeFactory.createUser(user).then(function (data) {
//                     console.log(data.data);
//                 });
//             }
//         }
//     });