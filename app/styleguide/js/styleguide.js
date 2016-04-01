/**
 * Created by mgerstmann on 30.03.2016.
 */

document.addEventListener('DOMContentLoaded', function() {

  //var renderSg = require('./renderStyleguide');
  var generateCodeSnippets = require('./codeSnippets');
  var initScrollSpy = require('./scrollSpy');
  //renderSg();
  generateCodeSnippets();
  initScrollSpy('.sg__headline', '.sg-content');

});
