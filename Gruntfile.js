'use strict';

module.exports = function (grunt){

	  /**
	   * + Global Project Vars
	   * Usage: <%= globalConfig.var %>
	   * =====================================================================
	   */
	  var globalConfig       = {};
	  globalConfig.root      = '.';
	  globalConfig.report    = globalConfig.root   + '/report';
	  globalConfig.bower     = globalConfig.root   + '/bower_components';
	  globalConfig.app       = globalConfig.root + '/app';
	  globalConfig.dist      = globalConfig.root + '/dist';
	  globalConfig.temp      = globalConfig.root + '/temp';
	  /* = Global Project Vars */


		grunt.file.defaultEncoding = 'utf8';
		grunt.file.preserveBOM = false;
	  
	  require('load-grunt-config')(grunt, {
	        // ...
	        jitGrunt: {
	            // here you can pass options to jit-grunt (or just jitGrunt: true)
	        	jitGrunt: true,
						staticMappings: {
							'nunjucks': 'grunt-nunjucks-2-html',
							'nunjucksDynamic': 'grunt-nunjucks'
						}
	        },
	  
	  		data: {
		      pkg          : grunt.file.readJSON('package.json'),
		      globalConfig : globalConfig,
					global       : grunt.file.readJSON(globalConfig.app + '/global.json')
	  		}
	  });

};
