/**
 * Authentication Service
 * @namespace shopit_app.authentication.services
 */
(function () {
  'use strict';

  angular
    .module('shopit_app.authentication.services')
    .factory('Authentication', Authentication);

  Authentication.$inject = ['$cookies', '$http'];

  /**
   * @name Authentication
   * @returns {Factory}
   */
  function Authentication($cookies, $http) {

    /**
     * @name Authentication
     * @desc The factory to be returned
     */
    var Authentication = {
      register : register
    };

    return Authentication;

    //////////////////////

      /**
       * @name register
       * @desc Try to register a new user
       * @param {string} username : The username entered by the user
       * @param {string} password : The password entered by the user
       * @param {string} email : The email entered by the user
       * @returns {Promise}
       * @memberOf shopit_app.authentication.services.Authentication
       */
    function register(email, password, username) {
      return $http.post('/api/v1/accounts/', {
        username : username,
        email : email,
        password : password
      });
    }
  }
})();
