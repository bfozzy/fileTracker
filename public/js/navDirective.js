angular.module("trackApp")
  .directive("navDirective", function(){

  return {
    templateUrl: "./templates/directiveTemplates/nav.html",
    restrict: "AE",
    controller: function($scope, mainService){
      $scope.addTeamMember = function(name){
        var memberName = {
          name: name
        };
        mainService.addTeamMember(memberName).then(function(res){
          if (res.status === 200){
            alert("success!");
            mainService.getTeam().then(function(res){
            $scope.team = res.data;
          //   mainService.getFiles().then(function(res){
          //   $scope.files = res.data;
          // });
          });
          }
          else alert("oops. something went wrong :(");
        });
      };

    } // closes controller
  };//closes return statement
}); // closes directive function
