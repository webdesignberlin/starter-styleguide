/**
 * + Task Config: copy
 * https://github.com/gruntjs/grunt-contrib-copy
 * =====================================================================
 */
module.exports = {

    projectFiles: {
        expand: true,
        src: ['<%=globalConfig.app%>/*.ico', '<%=globalConfig.app%>/robots.txt', '<%=globalConfig.app%>/humans.txt'],
        dest:'<%=globalConfig.dist%>/',
        flatten: true
    }

};
