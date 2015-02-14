(function() {

  'use strict';

  /**
   * Declare the application modules.
   */
  angular
    .module('api', [
      'api.routes',
      'api.authentication',
      'api.config',
    ]);
    .run(run)

  run.$inject['$http'];

  // Declare the application modules dependencies.
  angular
    .module('api.routes', ['ngRoute']);
    .module('api.config', []);

  /**
   * @name : run
   * @desc : Update xsrf $http headers to align with Django's defaults
   */
  function run($http) {
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';
    $http.defaults.xsrfCookieName = 'csrftoken';
  }
})();
