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
                debug: false
            }
        },
        files: {
            '<%=globalConfig.dist%>/styleguide/js/styleguide.js' : '<%=globalConfig.app%>/styleguide/js/styleguide.js'
        }
    }
};
