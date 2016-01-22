(function() {
  'use strict';

  angular.module('DynamicRouting', ['ngRoute'])

  .config([
    '$locationProvider',
    '$routeProvider',
    function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
      // routes
      $routeProvider
        .when("/", {
          templateUrl: "./templates/landing-view.html",
          controller: "MainController"
        })
        .when("/customers", {
          templateUrl: "customers.html",
          controller: "CustomersController",
          customdata : 'Some custom data'
        })
        .when("/blog/:blogId", {
          templateUrl: "./templates/blog-post.html",
          controller: "BlogController"
        })
        .when("/learning", {
          templateUrl: "./templates/learning-activities.html",
          controller: "LearningController"
        })
        .when("/other", {
          templateUrl: "./templates/other-content.html",
          controller: "OtherController"
        })
        .when("/marketing/:content", {
          template: "",
          controller: "DynamicRouteController"
        })
        .otherwise({
          redirectTo: '/'
        });

        // configure html5 to get links working on jsfiddle
        $locationProvider.html5Mode(true);
    }
  ]);

}());
