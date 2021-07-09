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
/* harmony export */   "renderBoards": () => (/* binding */ renderBoards),
/* harmony export */   "attack": () => (/* binding */ attack)
/* harmony export */ });
/* harmony import */ var _createHtmlElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createHtmlElement */ "./src/JS/createHtmlElement.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var renderBoards = function renderBoards(playerOne, playerTwo) {
  var firstGameboard = document.querySelector("#playerGameboard");

  for (var i = 1; i <= 100; i++) {
    var square = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", i, ["".concat(playerOne.playerName, "square")], null);
    firstGameboard.appendChild(square);
  }

  var secondGameboard = document.querySelector("#computerGameboard");

  for (var _i = 1; _i <= 100; _i++) {
    var _square = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", _i, ["".concat(playerTwo.playerName, "square")], null);

    _square.addEventListener("click", function (e) {
      attack(playerTwo, Number(e.target.id));
    });

    secondGameboard.appendChild(_square);
  }
};

var displayShips = function displayShips(player) {
  var squares = document.querySelectorAll(".".concat(player.playerName, "square"));
  var displayArray = [];
  player.getShipArray().forEach(function (ship) {
    displayArray.push.apply(displayArray, _toConsumableArray(ship.shipCoordinates));
  });
  squares.forEach(function (square) {
    if (displayArray.includes(Number(square.id))) {
      square.textContent = "Ship";
    }
  });
};

