/**
 * + Task Config: grunt-nunjucks
 * https://github.com/jlongster/grunt-nunjucks
 * =====================================================================
 *
 * @Description Grunt task for precompiling nunjucks templates
 */
module.exports = {

  sg: {
    src: '<%=globalConfig.app%>/styleguide/markup/**/*.html',
    dest: '<%=globalConfig.dist%>/styleguide/js/templates-styleguide.js'
  }

};
/* = Task Config: grunt-nunjucks */


