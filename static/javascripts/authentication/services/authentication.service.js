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
      getAuthenticatedAccount : getAuthenticatedAccount,
      isAuthenticated : isAuthenticated,
      login : login,
      logout : logout,
      register : register,
      setAuthenticatedAccount : setAuthenticatedAccount,
      unauthenticate : unauthenticate
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
      }).then(registerSuccessFn, registerErrorFn);

      /**
      * @name registerSuccessFn
      * @desc Log the new user in
      */
      function registerSuccessFn(data, status, headers, config) {
        Authentication.login(email, password);
      }

      /**
      * @name registerErrorFn
      * @desc Log "Epic Failure!" to the console
      */
      function registerErrorFn(data, status, headers, config) {
        console.error('Epic Failure!');
      }
    }

    /**
    * @name login
    * @desc Try to login with email `email` and password `password`
    * @param {string} email : The email entered by the user
    * @param {string} password : The password entered by the user
    * @returns {Promise}
    * @memberOf shopit_app.authentication.services.Authentication
    */
    function login(email, password) {
      return $http.post('/api/v1/auth/login/', {
        email : email,
        password : password
      }).then(loginSuccessFn, loginErrorFn);

      /**
      * @name loginSuccessFn
      * @desc Set the authenticated account and redirect to index
      */
      function loginSuccessFn(data, status, headers, config) {
        Authentication.setAuthenticatedAccount(data.data);
        window.location = '/';
      }

      /**
      * @name loginErrorFn
      * @desc Log "Epic failure!" to the console
      */
      function loginErrorFn(data, status, headers, config) {
        console.error('Epic failure!');
      }
    }

    /**
    * @name logout
    * @desc Try to log the user out
    * @returns {Promise}
    * @memberOf shopit_app.authentication.services.Authentication
    */
    function logout() {
      return $http.post('/api/v1/auth/logout/')
      then(logoutSuccessFn, logoutErrorFn);

      /**
      * @name logoutSuccessFn
      * @desc Unautheticate and redirect to index with page reload
      */
      function logoutSuccessFn(data, status, headers, config) {
        Authentication.unauthenticate();
        window.location = '/';
      }

      /**
      * @name logoutErrorFn
      * @desc Log "Epic Failure!" to the console
      */
      function logoutErrorFn(data, status, headers, config) {
        console.error('Epic Failure!');
      }
    }
    /**
    * @name getAuthenticatedAccount
    * @desc Return the currently authenticated account
    * @returns {object|undefined} Account if authenticated, else 'undefined'
    * @memberOf shopit_app.authentication.services.Authentication
    */
    function getAuthenticatedAccount() {
      if (!$cookies.authenticatedAccount){
        return;
      }
      return JSON.parse($cookies.authenticatedAccount);
    }

    /**
    * @name isAuthenticated
    * @desc Check if the current user is authenticated
    * @returns {boolean} True is user is authenticated, else false.
    * @memberOf shopit_app.authentication.services.Authentication
    */
    function isAuthenticated() {
      return !!$cookies.authenticatedAccount;
    }

    /**
    * @name setAuthenticatedAccount
    * @desc Stringify the account object and store it in a cookie
    * @param {object} user : The account to be stored.
    * @returns {undefined}
    * @memberOf shopit_app.authentication.services.Authentication
    */
    function setAuthenticatedAccount(account) {
      $cookies.authenticatedAccount = JSON.stringify(account);
    }

    /**
    * @name unauthenticate
    * @desc Delete the cookie where the user object is stored
    * @returns {undefined}
    * @memberOf shopit_app.authentication.services.Authentication
    */
    function unauthenticate() {
      delete $cookies.authenticatedAccount;
    }
  }
})();
