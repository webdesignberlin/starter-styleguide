/**
 * POPEYE
 *
 * automatically generates anchored headings and nested navigation for h1 and h2
 *
 * usage:
 * var options = {
 *   headlineClass: String,     //class for the headlines
 *   navigationClass: String,   //class of the navigation
 *   anchor: String             //anchor text next to headlines
 * };
 * popeye(options);
 *
 */

'use strict';

module.exports = function(options){

  if (!options) {
    options = {
      headlineClass: 'headline',
      navigationClass: 'list',
      anchorText: '#'
    };
  }

  // get all elements with headline class
  var headlines = document.getElementsByClassName(options.headlineClass);
  var list = document.getElementsByClassName(options.navigationClass)[0];
  var content = [];

  for (var i = 0; i < headlines.length;  i++) {

    // read the headline text and put it in content array
    content[i] = headlines[i].innerText;

    // get the headline, replace whitespace with dash and transform to lowercase for id
    var headlineID = content[i];
    headlineID = headlineID.replace(/\s+/g, '-').toLowerCase();
    // add id to each headline element
    headlines[i].id = headlineID;

    //create links with id and add to the headlines
    var a = document.createElement('a');
    a.classList.add('sg-anchor');
    a.href = '#' + headlineID;
    a.innerHTML = options.anchorText;
    headlines[i].appendChild(a);

    // create the li elements that contain the links
    var li = document.createElement('li');
    var ali = document.createElement('a');
    ali.href = '#' + headlineID;
    ali.innerHTML = content[i];
    li.appendChild(ali);

    if (headlines[i].localName === 'h1') {
      list.appendChild(li);
      li.dataset.tag = '1';
    } else {
      var nodelengeth = list.children.length - 1;

      if(list.children[nodelengeth].children.length === 1) {
        // first h2 after a h1 -> a new ul element needs to be created
        var ul = document.createElement('ul');
        ul.appendChild(li);
        // get the position of the last create h1 li to add new list for h2
        list.children[nodelengeth].appendChild(ul);
      } else if(list.children[nodelengeth].children.length !== 1) {
        // means that already a h2 exists and no ul needs to be created -> append to last ul li
        var childLength = list.children[nodelengeth].children.length - 1;
        list.children[nodelengeth].children[childLength].appendChild(li);
      }
    }

  }

  // add active Class for first Link in generated list
  list.children[0].children[0].classList.add('is-active');

};
