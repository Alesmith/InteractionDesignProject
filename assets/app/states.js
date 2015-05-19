/**
 * Created by aleksandarfaraj on 15-05-07.
 */
angular.module('alesmith')
    .config(['$routeProvider', '$locationProvider',
        function ($routeProvider, $locationProvider) {
            $routeProvider
                // route for the booking overview page
                .when('/exam/all', {
                    templateUrl: '/app/partials/allExams.html',
                    controller:'ShowAllExamsController'
                })
                .when('/exam/register', {
                    templateUrl: '/app/partials/allExams.html'
                })
                .when('/exam/:id', {
                    templateUrl: '/app/partials/exam.html',
                    controller: 'ExamController',
                    resolve: {
                        exam: ['$sails','$routeParams',function($sails,$routeParams) {
                            return $sails.get("/v1/writtenExam/"+$routeParams.id)
                        }]
                    }
                })
                .when('/exam/newest', {
                    templateUrl: '/app/partials/exams.html'
                })
                .when('/information/tentamenregistration', {
                    templateUrl: '/app/partials/examregistration.html'
                })
                .when('/information/faq', {
                    templateUrl: '/app/partials/faq.html'
                })
                .when('/information/contact', {
                    templateUrl: '/app/partials/contact.html',
                    controller:"ContactController"
                })
                .when('/information/reexam', {
                    templateUrl: '/app/partials/reexam.html'
                })
                .when('/information/rules', {
                    templateUrl: '/app/partials/rules.html'
                })
                .when('/chat/main', {
                    templateUrl: '/app/partials/exams.html'
                })
                .when('/notifications/settings', {
                    templateUrl: '/app/partials/settings.html'
                })
                .otherwise({
                    redirectTo: '/exam/all'
                });
            $locationProvider.html5Mode(true);

        }]);
