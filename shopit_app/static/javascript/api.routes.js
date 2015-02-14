(function () {
  'use strict'

  angular
    .module('api.routes')
    .config(config)

  config.$inject = ['$routeProvider'];

  /**
   * @name : config
   * @description : define the valid application routes
   */
  function config($routeProvider) {
    $routeProvider.when('register', {
      controller: 'RegisterController',
      controllerAs: 'rc',
      templateUrl: 'static/templates/authentication/register.html'
    }).otherwise('/');
  }
})();
