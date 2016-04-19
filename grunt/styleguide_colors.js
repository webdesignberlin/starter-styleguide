/**
 * + Task Config: grunt-styleguide-colors
 * https://github.com/webdesignberlin/grunt-styleguide-colors
 * =====================================================================
 *
 */

module.exports = {
    sg: {
        options: {},
        files: {
            '<%= globalConfig.app %>/styleguide/markup/modules/colors.html' : '<%= globalConfig.app %>/styleguide/styles/styleguide.scss'
        }
    }
};
