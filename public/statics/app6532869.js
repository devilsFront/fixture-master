!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),function(){var e=document.querySelector('[data-element="slider"]');e&&setTimeout((function(){var t=e.getElementsByClassName("direction__item"),n=e.querySelector('[data-element="next"]'),r=e.querySelector('[data-element="prev"]');n.addEventListener("click",(function(){var n=e.getElementsByClassName("direction__item_active")[0],r=n.nextElementSibling;r||(r=t[0]),n.classList.remove("direction__item_active"),r.classList.add("direction__item_active");var a=e.querySelector('[data-element="current-slide"]'),l=r.getAttribute("data-index");a.textContent=l})),r.addEventListener("click",(function(){var n=e.getElementsByClassName("direction__item_active")[0],r=n.previousElementSibling;r||(r=t[t.length-1]),n.classList.remove("direction__item_active"),r.classList.add("direction__item_active");var a=e.querySelector('[data-element="current-slide"]'),l=r.getAttribute("data-index");a.textContent=l}))}),0)}(),function(){var e=document.querySelector('[data-element="calculator"]');e&&setTimeout((function(){var t=e.querySelectorAll('[data-element="calculator-item"]'),n=e.querySelector('[data-element="calculator-value"]');function r(e){return e.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g,"$1 ")}(function(){for(var e=1,a=0;a<t.length;a++)e*=t[a].querySelector('[data-element="calculator-input"]').value;n.textContent=r(e)})(),t.forEach((function(e){var a=e.querySelector('[data-element="calculator-point"]'),l=e.querySelector('[data-element="calculator-input"]'),i=e.querySelector('[data-element="calculator-line-fill"]');l.addEventListener("input",(function(){a.style.left=(this.value-c)*u/(o-c)+"px";var e=a.style.left.substring(0,a.style.left.length-2);i.style.right=u-e+7+"px";for(var l=1,d=0;d<t.length;d++){var s=t[d].querySelector('[data-element="calculator-input"]');l*=s.value}n.textContent=r(l)}));var o=l.getAttribute("max"),c=l.getAttribute("min"),u=l.clientWidth-12}))}),0)}()}]);