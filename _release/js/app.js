'use strict';
var App;

App = angular.module('app', ['ngResource', 'ui.router']).run(function() {});

App.config([
  '$stateProvider', '$urlRouterProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider) {
    var headers;
    headers = $httpProvider.defaults.headers;
    headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    $httpProvider.defaults.transformRequest.unshift(function(data) {
      if (angular.isObject(data)) {
        return angular.toQueryString(data);
      } else {
        return data;
      }
    });
    $stateProvider.state('main', {
      url: "/main",
      templateUrl: 'templates/main/main.html'
    }).state('main.list', {
      url: "/list",
      views: {
        firstV: {
          templateUrl: 'templates/home/home.html'
        }
      }
    }).state('home', {
      url: "/home",
      templateUrl: 'templates/home/home.html'
    });
    return $urlRouterProvider.otherwise("/main");
  }
]);
;
//# sourceMappingURL=app.js.map