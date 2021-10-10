/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/scripts/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/scripts/app.js":
/*!*******************************!*\
  !*** ./assets/scripts/app.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/slider */ "./assets/scripts/import/slider.js");
/* harmony import */ var _import_calculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/calculator */ "./assets/scripts/import/calculator.js");


Object(_import_slider__WEBPACK_IMPORTED_MODULE_0__["slider"])();
Object(_import_calculator__WEBPACK_IMPORTED_MODULE_1__["calculator"])();

/***/ }),

/***/ "./assets/scripts/import/calculator.js":
/*!*********************************************!*\
  !*** ./assets/scripts/import/calculator.js ***!
  \*********************************************/
/*! exports provided: calculator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculator", function() { return calculator; });
function calculator() {
  var calculator = document.querySelector('[data-element="calculator"]');

  if (calculator) {
    setTimeout(initCalculator, 0);
  }

  function initCalculator() {
    var calculatorItems = calculator.querySelectorAll('[data-element="calculator-item"]');
    var calculatorValue = calculator.querySelector('[data-element="calculator-value"]');
    calculatorInit();

    function formatNumber(number) {
      var newNumber = number.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
      return newNumber;
    }

    function calculatorInit() {
      var summary = 1;

      for (var i = 0; i < calculatorItems.length; i++) {
        summary = summary * calculatorItems[i].querySelector('[data-element="calculator-input"]').value;
      }

      calculatorValue.textContent = formatNumber(summary);
    }

    calculatorItems.forEach(function (item) {
      var calculatorPoint = item.querySelector('[data-element="calculator-point"]');
      var calculatorInput = item.querySelector('[data-element="calculator-input"]');
      var calculatorLineFill = item.querySelector('[data-element="calculator-line-fill"]');
      calculatorInput.addEventListener('input', inputChange);
      var max = calculatorInput.getAttribute('max');
      var min = calculatorInput.getAttribute('min');
      var width = calculatorInput.clientWidth - 12;

      function inputChange() {
        calculatorPoint.style.left = (this.value - min) * width / (max - min) + 'px';
        var coord = calculatorPoint.style.left.substring(0, calculatorPoint.style.left.length - 2);
        calculatorLineFill.style.right = width - coord + 7 + 'px';
        var summary = 1;

        for (var i = 0; i < calculatorItems.length; i++) {
          var _calculatorInput = calculatorItems[i].querySelector('[data-element="calculator-input"]');

          summary = summary * _calculatorInput.value;
        }

        calculatorValue.textContent = formatNumber(summary);
      }
    });
  }
}

/***/ }),

/***/ "./assets/scripts/import/slider.js":
/*!*****************************************!*\
  !*** ./assets/scripts/import/slider.js ***!
  \*****************************************/
/*! exports provided: slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slider", function() { return slider; });
function slider() {
  var slider = document.querySelector('[data-element="slider"]');

  if (slider) {
    setTimeout(initSlider, 0);
  }

  function initSlider() {
    var items = slider.getElementsByClassName('direction__item');
    var next = slider.querySelector('[data-element="next"]');
    var prev = slider.querySelector('[data-element="prev"]');
    next.addEventListener('click', nextSlide);
    prev.addEventListener('click', prevSlide);

    function nextSlide() {
      var activeItem = slider.getElementsByClassName('direction__item_active')[0];
      var nextActiveItem = activeItem.nextElementSibling;

      if (!nextActiveItem) {
        nextActiveItem = items[0];
      }

      activeItem.classList.remove('direction__item_active');
      nextActiveItem.classList.add('direction__item_active');
      var currentSlide = slider.querySelector('[data-element="current-slide"]');
      var dataIndex = nextActiveItem.getAttribute('data-index');
      currentSlide.textContent = dataIndex;
    }

    function prevSlide() {
      var activeItem = slider.getElementsByClassName('direction__item_active')[0];
      var prevActiveItem = activeItem.previousElementSibling;

      if (!prevActiveItem) {
        prevActiveItem = items[items.length - 1];
      }

      activeItem.classList.remove('direction__item_active');
      prevActiveItem.classList.add('direction__item_active');
      var currentSlide = slider.querySelector('[data-element="current-slide"]');
      var dataIndex = prevActiveItem.getAttribute('data-index');
      currentSlide.textContent = dataIndex;
    }
  }
}

/***/ })

/******/ });
//# sourceMappingURL=app.js.map