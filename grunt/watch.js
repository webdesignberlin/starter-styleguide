/**
 * + Task Config: grunt-contrib-watch
 * https://github.com/gruntjs/grunt-contrib-watch
 * =====================================================================
 *
 */

module.exports = {
    sg: {
        files: ['<%= globalConfig.app %>/styleguide/**/*.*'],
        tasks: ['build-sg']
    }
};