var attack = function attack(player, coordinates) {
  player.receiveAttack(coordinates);
  console.log(player.playerName, coordinates);
  var squares = document.querySelectorAll(".".concat(player.playerName, "square"));
  squares.forEach(function (square) {
    if (player.getHitArray().includes(Number(square.id))) {
      square.setAttribute("style", "background-color: red;");
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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



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

  var getHitArray = function getHitArray() {
    var hitArray = [];
    shipArray.forEach(function (ship) {
      hitArray.push.apply(hitArray, _toConsumableArray(ship.hitArray));
    });
    return hitArray;
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
    shipArray: shipArray,
    getHitArray: getHitArray
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

  var getHitArray = function getHitArray() {
    return playerBoard.getHitArray();
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
    getShipArray: getShipArray,
    getHitArray: getHitArray
  };
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
    shipCoordinates: shipCoordinates,
    hitArray: hitArray
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
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/JS/dom.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/JS/player.js");



var game = function game() {
  var human = (0,_player__WEBPACK_IMPORTED_MODULE_1__.createPlayer)("human");
  var computer = (0,_player__WEBPACK_IMPORTED_MODULE_1__.createPlayer)("computer");
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.renderBoards)(human, computer);
  human.placeShip("submarine", 12);
  human.placeShip("battleship", 20);
  computer.placeShip("sumbarine", 60);
  computer.placeShip("battleship", 80);
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.displayShips)(human);
  /*     attack(human,12);
      attack(computer,80) */

  /*   displayShips(); */
};

game();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvSlMvY3JlYXRlSHRtbEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL0pTL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvSlMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9KUy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL0pTL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL0pTL2luZGV4LmpzIl0sIm5hbWVzIjpbImNyZWF0ZUh0bWxFbGVtZW50IiwidHlwZSIsImlkIiwiYXJyYXlDbGFzc2VzIiwiY29udGVudCIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJmb3JFYWNoIiwibXlDbGFzcyIsImNsYXNzTGlzdCIsImFkZCIsImlubmVyVGV4dCIsInJlbmRlckJvYXJkcyIsInBsYXllck9uZSIsInBsYXllclR3byIsImZpcnN0R2FtZWJvYXJkIiwicXVlcnlTZWxlY3RvciIsImkiLCJzcXVhcmUiLCJwbGF5ZXJOYW1lIiwiYXBwZW5kQ2hpbGQiLCJzZWNvbmRHYW1lYm9hcmQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImF0dGFjayIsIk51bWJlciIsInRhcmdldCIsImRpc3BsYXlTaGlwcyIsInBsYXllciIsInNxdWFyZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZGlzcGxheUFycmF5IiwiZ2V0U2hpcEFycmF5Iiwic2hpcCIsInB1c2giLCJzaGlwQ29vcmRpbmF0ZXMiLCJpbmNsdWRlcyIsInRleHRDb250ZW50IiwiY29vcmRpbmF0ZXMiLCJyZWNlaXZlQXR0YWNrIiwiY29uc29sZSIsImxvZyIsImdldEhpdEFycmF5Iiwic2V0QXR0cmlidXRlIiwiY3JlYXRlR2FtZWJvYXJkIiwic2hpcEFycmF5IiwibWlzc0FycmF5IiwicGxhY2VTaGlwIiwibmFtZSIsImNvb3JkaW5hdGUiLCJsZW5ndGgiLCJjb29yZGluYXRlQXJyYXkiLCJnZXRDb29yZGluYXRlcyIsImNyZWF0ZVNoaXAiLCJoaXRDb29yZGluYXRlcyIsIm1pc3MiLCJoaXQiLCJoaXRBcnJheSIsImlzR2FtZUxvc3QiLCJzdW5rQXJyYXkiLCJpc1N1bmsiLCJjcmVhdGVQbGF5ZXIiLCJwbGF5ZXJCb2FyZCIsImdldE1pc3NBcnJheSIsImhhc0xvc3QiLCJzaGlwU3F1YXJlIiwiZ2FtZSIsImh1bWFuIiwiY29tcHV0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxJQUFELEVBQU9DLEVBQVAsRUFBV0MsWUFBWCxFQUF5QkMsT0FBekIsRUFBcUM7QUFDM0QsTUFBTUMsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUJOLElBQXZCLENBQWhCO0FBQ0EsTUFBSUMsRUFBSixFQUFRRyxPQUFPLENBQUNILEVBQVIsR0FBYUEsRUFBYjtBQUNSLE1BQUlDLFlBQUosRUFBa0JBLFlBQVksQ0FBQ0ssT0FBYixDQUFxQixVQUFDQyxPQUFEO0FBQUEsV0FBYUosT0FBTyxDQUFDSyxTQUFSLENBQWtCQyxHQUFsQixDQUFzQkYsT0FBdEIsQ0FBYjtBQUFBLEdBQXJCO0FBRWxCLE1BQUlMLE9BQUosRUFBYUMsT0FBTyxDQUFDTyxTQUFSLEdB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QUFvQnpCLG1CQUFlLEVBQWZBLGVBQXBCO0FBQXFDc0IsWUFBUSxFQUFSQTtBQUFyQyxHQUFQO0FBRVAsQ0F0QkE7Ozs7Ozs7O1VDQUQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTs7QUFLQSxJQUFNUyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFLO0FBQ2QsTUFBTUMsS0FBSyxHQUFHTixxREFBWSxDQUFDLE9BQUQsQ0FBMUI7QUFDQSxNQUFNTyxRQUFRLEdBQUdQLHFEQUFZLENBQUMsVUFBRCxDQUE3QjtBQUNBakQsb0RBQVksQ0FBQ3VELEtBQUQsRUFBT0MsUUFBUCxDQUFaO0FBQ0FELE9BQUssQ0FBQ3BCLFNBQU4sQ0FBZ0IsV0FBaEIsRUFBNEIsRUFBNUI7QUFDQW9CLE9BQUssQ0FBQ3BCLFNBQU4sQ0FBZ0IsWUFBaEIsRUFBNkIsRUFBN0I7QUFDQXFCLFVBQVEsQ0FBQ3JCLFNBQVQsQ0FBbUIsV0FBbkIsRUFBK0IsRUFBL0I7QUFDQXFCLFVBQVEsQ0FBQ3JCLFNBQVQsQ0FBbUIsWUFBbkIsRUFBZ0MsRUFBaEM7QUFDQXBCLG9EQUFZLENBQUN3QyxLQUFELENBQVo7QUFDSjtBQUNBOztBQUNFO0FBQ0QsQ0FaRDs7QUFhQUQsSUFBSSxHIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNyZWF0ZUh0bWxFbGVtZW50ID0gKHR5cGUsIGlkLCBhcnJheUNsYXNzZXMsIGNvbnRlbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICBpZiAoaWQpIGVsZW1lbnQuaWQgPSBpZDtcbiAgICBpZiAoYXJyYXlDbGFzc2VzKSBhcnJheUNsYXNzZXMuZm9yRWFjaCgobXlDbGFzcykgPT4gZWxlbWVudC5jbGFzc0xpc3QuYWRkKG15Q2xhc3MpKTtcbiAgXG4gICAgaWYgKGNvbnRlbnQpIGVsZW1lbnQuaW5uZXJUZXh0ID0gY29udGVudDtcbiAgXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH07XG4gIGV4cG9ydCB7Y3JlYXRlSHRtbEVsZW1lbnR9IiwiaW1wb3J0IHtjcmVhdGVIdG1sRWxlbWVudH0gZnJvbSAnLi9jcmVhdGVIdG1sRWxlbWVudCdcblxuY29uc3QgcmVuZGVyQm9hcmRzID0gKHBsYXllck9uZSxwbGF5ZXJUd28pID0+e1xuXG4gICAgY29uc3QgZmlyc3RHYW1lYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXllckdhbWVib2FyZFwiKTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDA7IGkrKykge1xuICAgICAgICBjb25zdCBzcXVhcmUgPSBjcmVhdGVIdG1sRWxlbWVudChcImRpdlwiLGksW2Ake3BsYXllck9uZS5wbGF5ZXJOYW1lfXNxdWFyZWBdLG51bGwpO1xuICAgICAgICBmaXJzdEdhbWVib2FyZC5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgICAgICB9XG5cblxuIGNvbnN0IHNlY29uZEdhbWVib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29tcHV0ZXJHYW1lYm9hcmRcIik7XG4gZm9yIChsZXQgaSA9IDE7IGkgPD0gMTAwOyBpKyspIHtcbiAgICBjb25zdCBzcXVhcmUgPSBjcmVhdGVIdG1sRWxlbWVudChcImRpdlwiLGksW2Ake3BsYXllclR3by5wbGF5ZXJOYW1lfXNxdWFyZWBdLG51bGwpO1xuICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixlID0+IHtcbiAgICAgICAgYXR0YWNrKHBsYXllclR3byxOdW1iZXIoZS50YXJnZXQuaWQpKVxuICAgIH0pXG4gICAgc2Vjb25kR2FtZWJvYXJkLmFwcGVuZENoaWxkKHNxdWFyZSk7XG59XG5cbn1cblxuXG4gIGNvbnN0IGRpc3BsYXlTaGlwcyA9IChwbGF5ZXIpID0+eyAgIFxuICAgICAgY29uc3Qgc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke3BsYXllci5wbGF5ZXJOYW1lfXNxdWFyZWApXG4gICAgICBjb25zdCBkaXNwbGF5QXJyYXk9W107XG4gICAgICBwbGF5ZXIuZ2V0U2hpcEFycmF5KCkuZm9yRWFjaChzaGlwPT57XG4gICAgICAgICAgZGlzcGxheUFycmF5LnB1c2goLi4uc2hpcC5zaGlwQ29vcmRpbmF0ZXMpXG4gICAgICB9KVxuXG4gICAgIHNxdWFyZXMuZm9yRWFjaChzcXVhcmU9PntcbiAgICAgICAgaWYoZGlzcGxheUFycmF5LmluY2x1ZGVzKE51bWJlcihzcXVhcmUuaWQpKSl7XG4gICAgICAgICAgICBzcXVhcmUudGV4dENvbnRlbnQgPSBcIlNoaXBcIlxuICAgICAgICB9XG4gICAgICB9KSBcbiAgICB9XG5cblxuICAgIGNvbnN0IGF0dGFjayA9IChwbGF5ZXIsY29vcmRpbmF0ZXMpID0+e1xuICAgICAgICBwbGF5ZXIucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHBsYXllci5wbGF5ZXJOYW1lLGNvb3JkaW5hdGVzKVxuICAgICAgICBjb25zdCBzcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7cGxheWVyLnBsYXllck5hbWV9c3F1YXJlYCk7XG4gICAgICAgIHNxdWFyZXMuZm9yRWFjaChzcXVhcmU9PntcbiAgICAgICAgICAgIGlmKHBsYXllci5nZXRIaXRBcnJheSgpLmluY2x1ZGVzKE51bWJlcihzcXVhcmUuaWQpKSl7XG4gICAgICAgICAgICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcmVkO1wiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIFxuICAgICAgICB9XG4gXG4gICAgZXhwb3J0IHtkaXNwbGF5U2hpcHMscmVuZGVyQm9hcmRzLGF0dGFja31cblxuIiwiaW1wb3J0IHsgY3JlYXRlU2hpcCB9IGZyb20gXCIuL3NoaXBcIlxuXG5jb25zdCBjcmVhdGVHYW1lYm9hcmQgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2hpcEFycmF5ID0gW107XG4gICAgY29uc3QgbWlzc0FycmF5ID0gW107XG5cbiAgICBjb25zdCBwbGFjZVNoaXAgPSAobmFtZSxjb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGlmIChuYW1lID09PSBcInN1Ym1hcmluZVwiKXtcbiAgICAgICAgICAgIGNvbnN0ICBsZW5ndGggPSAyO1xuICAgICAgICAgICAgY29uc3QgY29vcmRpbmF0ZUFycmF5ID0gZ2V0Q29vcmRpbmF0ZXMoY29vcmRpbmF0ZSwgbGVuZ3RoKVxuICAgICAgICAgIGNvbnN0IHNoaXAgPSBjcmVhdGVTaGlwKG5hbWUsbGVuZ3RoLGNvb3JkaW5hdGVBcnJheSk7XG4gICAgICAgICAgc2hpcEFycmF5LnB1c2goc2hpcCk7ICBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChuYW1lID09PSBcImJhdHRsZXNoaXBcIil7XG4gICAgICAgICAgY29uc3QgIGxlbmd0aCA9IDY7XG4gICAgICAgICAgY29uc3QgY29vcmRpbmF0ZUFycmF5ID0gZ2V0Q29vcmRpbmF0ZXMoY29vcmRpbmF0ZSwgbGVuZ3RoKVxuICAgICAgICAgIGNvbnN0IHNoaXAgPSBjcmVhdGVTaGlwKG5hbWUsbGVuZ3RoLGNvb3JkaW5hdGVBcnJheSk7XG4gICAgICAgICAgc2hpcEFycmF5LnB1c2goc2hpcClcbiAgICAgICAgfVxufVxuXG5jb25zdCBnZXRDb29yZGluYXRlcyA9IChjb29yZGluYXRlLCBsZW5ndGgpID0+e1xuICAgIGxldCBjb29yZGluYXRlQXJyYXkgPVtdO1xuXG4gICAgaWYgKGNvb3JkaW5hdGUrbGVuZ3RoID4gMTAwKXtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaS0tKSB7ICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBjb29yZGluYXRlQXJyYXkucHVzaChjb29yZGluYXRlICsgaSlcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7ICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBjb29yZGluYXRlQXJyYXkucHVzaChjb29yZGluYXRlICsgaSlcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHJldHVybiBjb29yZGluYXRlQXJyYXlcbn1cblxuY29uc3QgcmVjZWl2ZUF0dGFjayA9IChoaXRDb29yZGluYXRlcykgPT57XG4gICAgbGV0IG1pc3MgPSB0cnVlO1xuIFxuICAgICBzaGlwQXJyYXkuZm9yRWFjaChzaGlwPT57XG4gICAgICAgICBpZiAoc2hpcC5zaGlwQ29vcmRpbmF0ZXMuaW5jbHVkZXMoaGl0Q29vcmRpbmF0ZXMpKXtcbiAgICAgICAgICAgICBzaGlwLmhpdChoaXRDb29yZGluYXRlcyk7XG4gICAgICAgICAgICBtaXNzPWZhbHNlO1xuICAgICAgICAgfVxuICAgICB9KVxuIFxuICAgICBpZiAobWlzcyl7XG4gICAgICAgICBtaXNzQXJyYXkucHVzaChoaXRDb29yZGluYXRlcylcbiAgICAgfSAgICAgIFxuICAgICAgXG4gfVxuXG4gY29uc3QgZ2V0SGl0QXJyYXkgPSAoKT0+e1xuICAgIGNvbnN0IGhpdEFycmF5ID0gW107XG4gICAgIHNoaXBBcnJheS5mb3JFYWNoKHNoaXA9PntcbiAgICAgICAgIGhpdEFycmF5LnB1c2goLi4uc2hpcC5oaXRBcnJheSlcbiAgICAgfSlcbiAgICAgcmV0dXJuIGhpdEFycmF5XG4gfVxuXG4gY29uc3QgaXNHYW1lTG9zdCA9ICgpID0+IHtcbiAgICBjb25zdCBzdW5rQXJyYXkgPSBbXTtcbiAgICBzaGlwQXJyYXkuZm9yRWFjaChzaGlwID0+e1xuICAgICAgICBpZihzaGlwLmlzU3VuaygpID09PSB0cnVlKXtcbiAgICAgICAgICAgIHN1bmtBcnJheS5wdXNoKHNoaXApO1xuICAgICAgICB9XG4gICAgfSlcbiAgICBpZiAoc3Vua0FycmF5Lmxlbmd0aCA9PT0gc2hpcEFycmF5Lmxlbmd0aCl7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG59XG5cbiAgICByZXR1cm4ge2lzR2FtZUxvc3QscmVjZWl2ZUF0dGFjayxwbGFjZVNoaXAsbWlzc0FycmF5LHNoaXBBcnJheSxnZXRIaXRBcnJheX1cbn1cblxuZXhwb3J0e2NyZWF0ZUdhbWVib2FyZH0iLCJpbXBvcnQgeyBjcmVhdGVHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIlxuXG5jb25zdCBjcmVhdGVQbGF5ZXIgPSAocGxheWVyTmFtZSkgPT57XG4gICAgY29uc3QgcGxheWVyQm9hcmQgPSBjcmVhdGVHYW1lYm9hcmQoKTtcblxuICAgIGNvbnN0IGdldE1pc3NBcnJheSA9KCk9PntcbiAgICAgICAgcmV0dXJuIHBsYXllckJvYXJkLm1pc3NBcnJheVxuICAgIH1cblxuICAgIGNvbnN0IGdldFNoaXBBcnJheSA9KCk9PntcbiAgICAgICAgcmV0dXJuIHBsYXllckJvYXJkLnNoaXBBcnJheVxuICAgIH1cblxuICAgIGNvbnN0IGhhc0xvc3QgPSAoKSA9PiB7XG4gICAgICAgIGlmICggcGxheWVyQm9hcmQuaXNHYW1lTG9zdCgpICl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgXG4gICAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChoaXRDb29yZGluYXRlcyk9PntcbiAgICAgICAgcGxheWVyQm9hcmQucmVjZWl2ZUF0dGFjayhoaXRDb29yZGluYXRlcylcbiAgICB9XG4gICAgY29uc3QgZ2V0SGl0QXJyYXkgPSAoKT0+e1xuICAgICAgICByZXR1cm4gcGxheWVyQm9hcmQuZ2V0SGl0QXJyYXkoKVxuICAgIH1cblxuXG4gICAgY29uc3QgcGxhY2VTaGlwID0gKG5hbWUsY29vcmRpbmF0ZXMpPT57XG4gICAgICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcChuYW1lLGNvb3JkaW5hdGVzKVxuICAgIH1cblxuXG4gICAgIHJldHVybiB7cGxheWVyTmFtZSwgaGFzTG9zdCwgcGxhY2VTaGlwLCByZWNlaXZlQXR0YWNrLCBnZXRNaXNzQXJyYXksIGdldFNoaXBBcnJheSwgZ2V0SGl0QXJyYXl9XG59XG5cbmV4cG9ydCB7Y3JlYXRlUGxheWVyfSIsIiBjb25zdCBjcmVhdGVTaGlwID0gKG5hbWUsIGxlbmd0aCwgY29vcmRpbmF0ZXMpID0+IHtcbiAgICBjb25zdCBzaGlwQ29vcmRpbmF0ZXMgPSBbLi4uY29vcmRpbmF0ZXNdXG4gICAgY29uc3QgaGl0QXJyYXkgPSBbXTtcblxuICAgICAgICBjb25zdCBoaXQgPSAoaGl0Q29vcmRpbmF0ZXMpID0+IHtcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzLmZvckVhY2goc2hpcFNxdWFyZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHNoaXBTcXVhcmUgPT09IGhpdENvb3JkaW5hdGVzKXtcbiAgICAgICAgICAgICAgICAgICAgaGl0QXJyYXkucHVzaChoaXRDb29yZGluYXRlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpc1N1bmsgPSAoKT0+e1xuICAgICAgICAgICAgaWYoaGl0QXJyYXkubGVuZ3RoPT09bGVuZ3RoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHtuYW1lLCBoaXQsIGlzU3Vuaywgc2hpcENvb3JkaW5hdGVzLCBoaXRBcnJheX1cblxufVxuXG5leHBvcnQge2NyZWF0ZVNoaXB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBhdHRhY2ssIGRpc3BsYXlTaGlwcywgcmVuZGVyQm9hcmRzIH0gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQgeyBjcmVhdGVQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuXG5cblxuY29uc3QgZ2FtZSA9ICgpID0+e1xuICAgIGNvbnN0IGh1bWFuID0gY3JlYXRlUGxheWVyKFwiaHVtYW5cIik7XG4gICAgY29uc3QgY29tcHV0ZXIgPSBjcmVhdGVQbGF5ZXIoXCJjb21wdXRlclwiKTtcbiAgICByZW5kZXJCb2FyZHMoaHVtYW4sY29tcHV0ZXIpO1xuICAgIGh1bWFuLnBsYWNlU2hpcChcInN1Ym1hcmluZVwiLDEyKTtcbiAgICBodW1hbi5wbGFjZVNoaXAoXCJiYXR0bGVzaGlwXCIsMjApO1xuICAgIGNvbXB1dGVyLnBsYWNlU2hpcChcInN1bWJhcmluZVwiLDYwKTtcbiAgICBjb21wdXRlci5wbGFjZVNoaXAoXCJiYXR0bGVzaGlwXCIsODApO1xuICAgIGRpc3BsYXlTaGlwcyhodW1hbik7XG4vKiAgICAgYXR0YWNrKGh1bWFuLDEyKTtcbiAgICBhdHRhY2soY29tcHV0ZXIsODApICovXG4gIC8qICAgZGlzcGxheVNoaXBzKCk7ICovXG59XG5nYW1lKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9