/**
 * Created by Catio on 2015-05-21.
 */

angular.module("alesmith").controller("ChatController", ChatController);

ChatController.$inject = ["$scope", "$sails", "$rootScope","$location"];

function ChatController($scope, $sails, $rootScope,$location) {

    refresh(true);

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
            refresh();
        });
    }

    $sails.on("writtenexam", function (message) {
        refresh();
    });

    function refresh(bool) {

        $sails.get("/v1/writtenExam?writtenBy=" + $rootScope.user.id).success(function (data) {
            $scope.exams = data;
            if (bool) {
                for(var key in data) {
                    var exam = data[key];
                    console.log(exam,$location.search().id);
                    if (exam.id === parseInt($location.search().id)) {
                        $scope.currentChat = key;
                        console.log($scope.currentChat);
                    }
                }
            }
            console.log(data);
        });
    }

}
