/**
 * Created by mgerstmann on 30.03.2016.
 */

module.exports = function(){

  var snippetToggle = document.querySelector('#snippet-toggle');
  var snippetToggles = document.querySelectorAll('.sg-snippet-toggle');
  var snippetSingleVisibility = false;
  var snippets;

  snippetToggle.addEventListener('click', function () {
    if (snippets) {
      if(snippetSingleVisibility){
        for (var i = 0; i < snippets.length; i++) {
          snippets[i].classList.remove('sg-code-snippet--visible');
          snippetSingleVisibility = false;
        }
      } else {
        for (var i = 0; i < snippets.length; i++) {
          snippets[i].classList.toggle('sg-code-snippet--visible');
        }
      }
    }
  });

  window.onload = function () {
    createCodeSamples();
    snippets = document.querySelectorAll('.sg-code-snippet');
  };


  [].forEach.call(snippetToggles, function(el) {
    el.addEventListener('click', clickEvent);
  });

  function clickEvent(e) {
    e.preventDefault();
    var snippetTarget = document.getElementById(this.dataset.sgTarget);
    snippetTarget.classList.toggle('sg-code-snippet--visible');
    snippetSingleVisibility = true;
  }


  function createCodeSamples() {
    var codeWrappers = document.querySelectorAll('.sg-section__content:not(.sg-section__content--no-code)');

    for (var i = 0; i < codeWrappers.length; i++) {
      var codeWrapper = codeWrappers[i];
      console.log(codeWrapper);
      var clonedNodes = codeWrapper.innerHTML;

      var preElement = document.createElement('pre');
      var codeElement = document.createElement('code');
      // get ID of parent section
      var preElementId = 'code-' + codeWrapper.parentElement.getAttribute('id');
      preElement.setAttribute('id', preElementId);

      console.log(clonedNodes);

      //console.log(clonedNodes);

      codeElement.textContent = clonedNodes;

      preElement.appendChild(codeElement);
      preElement.classList.add('sg-code-snippet');

      var parent = codeWrapper.parentNode;

      if (codeWrapper.nextSibling) {
        parent.insertBefore(preElement, codeWrapper.nextSibling);
      } else {
        parent.appendChild(preElement);
      }
    }
  }

};
