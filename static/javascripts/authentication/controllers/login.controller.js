/**
* LoginController
* @namespace shopit_app.authentication.controllers
*/
(function () {
  'use strict';

  angular
  .module('shopit_app.authentication.controllers')
  .controller('LoginController', LoginController);

  LoginController.$inject = ['$location', '$scope', 'Authentication'];

  /**
  * @name LoginController
  */
  function LoginController($location, $scope, Authentication) {
    var lc = this;

    lc.login = login;

    activate();

    /**
    * @name activate
    * @desc Actions to be performed when this controller is instantiated
    * @memberOf shopit_app.authentication.controllers.LoginController
    */
    function activate() {
      // If user is authenticated, they should not be here.
      if (Authentication.isAuthenticated()) {
        $location.url('/');
      }
    }

    /**
    * @name login
    * @desc Log the user in
    * @memberOf shopit_app.authentication.controllers.LoginController
    */
    function login() {
      Authentication.login(lc.email, lc.password);
    }
  }
})();
