'use strict';

angular.module('justingee.Goog10')

  .controller('MainCtrl', function($scope, $location, version) {

    $scope.$path = $location.path.bind($location);
    $scope.version = version;

  });

  var myMapModule = angular.module('justingee.Goog10',['google-maps']);
    function ExampleController ($scope){
      centerProperty:{
        latitude:  45,
        longitude:  -73;
    };
