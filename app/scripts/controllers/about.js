'use strict';

/**
 * @ngdoc function
 * @name nugetjsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the nugetjsApp
 */
angular.module('nugetjsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
