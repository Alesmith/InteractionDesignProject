angular
    .module('alesmith')
    .controller('ShowAllExamsController', ShowAllExamsController);

ShowAllExamsController.$inject = ['$scope','$sails'];

/* @ngInject */
function ShowAllExamsController($scope, $sails) {
    /* jshint validthis: true */
    var vm = this;
    vm.title = 'ShowAllExamsController';
    $scope.exams = [];

    ////////////////
    $sails.get("/exam").success(function (data){
        $scope.exams=data;
    });
    $sails.on("exam", function (message) {
        console.log(message);
        if (message.verb === "created") {
            $scope.exams.push(message.data);
        }
        if (message.verb === 'updated') {
            for (var exam in $scope.exams) {
                var value = $scope.exams[exam];
                if (message.previous.id === exam.id) {
                    $scope.exams[exam] = message.data;
                }
            }
        }
    });
}