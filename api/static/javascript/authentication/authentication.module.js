(function () {

  'use strict';

  // Declare the application modules and submodules.
  angular
    .module('api.authentication', [
      'api.authentication.services',
      'api.authentication.controllers',
    ]);

  // Declare controllers module dependencies.
  angular
    .module('api.authentication.controllers', []);

  // Declare services module dependencies.
  angular
    .module('api.authentication.services', ['ngCookies']);
})();
