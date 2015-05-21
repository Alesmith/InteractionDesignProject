/**
 * Created by Catio on 2015-05-21.
 */

angular.module("alesmith").controller("ChatController", ChatController);

ChatController.$inject = ["$scope", "$sails", "$rootScope"]

function ChatController($scope, $sails, $rootScope) {

  refresh();
  $scope.currentChat = null;

  $scope.setCurrentChat = function (index) {
    $scope.currentChat = index;
  }

  $scope.sendMessage = function (message) {
    if ($scope.currentChat !== null) {
      $scope.exams[$scope.currentChat].chat = $scope.exams[$scope.currentChat].chat || []
      $scope.exams[$scope.currentChat].chat.push({
        data: message,
        fromUs: true
      })
    }

  }

  $sails.on("writtenexam", function (message) {
    refresh();
  });

  function refresh() {
    $sails.get("/v1/writtenExam?writtenBy=" + $rootScope.user.id).success(function (data) {
      $scope.exams = data;

      console.log(data);
    });
  }

}
