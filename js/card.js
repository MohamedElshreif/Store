"use strict";function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_unsupportedIterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(a,t){if(a){if("string"==typeof a)return _arrayLikeToArray(a,t);var r=Object.prototype.toString.call(a).slice(8,-1);return"Object"===r&&a.constructor&&(r=a.constructor.name),"Map"===r||"Set"===r?Array.from(a):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(a,t):void 0}}function _iterableToArray(a){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(a))return Array.from(a)}function _arrayWithoutHoles(a){if(Array.isArray(a))return _arrayLikeToArray(a)}function _arrayLikeToArray(a,t){(null==t||t>a.length)&&(t=a.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=a[r];return n}!function(){var a=document.querySelector(".products"),r=_toConsumableArray(JSON.parse(localStorage.getItem("Handwatchs")));function n(a,r){var t;0===a.length&&((t=document.createElement("div")).className="empty",t.innerHTML="There Are No Products",r.appendChild(t)),a.forEach(function(a){var t=document.createElement("div");t.className="product",t.setAttribute("id",a.id),t.innerHTML='\n        <div class="close"><i class="far fa-trash-alt"></i></div>\n        <div class="content">\n            <div class="content_img"><img src="'.concat(a.img,'" alt="" /></div>\n            <div class="content_info">\n              <div class="name">\n                  <h3><a  class="watch-name">').concat(a.name,'</a></h3>\n              </div>\n              <div class="price"><span>').concat(a.price,".000 USA</span></div>\n              <div class = 'progress-stars'>\n                <ul style = 'width : ").concat(a.reting,'%\'>\n                  <li><i class="fas fa-star watch__star"></i></li>\n                  <li><i class="fas fa-star watch__star"></i></li>\n                  <li><i class="fas fa-star watch__star"></i></li>\n                  <li><i class="fas fa-star watch__star"></i></li>\n                  <li><i class="fas fa-star watch__star"></i></li>\n                </ul>\n              </div>\n              <div class="color"><span class="display-color"></span><span>').concat(a.colors[0],'</span></div>\n              <form class="count-product" submit="">\n              <div>\n                <div class = \'plus\'><i class="fas fa-plus"></i></div>\n                <div class = \'minus\'><i class="fas fa-minus"></i></div>\n                <input type = \'text\' class="input-count" value="1" />\n              </div>\n              </form>\n              <div class = \'total--price\'><span>').concat(3*a.price,".000 USA</span></div>\n            </div>\n        </div>\n              "),r.appendChild(t),console.log(r)})}n(r,a),a.addEventListener("click",function(t){"close"===t.target.className&&(console.log(t.target.parentElement.id),r=r.filter(function(a){return a.id!=t.target.parentElement.id}),$(".products").load("".concat(location.href," .products"),function(){var a=document.createElement("div");a.className="productsList",n(r,a),$(".products").html(a)}),localStorage.setItem("Handwatchs",JSON.stringify(r)),number_of_products(r.length))}),null!==JSON.parse(localStorage.getItem("Handwatchs"))&&number_of_products(JSON.parse(localStorage.getItem("Handwatchs")).length)}();