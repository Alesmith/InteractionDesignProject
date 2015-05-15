angular
    .module('alesmith')
    .controller('LoginController', LoginController);

LoginController.$inject = ['$scope', '$http', '$location', '$window'];

/* @ngInject */
function LoginController($scope, $http, $location, $window) {
    /* jshint validthis: true */
    var vm = this;
    vm.title = 'LoginController';
    $scope.error=false;
    ////////////////
    $scope.login = function (username, password) {
        console.log("hello");
        var info = {
            username: username,
            password: password
        };
        $http.post('/user/login', info).success(function (data) {
            $location.path("/exam/");
            console.log(data);
            setTimeout(function () {
                $window.location.reload()
            }, 700);
        }).error(function (err) {
            console.log(err);
            $scope.error=true;
        });

    }
}