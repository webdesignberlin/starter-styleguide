/**
 * + Task Config: grunt-contrib-watch
 * https://github.com/sindresorhus/grunt-sass
 * =====================================================================
 *
 */

module.exports = {
    sg: {
        options: {
            sourceMap: true,
            sourceMapContents: true,
            sourceMapEmbed: true
        },
        files: {
            '<%= globalConfig.dist %>/styleguide/styles/styleguide.css' : '<%= globalConfig.app %>/styleguide/styles/styleguide.scss'
        }
    },
    dev:{
        options: {
            sourceMap: true,
            sourceMapContents: true,
            sourceMapEmbed: true
        },
        files: {
            '<%= globalConfig.dist %>/styles/main.css' : '<%= globalConfig.app %>/styles/main.scss'
        }
    },
    prod:{
        options: {
            sourceMap: false
        },
        files: {
            '<%= globalConfig.dist %>/styles/main.css' : '<%= globalConfig.app %>/styles/main.scss'
        }
    }
};
