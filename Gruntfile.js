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


		/**
		 * + Global ssh variables for release
		 * Usage: <%= sshconfig.var %>
		 * =====================================================================
		 */
		var sshconfig = {
			// local json file with login data for live
			'live-login': grunt.file.readJSON('./release_data/live_host.json'),
			// folder name of the webapp for live
			'liveappfolder': '',
			// root path of the project for live
			'livehomepath': '/var/www/',
			// path to the release directory for live
			'liveapppath': '<%=sshconfig.livehomepath %><%=sshconfig.liveappfolder %>',
			// Backup Archive Name
			'backupName': 'starter-styleguide.tar'
		};

		var liveoptions = {
			config: 'live-login',
			// local stored ssh key for login on server
			privateKey: grunt.file.read('./release_data/id_rsa')
		};

		grunt.file.defaultEncoding = 'utf8';
		grunt.file.preserveBOM = false;

		//grunt.file.write(filepath, contents [, options])
	  
	  require('load-grunt-config')(grunt, {
	        // ...
	        jitGrunt: {
	            // here you can pass options to jit-grunt (or just jitGrunt: true)
	        	jitGrunt: true,
						staticMappings: {
							'nunjucks': 'grunt-nunjucks-2-html',
							'nunjucksDynamic': 'grunt-nunjucks',
							sshconfig    : sshconfig,
							liveoptions  : liveoptions,
							sshexec: 'grunt-ssh',
							sftp: 'grunt-ssh'
						}
	        },
	  
	  		data: {
		      pkg          : grunt.file.readJSON('package.json'),
		      globalConfig : globalConfig,
					global       : grunt.file.readJSON(globalConfig.app + '/global.json'),
					sshconfig    : sshconfig,
					liveoptions  : liveoptions
	  		}
	    });

};
