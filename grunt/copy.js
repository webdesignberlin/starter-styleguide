/**
 * + Task Config: copy
 * https://github.com/gruntjs/grunt-contrib-copy
 * =====================================================================
 */
module.exports = {

    jquery: {
        expand: true,
        src: '<%=globalConfig.bower%>/jquery/dist/jquery.min.js',
        dest:'<%=globalConfig.dist%>/js/vendor/jquery',
        flatten: true
    },
    fonts: {
        expand: true,
        src: '<%=globalConfig.app%>/fonts/*',
        dest:'<%=globalConfig.dist%>/fonts/',
        flatten: true
    },
    studium: {
        expand: true,
        cwd: '<%=globalConfig.app%>/studium/',
        src: '**',
        dest:'<%=globalConfig.dist%>/studium/',
        flatten: false
    },
    favicon: {
        expand: true,
        src: '<%=globalConfig.app%>/*.ico',
        dest:'<%=globalConfig.dist%>/',
        flatten: true
    },
    json: {
        expand: true,
        src: '<%=globalConfig.app%>/*.json',
        dest:'<%=globalConfig.dist%>/',
        flatten: true
    }

};
