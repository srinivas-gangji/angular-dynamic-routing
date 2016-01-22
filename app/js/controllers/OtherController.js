(function () {
'use strict';
  angular.module('DynamicRouting')
         .controller('OtherController', OtherController);

  OtherController.$inject = ['$scope'];

  function OtherController($scope) {
    /*jshint validthis: true */
    var vm = this;

    $scope.title = "Other Content";
  }

})();
