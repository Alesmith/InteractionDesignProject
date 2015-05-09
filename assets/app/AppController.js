angular
    .module('alesmith')
    .controller('AppController', AppController);

AppController.$inject = ['$scope', '$location'];

/* @ngInject */
function AppController($scope, $location) {
    /* jshint validthis: true */
    var vm = this;
    vm.title = 'AppController';
    $scope.tabSelected = -1;
    ////////////////
    $scope.getClass = function (path) {
        return $location.path().substr(0, path.length) == path;
    };
    $scope.menu = [];
    $scope.menu.push({
        title: "TENTAMEN",
        prefix:"exam",
        links: [{link: '/exam/all', text: 'Visa alla tentor'}]
    });
    $scope.menu.push({
        title: "INFORMATION",
        prefix:"information",
        links: [{link: '/information/main', text: 'Visa all information'}]
    });
    $scope.menu.push({
        title: "CHAT",
        prefix:"chat",
        links: [{link: '/chat/main', text: 'Chat'}]
    });
    $scope.menu.push({
        title: "NOTIFIKATIONER",
        prefix:"notifications",
        links: [{link: '/notifications/main', text: 'Notifikationer'}]
    });
    $scope.tabClick=function(index){
        $scope.tabSelected=index;
    };
    $scope.activeTab=function(index){
        if ($scope.tabSelected != -1) return index==$scope.tabSelected;
        console.log($location.path().substr(0, $location.path().length));
        if($location.path().substr(0, $location.path().length).split("/")[1]===$scope.menu[index].prefix) {
            $scope.tabSelected = index;
            return true;
        }
        return false;
    };
    $scope.getActive = function (path) {
        return $location.path().substr(0, path.length) == path;
    };
}

