/**
 * + Task Config: Browsersync
 * http://www.browsersync.io/docs/grunt/
 * =====================================================================
 *
 */

module.exports = {
    // overall options
    options: {
        ghostMode: {
            clicks:     true,
            location:   true,
            forms:      true,
            scroll:     true
        }
    },

    // main assets
    main: {
        bsFiles: {
            src : [
                   '<%= globalConfig.dist %>/styles/main.css',
                   '<%= globalConfig.dist %>/js/**/*.js',
                   '<%= globalConfig.dist %>/**/*.html'
            ]
        },
        options: {
            server: {
                baseDir: "./dist"
            },
            watchTask: true,
            startPath: "index.html"
        }
    }
        
};