/**
 * Created by Catio on 2015-05-05.
 */

angular.module("alesmith", ['ngRoute','ngSails']);
angular.module("alesmith").config(['$sailsProvider', function ($sailsProvider) {
    $sailsProvider.url = 'http://localhost:3000/';
}]);