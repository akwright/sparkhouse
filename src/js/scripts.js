(function ($, window, document, undefined) {

  'use strict';

  function getDomNodeArray(domNodeList) {
    var arrayFromNodeList = [];

    for (var i = 0; i < domNodeList.length; i++) {
      arrayFromNodeList.push(domNodeList[i]);
    }

    return arrayFromNodeList;
  }

  function serialize(form) {
    var field, s = [];
    if (typeof form === 'object' && form.nodeName === 'FORM') {
      var len = form.elements.length;
      for (var i=0; i<len; i++) {
        field = form.elements[i];
        if (field.name && !field.disabled && field.type !== 'file' && field.type !== 'reset' && field.type !== 'submit' && field.type !== 'button') {
            if (field.type === 'select-multiple') {
              for (var j=form.elements[i].options.length-1; j>=0; j--) {
                if(field.options[j].selected) {
                  s[s.length] = encodeURIComponent(field.name) + '=' + encodeURIComponent(field.options[j].value);
                }
              }
            } else if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
              s[s.length] = encodeURIComponent(field.name) + '=' + encodeURIComponent(field.value);
            }
        }
      }
    }
    return s.join('&').replace(/%20/g, '+');
  }

  var sparkhouse = {
    
    init: function() {
      this.floatingLabels.init();
      this.messageCount.init();
      this.svgCheckboxes.init();
      this.formSubmission.init();
    },

    floatingLabels: {

      init: function() {
        var inputs         = document.querySelectorAll('.input'),
            inputArr       = getDomNodeArray(inputs),
            inputOnClass   = 'is-active',
            inputShowClass = 'is-visible';


        function toggleInputs() {
          var label = this.previousSibling;

          if (this.value !== '') {
            label.classList.add(inputShowClass);
          } else {
            label.classList.remove(inputShowClass);
          }
        }

        function toggleLabelClass(event) {
          var label = this.previousSibling;
          if (event.type === 'focus') {
            label.classList.add(inputOnClass);
          } else {
            label.classList.remove(inputOnClass);
          }
        }

        for (var i = 0; i < inputArr.length; i++) {
          inputArr[i].addEventListener('keyup', toggleInputs, false);

          inputArr[i].addEventListener('focus', toggleLabelClass, false);

          inputArr[i].addEventListener('blur', toggleLabelClass, false);
        }
      }

    },

    messageCount: {

      init: function() {
        var textarea  = document.getElementById('message'),
            maxChars  = parseInt(textarea.getAttribute('maxlength')),
            curChars  = 0,
            charDiff  = 0,
            charCount = document.querySelector('.js-character-count'),
            charElem  = document.querySelector('.js-character-element');

        function updateCharCount() {
          curChars = this.value.length;
          charDiff = (maxChars - curChars);
          charCount.innerHTML = charDiff;

          if (charDiff <= 15) {
            charElem.classList.add('has-error');
          } else {
            charElem.classList.remove('has-error');
          }
        }

        textarea.addEventListener('keyup', updateCharCount, false);
        textarea.addEventListener('blur', updateCharCount, false);
      }

    },

    svgCheckboxes: {

      init: function() {
        if( document.createElement('svg').getAttributeNS ) {

          var checkbxsCheckmark = Array.prototype.slice.call( document.querySelectorAll( '.checkbox-labels input[type="checkbox"]' ) ),
            checkboxPath = ['M16.667,62.167c3.109,5.55,7.217,10.591,10.926,15.75 c2.614,3.636,5.149,7.519,8.161,10.853c-0.046-0.051,1.959,2.414,2.692,2.343c0.895-0.088,6.958-8.511,6.014-7.3 c5.997-7.695,11.68-15.463,16.931-23.696c6.393-10.025,12.235-20.373,18.104-30.707C82.004,24.988,84.802,20.601,87,16'],
            checkboxAnim = { speed : 0.2, easing : 'ease-in-out' };

          var createSVGEl = function( def ) {
            var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            if( def ) {
              svg.setAttributeNS( null, 'viewBox', def.viewBox );
              svg.setAttributeNS( null, 'preserveAspectRatio', def.preserveAspectRatio );
            }
            else {
              svg.setAttributeNS( null, 'viewBox', '0 0 100 100' );
            }
            svg.setAttribute( 'xmlns', 'http://www.w3.org/2000/svg' );
            return svg;
          };

          var controlCheckbox = function( el, svgDef ) {
            var svg = createSVGEl( svgDef );
            el.parentNode.appendChild( svg );
            
            el.addEventListener( 'change', function() {
              if( el.checked ) {
                draw( el );
              }
              else {
                reset( el );
              }
            } );
          };

          checkbxsCheckmark.forEach(function( el) {
            controlCheckbox( el ); }
          );

          var draw = function ( el ) {
            var paths = [], pathDef, 
              animDef,
              svg = el.parentNode.querySelector( 'svg' );

            pathDef = checkboxPath;
            animDef = checkboxAnim;
            
            paths.push( document.createElementNS('http://www.w3.org/2000/svg', 'path' ) );
            
            for( var i = 0, len = paths.length; i < len; ++i ) {
              var path = paths[i];
              svg.appendChild( path );

              path.setAttributeNS( null, 'd', pathDef[i] );

              var length = path.getTotalLength();
              // Clear any previous transition
              //path.style.transition = path.style.WebkitTransition = path.style.MozTransition = 'none';
              // Set up the starting positions
              path.style.strokeDasharray = length + ' ' + length;
              if( i === 0 ) {
                path.style.strokeDashoffset = Math.floor( length ) - 1;
              }
              else {
                path.style.strokeDashoffset = length;
              }
              // Trigger a layout so styles are calculated & the browser
              // picks up the starting position before animating
              path.getBoundingClientRect();
              // Define our transition
              path.style.transition = path.style.WebkitTransition = path.style.MozTransition  = 'stroke-dashoffset ' + animDef.speed + 's ' + animDef.easing + ' ' + i * animDef.speed + 's';
              // Go!
              path.style.strokeDashoffset = '0';
            }
          };

          var reset = function ( el ) {
            Array.prototype.slice.call( el.parentNode.querySelectorAll( 'svg > path' ) ).forEach( function( el ) { el.parentNode.removeChild( el ); } );
          };

        }
      }

    },

    formSubmission: {

      init: function() {
        var form = document.querySelector('.js-contact-form');

        form.addEventListener('submit', function(e) {
          e.preventDefault();

          console.log(serialize(this));
        });
      }

    }

  };

  sparkhouse.init();

})(jQuery, window, document);
