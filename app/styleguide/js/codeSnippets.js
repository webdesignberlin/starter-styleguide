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
      var clonedNodes = getClonedNonTextNodes(codeWrapper);

      beautifyNodes(clonedNodes);

      var preElement = document.createElement('pre');
      var codeElement = document.createElement('code');
      // get ID of parent section
      var preElementId = 'code-' + codeWrapper.parentElement.getAttribute('id');
      preElement.setAttribute('id', preElementId);

      for (var j = 0; j < clonedNodes.length; j++) {
        codeElement.appendChild(document.createTextNode(clonedNodes[j].outerHTML));

        if (j + 1 < clonedNodes.length) {
          codeElement.appendChild(document.createTextNode('\n'));
        }
      }

      preElement.appendChild(codeElement);
      preElement.classList.add('sg-code-snippet');

      var parent = codeWrapper.parentNode;

      if (codeWrapper.nextSibling) {
        parent.insertBefore(preElement, codeWrapper.nextSibling);
      } else {
        parent.appendChild(preElement);
      }

      parent.insertBefore(preElement, preElement);
    }
  }

  function getClonedNonTextNodes(element) {
    var nonTextNodes = [];
    var childNodes = element.childNodes;

    for (var i = 0; i < childNodes.length; i++) {
      var childElement = childNodes[i];

      if (childElement.nodeType !== 3) {
        // Found a valid child element
        nonTextNodes.push(childElement.cloneNode(true));
      }
    }

    return nonTextNodes;
  }

  function beautifyNodes(elements) {
    for (var i = 0; i < elements.length; i++) {
      beautifyNode(elements[i], 0);
    }
  }

  function beautifyNode(element, depth) {
    var childNodes = element.childNodes;
    var singleIndent = '    ';
    var currentDepthSpacing = '';

    for (var i = 0; i < depth; i++) {
      currentDepthSpacing += singleIndent;
    }

    var nextDepthSpacing = currentDepthSpacing + singleIndent;

    for (var j = 0; j < childNodes.length; j++) {
      var childElement = childNodes[j];

      if (childElement.nodeType === 3) {
        // found a text node
        if (childElement.nodeValue.indexOf('\n') >= 0) {
          if (j + 1 < childNodes.length) {
            childElement.nodeValue = '\n' + nextDepthSpacing;
          } else {
            childElement.nodeValue = '\n' + currentDepthSpacing;
          }
        }
      } else {
        beautifyNode(childElement, depth + 1);
      }
    }
  }

};
