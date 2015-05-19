angular
    .module('alesmith')
    .controller('ContactController', ContactController);

ContactController.$inject = ['$scope'];

/* @ngInject */
function ContactController($scope) {
    /* jshint validthis: true */
    var vm = this;
    vm.title = 'ContactController';

    ////////////////

}