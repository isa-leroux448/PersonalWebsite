// effect for "Hi, I'm Isabella Leroux" font
// from: https://codepen.io/belv2c/pen/jZvWeR
function _toArray(arr) { 
    return Array.isArray(arr) ? arr : Array.from(arr)
  }
  
  function makeSpans (selector) {
    var _document$querySelect = document.querySelectorAll(selector)
    var _document$querySelect2 = _toArray(_document$querySelect)
    var elements = _document$querySelect2.slice(0)
    
    return elements.map(function (element) {
      var text = element.innerText.split('')
      var spans = text.map(function (letter) {
        return '<span>' + letter + '</span>'
      }).join('')
      return element.innerHTML = spans
    })
  }
  
  makeSpans('h1')

  //jQuery ripple library
  "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js">
  "https://cdnjs.cloudflare.com/ajax/libs/jquery.ripples/0.5.3/jquery.ripples.min.js">
          $(".all").ripples({
              resolution: 200,
              dropRadius: 20,
              perturbance: 0.008,
          });

