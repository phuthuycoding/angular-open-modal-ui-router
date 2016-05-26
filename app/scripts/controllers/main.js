'use strict';

angular.module('queenBApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/main.html',
                controller: 'HomeController'
            });
    }).controller('HomeController', function($scope) {
        $scope.Username = 'Jancy';
    }).controller('ContactController', function($scope) {
        $scope.title = 'Jancy';
    });

angular.module('queenBApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('contact', {
                url: '/contact',
                onEnter: function($stateParams, $state, $uibModal, $resource) {
                    $uibModal.open({
                        templateUrl: "views/contact.html",
                        resolve: {
                            //item: function() { new Item(123).get(); }
                        },
                        controller: ['$scope', function($scope) {
                            $scope.dismiss = function() {
                                $scope.$dismiss();
                            };

                            $scope.save = function() {
                                item.update().then(function() {
                                    $scope.$close(true);
                                });
                            };
                        }]
                    }).result.finally(function() {
                        $state.go('^');
                    });
                }
            });
    });
