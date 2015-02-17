/**
* NavbarController
* @namespace shopit_app.layout.controllers
*/
(function () {
  'use strict';

  angular
  .module('shopit_app.layout.controllers')
  .controller('NavbarController', NavbarController);

  NavbarController.$inject = ['$scope', 'Authentication'];

  /**
  * @namespace NavbarController
  */
  function NavbarController($scope, Authentication) {
    var nc = this;

    nc.logout = logout;

    /**
    * @name logout
    * @desc Log the user out
    * @memberOf shopit_app.layout.controllers.NavbarController
    */
    function logout(){
      Authentication.logout();
    }
  }
})();
