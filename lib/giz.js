//
//        __
//    __ /\_\  ____
//  /'_ `\/\ \/\_ ,`\
// /\ \L\ \ \ \/_/  /_
// \ \____ \ \_\/\____\
//  \/___L\ \/_/\/____/
//    /\____/
//    \_/__/
//

var util = require('util'),
		styles = require('./styles'),
		keys = require('mout/object/keys');
		styleNames = keys(styles),
		STYLE_ENTRY = '\033[%sm',
		RESET_ANSI = 0;

// Installs unicorn's features.
exports.install = function() {
	if(isInstalled) return;

	isInstalled = true;

	// Extending `String` class and adding the style names as methods.
	styleNames.forEach(function(style) {
		String.prototype[style] = function(bg) {
			return format.call(this, style, bg);
		}
	});
}

/**
 * Add selected style to the string, already taking care of reseting it at the end.
 * @param  {String} style Style name.
 * @param  {Boolean} bg Is this a background value?
 * @return {String} Formatted string.
 */
function format(style, bg) {
	// Add style.
	return util.format(STYLE_ENTRY, getANSICode(style, bg))
	// Appends the original string.
	.concat(this.toString())
	// Reset style value.
	.concat(util.format(STYLE_ENTRY, RESET_ANSI));
}

/**
 * Returns the ANSI code from the given style name.
 * @param  {String} style Style name.
 * @param  {Boolean} bg Is this a background value?
 * @return {Number} The ANSI code.
 */
function getANSICode(style, bg) {
	var ansi = styles[style];

	if(Object.prototype.toString.call(ansi) === '[object Array]') {
		ansi = ansi[bg ? 1 : 0];
	}

	return ansi;
}

/**
 * Just for the LOL.
 * @return {String} Unicornfied string.
 */
String.prototype.unicorn = function() {
	var log = '',
		style;

	// Looping through all characters.
	this.split('').forEach(function(char) {
		// Random style.
		style = choice(styleNames);
		// Appending log message.
		log += format.call(char, style, Math.round(Math.random() * 1));
	});

	return log;
}
