'use strict';

/* Directives */

angular.module('kitApp.directives', []).
  directive('appVersion', ['version', function(version) {
	var ver = function(scope, elm, attrs) {
     // elm.text(version);
    };
	return ver;
  }]).

directive('item', function($timeout, $compile){
	/*var linker = function(scope, el, att){
		el.bind('click', function(event){
		//r elnew = $compile("<div item></div>")(scope);	
		//el.removeAttr("item");
		el.append(elnew);
		$timeout(function(){scope.$apply()});
		})
	}*/
	var itemObj = {
		restrict: 'AE',
		replace: true,
//		template: '<div style="background-color:green;width:30px;height:40px;"></div>'
		templateUrl: 'partials/div2.html',
	};
	return itemObj;
}).

directive('dynamic', function($templateCache){
	var dynObj = {
		restrict: 'E',
		replace: true,
		templateUrl: 'partials/dynamic.html'
	};	
	return dynObj;
}).
directive('helpFragment', function(helpService){
	var helpObj = {
		restrict: "A",
		scope: {helpFragment:"&",
			showHelp: "="},
		template: 
			"<div ng-show='showHelp' style='margin:10px;width:200px;height:20px;background-color:cyan;'>" +
"{{helpFragment({topic:testHelp})}}{{showHelp}}</div>"
	};
	return helpObj;

});
