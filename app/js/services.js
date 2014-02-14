'use strict';

/* Services */
var HELP = {
	Chapter : 1,
	Entry: {test: "Base Entry", grenade: "grenade help"},
	Fragment: "Test Fragment"
};

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('kitApp.services', []).
  value('version', '0.1').
	service('helpService', function(){
		this.HELP = HELP;
		this.getHelp = function(topic){
			return this.HELP.Entry[topic];
		}

	});
