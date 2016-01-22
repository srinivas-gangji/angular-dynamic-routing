(function () {
'use strict';
  angular.module('DynamicRouting')
         .controller('CustomersController', CustomersController);

  CustomersController.$inject = ['$scope', '$routeParams', '$route'];

  function CustomersController($scope, $routeParams, $route) {
    /*jshint validthis: true */
    var vm = this;
    $scope.title = "Inline Customers";
    $scope.customData = $route.current.customdata;
  }

})();
