'use strict';
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;
var through = require('through2');
var fs = require('fs');
var path = require('path');
var mime = require('mime');

// consts
const PLUGIN_NAME = 'gulp-Woff2LessFont64';

module.exports = function() {

	// create a stream through which each file will pass
	return through.obj(function(file, enc, callback) {

		if (file.isNull()) {
			this.push(file);
			// do nothing if no contents
			return callback();
		}

		if (file.isStream()) {
			this.emit('error', new PluginError(PLUGIN_NAME, 'Streaming not supported'));
			return callback();
		}

		if (file.isBuffer()) {
			var file64 = new Buffer(file.contents).toString('base64');
			var mtype =  mime.lookup(file.path);
			var fileext = path.extname(file.path); 
			var filename = path.basename(file.path, fileext);
			var lesswrapper = '@font-face {font-family: '+filename+'; src: url(data:'+mtype+';charset=utf-8;base64,'+file64+');}';
			var output = lesswrapper;
			
			file.contents = new Buffer(output);
			file.path = gutil.replaceExtension(file.path, '.less');
			return callback(null, file);
		}
	});
}; 