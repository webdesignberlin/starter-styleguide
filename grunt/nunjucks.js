/**
 * + Task Config: grunt-nunjucks-2-html
 * https://github.com/vitkarpov/grunt-nunjucks-2-html
 * =====================================================================
 *
 * @Description Grunt task for rendering nunjucks` templates to HTML
 */
module.exports = {

  sg: {
    options: {
      paths: '<%=globalConfig.app%>/styleguide/',
      data: {
        global: '<%=global %>' // import global.json from Gruntfile.js
      }
    },
    files: [
      {
        expand: true,
        cwd: "<%=globalConfig.app%>/styleguide/",
        src: "**/*.html",
        dest: "dist/styleguide/",
        ext: ".html"
      }
    ]
  },
  dev: {
    options: {
      paths: '<%=globalConfig.app%>/',
      data: {
        global: '<%=global %>' // import global.json from Gruntfile.js
      }
    },
    files: [
      {
        expand: true,
        cwd: '<%=globalConfig.app%>/',
        src: [
            '**/*.html',
            '!styleguide/**/*.html' // ignore styleguide folder
        ],
        dest: 'dist/',
        ext: '.html'
      }
    ]
  }


};
/* = Task Config: grunt-nunjucks-2-html */