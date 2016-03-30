/**
 * + Task Config: uglify
 * https://github.com/gruntjs/grunt-contrib-uglify
 * =====================================================================
 */

module.exports = {
	sg: {
		files: {
			'<%= globalConfig.dist %>/styleguide/js/styleguide.js': ['<%= globalConfig.dist %>/styleguide/js/styleguide.js']
		}
	}
};
