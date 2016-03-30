/**
 * + Task Config: jshint
 * https://github.com/gruntjs/grunt-contrib-jshint
 * =====================================================================
 */
module.exports = {
	options: {
		jshintrc: '.jshintrc',
		force: true,
				//reporter: 'jslint'
				reporter: require('jshint-stylish')
			},
	src: [
		'Gruntfile.js',
		'<%= globalConfig.app %>/js/*.js',
		'<%= globalConfig.app %>/styleguide/js/*.js'
	]
}
