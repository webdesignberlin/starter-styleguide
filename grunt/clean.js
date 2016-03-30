/**
 * + Task Config: copy
 * https://github.com/gruntjs/grunt-contrib-clean
 * =====================================================================
 */
module.exports = {
    build: {
        src:'<%=globalConfig.dist%>/**/*'
    },
    release: {
        src: '<%= globalConfig.root %>/jdb_release.tar.gz'
    }
};
