(function() {
  'use strict';

  angular
    .module('shopit_app.authentication.controllers')
    .controller('RegisterController', RegisterController);

  RegisterController.$inject = ['$location', '$scope', 'Authentication'];

  function RegisterController($location, $scope, Authentication) {
    var ac = this;

    ac.register = register;

    function register(){
      Authentication.register(ac.email, ac.password, ac.username);
    }
  }
})();
