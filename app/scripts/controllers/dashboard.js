'use strict';

/**
 * @ngdoc function
 * @name loginMoodleApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the loginMoodleApp
 */
angular.module('loginMoodleApp')
  .controller('DashboardCtrl', function ($scope, WS, $sce) {

  	$scope.loginurl = $sce.trustAsResourceUrl(WS.LOGIN);

  	$scope.usernameMoodle = $.jStorage.get('username');
  	$scope.passwordMoodle = $.jStorage.get('password');

  	//console.log($scope.loginurl);
  	//console.log($scope.usernameMoodle+' '+$scope.passwordMoodle);


    
  });
