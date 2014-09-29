var app = angular.module('nbaRoutes');

app.service('teamService', function($http, $q){

this.addNewGame = function(gameObject){
	var url = "https://api.parse.com/1/classes/" + gameObj.homeTeam;
	if(parseInt(gameObj.homeTeamScore) > parseInt(gameObj.opponentScore)){
		gameObj.won = true;
	} else {
		gameObj.won = false;
	};

	return $http({
		method: 'POST',
		data: gameObj,
		url: url
	})
};

this.getTeamData = function(team){
	var deferred = $q.defer();
	var url = "https://api.parse.com/1/classes/" + team;
	$http({
		method: 'GET',
		url: url
	}).then(function(data){
		var results = data.data.results;
		var wins = 0;
		var losses = 0;
		for(var i = 0; i < data.length; i++){
			if(data[i].won = true){
				wins++;
			}
			else {
				losses++;
			};
		}
		results.wins = wins;
		results.losses = losses;
		deferred.resolve(results);
	})
	return deferred.promise;
};

});