angular
    .module('alesmith')
    .controller('ExamController', ExamController);

ExamController.$inject = ['$scope', '$sails', '$routeParams', '$sce', '$timeout'];

/* @ngInject */
function ExamController($scope, $sails, $routeParams, $sce, $timeout) {
    /* jshint validthis: true */
    var vm = this;
    vm.title = 'ExamController';


    refresh();
    $sails.on("writtenexam", function (message) {
        refresh();

    });
    function refresh() {
        $sails.get("/v1/writtenExam/" + $routeParams.id).success(function (data) {
            $scope.exam = data;
            console.log(data);
            for (var key in $scope.exam.answers) {
                $scope.exam.answers[key].data = $sce.trustAsHtml(comment($scope.exam.answers[key]));
            }
            $timeout(function () {
                $('[data-toggle="tooltip"]').tooltip()
            }, 500)
        });

    }

    function comment(answer) {
        var data = answer.data;
        for (var key in answer.comments) {
            var comment = answer.comments[key];
            data = data.replace(">-", "<span style='background-color:" + comment.color + ";' data-toggle='tooltip' data-placement'top' title='" + comment.data + "'>");
            data = data.replace("-<", "</span>");
        }
        return data;
    }
}