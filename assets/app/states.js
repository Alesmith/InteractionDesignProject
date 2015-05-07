/**
 * Created by aleksandarfaraj on 15-05-07.
 */
angular.module('alesmith', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider',
        function ($routeProvider, $locationProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'app/partial/showTenta.html',
                    controller: 'ChapterCtrl'
                });
            $locationProvider.html5Mode(true);
        }])