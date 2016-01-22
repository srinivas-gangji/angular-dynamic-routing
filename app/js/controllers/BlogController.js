(function () {
'use strict';
  angular.module('DynamicRouting')
         .controller('BlogController', BlogController);

  BlogController.$inject = ['$scope', '$routeParams'];

  function BlogController($scope, $routeParams) {
    /*jshint validthis: true */
    var vm = this;
    $scope.title = "Blog post about learning";
    $scope.blogId = $routeParams.blogId;
  }

})();
