/**
 * Created by aleksandarfaraj on 15-05-07.
 */
angular.module('alesmith')
    .config(['$routeProvider', '$locationProvider',
        function ($routeProvider, $locationProvider) {
            $routeProvider
                // route for the booking overview page
                .when('/exam/all', {
                    templateUrl: '/app/partials/allExams.html'
                    //controller: 'CurrentBookingsController'
                })
                .when('/exam/newest',{
                    templateUrl: '/app/partials/exams.html'
                })
                .when('/information/main',{
                    templateUrl: '/app/partials/exams.html'
                })
                .when('/chat/main',{
                    templateUrl: '/app/partials/exams.html'
                })
                .when('/notifications/main',{
                    templateUrl: '/app/partials/exams.html'
                })
                .otherwise({
                    redirectTo: '/exam/all'
                });
            $locationProvider.html5Mode(true);

        }]);