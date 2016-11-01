angular.module("trackApp")
  .directive("teamDirective", function(){
    return {
      templateUrl: "./templates/teamDirective.html",

      restrict: "AE",
      controller: function($scope, mainService){
          mainService.getTeam().then(function(res){
          $scope.team = res.data;
        //   mainService.getFiles().then(function(res){
        //   $scope.files = res.data;
        // });
        });



        $scope.addTeamMember =

        function(name){
          var memberName = {
            name: name
          };
          mainService.addTeamMember(memberName).then(function(res){
            if (res.status === 200){
              alert("success!");
            }
            else alert("oops. something went wrong :(");
          });
        };

        $scope.deleteTeamMember = function(memberId){
          console.log(memberId);
          mainService.deleteTeamMember(memberId).then(function(res){
            if (res.status === 200){
              alert("may he/she rest in peace");
            }
          });
        };



      } //ends controller
    }; //ends directive
  });
