(function() {

  'use strict';

  /**
   * Declare the application modules.
   */
  angular
    .module('shopit_app', [
      'shopit_app.routes',
      'shopit_app.authentication',
      'shopit_app.config',
    ]);

  // Declare the application modules dependencies.
  angular
    .module('shopit_app.routes', ['ngRoute']);

  angular
    .module('shopit_app.config', []);

  angular
    .module('shopit_app')
    .run(run);
    
  run.$inject = ['$http'];

  /**
   * @name : run
   * @desc : Update xsrf $http headers to align with Django's defaults
   */
  function run($http) {
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';
    $http.defaults.xsrfCookieName = 'csrftoken';
  }
})();
