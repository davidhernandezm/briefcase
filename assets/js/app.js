var  app = angular.module('briefcase',[]);
app.$inject = ['$scope'];
app.controller('mainController', ['$scope', function($scope) {
  $scope.greeting = 'Hi!';
}]);
