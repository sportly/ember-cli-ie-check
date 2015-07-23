import Ember from 'ember';

export default Ember.Service.extend({

  isIE: function(version, comparison) {

    var cc      = 'IE',
        b       = document.createElement('B'),
        docElem = document.documentElement,
        ieTest;

    if(version){
      cc += ' ' + version;
      if(comparison){ cc = comparison + ' ' + cc; }
    }

    b.innerHTML = '<!--[if '+ cc +']><b id="iecctest"></b><![endif]-->';
    docElem.appendChild(b);
    ieTest = !!document.getElementById('iecctest');
    docElem.removeChild(b);
    return ieTest;
  }

});