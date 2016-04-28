/**
 * + Task Config: grunt-contrib-watch
 * https://github.com/gruntjs/grunt-contrib-watch
 * =====================================================================
 *
 */

module.exports = {
    // overall options
    options: {
        livereload: true,
        event: [
            'added',
            'deleted',
            'changed'
        ]
    },
    sg: {
        files: ['<%= globalConfig.app %>/styleguide/**/*.*'],
        tasks: ['build-sg']
    },
    styles: {
        files: ['<%= globalConfig.app %>/styles/**/*'],
        tasks: ['sass:dev', 'postcss:dev']
    },
    js: {
        files: ['<%= globalConfig.app %>/js/**/*'],
        tasks: ['jshint', 'browserify:dev']
    },
    html: {
        files: [],
        tasks: []
    },
};
