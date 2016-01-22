(function () {
'use strict';
  angular.module('DynamicRouting')
         .controller('MainController', MainController);

  MainController.$inject = ['$scope'];

  function MainController($scope) {
    /*jshint validthis: true */
    var vm = this;
    $scope.title = "Hello to Learning!";
  }

})();
