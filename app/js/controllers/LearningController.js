(function () {
'use strict';
  angular.module('DynamicRouting')
         .controller('LearningController', LearningController);

  LearningController.$inject = ['$scope'];

  function LearningController($scope) {
    /*jshint validthis: true */
    var vm = this;
    
    $scope.title = "Various learning activities";
  }

})();
