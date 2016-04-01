module.exports = function(spyElement, spyWrapper){

  if('querySelector' in document && Array.prototype.forEach){

    if (!spyElement){
      spyElement = '.scrollspy';
    }

    if (spyWrapper){
      spyWrapper = document.querySelector(spyWrapper);
    } else {
      spyWrapper = window;
    }

    spyWrapper.addEventListener("scroll", updatePosition, false);
    window.addEventListener("resize", updatePosition, false);

    NodeList.prototype.forEach = Array.prototype.forEach;

    function updatePosition(){
      spyElems = document.querySelectorAll(spyElement);

      spyElems.forEach(function(elem){

        elTopOffset = elem.offsetTop - (elem.offsetHeight / 3);
        elLowOffset = elem.offsetTop + elem.offsetHeight;

        if(spyWrapper.scrollTop >= elTopOffset && spyWrapper.scrollTop < elLowOffset){

          linkSelector =  "a[href='#" + elem.getAttribute('id') + "']";
          nowActiveLink = document.querySelector(linkSelector);

          if(nowActiveLink != null){
            curActiveLink  = document.querySelector('a.is-active');
            if(curActiveLink){
              if(curActiveLink.getAttribute('href') != '#'+elem.getAttribute('id')){
                curActiveLink.classList.remove('is-active');
              }
            }
            if(!nowActiveLink.classList.contains('is-active')) nowActiveLink.classList.add('is-active');
          }
        }
      });

    }
  }

};
