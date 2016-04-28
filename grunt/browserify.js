/**
 * + Task Config: node-browserify
 * https://github.com/substack/node-browserify
 * =====================================================================
 *
 */

module.exports = {
    sg: {
        options: {
            browserifyOptions: {
                debug: true
            }
        },
        src: '<%=globalConfig.app%>/styleguide/js/styleguide.js',
        dest: '<%=globalConfig.dist%>/styleguide/js/styleguide.js'
    },
    dev: {
        options: {
            browserifyOptions: {
                debug: true
            }
        },
        src: '<%= globalConfig.app %>/js/index.js',
        dest: '<%= globalConfig.dist %>/js/main.js'
    },
    prod: {
        options: {
            browserifyOptions: {
                debug: false
            }
        },
        src: '<%= globalConfig.app %>/js/index.js',
        dest: '<%= globalConfig.dist %>/js/main.js'
    }
};
