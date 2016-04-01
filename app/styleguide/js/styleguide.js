/**
 * Created by mgerstmann on 30.03.2016.
 */

document.addEventListener('DOMContentLoaded', function() {

  //var renderSg = require('./renderStyleguide');
  var generateCodeSnippets = require('./codeSnippets');
  var initScrollSpy = require('./scrollSpy');
  var popeye = require('./popeye');
  var popeyeOptions = {
    headlineClass: 'sg__headline',
    navigationClass: 'sg-navigation__list',
    anchorText: '#'
  };


  //renderSg();
  generateCodeSnippets();
  initScrollSpy('.sg__headline', '.sg-content');
  popeye(popeyeOptions);

});
