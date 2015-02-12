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

  // Declare the application modules dependencies.
  angular
    .module('api.routes', ['ngRoute']);
    .module('api.config', []);
})();
