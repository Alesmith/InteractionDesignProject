angular
    .module('alesmith')
    .controller('SettingsController', SettingsController);

SettingsController.$inject = ['$scope', '$sails', '$http','$timeout'];

/* @ngInject */
function SettingsController($scope, $sails, $http,$timeout) {
    /* jshint validthis: true */
    var vm = this;
    vm.title = 'SettingsController';

    ////////////////
    $sails.get("/v1/user/current").success(function (data) {
        $scope.user = data;
        console.log($scope.user);
    });
    $scope.update = function () {
        console.log($scope.user);
        $timeout(function() {$http.put("/v1/user/" + $scope.user.id, $scope.user).success(function (data) {

        });},100);

    };
    $scope.refresh = function () {
        refresh();
    }
    $sails.on("user", function (message) {
        refresh();
    });
    function refresh() {
        $sails.get("/v1/user/current").success(function (data) {
            $scope.user = data;
        });
    }
}