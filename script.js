var app = angular.module('bridge', ['ngMaterial']);
app.controller('main', function($scope) {
	var grid = document.getElementById('grid');
	grid.addEventListener('click', function(event) {
		if(event.target.classList.contains("md-button"))  {
			event.target.classList.toggle('raised');
		} else if (event.target.tagName == 'IMG') {
			event.target.parentNode.classList.toggle('raised');
		}
 	}, false);
});
