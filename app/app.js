'use strict';

// Declare app level module which depends on views, and core components
angular.module('Aryaman', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'config',
  'homeservice'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
