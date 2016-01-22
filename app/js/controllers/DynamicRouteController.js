(function() {
  'use strict';
  angular.module('DynamicRouting')
    .controller('DynamicRouteController', DynamicRouteController);

  DynamicRouteController.$inject = ['$scope', '$rootScope', '$route', '$routeParams', '$location'];

  function DynamicRouteController($scope, $rootScope, $route, $routeParams, $location) {
    /*jshint validthis: true */
    var vm = this;

    var vanityUrlsMap = {
      "blog-dynamic": "blog/12345",
      "learning-dynamic": "learning",
      "other-dynamic": "other",
      "customers-dynamic": "customers"
    };

    $scope.title = "Hello Dynamic";
    $scope.content = $routeParams.content;
    $scope.targetUrl = vanityUrlsMap[$scope.content];

    if ($routeParams.content) {
      // change the path
      $location.path($scope.targetUrl);
      $location.replace();
    }

  }

})();
