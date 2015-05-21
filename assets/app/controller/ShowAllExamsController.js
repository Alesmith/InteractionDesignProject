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

  ///////////////

  refresh();

  $sails.on("writtenexam", function (message) {
    refresh();
  });

  $scope.isPublished = function(exam){
    return !!exam.grade;
  }

  function refresh() {
    $sails.get("/v1/writtenExam?writtenBy=" + $rootScope.user.id).success(function (data) {
      $scope.exams = data;

      for (var key in $scope.exams){
        var exam = $scope.exams[key];
        exam.isPublished = function(){
          console.log(exam.grade);
          return !!exam.grade;
        }
      }

      console.log(data);
    });
  }

}
