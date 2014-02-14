'use strict';


/* Controllers */

angular.module('kitApp.controllers', []).
  controller('kitAppCtrl', function($scope, helpService) {
		var objectIDs=0;

		function Item(){
			this.id = objectIDs+1;
			objectIDs = this.id;
		};
		
		Item.prototype = Object.create(Object.prototype);

		function Container(name, capacity, content){
			Item.call(this);
			this.name = name;
			this.capacity = capacity;
			this.content = content;
			this.items = [];
			this.setItems = function(items){
				this.items = items;
			};
		};

		function Gear(name, weight){
			Item.call(this);
			this.name = name;
			this.weight = weight;
		};

		Container.prototype = Object.create(Item.prototype);
		Gear.prototype = Object.create(Item.prototype);


	var store =[];
	var contnames = ["backpack","holster","pants"];
	var gearnames = ["grenade","claynmore","pistol", "flare", "rifle"];

	for (var x=0; x<contnames.length; x++){
		var cont = new Container(contnames[x],20+objectIDs, objectIDs+10);
		var gears = [];
		for (var y = 0; y<gearnames.length; y++){
			var gear = new Gear(gearnames[y],objectIDs);
			gears.push(gear);
		}
		cont.setItems(gears);
		store.push(cont);
	}
	console.log(helpService.getHelp('test'));	
	$scope.store = store;

	$scope.getHelp = function(topic){
		return helpService.getHelp(topic);
	};
  }).
  controller('testCtrl', function($scope){
	
});
