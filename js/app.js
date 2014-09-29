var app = angular.module('nbaRoutes', ['ngRoute']);

app.config(function($routeProvider, $httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');

  //router here
  $routeProvider.when('/', {
  	templateURL: 'js/home/homeTmpl.html',
  	controller: 'homeCtrl'
  }).when('/teams/:team', {
  	templateURL: 'js/teams/teamTmpl.html',
  	controller: 'teamCtrl',
  	resolve: {
  		teamData: function($route, teamService){
  			return teamService.getTeamData($route.current.params.team);
  		}
  	}
  }).otherwise({
  	redirectTo: '/'
  })


});