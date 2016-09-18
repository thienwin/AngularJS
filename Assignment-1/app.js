(function(){
  'use strict';

  angular.module('LunchChecker', [])
  .controller('LunchCheckerController', function($scope){

    $scope.inputs = "";
    $scope.message = "";
    $scope.result = "";

    $scope.Calculate = function(){
        var inps = $scope.inputs;
        inps = inps.trim();
        if(inps == ""){
          $scope.message = "Please enter data first!";
          $scope.result = "error";
        }else{
          var inpsarr = inps.split(",");
          if(inpsarr.length <=3){
            $scope.message = "Enjoy!";
            $scope.result = "success";
          }else{
            $scope.message = "Too Much!";
            $scope.result = "success";
          }
        }
    };

  });

})();