/**
 * + Task Config: grunt-styleguide-colors
 * https://github.com/webdesignberlin/grunt-styleguide-colors
 * =====================================================================
 *
 */

module.exports = {
    sg: {
        options: {
            headline: 'Color Definitions',
            template: 'app/styleguide/markup/modules/colors--original.html'
        },
        files: {
            '<%= globalConfig.app %>/styleguide/markup/modules/colors.html' : '<%= globalConfig.app %>/styleguide/styles/styleguide.scss'
        }
    }
};
