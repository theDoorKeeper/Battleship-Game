/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/JS/createHtmlElement.js":
/*!*************************************!*\
  !*** ./src/JS/createHtmlElement.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHtmlElement": () => (/* binding */ createHtmlElement)
/* harmony export */ });
var createHtmlElement = function createHtmlElement(type, id, arrayClasses, content) {
  var element = document.createElement(type);
  if (id) element.id = id;
  if (arrayClasses) arrayClasses.forEach(function (myClass) {
    return element.classList.add(myClass);
  });
  if (content) element.innerText = content;
  return element;
};



/***/ }),

/***/ "./src/JS/dom.js":
/*!***********************!*\
  !*** ./src/JS/dom.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayShips": () => (/* binding */ displayShips),
/* harmony export */   "square": () => (/* binding */ square)
/* harmony export */ });
var square = document.querySelector(".square");

var displayShips = function displayShips(player) {
  console.log(player);
  player.getShipArray().forEach(function (ship) {
    console.log(ship);

    if (ship.shipCoordinates.includes(square.id)) {
      square.textContent = "S";
    }
  });
};



/***/ }),

/***/ "./src/JS/gameboard.js":
/*!*****************************!*\
  !*** ./src/JS/gameboard.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createGameboard": () => (/* binding */ createGameboard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/JS/ship.js");


var createGameboard = function createGameboard() {
  var shipArray = [];
  var missArray = [];

  var placeShip = function placeShip(name, coordinate) {
    if (name === "submarine") {
      var length = 2;
      var coordinateArray = getCoordinates(coordinate, length);
      var ship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.createShip)(name, length, coordinateArray);
      shipArray.push(ship);
    } else if (name === "battleship") {
      var _length = 6;

      var _coordinateArray = getCoordinates(coordinate, _length);

      var _ship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.createShip)(name, _length, _coordinateArray);

      shipArray.push(_ship);
    }
  };

  var getCoordinates = function getCoordinates(coordinate, length) {
    var coordinateArray = [];

    if (coordinate + length > 100) {
      for (var i = 0; i < length; i--) {
        coordinateArray.push(coordinate + i);
      }
    } else {
      for (var _i = 0; _i < length; _i++) {
        coordinateArray.push(coordinate + _i);
      }
    }

    return coordinateArray;
  };

  var receiveAttack = function receiveAttack(hitCoordinates) {
    var miss = true;
    shipArray.forEach(function (ship) {
      if (ship.shipCoordinates.includes(hitCoordinates)) {
        ship.hit(hitCoordinates);
        miss = false;
      }
    });

    if (miss) {
      missArray.push(hitCoordinates);
    }
  };

  var isGameLost = function isGameLost() {
    var sunkArray = [];
    shipArray.forEach(function (ship) {
      if (ship.isSunk() === true) {
        sunkArray.push(ship);
      }
    });

    if (sunkArray.length === shipArray.length) {
      return true;
    } else {
      return false;
    }
  };

  return {
    isGameLost: isGameLost,
    receiveAttack: receiveAttack,
    placeShip: placeShip,
    missArray: missArray,
    shipArray: shipArray
  };
};



/***/ }),

/***/ "./src/JS/player.js":
/*!**************************!*\
  !*** ./src/JS/player.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPlayer": () => (/* binding */ createPlayer)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/JS/gameboard.js");


var createPlayer = function createPlayer(playerName) {
  var playerBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.createGameboard)();

  var getMissArray = function getMissArray() {
    return playerBoard.missArray;
  };

  var getShipArray = function getShipArray() {
    return playerBoard.shipArray;
  };

  var hasLost = function hasLost() {
    if (playerBoard.isGameLost()) {
      return true;
    } else return false;
  };

  var receiveAttack = function receiveAttack(hitCoordinates) {
    playerBoard.receiveAttack(hitCoordinates);
  };

  var placeShip = function placeShip(name, coordinates) {
    playerBoard.placeShip(name, coordinates);
  };

  return {
    playerName: playerName,
    hasLost: hasLost,
    placeShip: placeShip,
    receiveAttack: receiveAttack,
    getMissArray: getMissArray,
    getShipArray: getShipArray
  };
};



