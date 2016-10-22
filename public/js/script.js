// Code goes here
'use strict';
(function() {

 var routerApp = angular.module('myApp', ['ui.router', 'angularUtils.directives.dirPagination']);

 routerApp.config(function($stateProvider, $urlRouterProvider) {
     // $locationProvider.html5Mode(true);
     $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('list', {
          url: '/list',
          templateUrl: 'views/partials/list.html',
          controller: function($scope, $state, $http) {
            $http.get("/blobs/json")
            .then(function(response) {
              $scope.blobs = response.data;
            });
          }
        })

        .state('new', {
          url: '/new',
          templateUrl: 'views/partials/new.html',
         // controllerAs: 'vm',
          controller: function($scope, $state, $http) {
            //var vm = this;
            //var blob = $scope.blob;
            $scope.register = function () {
              alert($scope.blob);
              $http.post("/blobs", $scope.blob)
              .then(function(response) {
                $scope.blobs = response.data;
                $state.go('list');
              });
            }
          }
        })
      });
})();

