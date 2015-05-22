angular
    .module('alesmith')
    .controller('SettingsController', SettingsController);

SettingsController.$inject = ['$scope', '$sails', '$http', '$timeout'];

/* @ngInject */
function SettingsController($scope, $sails, $http, $timeout) {
    /* jshint validthis: true */
    var vm = this;
    vm.title = 'SettingsController';

    ////////////////
    $sails.get("/v1/user/current").success(function (data) {
        $scope.user = data;
        console.log($scope.user);
    });
    $scope.update = function() {
        $scope.user.password = $scope.password;
        $http.put("/v1/user/" + $scope.user.id, $scope.user).success(function (data) {
            alert("Dina ändringar är sparade");
        });
    };
    $scope.refresh = function() {
        refresh();
    };
    $scope.confirmCancel = function() {
        var cancel = confirm("Är du säker på att du inte vill spara dina ändringar?");
        if (cancel) {
            refresh();
        }
    };
    $sails.on("user", function (message) {
        refresh();
    });
    function refresh() {
        $sails.get("/v1/user/current").success(function (data) {
            $scope.user = data;
        });
    }


}