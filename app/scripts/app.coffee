'use strict'

App = angular.module('app', ['ngResource', 'ui.router'
]).run () ->

App.config [
    '$stateProvider'
    '$urlRouterProvider'
    '$httpProvider'
    ($stateProvider, $urlRouterProvider, $httpProvider) ->

      headers  = $httpProvider.defaults.headers

      headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'

      $httpProvider.defaults.transformRequest.unshift (data) ->
        if angular.isObject(data) then angular.toQueryString(data) else data


      $stateProvider
      .state('main', {
        url: "/main"
        templateUrl: 'templates/main/main.html'
      })

      .state('main.list', {
          url: "/list"
          views:
            firstV: templateUrl: 'templates/home/home.html'
      })

      .state('home', {
        url: "/home"
        templateUrl: 'templates/home/home.html'
      })


      $urlRouterProvider.otherwise "/main"
]

