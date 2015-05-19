angular
    .module('alesmith')
    .controller('ShowAllExamsController', ShowAllExamsController);

ShowAllExamsController.$inject = ['$scope', '$sails'];

/* @ngInject */
function ShowAllExamsController($scope, $sails) {
    /* jshint validthis: true */
    var vm = this;
    vm.title = 'ShowAllExamsController';
    $scope.exams = [];

    ////////////////
    $sails.get("/v1/writtenExam?writtenBy=" + "1").success(function (data) {
        $scope.exams = data;

    });
    $sails.on("writtenexam", function (message) {
        $sails.get("/v1/writtenExam?writtenBy=" + "1").success(function (data) {
            $scope.exams = data;
        });
    });
}