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
/* harmony export */   "renderBoards": () => (/* binding */ renderBoards)
/* harmony export */ });
/* harmony import */ var _createHtmlElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createHtmlElement */ "./src/JS/createHtmlElement.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var renderBoards = function renderBoards(playerOne, playerTwo) {
  var gameBoardContainer = document.querySelector("#gameboard-container");
  var firstGameboard = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('div', "".concat(playerOne.playerName, "Gameboard"), ['gameboard'], null);
  gameBoardContainer.appendChild(firstGameboard);

  for (var i = 1; i <= 100; i++) {
    var square = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", i, ["".concat(playerOne.playerName, "square")], null);
    firstGameboard.appendChild(square);
  }

  var secondGameboard = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('div', "".concat(playerTwo.playerName, "Gameboard"), ['gameboard'], null);
  gameBoardContainer.appendChild(secondGameboard);

  for (var _i = 1; _i <= 100; _i++) {
    var _square = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", _i, ["".concat(playerTwo.playerName, "square")], null);

    _square.addEventListener("click", function (e) {
      if (!e.target.classList.contains("clicked") && !isGameOver(playerOne, playerTwo)) {
        playRound(playerTwo, Number(e.target.id));
        e.target.classList.add("clicked");
        isGameOver(playerOne, playerTwo);
      }
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

var displayMissArray = function displayMissArray(squares, player) {
  squares.forEach(function (square) {
    if (player.getMissArray().includes(Number(square.id))) {
      square.textContent = "X";
    }
  });
};

var displaySunkShips = function displaySunkShips(squares, player) {
  var sunkArray = [];
  player.getShipArray().forEach(function (ship) {
    if (ship.isSunk()) {
      sunkArray.push.apply(sunkArray, _toConsumableArray(ship.shipCoordinates));
    }
  });
  squares.forEach(function (square) {
    if (sunkArray.includes(Number(square.id))) {
      square.textContent = "SUNK";
    }
  });
};

var isGameOver = function isGameOver(playerOne, playerTwo) {
  if (playerOne.hasLost()) {
    alert("".concat(playerOne.playerName, " has won  !"));
    return true;
  } else if (playerTwo.hasLost()) {
    alert("".concat(playerTwo.playerName, " has won !"));
    return true;
  } else {
    return false;
  }
};

var playRound = function playRound(playerTwo, coordinates) {
  var squares = document.querySelectorAll(".".concat(playerTwo.playerName, "square"));
  attack(playerTwo, coordinates);
  displayMissArray(squares, playerTwo);
  displaySunkShips(squares, playerTwo);
};

var placeShip = function placeShip(name, player) {
  player.placeShip("name");
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
  var human = (0,_player__WEBPACK_IMPORTED_MODULE_1__.createPlayer)(prompt("choose a name"));
  var computer = (0,_player__WEBPACK_IMPORTED_MODULE_1__.createPlayer)("computer");
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.renderBoards)(human, computer);
  human.placeShip("submarine", 12);
  human.placeShip("battleship", 20);
  computer.placeShip("submarine", 60);
  computer.placeShip("battleship", 80);
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.displayShips)(human);
};

game();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvSlMvY3JlYXRlSHRtbEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL0pTL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvSlMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9KUy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL0pTL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL0pTL2luZGV4LmpzIl0sIm5hbWVzIjpbImNyZWF0ZUh0bWxFbGVtZW50IiwidHlwZSIsImlkIiwiYXJyYXlDbGFzc2VzIiwiY29udGVudCIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJmb3JFYWNoIiwibXlDbGFzcyIsImNsYXNzTGlzdCIsImFkZCIsImlubmVyVGV4dCIsInJlbmRlckJvYXJkcyIsInBsYXllck9uZSIsInBsYXllclR3byIsImdhbWVCb2FyZENvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJmaXJzdEdhbWVib2FyZCIsInBsYXllck5hbWUiLCJhcHBlbmRDaGlsZCIsImkiLCJzcXVhcmUiLCJzZWNvbmRHYW1lYm9hcmQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsImNvbnRhaW5zIiwiaXNHYW1lT3ZlciIsInBsYXlSb3VuZCIsIk51bWJlciIsImRpc3BsYXlTaGlwcyIsInBsYXllciIsInNxdWFyZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZGlzcGxheUFycmF5IiwiZ2V0U2hpcEFycmF5Iiwic2hpcCIsInB1c2giLCJzaGlwQ29vcmRpbmF0ZXMiLCJpbmNsdWRlcyIsInRleHRDb250ZW50IiwiYXR0YWNrIiwiY29vcmRpbmF0ZXMiLCJyZWNlaXZlQXR0YWNrIiwiY29uc29sZSIsImxvZyIsImdldEhpdEFycmF5Iiwic2V0QXR0cmlidXRlIiwiZGlzcGxheU1pc3NBcnJheSIsImdldE1pc3NBcnJheSIsImRpc3BsYXlTdW5rU2hpcHMiLCJzdW5rQXJyYXkiLCJpc1N1bmsiLCJoYXNMb3N0IiwiYWxlcnQiLCJwbGFjZVNoaXAiLCJuYW1lIiwiY3JlYXRlR2FtZWJvYXJkIiwic2hpcEFycmF5IiwibWlzc0FycmF5IiwiY29vcmRpbmF0ZSIsImxlbmd0aCIsImNvb3JkaW5hdGVBcnJheSIsImdldENvb3JkaW5hdGVzIiwiY3JlYXRlU2hpcCIsImhpdENvb3JkaW5hdGVzIiwibWlzcyIsImhpdCIsImhpdEFycmF5IiwiaXNHYW1lTG9zdCIsImNyZWF0ZVBsYXllciIsInBsYXllckJvYXJkIiwic2hpcFNxdWFyZSIsImdhbWUiLCJodW1hbiIsInByb21wdCIsImNvbXB1dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsSUFBRCxFQUFPQyxFQUFQLEVBQVdDLFlBQVgsRUFBeUJDLE9BQXpCLEVBQXFDO0FBQzNELE1BQU1DLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCTixJQUF2QixDQUFoQjtBQUNBLE1BQUlDLEVBQUosRUFBUUcsT0FBTyxDQUFDSCxFQUFSLEdBQWFBLEVBQWI7QUFDUixNQUFJQyxZQUFKLEVBQWtCQSxZQUFZLENBQUNLLE9BQWIsQ0FBcUIsVUFBQ0MsT0FBRDtBQUFBLFdBQWFKLE9BQU8sQ0FBQ0ssU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0JGLE9BQXRCLENBQWI7QUFBQSxHQUFyQjtBQUVsQixNQUFJTCxPQUFKLEVBQWFDLE9BQU8sQ0FBQ08sU0FBUixHQUFvQlIsT0FBcEI7QUFFYixTQUFPQyxPQUFQO0FBQ0QsQ0FSSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7O0FBRUEsSUFBTVEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsU0FBRCxFQUFXQyxTQUFYLEVBQXdCO0FBQ3pDLE1BQU1DLGtCQUFrQixHQUFHVixRQUFRLENBQUNXLGFBQVQsQ0FBdUIsc0JBQXZCLENBQTNCO0FBRUEsTUFBTUMsY0FBYyxHQUFHbEIscUVBQWlCLENBQUMsS0FBRCxZQUFVYyxTQUFTLENBQUNLLFVBQXBCLGdCQUEwQyxDQUFDLFdBQUQsQ0FBMUMsRUFBd0QsSUFBeEQsQ0FBeEM7QUFDQUgsb0JBQWtCLENBQUNJLFdBQW5CLENBQStCRixjQUEvQjs7QUFFQSxPQUFLLElBQUlHLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLElBQUksR0FBckIsRUFBMEJBLENBQUMsRUFBM0IsRUFBK0I7QUFDM0IsUUFBTUMsTUFBTSxHQUFHdEIscUVBQWlCLENBQUMsS0FBRCxFQUFPcUIsQ0FBUCxFQUFTLFdBQUlQLFNBQVMsQ0FBQ0ssVUFBZCxZQUFULEVBQTJDLElBQTNDLENBQWhDO0FBQ0FELGtCQUFjLENBQUNFLFdBQWYsQ0FBMkJFLE1BQTNCO0FBQ0M7O0FBR0wsTUFBTUMsZUFBZSxHQUFHdkIscUVBQWlCLENBQUMsS0FBRCxZQUFVZSxTQUFTLENBQUNJLFVBQXBCLGdCQUEwQyxDQUFDLFdBQUQsQ0FBMUMsRUFBd0QsSUFBeEQsQ0FBekM7QUFDQUgsb0JBQWtCLENBQUNJLFdBQW5CLENBQStCRyxlQUEvQjs7QUFFQSxPQUFLLElBQUlGLEVBQUMsR0FBRyxDQUFiLEVBQWdCQSxFQUFDLElBQUksR0FBckIsRUFBMEJBLEVBQUMsRUFBM0IsRUFBK0I7QUFDL0IsUUFBTUMsT0FBTSxHQUFHdEIscUVBQWlCLENBQUMsS0FBRCxFQUFPcUIsRUFBUCxFQUFTLFdBQUlOLFNBQVMsQ0FBQ0ksVUFBZCxZQUFULEVBQTJDLElBQTNDLENBQWhDOztBQUNBRyxXQUFNLENBQUNFLGdCQUFQLENBQXdCLE9BQXhCLEVBQWdDLFVBQUFDLENBQUMsRUFBSTtBQUNqQyxVQUFJLENBQUNBLENBQUMsQ0FBQ0MsTUFBRixDQUFTaEIsU0FBVCxDQUFtQmlCLFFBQW5CLENBQTRCLFNBQTVCLENBQUQsSUFBNEMsQ0FBQ0MsVUFBVSxDQUFDZCxTQUFELEVBQVdDLFNBQVgsQ0FBM0QsRUFBaUY7QUFDL0VjLGlCQUFTLENBQUNkLFNBQUQsRUFBV2UsTUFBTSxDQUFDTCxDQUFDLENBQUNDLE1BQUYsQ0FBU3hCLEVBQVYsQ0FBakIsQ0FBVDtBQUNFdUIsU0FBQyxDQUFDQyxNQUFGLENBQVNoQixTQUFULENBQW1CQyxHQUFuQixDQUF1QixTQUF2QjtBQUNBaUIsa0JBQVUsQ0FBQ2QsU0FBRCxFQUFZQyxTQUFaLENBQVY7QUFDSDtBQUVKLEtBUEQ7O0FBUUFRLG1CQUFlLENBQUNILFdBQWhCLENBQTRCRSxPQUE1QjtBQUdIO0FBRUEsQ0E5QkQ7O0FBaUNFLElBQU1TLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLE1BQUQsRUFBVztBQUM1QixNQUFNQyxPQUFPLEdBQUczQixRQUFRLENBQUM0QixnQkFBVCxZQUE4QkYsTUFBTSxDQUFDYixVQUFyQyxZQUFoQjtBQUNBLE1BQU1nQixZQUFZLEdBQUMsRUFBbkI7QUFDQUgsUUFBTSxDQUFDSSxZQUFQLEdBQXNCNUIsT0FBdEIsQ0FBOEIsVUFBQTZCLElBQUksRUFBRTtBQUNoQ0YsZ0JBQVksQ0FBQ0csSUFBYixPQUFBSCxZQUFZLHFCQUFTRSxJQUFJLENBQUNFLGVBQWQsRUFBWjtBQUNILEdBRkQ7QUFJRE4sU0FBTyxDQUFDekIsT0FBUixDQUFnQixVQUFBYyxNQUFNLEVBQUU7QUFDckIsUUFBR2EsWUFBWSxDQUFDSyxRQUFiLENBQXNCVixNQUFNLENBQUNSLE1BQU0sQ0FBQ3BCLEVBQVIsQ0FBNUIsQ0FBSCxFQUE0QztBQUN4Q29CLFlBQU0sQ0FBQ21CLFdBQVAsR0FBcUIsTUFBckI7QUFDSDtBQUNGLEdBSkY7QUFLQSxDQVpIOztBQWVFLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNWLE1BQUQsRUFBUVcsV0FBUixFQUF1QjtBQUNsQ1gsUUFBTSxDQUFDWSxhQUFQLENBQXFCRCxXQUFyQjtBQUNBRSxTQUFPLENBQUNDLEdBQVIsQ0FBWWQsTUFBTSxDQUFDYixVQUFuQixFQUE4QndCLFdBQTlCO0FBQ0EsTUFBTVYsT0FBTyxHQUFHM0IsUUFBUSxDQUFDNEIsZ0JBQVQsWUFBOEJGLE1BQU0sQ0FBQ2IsVUFBckMsWUFBaEI7QUFDQWMsU0FBTyxDQUFDekIsT0FBUixDQUFnQixVQUFBYyxNQUFNLEVBQUU7QUFDcEIsUUFBR1UsTUFBTSxDQUFDZSxXQUFQLEdBQXFCUCxRQUFyQixDQUE4QlYsTUFBTSxDQUFDUixNQUFNLENBQUNwQixFQUFSLENBQXBDLENBQUgsRUFBb0Q7QUFDaERvQixZQUFNLENBQUMwQixZQUFQLENBQW9CLE9BQXBCLEVBQTZCLHdCQUE3QjtBQUNIO0FBQ0YsR0FKSDtBQUtDLENBVEw7O0FBV0csSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDaEIsT0FBRCxFQUFTRCxNQUFULEVBQW1CO0FBQ25DQyxTQUFPLENBQUN6QixPQUFSLENBQWdCLFVBQUFjLE1BQU0sRUFBRTtBQUNwQixRQUFHVSxNQUFNLENBQUNrQixZQUFQLEdBQXNCVixRQUF0QixDQUErQlYsTUFBTSxDQUFDUixNQUFNLENBQUNwQixFQUFSLENBQXJDLENBQUgsRUFBcUQ7QUFDakRvQixZQUFNLENBQUNtQixXQUFQLEdBQW1CLEdBQW5CO0FBQ0g7QUFDRixHQUpIO0FBS0gsQ0FOTjs7QUFRSyxJQUFNVSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNsQixPQUFELEVBQVNELE1BQVQsRUFBbUI7QUFDeEMsTUFBTW9CLFNBQVMsR0FBQyxFQUFoQjtBQUNBcEIsUUFBTSxDQUFDSSxZQUFQLEdBQXNCNUIsT0FBdEIsQ0FBOEIsVUFBQTZCLElBQUksRUFBRTtBQUNoQyxRQUFHQSxJQUFJLENBQUNnQixNQUFMLEVBQUgsRUFBaUI7QUFDZkQsZUFBUyxDQUFDZCxJQUFWLE9BQUFjLFNBQVMscUJBQVNmLElBQUksQ0FBQ0UsZUFBZCxFQUFUO0FBQ0Q7QUFDSixHQUpEO0FBS0FOLFNBQU8sQ0FBQ3pCLE9BQVIsQ0FBZ0IsVUFBQWMsTUFBTSxFQUFFO0FBQ3BCLFFBQUk4QixTQUFTLENBQUNaLFFBQVYsQ0FBbUJWLE1BQU0sQ0FBQ1IsTUFBTSxDQUFDcEIsRUFBUixDQUF6QixDQUFKLEVBQTBDO0FBQ3RDb0IsWUFBTSxDQUFDbUIsV0FBUCxHQUFtQixNQUFuQjtBQUNIO0FBQ0osR0FKRDtBQU1ILENBYkQ7O0FBY0EsSUFBTWIsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ2QsU0FBRCxFQUFZQyxTQUFaLEVBQXdCO0FBQ25DLE1BQUlELFNBQVMsQ0FBQ3dDLE9BQVYsRUFBSixFQUF3QjtBQUNwQkMsU0FBSyxXQUFJekMsU0FBUyxDQUFDSyxVQUFkLGlCQUFMO0FBQ0EsV0FBTyxJQUFQO0FBQ0gsR0FIRCxNQUlLLElBQUlKLFNBQVMsQ0FBQ3VDLE9BQVYsRUFBSixFQUF3QjtBQUN6QkMsU0FBSyxXQUFJeEMsU0FBUyxDQUFDSSxVQUFkLGdCQUFMO0FBQ0EsV0FBTyxJQUFQO0FBQ0gsR0FISSxNQUlBO0FBQ0YsV0FBTyxLQUFQO0FBQ0Y7QUFFUixDQWJEOztBQWNBLElBQU1VLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNkLFNBQUQsRUFBWTRCLFdBQVosRUFBMkI7QUFDekMsTUFBTVYsT0FBTyxHQUFHM0IsUUFBUSxDQUFDNEIsZ0JBQVQsWUFBOEJuQixTQUFTLENBQUNJLFVBQXhDLFlBQWhCO0FBQ0F1QixRQUFNLENBQUMzQixTQUFELEVBQVc0QixXQUFYLENBQU47QUFDQU0sa0JBQWdCLENBQUNoQixPQUFELEVBQVNsQixTQUFULENBQWhCO0FBQ0FvQyxrQkFBZ0IsQ0FBQ2xCLE9BQUQsRUFBU2xCLFNBQVQsQ0FBaEI7QUFFSCxDQU5EOztBQVFBLElBQU15QyxTQUFTLEdBQUUsU0FBWEEsU0FBVyxDQUFDQyxJQUFELEVBQU16QixNQUFOLEVBQWU7QUFDNUJBLFFBQU0sQ0FBQ3dCLFNBQVAsQ0FBaUIsTUFBakI7QUFDSCxDQUZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pHWjs7QUFFQSxJQUFNRSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDMUIsTUFBTUMsU0FBUyxHQUFHLEVBQWxCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHLEVBQWxCOztBQUVBLE1BQU1KLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQsRUFBTUksVUFBTixFQUFxQjtBQUNuQyxRQUFJSixJQUFJLEtBQUssV0FBYixFQUF5QjtBQUNyQixVQUFPSyxNQUFNLEdBQUcsQ0FBaEI7QUFDQSxVQUFNQyxlQUFlLEdBQUdDLGNBQWMsQ0FBQ0gsVUFBRCxFQUFhQyxNQUFiLENBQXRDO0FBQ0YsVUFBTXpCLElBQUksR0FBRzRCLGlEQUFVLENBQUNSLElBQUQsRUFBTUssTUFBTixFQUFhQyxlQUFiLENBQXZCO0FBQ0FKLGVBQVMsQ0FBQ3JCLElBQVYsQ0FBZUQsSUFBZjtBQUNELEtBTEQsTUFNSyxJQUFJb0IsSUFBSSxLQUFLLFlBQWIsRUFBMEI7QUFDN0IsVUFBT0ssT0FBTSxHQUFHLENBQWhCOztBQUNBLFVBQU1DLGdCQUFlLEdBQUdDLGNBQWMsQ0FBQ0gsVUFBRCxFQUFhQyxPQUFiLENBQXRDOztBQUNBLFVBQU16QixLQUFJLEdBQUc0QixpREFBVSxDQUFDUixJQUFELEVBQU1LLE9BQU4sRUFBYUMsZ0JBQWIsQ0FBdkI7O0FBQ0FKLGVBQVMsQ0FBQ3JCLElBQVYsQ0FBZUQsS0FBZjtBQUNEO0FBQ1IsR0FiRzs7QUFlSixNQUFNMkIsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDSCxVQUFELEVBQWFDLE1BQWIsRUFBdUI7QUFDMUMsUUFBSUMsZUFBZSxHQUFFLEVBQXJCOztBQUVBLFFBQUlGLFVBQVUsR0FBQ0MsTUFBWCxHQUFvQixHQUF4QixFQUE0QjtBQUV4QixXQUFLLElBQUl6QyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHeUMsTUFBcEIsRUFBNEJ6QyxDQUFDLEVBQTdCLEVBQWlDO0FBQzdCMEMsdUJBQWUsQ0FBQ3pCLElBQWhCLENBQXFCdUIsVUFBVSxHQUFHeEMsQ0FBbEM7QUFDSDtBQUVKLEtBTkQsTUFPSztBQUNELFdBQUssSUFBSUEsRUFBQyxHQUFHLENBQWIsRUFBZ0JBLEVBQUMsR0FBR3lDLE1BQXBCLEVBQTRCekMsRUFBQyxFQUE3QixFQUFpQztBQUM3QjBDLHVCQUFlLENBQUN6QixJQUFoQixDQUFxQnVCLFVBQVUsR0FBR3hDLEVBQWxDO0FBQ0g7QUFFSjs7QUFDRCxXQUFPMEMsZUFBUDtBQUNILEdBakJEOztBQW1CQSxNQUFNbkIsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDc0IsY0FBRCxFQUFtQjtBQUNyQyxRQUFJQyxJQUFJLEdBQUcsSUFBWDtBQUVDUixhQUFTLENBQUNuRCxPQUFWLENBQWtCLFVBQUE2QixJQUFJLEVBQUU7QUFDcEIsVUFBSUEsSUFBSSxDQUFDRSxlQUFMLENBQXFCQyxRQUFyQixDQUE4QjBCLGNBQTlCLENBQUosRUFBa0Q7QUFDOUM3QixZQUFJLENBQUMrQixHQUFMLENBQVNGLGNBQVQ7QUFDREMsWUFBSSxHQUFDLEtBQUw7QUFDRjtBQUNKLEtBTEQ7O0FBT0EsUUFBSUEsSUFBSixFQUFTO0FBQ0xQLGVBQVMsQ0FBQ3RCLElBQVYsQ0FBZTRCLGNBQWY7QUFDSDtBQUVKLEdBZEY7O0FBZ0JDLE1BQU1uQixXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFJO0FBQ3JCLFFBQU1zQixRQUFRLEdBQUcsRUFBakI7QUFDQ1YsYUFBUyxDQUFDbkQsT0FBVixDQUFrQixVQUFBNkIsSUFBSSxFQUFFO0FBQ3BCZ0MsY0FBUSxDQUFDL0IsSUFBVCxPQUFBK0IsUUFBUSxxQkFBU2hDLElBQUksQ0FBQ2dDLFFBQWQsRUFBUjtBQUNILEtBRkQ7QUFHQSxXQUFPQSxRQUFQO0FBQ0gsR0FORDs7QUFRQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3RCLFFBQU1sQixTQUFTLEdBQUcsRUFBbEI7QUFDQU8sYUFBUyxDQUFDbkQsT0FBVixDQUFrQixVQUFBNkIsSUFBSSxFQUFHO0FBQ3JCLFVBQUdBLElBQUksQ0FBQ2dCLE1BQUwsT0FBa0IsSUFBckIsRUFBMEI7QUFDdEJELGlCQUFTLENBQUNkLElBQVYsQ0FBZUQsSUFBZjtBQUNIO0FBQ0osS0FKRDs7QUFLQSxRQUFJZSxTQUFTLENBQUNVLE1BQVYsS0FBcUJILFNBQVMsQ0FBQ0csTUFBbkMsRUFBMEM7QUFDdEMsYUFBTyxJQUFQO0FBQ0gsS0FGRCxNQUdLO0FBQ0QsYUFBTyxLQUFQO0FBQ0g7QUFDSixHQWJBOztBQWVHLFNBQU87QUFBQ1EsY0FBVSxFQUFWQSxVQUFEO0FBQVkxQixpQkFBYSxFQUFiQSxhQUFaO0FBQTBCWSxhQUFTLEVBQVRBLFNBQTFCO0FBQW9DSSxhQUFTLEVBQVRBLFNBQXBDO0FBQThDRCxhQUFTLEVBQVRBLFNBQTlDO0FBQXdEWixlQUFXLEVBQVhBO0FBQXhELEdBQVA7QUFDSCxDQTlFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTs7QUFFQSxJQUFNd0IsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ3BELFVBQUQsRUFBZTtBQUNoQyxNQUFNcUQsV0FBVyxHQUFHZCwyREFBZSxFQUFuQzs7QUFFQSxNQUFNUixZQUFZLEdBQUUsU0FBZEEsWUFBYyxHQUFJO0FBQ3BCLFdBQU9zQixXQUFXLENBQUNaLFNBQW5CO0FBQ0gsR0FGRDs7QUFJQSxNQUFNeEIsWUFBWSxHQUFFLFNBQWRBLFlBQWMsR0FBSTtBQUNwQixXQUFPb0MsV0FBVyxDQUFDYixTQUFuQjtBQUNILEdBRkQ7O0FBSUEsTUFBTUwsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNsQixRQUFLa0IsV0FBVyxDQUFDRixVQUFaLEVBQUwsRUFBK0I7QUFDM0IsYUFBTyxJQUFQO0FBQ0gsS0FGRCxNQUdLLE9BQU8sS0FBUDtBQUNSLEdBTEQ7O0FBT0EsTUFBTTFCLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ3NCLGNBQUQsRUFBa0I7QUFDcENNLGVBQVcsQ0FBQzVCLGFBQVosQ0FBMEJzQixjQUExQjtBQUNILEdBRkQ7O0FBR0EsTUFBTW5CLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQUk7QUFDcEIsV0FBT3lCLFdBQVcsQ0FBQ3pCLFdBQVosRUFBUDtBQUNILEdBRkQ7O0FBS0EsTUFBTVMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsSUFBRCxFQUFNZCxXQUFOLEVBQW9CO0FBQ2xDNkIsZUFBVyxDQUFDaEIsU0FBWixDQUFzQkMsSUFBdEIsRUFBMkJkLFdBQTNCO0FBQ0gsR0FGRDs7QUFLQyxTQUFPO0FBQUN4QixjQUFVLEVBQVZBLFVBQUQ7QUFBYW1DLFdBQU8sRUFBUEEsT0FBYjtBQUFzQkUsYUFBUyxFQUFUQSxTQUF0QjtBQUFpQ1osaUJBQWEsRUFBYkEsYUFBakM7QUFBZ0RNLGdCQUFZLEVBQVpBLFlBQWhEO0FBQThEZCxnQkFBWSxFQUFaQSxZQUE5RDtBQUE0RVcsZUFBVyxFQUFYQTtBQUE1RSxHQUFQO0FBQ0osQ0FoQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQyxJQUFNa0IsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ1IsSUFBRCxFQUFPSyxNQUFQLEVBQWVuQixXQUFmLEVBQStCO0FBQy9DLE1BQU1KLGVBQWUsc0JBQU9JLFdBQVAsQ0FBckI7O0FBQ0EsTUFBTTBCLFFBQVEsR0FBRyxFQUFqQjs7QUFFSSxNQUFNRCxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFDRixjQUFELEVBQW9CO0FBQzVCdkIsZUFBVyxDQUFDbkMsT0FBWixDQUFvQixVQUFBaUUsVUFBVSxFQUFJO0FBQzlCLFVBQUlBLFVBQVUsS0FBS1AsY0FBbkIsRUFBa0M7QUFDOUJHLGdCQUFRLENBQUMvQixJQUFULENBQWM0QixjQUFkO0FBQ0g7QUFDSixLQUpEO0FBS0gsR0FORDs7QUFRQSxNQUFNYixNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFJO0FBQ2YsUUFBR2dCLFFBQVEsQ0FBQ1AsTUFBVCxLQUFrQkEsTUFBckIsRUFBNEI7QUFDeEIsYUFBTyxJQUFQO0FBQ0g7O0FBQ0QsV0FBTyxLQUFQO0FBRUgsR0FORDs7QUFRQSxTQUFPO0FBQUNMLFFBQUksRUFBSkEsSUFBRDtBQUFPVyxPQUFHLEVBQUhBLEdBQVA7QUFBWWYsVUFBTSxFQUFOQSxNQUFaO0FBQW9CZCxtQkFBZSxFQUFmQSxlQUFwQjtBQUFxQzhCLFlBQVEsRUFBUkE7QUFBckMsR0FBUDtBQUVQLENBdEJBOzs7Ozs7OztVQ0FEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7O0FBS0EsSUFBTUssSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBSztBQUNkLE1BQU1DLEtBQUssR0FBR0oscURBQVksQ0FBQ0ssTUFBTSxDQUFDLGVBQUQsQ0FBUCxDQUExQjtBQUNBLE1BQU1DLFFBQVEsR0FBR04scURBQVksQ0FBQyxVQUFELENBQTdCO0FBQ0ExRCxvREFBWSxDQUFDOEQsS0FBRCxFQUFPRSxRQUFQLENBQVo7QUFDQUYsT0FBSyxDQUFDbkIsU0FBTixDQUFnQixXQUFoQixFQUE0QixFQUE1QjtBQUNBbUIsT0FBSyxDQUFDbkIsU0FBTixDQUFnQixZQUFoQixFQUE2QixFQUE3QjtBQUNBcUIsVUFBUSxDQUFDckIsU0FBVCxDQUFtQixXQUFuQixFQUErQixFQUEvQjtBQUNBcUIsVUFBUSxDQUFDckIsU0FBVCxDQUFtQixZQUFuQixFQUFnQyxFQUFoQztBQUNBekIsb0RBQVksQ0FBQzRDLEtBQUQsQ0FBWjtBQUNILENBVEQ7O0FBVUFELElBQUksRyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjcmVhdGVIdG1sRWxlbWVudCA9ICh0eXBlLCBpZCwgYXJyYXlDbGFzc2VzLCBjb250ZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgaWYgKGlkKSBlbGVtZW50LmlkID0gaWQ7XG4gICAgaWYgKGFycmF5Q2xhc3NlcykgYXJyYXlDbGFzc2VzLmZvckVhY2goKG15Q2xhc3MpID0+IGVsZW1lbnQuY2xhc3NMaXN0LmFkZChteUNsYXNzKSk7XG4gIFxuICAgIGlmIChjb250ZW50KSBlbGVtZW50LmlubmVyVGV4dCA9IGNvbnRlbnQ7XG4gIFxuICAgIHJldHVybiBlbGVtZW50O1xuICB9O1xuICBleHBvcnQge2NyZWF0ZUh0bWxFbGVtZW50fSIsImltcG9ydCB7Y3JlYXRlSHRtbEVsZW1lbnR9IGZyb20gJy4vY3JlYXRlSHRtbEVsZW1lbnQnXG5cbmNvbnN0IHJlbmRlckJvYXJkcyA9IChwbGF5ZXJPbmUscGxheWVyVHdvKSA9PntcbiAgICBjb25zdCBnYW1lQm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dhbWVib2FyZC1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCBmaXJzdEdhbWVib2FyZCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLGAke3BsYXllck9uZS5wbGF5ZXJOYW1lfUdhbWVib2FyZGAsWydnYW1lYm9hcmQnXSxudWxsKTtcbiAgICBnYW1lQm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZmlyc3RHYW1lYm9hcmQpO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTAwOyBpKyspIHtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gY3JlYXRlSHRtbEVsZW1lbnQoXCJkaXZcIixpLFtgJHtwbGF5ZXJPbmUucGxheWVyTmFtZX1zcXVhcmVgXSxudWxsKTtcbiAgICAgICAgZmlyc3RHYW1lYm9hcmQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICAgICAgfVxuXG5cbiAgICBjb25zdCBzZWNvbmRHYW1lYm9hcmQgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JyxgJHtwbGF5ZXJUd28ucGxheWVyTmFtZX1HYW1lYm9hcmRgLFsnZ2FtZWJvYXJkJ10sbnVsbCk7XG4gICAgZ2FtZUJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlY29uZEdhbWVib2FyZCk7XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDA7IGkrKykge1xuICAgIGNvbnN0IHNxdWFyZSA9IGNyZWF0ZUh0bWxFbGVtZW50KFwiZGl2XCIsaSxbYCR7cGxheWVyVHdvLnBsYXllck5hbWV9c3F1YXJlYF0sbnVsbCk7XG4gICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGUgPT4ge1xuICAgICAgICBpZiggIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNsaWNrZWRcIiApICYmICFpc0dhbWVPdmVyKHBsYXllck9uZSxwbGF5ZXJUd28pKXtcbiAgICAgICAgICBwbGF5Um91bmQocGxheWVyVHdvLE51bWJlcihlLnRhcmdldC5pZCkpO1xuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICAgICAgICBpc0dhbWVPdmVyKHBsYXllck9uZSwgcGxheWVyVHdvKVxuICAgICAgICB9XG4gICAgICAgICAgICAgICBcbiAgICB9KVxuICAgIHNlY29uZEdhbWVib2FyZC5hcHBlbmRDaGlsZChzcXVhcmUpO1xuXG4gICAgXG59XG5cbn1cblxuXG4gIGNvbnN0IGRpc3BsYXlTaGlwcyA9IChwbGF5ZXIpID0+eyAgIFxuICAgICAgY29uc3Qgc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke3BsYXllci5wbGF5ZXJOYW1lfXNxdWFyZWApXG4gICAgICBjb25zdCBkaXNwbGF5QXJyYXk9W107XG4gICAgICBwbGF5ZXIuZ2V0U2hpcEFycmF5KCkuZm9yRWFjaChzaGlwPT57XG4gICAgICAgICAgZGlzcGxheUFycmF5LnB1c2goLi4uc2hpcC5zaGlwQ29vcmRpbmF0ZXMpXG4gICAgICB9KVxuXG4gICAgIHNxdWFyZXMuZm9yRWFjaChzcXVhcmU9PntcbiAgICAgICAgaWYoZGlzcGxheUFycmF5LmluY2x1ZGVzKE51bWJlcihzcXVhcmUuaWQpKSl7XG4gICAgICAgICAgICBzcXVhcmUudGV4dENvbnRlbnQgPSBcIlNoaXBcIlxuICAgICAgICB9XG4gICAgICB9KSBcbiAgICB9XG5cblxuICAgIGNvbnN0IGF0dGFjayA9IChwbGF5ZXIsY29vcmRpbmF0ZXMpID0+e1xuICAgICAgICBwbGF5ZXIucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHBsYXllci5wbGF5ZXJOYW1lLGNvb3JkaW5hdGVzKVxuICAgICAgICBjb25zdCBzcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7cGxheWVyLnBsYXllck5hbWV9c3F1YXJlYCk7XG4gICAgICAgIHNxdWFyZXMuZm9yRWFjaChzcXVhcmU9PntcbiAgICAgICAgICAgIGlmKHBsYXllci5nZXRIaXRBcnJheSgpLmluY2x1ZGVzKE51bWJlcihzcXVhcmUuaWQpKSl7XG4gICAgICAgICAgICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcmVkO1wiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIFxuICAgICAgICB9XG5cbiAgICAgICBjb25zdCBkaXNwbGF5TWlzc0FycmF5ID0gKHNxdWFyZXMscGxheWVyKSA9PntcbiAgICAgICAgICAgICAgICBzcXVhcmVzLmZvckVhY2goc3F1YXJlPT57XG4gICAgICAgICAgICAgICAgICAgIGlmKHBsYXllci5nZXRNaXNzQXJyYXkoKS5pbmNsdWRlcyhOdW1iZXIoc3F1YXJlLmlkKSkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlLnRleHRDb250ZW50PVwiWFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBkaXNwbGF5U3Vua1NoaXBzID0gKHNxdWFyZXMscGxheWVyKSA9PntcbiAgICAgICAgICAgICAgICBjb25zdCBzdW5rQXJyYXk9W107XG4gICAgICAgICAgICAgICAgcGxheWVyLmdldFNoaXBBcnJheSgpLmZvckVhY2goc2hpcD0+e1xuICAgICAgICAgICAgICAgICAgICBpZihzaGlwLmlzU3VuaygpKXtcbiAgICAgICAgICAgICAgICAgICAgICBzdW5rQXJyYXkucHVzaCguLi5zaGlwLnNoaXBDb29yZGluYXRlcylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgc3F1YXJlcy5mb3JFYWNoKHNxdWFyZT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3Vua0FycmF5LmluY2x1ZGVzKE51bWJlcihzcXVhcmUuaWQpKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmUudGV4dENvbnRlbnQ9XCJTVU5LXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaXNHYW1lT3ZlciA9IChwbGF5ZXJPbmUsIHBsYXllclR3byk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllck9uZS5oYXNMb3N0KCkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoYCR7cGxheWVyT25lLnBsYXllck5hbWV9IGhhcyB3b24gICFgKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwbGF5ZXJUd28uaGFzTG9zdCgpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KGAke3BsYXllclR3by5wbGF5ZXJOYW1lfSBoYXMgd29uICFgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZSAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwbGF5Um91bmQgPSAocGxheWVyVHdvLCBjb29yZGluYXRlcykgPT57XG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke3BsYXllclR3by5wbGF5ZXJOYW1lfXNxdWFyZWApO1xuICAgICAgICAgICAgICAgIGF0dGFjayhwbGF5ZXJUd28sY29vcmRpbmF0ZXMpXG4gICAgICAgICAgICAgICAgZGlzcGxheU1pc3NBcnJheShzcXVhcmVzLHBsYXllclR3byk7XG4gICAgICAgICAgICAgICAgZGlzcGxheVN1bmtTaGlwcyhzcXVhcmVzLHBsYXllclR3byk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHBsYWNlU2hpcCA9KG5hbWUscGxheWVyKT0+e1xuICAgICAgICAgICAgICAgIHBsYXllci5wbGFjZVNoaXAoXCJuYW1lXCIpXG4gICAgICAgICAgICB9XG5cblxuXG4gXG4gICAgZXhwb3J0IHtkaXNwbGF5U2hpcHMscmVuZGVyQm9hcmRzfVxuXG4iLCJpbXBvcnQgeyBjcmVhdGVTaGlwIH0gZnJvbSBcIi4vc2hpcFwiXG5cbmNvbnN0IGNyZWF0ZUdhbWVib2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBzaGlwQXJyYXkgPSBbXTtcbiAgICBjb25zdCBtaXNzQXJyYXkgPSBbXTtcblxuICAgIGNvbnN0IHBsYWNlU2hpcCA9IChuYW1lLGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgaWYgKG5hbWUgPT09IFwic3VibWFyaW5lXCIpe1xuICAgICAgICAgICAgY29uc3QgIGxlbmd0aCA9IDI7XG4gICAgICAgICAgICBjb25zdCBjb29yZGluYXRlQXJyYXkgPSBnZXRDb29yZGluYXRlcyhjb29yZGluYXRlLCBsZW5ndGgpXG4gICAgICAgICAgY29uc3Qgc2hpcCA9IGNyZWF0ZVNoaXAobmFtZSxsZW5ndGgsY29vcmRpbmF0ZUFycmF5KTtcbiAgICAgICAgICBzaGlwQXJyYXkucHVzaChzaGlwKTsgIFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5hbWUgPT09IFwiYmF0dGxlc2hpcFwiKXtcbiAgICAgICAgICBjb25zdCAgbGVuZ3RoID0gNjtcbiAgICAgICAgICBjb25zdCBjb29yZGluYXRlQXJyYXkgPSBnZXRDb29yZGluYXRlcyhjb29yZGluYXRlLCBsZW5ndGgpXG4gICAgICAgICAgY29uc3Qgc2hpcCA9IGNyZWF0ZVNoaXAobmFtZSxsZW5ndGgsY29vcmRpbmF0ZUFycmF5KTtcbiAgICAgICAgICBzaGlwQXJyYXkucHVzaChzaGlwKVxuICAgICAgICB9XG59XG5cbmNvbnN0IGdldENvb3JkaW5hdGVzID0gKGNvb3JkaW5hdGUsIGxlbmd0aCkgPT57XG4gICAgbGV0IGNvb3JkaW5hdGVBcnJheSA9W107XG5cbiAgICBpZiAoY29vcmRpbmF0ZStsZW5ndGggPiAxMDApe1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpLS0pIHsgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGNvb3JkaW5hdGVBcnJheS5wdXNoKGNvb3JkaW5hdGUgKyBpKVxuICAgICAgICB9XG5cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHsgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGNvb3JkaW5hdGVBcnJheS5wdXNoKGNvb3JkaW5hdGUgKyBpKVxuICAgICAgICB9XG5cbiAgICB9XG4gICAgcmV0dXJuIGNvb3JkaW5hdGVBcnJheVxufVxuXG5jb25zdCByZWNlaXZlQXR0YWNrID0gKGhpdENvb3JkaW5hdGVzKSA9PntcbiAgICBsZXQgbWlzcyA9IHRydWU7XG4gXG4gICAgIHNoaXBBcnJheS5mb3JFYWNoKHNoaXA9PntcbiAgICAgICAgIGlmIChzaGlwLnNoaXBDb29yZGluYXRlcy5pbmNsdWRlcyhoaXRDb29yZGluYXRlcykpe1xuICAgICAgICAgICAgIHNoaXAuaGl0KGhpdENvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgIG1pc3M9ZmFsc2U7XG4gICAgICAgICB9XG4gICAgIH0pXG4gXG4gICAgIGlmIChtaXNzKXtcbiAgICAgICAgIG1pc3NBcnJheS5wdXNoKGhpdENvb3JkaW5hdGVzKVxuICAgICB9ICAgICAgXG4gICAgICBcbiB9XG5cbiBjb25zdCBnZXRIaXRBcnJheSA9ICgpPT57XG4gICAgY29uc3QgaGl0QXJyYXkgPSBbXTtcbiAgICAgc2hpcEFycmF5LmZvckVhY2goc2hpcD0+e1xuICAgICAgICAgaGl0QXJyYXkucHVzaCguLi5zaGlwLmhpdEFycmF5KVxuICAgICB9KVxuICAgICByZXR1cm4gaGl0QXJyYXlcbiB9XG5cbiBjb25zdCBpc0dhbWVMb3N0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHN1bmtBcnJheSA9IFtdO1xuICAgIHNoaXBBcnJheS5mb3JFYWNoKHNoaXAgPT57XG4gICAgICAgIGlmKHNoaXAuaXNTdW5rKCkgPT09IHRydWUpe1xuICAgICAgICAgICAgc3Vua0FycmF5LnB1c2goc2hpcCk7XG4gICAgICAgIH1cbiAgICB9KVxuICAgIGlmIChzdW5rQXJyYXkubGVuZ3RoID09PSBzaGlwQXJyYXkubGVuZ3RoKXtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbn1cblxuICAgIHJldHVybiB7aXNHYW1lTG9zdCxyZWNlaXZlQXR0YWNrLHBsYWNlU2hpcCxtaXNzQXJyYXksc2hpcEFycmF5LGdldEhpdEFycmF5fVxufVxuXG5leHBvcnR7Y3JlYXRlR2FtZWJvYXJkfSIsImltcG9ydCB7IGNyZWF0ZUdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZFwiXG5cbmNvbnN0IGNyZWF0ZVBsYXllciA9IChwbGF5ZXJOYW1lKSA9PntcbiAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IGNyZWF0ZUdhbWVib2FyZCgpO1xuXG4gICAgY29uc3QgZ2V0TWlzc0FycmF5ID0oKT0+e1xuICAgICAgICByZXR1cm4gcGxheWVyQm9hcmQubWlzc0FycmF5XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0U2hpcEFycmF5ID0oKT0+e1xuICAgICAgICByZXR1cm4gcGxheWVyQm9hcmQuc2hpcEFycmF5XG4gICAgfVxuXG4gICAgY29uc3QgaGFzTG9zdCA9ICgpID0+IHtcbiAgICAgICAgaWYgKCBwbGF5ZXJCb2FyZC5pc0dhbWVMb3N0KCkgKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSByZXR1cm4gZmFsc2VcbiAgICB9XG4gICBcbiAgICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGhpdENvb3JkaW5hdGVzKT0+e1xuICAgICAgICBwbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKGhpdENvb3JkaW5hdGVzKVxuICAgIH1cbiAgICBjb25zdCBnZXRIaXRBcnJheSA9ICgpPT57XG4gICAgICAgIHJldHVybiBwbGF5ZXJCb2FyZC5nZXRIaXRBcnJheSgpXG4gICAgfVxuXG5cbiAgICBjb25zdCBwbGFjZVNoaXAgPSAobmFtZSxjb29yZGluYXRlcyk9PntcbiAgICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKG5hbWUsY29vcmRpbmF0ZXMpXG4gICAgfVxuXG5cbiAgICAgcmV0dXJuIHtwbGF5ZXJOYW1lLCBoYXNMb3N0LCBwbGFjZVNoaXAsIHJlY2VpdmVBdHRhY2ssIGdldE1pc3NBcnJheSwgZ2V0U2hpcEFycmF5LCBnZXRIaXRBcnJheX1cbn1cblxuZXhwb3J0IHtjcmVhdGVQbGF5ZXJ9IiwiIGNvbnN0IGNyZWF0ZVNoaXAgPSAobmFtZSwgbGVuZ3RoLCBjb29yZGluYXRlcykgPT4ge1xuICAgIGNvbnN0IHNoaXBDb29yZGluYXRlcyA9IFsuLi5jb29yZGluYXRlc11cbiAgICBjb25zdCBoaXRBcnJheSA9IFtdO1xuXG4gICAgICAgIGNvbnN0IGhpdCA9IChoaXRDb29yZGluYXRlcykgPT4ge1xuICAgICAgICAgICAgY29vcmRpbmF0ZXMuZm9yRWFjaChzaGlwU3F1YXJlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc2hpcFNxdWFyZSA9PT0gaGl0Q29vcmRpbmF0ZXMpe1xuICAgICAgICAgICAgICAgICAgICBoaXRBcnJheS5wdXNoKGhpdENvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzU3VuayA9ICgpPT57XG4gICAgICAgICAgICBpZihoaXRBcnJheS5sZW5ndGg9PT1sZW5ndGgpe1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcblxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4ge25hbWUsIGhpdCwgaXNTdW5rLCBzaGlwQ29vcmRpbmF0ZXMsIGhpdEFycmF5fVxuXG59XG5cbmV4cG9ydCB7Y3JlYXRlU2hpcH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7ZGlzcGxheVNoaXBzLCByZW5kZXJCb2FyZHMgfSBmcm9tIFwiLi9kb21cIjtcbmltcG9ydCB7IGNyZWF0ZVBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuXG5cblxuXG5jb25zdCBnYW1lID0gKCkgPT57XG4gICAgY29uc3QgaHVtYW4gPSBjcmVhdGVQbGF5ZXIocHJvbXB0KFwiY2hvb3NlIGEgbmFtZVwiKSk7XG4gICAgY29uc3QgY29tcHV0ZXIgPSBjcmVhdGVQbGF5ZXIoXCJjb21wdXRlclwiKTtcbiAgICByZW5kZXJCb2FyZHMoaHVtYW4sY29tcHV0ZXIpO1xuICAgIGh1bWFuLnBsYWNlU2hpcChcInN1Ym1hcmluZVwiLDEyKTtcbiAgICBodW1hbi5wbGFjZVNoaXAoXCJiYXR0bGVzaGlwXCIsMjApO1xuICAgIGNvbXB1dGVyLnBsYWNlU2hpcChcInN1Ym1hcmluZVwiLDYwKTtcbiAgICBjb21wdXRlci5wbGFjZVNoaXAoXCJiYXR0bGVzaGlwXCIsODApO1xuICAgIGRpc3BsYXlTaGlwcyhodW1hbik7XG59XG5nYW1lKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9