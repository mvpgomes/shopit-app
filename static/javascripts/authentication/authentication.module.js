(function () {

  'use strict';

  // Declare the application modules and submodules.
  angular
    .module('shopit_app.authentication', [
      'shopit_app.authentication.services',
      'shopit_app.authentication.controllers'
    ]);

  // Declare controllers module dependencies.
  angular
    .module('shopit_app.authentication.controllers', []);

  // Declare services module dependencies.
  angular
    .module('shopit_app.authentication.services', ['ngCookies']);
})();
