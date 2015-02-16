(function() {

  'use strict';

  angular
    .module('shopit_app.routes')
    .config(config)

  config.$inject = ['$routeProvider'];

  /**
   * @name : config
   * @description : define the valid application routes
   */
  function config($routeProvider) {
    $routeProvider
      .when('/register', {
        controller: 'RegisterController',
        controllerAs: 'rc',
        templateUrl: '/static/templates/authentication/register.html'
      }).otherwise('/')
      .when('/login', {
        controller: 'LoginController',
        controllerAs: 'lc',
        templateUrl: '/static/templates/authentication/login.html'
      });
  }
})();
