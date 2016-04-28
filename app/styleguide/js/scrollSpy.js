module.exports = function(spyElement, spyWrapper){

  function updatePosition(){
    var spyElems = document.querySelectorAll(spyElement);

    spyElems.forEach(function(elem){

      var elTopOffset = elem.offsetTop - (elem.offsetHeight / 3);
      var elLowOffset = elem.offsetTop + elem.offsetHeight;

      if(spyWrapper.scrollTop >= elTopOffset && spyWrapper.scrollTop < elLowOffset){
        var linkSelector =  '[href="#' + elem.getAttribute('id') + '"]';
        var nowActiveLink = document.querySelector(linkSelector);

        if(nowActiveLink != null){
          var curActiveLink  = document.querySelector('a.is-active');
          if(curActiveLink){
            if(curActiveLink.getAttribute('href') !== '#'+elem.getAttribute('id')){
              curActiveLink.classList.remove('is-active');
            }
          }
          if(!nowActiveLink.classList.contains('is-active')) {
            nowActiveLink.classList.add('is-active');
          }
        }
      }
      
    });
  }

  if('querySelector' in document && Array.prototype.forEach){

    if (!spyElement){
      spyElement = '.scrollspy';
    }

    if (spyWrapper){
      spyWrapper = document.querySelector(spyWrapper);
    } else {
      spyWrapper = window;
    }

    spyWrapper.addEventListener('scroll', updatePosition, false);
    window.addEventListener('resize', updatePosition, false);

    NodeList.prototype.forEach = Array.prototype.forEach;
  }

};