/***/ }),

/***/ "./src/JS/renderBoards.js":
/*!********************************!*\
  !*** ./src/JS/renderBoards.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderBoards": () => (/* binding */ renderBoards)
/* harmony export */ });
/* harmony import */ var _createHtmlElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createHtmlElement */ "./src/JS/createHtmlElement.js");


var renderBoards = function renderBoards() {
  var firstGameboard = document.querySelector("#playerGameboard");

  for (var i = 1; i <= 100; i++) {
    var square = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", i, ['square'], null);
    firstGameboard.appendChild(square);
  }

  var secondGameboard = document.querySelector("#computerGameboard");

  for (var _i = 1; _i <= 100; _i++) {
    var _square = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", _i, ['square'], null);

    secondGameboard.appendChild(_square);
  }
};



/***/ }),

/***/ "./src/JS/ship.js":
/*!************************!*\
  !*** ./src/JS/ship.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createShip": () => (/* binding */ createShip)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var createShip = function createShip(name, length, coordinates) {
  var shipCoordinates = _toConsumableArray(coordinates);

  var hitArray = [];

  var hit = function hit(hitCoordinates) {
    coordinates.forEach(function (shipSquare) {
      if (shipSquare === hitCoordinates) {
        hitArray.push(hitCoordinates);
      }
    });
  };

  var isSunk = function isSunk() {
    if (hitArray.length === length) {
      return true;
    }

    return false;
  };

  return {
    name: name,
    hit: hit,
    isSunk: isSunk,
    shipCoordinates: shipCoordinates
  };
};



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/JS/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _renderBoards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderBoards */ "./src/JS/renderBoards.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/JS/dom.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/JS/player.js");



(0,_renderBoards__WEBPACK_IMPORTED_MODULE_0__.renderBoards)();

var game = function game() {
  var human = (0,_player__WEBPACK_IMPORTED_MODULE_2__.createPlayer)("human");
  var computer = (0,_player__WEBPACK_IMPORTED_MODULE_2__.createPlayer)("computer");
  human.placeShip("submarine", 12);
  human.placeShip("battleship", 20);
  computer.placeShip("sumbarine", 60);
  computer.placeShip("battleship", 80);
  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.displayShips)(human);
};

