app.controller('CarItemsCtrl', function($scope, $state) {
	$scope.goToMap = function(mapType){
		$state.go('map', { mapType: "cars" });
	};
});