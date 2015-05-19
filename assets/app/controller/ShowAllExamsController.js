angular
    .module('alesmith')
    .controller('ShowAllExamsController', ShowAllExamsController);

ShowAllExamsController.$inject = ['$scope', '$sails', '$rootScope', '$timeout'];

/* @ngInject */
function ShowAllExamsController($scope, $sails, $rootScope, $timeout) {
    /* jshint validthis: true */
    var vm = this;
    vm.title = 'ShowAllExamsController';
    $scope.exams = [];

    ////////////////

    $sails.get("/v1/writtenExam?writtenBy=" + $rootScope.user.id).success(function (data) {
        console.log($rootScope.user);
        $scope.exams = data;

    });

    $sails.on("writtenexam", function (message) {
        $sails.get("/v1/writtenExam?writtenBy=" + $rootScope.user.id).success(function (data) {
            $scope.exams = data;
        });
    });
}