/**
 * + Task Config: uglify
 * https://github.com/gruntjs/grunt-contrib-uglify
 * =====================================================================
 */

module.exports = {
	sg: {
		options: {
			sourceMap: true,
			sourceMapIncludeSources: true
		},
		files: {
			'<%= globalConfig.dist %>/styleguide/js/styleguide.js': ['<%= globalConfig.dist %>/styleguide/js/styleguide.js']
		}
	}
};
