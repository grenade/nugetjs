'use strict';

/**
 * @ngdoc function
 * @name nugetjsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nugetjsApp
 */
angular.module('nugetjsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
