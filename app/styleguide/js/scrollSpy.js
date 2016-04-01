module.exports = function(spyElement, spyWrapper){

/*

  //'use strict';

  //var spyElement = spyElement;

  if (spyElement){
    spyElement = document.querySelectorAll(spyElement);
  } else {
    spyElement = document.querySelectorAll('.scrollspy');
  }

  if (spyWrapper){
    spyWrapper = document.querySelector(spyWrapper);
  } else {
    spyWrapper = window;
  }



  var spyElements = {};
  var i = 0;

  Array.prototype.forEach.call(spyElement, function(e) {
    spyElements[e.id] = e.offsetTop;
    //spyElements[e.id] = e.getBoundingClientRect().top;
  });

  spyWrapper.addEventListener("scroll", updatePosition, false);
  spyWrapper.addEventListener("resize", updatePosition, false);

  function isScrolledIntoView(el) {
    var elemTop = el.getBoundingClientRect().top;
    var elemBottom = el.getBoundingClientRect().bottom;

    var isVisible = (elemTop >= 0) && (elemBottom <= spyWrapper.scrollHeight);
    return isVisible;
  }

  function updatePosition() {

    var scrollPosition;

    if(spyWrapper != window){
      scrollPosition = this.scrollTop;
    } else {
      scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    }

    for (i in spyElements) {

      //var blubb = document.getElementById(i);
      //console.log('offsetTop: ' + blubb + blubb.offsetTop);
      //console.log('getBoundingClientRect().top: ' + blubb + blubb.getBoundingClientRect().top);


      //console.log('scrollPosition: ' + scrollPosition);
      //if (spyElements[i] <= scrollPosition) {

      var elementCurrent = document.getElementById(i);
      isScrolledIntoView(elementCurrent);

      if (scrollPosition >= spyElements[i]) {
        document.querySelector('.is-active').setAttribute('class', ' ');
        document.querySelector('a[href*=' + i + ']').setAttribute('class', 'is-active');
      }
    }
  }*/

  spyWrapper = document.querySelector(spyWrapper);

  if('querySelector' in document && Array.prototype.forEach){

    NodeList.prototype.forEach = Array.prototype.forEach;
    spyWrapper.onscroll = function(){

      spyElems = document.querySelectorAll(spyElement);

      spyElems.forEach(function(elem){

        elTopOffset = elem.offsetTop - (elem.offsetHeight / 3);
        elLowOffset = elem.offsetTop + elem.offsetHeight;

        if(spyWrapper.scrollTop >= elTopOffset && spyWrapper.scrollTop < elLowOffset){

          linkSelector =  "a[href='#" + elem.getAttribute('id') + "']";
          nowActiveLink = document.querySelector(linkSelector);

          console.log(linkSelector);

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
