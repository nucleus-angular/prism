angular.module('app', [
  'app.core',
  'app.home',
  'nag.prism'
])
.config([
  '$locationProvider',
  '$urlRouterProvider',
  function($locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/home');
  }
])
.run([
  '$state',
  '$rootScope',
  function($state, $rootScope) {
  }
]);
