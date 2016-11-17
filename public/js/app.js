angular.module("trackApp", ["ui.router"])
.config(function($stateProvider, $urlRouterProvider){

$urlRouterProvider.otherwise("/");

$stateProvider
    .state("home", {
      templateUrl: "./templates/stateTemplates/home.html",
      url: "/"
    });
  });
