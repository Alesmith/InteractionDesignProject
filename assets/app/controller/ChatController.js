/**
 * Created by Catio on 2015-05-21.
 */

angular.module("alesmith").controller("ChatController", ChatController);

ChatController.$inject = ["$scope", "$sails", "$rootScope"];

function ChatController($scope, $sails, $rootScope) {

    refresh(false);
    $scope.currentChat = 0;

    $scope.setCurrentChat = function (index) {
        $scope.currentChat = index;
    }

    $scope.sendMessage = function (message) {
        if ($scope.currentChat !== null) {
            $scope.exams[$scope.currentChat].chat = $scope.exams[$scope.currentChat].chat || [];
            $scope.exams[$scope.currentChat].chat.push({
                data: message,
                fromUs: true
            });
            update();
        }
    };
    function update() {
        var exam = $scope.exams[$scope.currentChat];
        $sails.put('/v1/writtenExam/' + exam.id, exam).success(function () {
        });
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
