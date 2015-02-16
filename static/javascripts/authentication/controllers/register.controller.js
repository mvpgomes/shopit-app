/**
 * Register controller
 * @namespace shopit_app.authentication.controllers
 */
(function() {
  
  'use strict';

  angular
    .module('shopit_app.authentication.controllers')
    .controller('RegisterController', RegisterController);

  RegisterController.$inject = ['$location', '$scope', 'Authentication'];

  /**
   * @namespace RegisterController
   */
  function RegisterController($location, $scope, Authentication) {
    var rc = this;

    rc.register = register;

    /**
     * @name register
     * @desc Register a new user
     * @memberof shopit_app.authentication.controllers.RegisterController
     */
    function register(){
      Authentication.register(rc.email, rc.password, rc.username);
    }
  }
})();
