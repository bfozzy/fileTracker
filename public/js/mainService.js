angular.module("trackApp")
  .service("mainService", function($http){

    this.getTeam = function(){
      return $http.get("/team");
    };
    this.addTeamMember = function(name){
      return $http.post("/team/new", name);
    };
    this.deleteTeamMember = function(memberId){
      return $http.delete("/team/"+memberId+"/delete");
    };


  });