game();
console.log(_dom__WEBPACK_IMPORTED_MODULE_1__.square);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvSlMvY3JlYXRlSHRtbEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL0pTL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvSlMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9KUy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL0pTL3JlbmRlckJvYXJkcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvSlMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvSlMvaW5kZXguanMiXSwibmFtZXMiOlsiY3JlYXRlSHRtbEVsZW1lbnQiLCJ0eXBlIiwiaWQiLCJhcnJheUNsYXNzZXMiLCJjb250ZW50IiwiZWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImZvckVhY2giLCJteUNsYXNzIiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJUZXh0Iiwic3F1YXJlIiwicXVlcnlTZWxlY3RvciIsImRpc3BsYXlTaGlwcyIsInBsYXllciIsImNvbnNvbGUiLCJsb2ciLCJnZXRTaGlwQXJyYXkiLCJzaGlwIiwic2hpcENvb3JkaW5hdGVzIiwiaW5jbHVkZXMiLCJ0ZXh0Q29udGVudCIsImNyZWF0ZUdhbWVib2FyZCIsInNoaXBBcnJheSIsIm1pc3NBcnJheSIsInBsYWNlU2hpcCIsIm5hbWUiLCJjb29yZGluYXRlIiwibGVuZ3RoIiwiY29vcmRpbmF0ZUFycmF5IiwiZ2V0Q29vcmRpbmF0ZXMiLCJjcmVhdGVTaGlwIiwicHVzaCIsImkiLCJyZWNlaXZlQXR0YWNrIiwiaGl0Q29vcmRpbmF0ZXMiLCJtaXNzIiwiaGl0IiwiaXNHYW1lTG9zdCIsInN1bmtBcnJheSIsImlzU3VuayIsImNyZWF0ZVBsYXllciIsInBsYXllck5hbWUiLCJwbGF5ZXJCb2FyZCIsImdldE1pc3NBcnJheSIsImhhc0xvc3QiLCJjb29yZGluYXRlcyIsInJlbmRlckJvYXJkcyIsImZpcnN0R2FtZWJvYXJkIiwiYXBwZW5kQ2hpbGQiLCJzZWNvbmRHYW1lYm9hcmQiLCJoaXRBcnJheSIsInNoaXBTcXVhcmUiLCJnYW1lIiwiaHVtYW4iLCJjb21wdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLElBQUQsRUFBT0MsRUFBUCxFQUFXQyxZQUFYLEVBQXlCQyxPQUF6QixFQUFxQztBQUMzRCxNQUFNQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qk4sSUFBdkIsQ0FBaEI7QUFDQSxNQUFJQyxFQUFKLEVBQVFHLE9BQU8sQ0FBQ0gsRUFBUixHQUFhQSxFQUFiO0FBQ1IsTUFBSUMsWUFBSixFQUFrQkEsWUFBWSxDQUFDSyxPQUFiLENBQXFCLFVBQUNDLE9BQUQ7QUFBQSxXQUFhSixPQUFPLENBQUNLLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCRixPQUF0QixDQUFiO0FBQUEsR0FBckI7QUFFbEIsTUFBSUwsT0FBSixFQUFhQyxPQUFPLENBQUNPLFNBQVIsR0FBb0JSLE9BQXBCO0FBRWIsU0FBT0MsT0FBUDtBQUNELENBUkg7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQ0ksSUFBTVEsTUFBTSxHQUFHUCxRQUFRLENBQUNRLGFBQVQsQ0FB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OztBQ05BO0FBQ0E7QUFDQTtBQUdBNEIsMkRBQVk7O0FBRVosSUFBTU0sSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBSztBQUNkLE1BQU1DLEtBQUssR0FBR2IscURBQVksQ0FBQyxPQUFELENBQTFCO0FBQ0EsTUFBTWMsUUFBUSxHQUFHZCxxREFBWSxDQUFDLFVBQUQsQ0FBN0I7QUFDQWEsT0FBSyxDQUFDN0IsU0FBTixDQUFnQixXQUFoQixFQUE0QixFQUE1QjtBQUNBNkIsT0FBSyxDQUFDN0IsU0FBTixDQUFnQixZQUFoQixFQUE2QixFQUE3QjtBQUNBOEIsVUFBUSxDQUFDOUIsU0FBVCxDQUFtQixXQUFuQixFQUErQixFQUEvQjtBQUNBOEIsVUFBUSxDQUFDOUIsU0FBVCxDQUFtQixZQUFuQixFQUFnQyxFQUFoQztBQUNBWixvREFBWSxDQUFDeUMsS0FBRCxDQUFaO0FBQ0gsQ0FSRDs7QUFVQUQsSUFBSTtBQUNKdEMsT0FBTyxDQUFDQyxHQUFSLENBQVlMLHdDQUFaLEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY3JlYXRlSHRtbEVsZW1lbnQgPSAodHlwZSwgaWQsIGFycmF5Q2xhc3NlcywgY29udGVudCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIGlmIChpZCkgZWxlbWVudC5pZCA9IGlkO1xuICAgIGlmIChhcnJheUNsYXNzZXMpIGFycmF5Q2xhc3Nlcy5mb3JFYWNoKChteUNsYXNzKSA9PiBlbGVtZW50LmNsYXNzTGlzdC5hZGQobXlDbGFzcykpO1xuICBcbiAgICBpZiAoY29udGVudCkgZWxlbWVudC5pbm5lclRleHQgPSBjb250ZW50O1xuICBcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfTtcbiAgZXhwb3J0IHtjcmVhdGVIdG1sRWxlbWVudH0iLCJcbiAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNxdWFyZVwiKVxuICAgIGNvbnN0IGRpc3BsYXlTaGlwcyA9IChwbGF5ZXIpID0+eyAgIFxuICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXIpICAgIFxuICAgICAgICBwbGF5ZXIuZ2V0U2hpcEFycmF5KCkuZm9yRWFjaChzaGlwID0+e1xuICAgICAgICAgICAgY29uc29sZS5sb2coc2hpcClcbiAgICAgICAgICAgIGlmKHNoaXAuc2hpcENvb3JkaW5hdGVzLmluY2x1ZGVzKHNxdWFyZS5pZCkpe1xuICAgICAgICAgICAgICAgIHNxdWFyZS50ZXh0Q29udGVudD1cIlNcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiBcbiAgICBleHBvcnQge2Rpc3BsYXlTaGlwcyxzcXVhcmV9XG5cbiIsImltcG9ydCB7IGNyZWF0ZVNoaXAgfSBmcm9tIFwiLi9zaGlwXCJcblxuY29uc3QgY3JlYXRlR2FtZWJvYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IHNoaXBBcnJheSA9IFtdO1xuICAgIGNvbnN0IG1pc3NBcnJheSA9IFtdO1xuXG4gICAgY29uc3QgcGxhY2VTaGlwID0gKG5hbWUsY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBpZiAobmFtZSA9PT0gXCJzdWJtYXJpbmVcIil7XG4gICAgICAgICAgICBjb25zdCAgbGVuZ3RoID0gMjtcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGVBcnJheSA9IGdldENvb3JkaW5hdGVzKGNvb3JkaW5hdGUsIGxlbmd0aClcbiAgICAgICAgICBjb25zdCBzaGlwID0gY3JlYXRlU2hpcChuYW1lLGxlbmd0aCxjb29yZGluYXRlQXJyYXkpO1xuICAgICAgICAgIHNoaXBBcnJheS5wdXNoKHNoaXApOyAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmFtZSA9PT0gXCJiYXR0bGVzaGlwXCIpe1xuICAgICAgICAgIGNvbnN0ICBsZW5ndGggPSA2O1xuICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGVBcnJheSA9IGdldENvb3JkaW5hdGVzKGNvb3JkaW5hdGUsIGxlbmd0aClcbiAgICAgICAgICBjb25zdCBzaGlwID0gY3JlYXRlU2hpcChuYW1lLGxlbmd0aCxjb29yZGluYXRlQXJyYXkpO1xuICAgICAgICAgIHNoaXBBcnJheS5wdXNoKHNoaXApXG4gICAgICAgIH1cbn1cblxuY29uc3QgZ2V0Q29vcmRpbmF0ZXMgPSAoY29vcmRpbmF0ZSwgbGVuZ3RoKSA9PntcbiAgICBsZXQgY29vcmRpbmF0ZUFycmF5ID1bXTtcblxuICAgIGlmIChjb29yZGluYXRlK2xlbmd0aCA+IDEwMCl7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGktLSkgeyAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgY29vcmRpbmF0ZUFycmF5LnB1c2goY29vcmRpbmF0ZSArIGkpXG4gICAgICAgIH1cblxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykgeyAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgY29vcmRpbmF0ZUFycmF5LnB1c2goY29vcmRpbmF0ZSArIGkpXG4gICAgICAgIH1cblxuICAgIH1cbiAgICByZXR1cm4gY29vcmRpbmF0ZUFycmF5XG59XG5cbmNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoaGl0Q29vcmRpbmF0ZXMpID0+e1xuICAgIGxldCBtaXNzID0gdHJ1ZTtcbiBcbiAgICAgc2hpcEFycmF5LmZvckVhY2goc2hpcD0+e1xuICAgICAgICAgaWYgKHNoaXAuc2hpcENvb3JkaW5hdGVzLmluY2x1ZGVzKGhpdENvb3JkaW5hdGVzKSl7XG4gICAgICAgICAgICAgc2hpcC5oaXQoaGl0Q29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgbWlzcz1mYWxzZTtcbiAgICAgICAgIH1cbiAgICAgfSlcbiBcbiAgICAgaWYgKG1pc3Mpe1xuICAgICAgICAgbWlzc0FycmF5LnB1c2goaGl0Q29vcmRpbmF0ZXMpXG4gICAgIH0gICAgICBcbiAgICAgIFxuIH1cblxuIGNvbnN0IGlzR2FtZUxvc3QgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3Vua0FycmF5ID0gW107XG4gICAgc2hpcEFycmF5LmZvckVhY2goc2hpcCA9PntcbiAgICAgICAgaWYoc2hpcC5pc1N1bmsoKSA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICBzdW5rQXJyYXkucHVzaChzaGlwKTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgaWYgKHN1bmtBcnJheS5sZW5ndGggPT09IHNoaXBBcnJheS5sZW5ndGgpe1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxufVxuXG4gICAgcmV0dXJuIHtpc0dhbWVMb3N0LHJlY2VpdmVBdHRhY2sscGxhY2VTaGlwLG1pc3NBcnJheSxzaGlwQXJyYXl9XG59XG5cbmV4cG9ydHtjcmVhdGVHYW1lYm9hcmR9IiwiaW1wb3J0IHsgY3JlYXRlR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCJcblxuY29uc3QgY3JlYXRlUGxheWVyID0gKHBsYXllck5hbWUpID0+e1xuICAgIGNvbnN0IHBsYXllckJvYXJkID0gY3JlYXRlR2FtZWJvYXJkKCk7XG5cbiAgICBjb25zdCBnZXRNaXNzQXJyYXkgPSgpPT57XG4gICAgICAgIHJldHVybiBwbGF5ZXJCb2FyZC5taXNzQXJyYXlcbiAgICB9XG5cbiAgICBjb25zdCBnZXRTaGlwQXJyYXkgPSgpPT57XG4gICAgICAgIHJldHVybiBwbGF5ZXJCb2FyZC5zaGlwQXJyYXlcbiAgICB9XG5cbiAgICBjb25zdCBoYXNMb3N0ID0gKCkgPT4ge1xuICAgICAgICBpZiAoIHBsYXllckJvYXJkLmlzR2FtZUxvc3QoKSApe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHJldHVybiBmYWxzZVxuICAgIH1cbiAgIFxuICAgIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoaGl0Q29vcmRpbmF0ZXMpPT57XG4gICAgICAgIHBsYXllckJvYXJkLnJlY2VpdmVBdHRhY2soaGl0Q29vcmRpbmF0ZXMpXG4gICAgfVxuXG5cbiAgICBjb25zdCBwbGFjZVNoaXAgPSAobmFtZSxjb29yZGluYXRlcyk9PntcbiAgICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKG5hbWUsY29vcmRpbmF0ZXMpXG4gICAgfVxuXG5cbiAgICAgcmV0dXJuIHtwbGF5ZXJOYW1lLCBoYXNMb3N0LCBwbGFjZVNoaXAsIHJlY2VpdmVBdHRhY2ssIGdldE1pc3NBcnJheSwgZ2V0U2hpcEFycmF5fVxufVxuXG5leHBvcnQge2NyZWF0ZVBsYXllcn0iLCJpbXBvcnQgeyBjcmVhdGVIdG1sRWxlbWVudCB9IGZyb20gXCIuL2NyZWF0ZUh0bWxFbGVtZW50XCI7XG5cbmNvbnN0IHJlbmRlckJvYXJkcyA9ICgpID0+e1xuICAgIGNvbnN0IGZpcnN0R2FtZWJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXJHYW1lYm9hcmRcIik7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTAwOyBpKyspIHtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gY3JlYXRlSHRtbEVsZW1lbnQoXCJkaXZcIixpLFsnc3F1YXJlJ10sbnVsbCk7XG4gICAgICAgIGZpcnN0R2FtZWJvYXJkLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gfVxuXG4gY29uc3Qgc2Vjb25kR2FtZWJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb21wdXRlckdhbWVib2FyZFwiKTtcbiBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDA7IGkrKykge1xuICAgIGNvbnN0IHNxdWFyZSA9IGNyZWF0ZUh0bWxFbGVtZW50KFwiZGl2XCIsaSxbJ3NxdWFyZSddLG51bGwpO1xuICAgIHNlY29uZEdhbWVib2FyZC5hcHBlbmRDaGlsZChzcXVhcmUpO1xufVxuXG59XG5leHBvcnQge3JlbmRlckJvYXJkc30iLCIgY29uc3QgY3JlYXRlU2hpcCA9IChuYW1lLCBsZW5ndGgsIGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgY29uc3Qgc2hpcENvb3JkaW5hdGVzID0gWy4uLmNvb3JkaW5hdGVzXVxuICAgIGNvbnN0IGhpdEFycmF5ID0gW107XG5cbiAgICAgICAgY29uc3QgaGl0ID0gKGhpdENvb3JkaW5hdGVzKSA9PiB7XG4gICAgICAgICAgICBjb29yZGluYXRlcy5mb3JFYWNoKHNoaXBTcXVhcmUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzaGlwU3F1YXJlID09PSBoaXRDb29yZGluYXRlcyl7XG4gICAgICAgICAgICAgICAgICAgIGhpdEFycmF5LnB1c2goaGl0Q29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNTdW5rID0gKCk9PntcbiAgICAgICAgICAgIGlmKGhpdEFycmF5Lmxlbmd0aD09PWxlbmd0aCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB7bmFtZSwgaGl0LCBpc1N1bmssIHNoaXBDb29yZGluYXRlc31cblxufVxuXG5leHBvcnQge2NyZWF0ZVNoaXB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyByZW5kZXJCb2FyZHMgfSBmcm9tIFwiLi9yZW5kZXJCb2FyZHNcIjtcbmltcG9ydCB7IGRpc3BsYXlTaGlwcywgc3F1YXJlIH0gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQgeyBjcmVhdGVQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuXG5yZW5kZXJCb2FyZHMoKTtcblxuY29uc3QgZ2FtZSA9ICgpID0+e1xuICAgIGNvbnN0IGh1bWFuID0gY3JlYXRlUGxheWVyKFwiaHVtYW5cIik7XG4gICAgY29uc3QgY29tcHV0ZXIgPSBjcmVhdGVQbGF5ZXIoXCJjb21wdXRlclwiKTtcbiAgICBodW1hbi5wbGFjZVNoaXAoXCJzdWJtYXJpbmVcIiwxMik7XG4gICAgaHVtYW4ucGxhY2VTaGlwKFwiYmF0dGxlc2hpcFwiLDIwKTtcbiAgICBjb21wdXRlci5wbGFjZVNoaXAoXCJzdW1iYXJpbmVcIiw2MCk7XG4gICAgY29tcHV0ZXIucGxhY2VTaGlwKFwiYmF0dGxlc2hpcFwiLDgwKTtcbiAgICBkaXNwbGF5U2hpcHMoaHVtYW4pO1xufVxuXG5nYW1lKCk7XG5jb25zb2xlLmxvZyhzcXVhcmUpIl0sInNvdXJjZVJvb3QiOiIifQ==