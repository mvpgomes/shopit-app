!function(){"use strict";function o(o){o.defaults.xsrfHeaderName="X-CSRFToken",o.defaults.xsrfCookieName="csrftoken"}angular.module("shopit_app",["shopit_app.routes","shopit_app.authentication","shopit_app.config"]),angular.module("shopit_app.routes",["ngRoute"]),angular.module("shopit_app.config",[]),angular.module("shopit_app").run(o),o.$inject=["$http"]}();