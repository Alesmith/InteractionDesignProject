angular
    .module('alesmith')
    .controller('AppController', AppController);

AppController.$inject = ['$scope', '$location', '$http', '$rootScope', '$window'];

/* @ngInject */
function AppController($scope, $location, $http, $rootScope, $window) {
    /* jshint validthis: true */
    var vm = this;
    vm.title = 'AppController';
    $scope.tabSelected = -1;
    ////////////////
    $http.get('/v1/user/current').success(function (user) {
        $rootScope.user = user;
    }).error(function () {
        $window.location = "/login";
    });
    $scope.logout = function () {
        $http.get('/v1/user/logout').success(function () {
            $window.location = "/login";
        })
    };
    $scope.getClass = function (path) {
        return $location.path().substr(0, path.length) == path;
    };
    $scope.menu = [];
    $scope.menu.push({
        title: "TENTAMEN",
        prefix: "exam",
        links: [
            {link: '/exam/all', text: ''}
        ]
    });
    $scope.menu.push({
        title: "MEDDELANDEN",
        prefix: "chat",
        links: [{link: '/chat/chat#bottom', text: ''}]
    });
    $scope.menu.push({
        title: "INFORMATION",
        prefix: "information",
        links: [
            {
                link: '/information/tentamenregistration', text: "Information om tentamina"
            },
            {
                link: '/information/reexam', text: "Omprövning"
            },
            {
                link: '/information/rules', text: 'Regler för tentamensskrivning'
            },
            {
                link: '/information/faq', text: 'Vanliga frågor (FAQ)'
            },
            {
                link: '/information/contact', text: 'Kontaktinformation'
            }

        ]
    });
    $scope.menu.push({
        title: "HJÄLP",
        prefix: "support",
        links: [
            {
                link: '/support/help#help-content', text: ''
            }
        ]
    });

    $scope.menu.push({
        title: "INSTÄLLNINGAR",
        prefix: "notifications",
        links: [
            {link: '/notifications/settings', text: ''}
        ]
    });

    $scope.tabClick = function (index) {
        $scope.tabSelected = index;

        $location.url($scope.menu[index].links[0].link);
    };
    $scope.activeTab = function (index) {
        if ($scope.tabSelected != -1) return index == $scope.tabSelected;
        console.log($location.path().substr(0, $location.path().length));
        if ($location.path().substr(0, $location.path().length).split("/")[1] === $scope.menu[index].prefix) {
            $scope.tabSelected = index;
            return true;
        }
        return false;
    };
    $scope.getActive = function (path) {
        return $location.path().substr(0, path.length) == path;
    };
}

