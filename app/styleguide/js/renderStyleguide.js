/**
 * Created by mgerstmann on 30.03.2016.
 */

module.exports = function(){

  var renderSg;
  var env = new nunjucks.Environment();
  //var res = env.render('./app/styleguide/markup/base/figure.html', {renderSg: renderSg});
  var res = env.render('./app/styleguide/markup/**/*.html', {renderSg: renderSg});

  var elements = document.querySelectorAll('.js-dynamic-content');
  Array.prototype.forEach.call(elements, function(el, i){
    el.innerHTML = res;
  });

};
