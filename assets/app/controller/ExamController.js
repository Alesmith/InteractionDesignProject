angular
    .module('alesmith')
    .controller('ExamController', ExamController);

ExamController.$inject = ['$scope','$sails','$routeParams'];

/* @ngInject */
function ExamController($scope,$sails,$routeParams) {
    /* jshint validthis: true */
    var vm = this;
    vm.title = 'ExamController';


    $sails.get("/v1/writtenExam/"+$routeParams.id).success(function (data) {
        $scope.exam = data;

    });
    $sails.on("writtenexam", function (message) {
        $sails.get("/v1/writtenExam/"+$routeParams.id).success(function (data) {
            $scope.exam = data;
        });
    });
}