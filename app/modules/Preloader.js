'use strict';

var AnimationController = require('../modules/AnimationController');

var Preloader = function() {

	this.animate = new AnimationController();

	var LoadImages = LoadImages || function(a, d, z) {
		a instanceof Array || (a = [a]);
		for (var e = a.length, f = 0, g = e; g--;) {
			var b = document.createElement("img");
			b.onload = function() {
				f++; 
				f >= e && isFunction(d) && d(z)
			};
			b.src = a[g]; 
		}
	}

	var isFunction = isFunction || function(functionToCheck) {
		var getType = {};
		return functionToCheck && getType.toString.call(functionToCheck) == '[object Function]';
	}

	// when images are loaded, do something
	LoadImages([
		'images/candh.jpg',
		'http://placekitten.com/g/200/250'
	], this.imagesAreLoaded() );

};

Preloader.prototype.imagesAreLoaded = function() {
		
		console.log("images are loaded");

		this.animate.start();

};

module.exports = Preloader;