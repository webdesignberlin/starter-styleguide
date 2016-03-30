/**
 * + Task Config: grunt-contrib-htmlmin
 * https://github.com/gruntjs/grunt-contrib-htmlmin
 * =====================================================================
 *
 */

module.exports = {
    sg: {
        options: {
            removeComments: false,
            collapseWhitespace: true
        },
        files: [{
            expand: true,
            cwd: '<%= globalConfig.dist %>/styleguide/',
            src: '**/*.html',
            dest: '<%= globalConfig.dist %>/styleguide/'
        }]
    }
};
