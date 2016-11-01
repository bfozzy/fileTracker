angular.module("trackApp", ["ui.router"])
.config(function($stateProvider, $urlRouterProvider){

$urlRouterProvider.otherwise("/");

$stateProvider
    .state("home", {
      template: "<team-directive></team-directive>",
      url: "/"
    });
  });
