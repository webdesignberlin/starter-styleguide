module.exports = {
     dynamic: {
      files: [{
        expand: true,
        cwd: '<%=globalConfig.app%>/',
        src: ['img/**/*.{png,jpg,svg}'],
        dest: '<%=globalConfig.dist%>/',
        flatten: false
      }]
    }
};
