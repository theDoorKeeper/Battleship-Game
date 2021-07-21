/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Helper functions/utilities.js":
/*!*******************************************!*\
  !*** ./src/Helper functions/utilities.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCoordinates": () => (/* binding */ getCoordinates),
/* harmony export */   "getLength": () => (/* binding */ getLength),
/* harmony export */   "getRandomNumber": () => (/* binding */ getRandomNumber)
/* harmony export */ });
/* eslint-disable no-plusplus */
var getRandomNumber = function getRandomNumber() {
  return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
}; // eslint-disable-next-line consistent-return


var getLength = function getLength(name) {
  if (name === 'submarine') {
    return 2;
  }

  if (name === 'carrier') {
    return 6;
  }

  if (name === 'battleship') {
    return 4;
  }

  if (name === 'cruiser') {
    return 3;
  }
};

var getCoordinates = function getCoordinates(coordinate, length) {
  var coordinateArray = [];
  var lastCoordinate = coordinate + length;

  if (coordinate >= 1 && lastCoordinate <= 11) {
    for (var i = 0; i < length; i++) {
      coordinateArray.push(coordinate + i);
    }
  } else if (coordinate > 10 && lastCoordinate <= 21) {
    for (var _i = 0; _i < length; _i++) {
      coordinateArray.push(coordinate + _i);
    }
  } else if (coordinate > 20 && lastCoordinate <= 31) {
    for (var _i2 = 0; _i2 < length; _i2++) {
      coordinateArray.push(coordinate + _i2);
    }
  } else if (coordinate > 30 && lastCoordinate <= 41) {
    for (var _i3 = 0; _i3 < length; _i3++) {
      coordinateArray.push(coordinate + _i3);
    }
  } else if (coordinate > 40 && lastCoordinate <= 51) {
    for (var _i4 = 0; _i4 < length; _i4++) {
      coordinateArray.push(coordinate + _i4);
    }
  } else if (coordinate > 50 && lastCoordinate <= 61) {
    for (var _i5 = 0; _i5 < length; _i5++) {
      coordinateArray.push(coordinate + _i5);
    }
  } else if (coordinate > 60 && lastCoordinate <= 71) {
    for (var _i6 = 0; _i6 < length; _i6++) {
      coordinateArray.push(coordinate + _i6);
    }
  } else if (coordinate > 70 && lastCoordinate <= 81) {
    for (var _i7 = 0; _i7 < length; _i7++) {
      coordinateArray.push(coordinate + _i7);
    }
  } else if (coordinate > 80 && lastCoordinate <= 91) {
    for (var _i8 = 0; _i8 < length; _i8++) {
      coordinateArray.push(coordinate + _i8);
    }
  } else if (coordinate > 90 && lastCoordinate <= 101) {
    for (var _i9 = 0; _i9 < length; _i9++) {
      coordinateArray.push(coordinate + _i9);
    }
  } else if (lastCoordinate > 100) {
    for (var _i10 = 0; _i10 < length; _i10++) {
      coordinateArray.push(coordinate - _i10);
    }
  } else {
    for (var _i11 = 0; _i11 < length; _i11++) {
      coordinateArray.push(coordinate - _i11);
    }
  }

  return coordinateArray;
};



/***/ }),

/***/ "./src/JS/createHtmlElement.js":
/*!*************************************!*\
  !*** ./src/JS/createHtmlElement.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHtmlElement);

/***/ }),

/***/ "./src/JS/dom.js":
/*!***********************!*\
  !*** ./src/JS/dom.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Helper_functions_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Helper functions/utilities */ "./src/Helper functions/utilities.js");
/* harmony import */ var _createHtmlElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createHtmlElement */ "./src/JS/createHtmlElement.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/JS/player.js");
/* harmony import */ var _assets_explosion_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/explosion.png */ "./src/assets/explosion.png");
/* harmony import */ var _assets_target_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/target.png */ "./src/assets/target.png");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* eslint-disable no-param-reassign */

/* eslint-disable no-plusplus */

/* eslint-disable no-loop-func */






var displayShips = function displayShips(player) {
  var squares = document.querySelectorAll(".".concat(player.playerName, "square"));
  var displayArray = [];
  player.getShipArray().forEach(function (ship) {
    displayArray.push.apply(displayArray, _toConsumableArray(ship.shipCoordinates));
  });
  squares.forEach(function (square) {
    if (displayArray.includes(Number(square.id))) {
      square.style.backgroundColor = '#4d4d4d';
    }
  });
  squares.forEach(function (square) {
    player.getShipArray().forEach(function (ship) {
      if (ship.shipCoordinates.includes(Number(square.id))) {
        square.classList.add(ship.name);
      }
    });
  });
};

var attack = function attack(player, coordinates) {
  player.receiveAttack(coordinates);
  var squares = document.querySelectorAll(".".concat(player.playerName, "square"));
  squares.forEach(function (square) {
    if (player.getHitArray().includes(Number(square.id))) {
      square.setAttribute('style', 'background-color: #353434;');
      var logo = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.default)('img', 'explosion', ['logo'], null);
      logo.src = _assets_target_png__WEBPACK_IMPORTED_MODULE_4__.default;
      if (!square.firstChild) square.appendChild(logo);
    }
  });
};

var displayMissArray = function displayMissArray(squares, player) {
  squares.forEach(function (square) {
    if (player.getMissArray().includes(Number(square.id))) {
      square.textContent = 'X';
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
      square.setAttribute('style', 'background-color: #d41515;');
      square.firstChild.src = _assets_explosion_png__WEBPACK_IMPORTED_MODULE_3__.default;
    }
  });
};

var grayOutBtn = function grayOutBtn(player) {
  player.getShipArray().forEach(function (ship) {
    var usedBtn = document.querySelector("#".concat(ship.name));
    usedBtn.style.color = '#343434';
  });
};

var highLightBtn = function highLightBtn(btName, playerOne) {
  if (playerOne.getShipArray().length === 4) {
    var btn = document.querySelector("#".concat(btName));
    btn.style.color = 'whitesmoke';
  }
};

var isGameOver = function isGameOver(playerOne, playerTwo) {
  var gameOverScreen = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.default)('div', 'overlay', ['overlay'], null);

  if (playerOne.hasLost()) {
    gameOverScreen.textContent = "".concat(playerTwo.playerName, " Destroyed your ships, You Lose !");
    gameOverScreen.style.color = 'rgb(226, 7, 7)';
    window.document.body.appendChild(gameOverScreen);
    gameOverScreen.style.display = 'flex';
    return true;
  }

  if (playerTwo.hasLost()) {
    gameOverScreen.textContent = "".concat(playerOne.playerName, " Destroyed the Computer's ships, You Win !");
    window.document.body.appendChild(gameOverScreen);
    gameOverScreen.style.color = '#2345da';
    gameOverScreen.style.display = 'flex';
    return true;
  }

  return false;
};

var playRound = function playRound(player, coordinate) {
  var squares = document.querySelectorAll(".".concat(player.playerName, "square"));
  attack(player, coordinate);
  displayMissArray(squares, player);
  displaySunkShips(squares, player);
};

var computerRound = function computerRound(player) {
  var computerPlay = function computerPlay(coordinate) {
    if (!player.getMissArray().includes(coordinate) && !player.getHitArray().includes(coordinate)) {
      playRound(player, coordinate);
      return false;
    }

    return true;
  };

  var tryAgain = true;

  while (tryAgain) {
    tryAgain = computerPlay((0,_Helper_functions_utilities__WEBPACK_IMPORTED_MODULE_0__.getRandomNumber)());
  }
};

var renderStartingPage = function renderStartingPage(playerOne, playerTwo) {
  var shipName = null;
  var container = document.querySelector('.container');
  var gameBoardContainer = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.default)('div', 'gameboard-container', null, null);
  container.innerHTML = '';
  container.appendChild(gameBoardContainer);
  var firstGameboard = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.default)('div', "".concat(playerOne.playerName, "Gameboard"), ['gameboard'], null);
  gameBoardContainer.appendChild(firstGameboard);

  for (var i = 1; i <= 100; i++) {
    var square = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.default)('div', i, ["".concat(playerOne.playerName, "square")], null);
    square.addEventListener('click', function (e) {
      var displayArray = [];
      var length = (0,_Helper_functions_utilities__WEBPACK_IMPORTED_MODULE_0__.getLength)(shipName);
      playerOne.getShipArray().forEach(function (ship) {
        displayArray.push.apply(displayArray, _toConsumableArray(ship.shipCoordinates));
      });

      var doesCollide = function doesCollide() {
        var collide = false;
        var coordinates = (0,_Helper_functions_utilities__WEBPACK_IMPORTED_MODULE_0__.getCoordinates)(Number(e.target.id), length);
        coordinates.forEach(function (coordinate) {
          if (displayArray.includes(coordinate)) {
            collide = true;
          }
        });
        return collide;
      };

      if (shipName && !displayArray.includes(Number(e.target.id)) && !doesCollide()) {
        playerOne.placeShip(shipName, Number(e.target.id));
        displayShips(playerOne);
        shipName = null;
        grayOutBtn(playerOne);
        highLightBtn('start', playerOne);
      }
    });
    firstGameboard.appendChild(square);
  }

  var buttonWrapper = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.default)('div', null, ['btn-wrapper'], null);
  var battleshipButton = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.default)('button', 'battleship', ['ship-button'], 'battleship');
  var submarineButton = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.default)('button', 'submarine', ['ship-button'], 'submarine');
  var cruiserButton = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.default)('button', 'cruiser', ['ship-button'], 'cruiser');
  var carrierButton = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.default)('button', 'carrier', ['ship-button'], 'carrier');
  gameBoardContainer.appendChild(buttonWrapper);
  buttonWrapper.appendChild(battleshipButton);
  buttonWrapper.appendChild(submarineButton);
  buttonWrapper.appendChild(cruiserButton);
  buttonWrapper.appendChild(carrierButton);
  document.querySelectorAll('.ship-button').forEach(function (button) {
    button.addEventListener('click', function (e) {
      var shipArray = [];
      playerOne.getShipArray().forEach(function (ship) {
        shipArray.push(ship.name);
        var usedBtn = document.querySelector("#".concat(ship.name));
        usedBtn.style.color = '#343434';
      });

      if (!shipArray.includes(e.target.id)) {
        shipName = e.target.id;
      }
    });
  });
  var startButton = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.default)('button', 'start', ['control-button'], 'start game');
  startButton.addEventListener('click', function () {
    if (playerOne.getShipArray().length === 4) {
      // eslint-disable-next-line no-use-before-define
      startGame(playerOne, playerTwo);
    }
  });
  gameBoardContainer.appendChild(startButton);
};

var renderBoards = function renderBoards(playerOne, playerTwo) {
  var gameBoardContainer = document.querySelector('#gameboard-container');
  gameBoardContainer.innerHTML = '';
  var firstFrame = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.default)('div', "".concat(playerOne.playerName, "frame"), ['frame'], null);
  var firstGameboard = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.default)('div', "".concat(playerOne.playerName, "Gameboard"), ['gameboard'], null);
  firstFrame.appendChild(firstGameboard);
  gameBoardContainer.appendChild(firstFrame);
  var firstGameboardTitle = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.default)('div', 'first-title', ['gameboard-title'], "".concat(playerOne.playerName, "'s Board"));
  firstFrame.appendChild(firstGameboardTitle);

  for (var i = 1; i <= 100; i++) {
    var square = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.default)('div', i, ["".concat(playerOne.playerName, "square")], null);
    firstGameboard.appendChild(square);
  }

  var secondFrame = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.default)('div', "".concat(playerOne.playerName, "frame"), ['frame'], null);
  var secondGameboard = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.default)('div', "".concat(playerTwo.playerName, "Gameboard"), ['gameboard'], null);
  secondFrame.appendChild(secondGameboard);
  gameBoardContainer.appendChild(secondFrame);
  var secondGameboardTitle = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.default)('div', 'second-title', ['gameboard-title'], "".concat(playerTwo.playerName, "'s Board"));
  secondFrame.appendChild(secondGameboardTitle);
  var container = document.querySelector('.container');
  var whosTurn = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.default)('div', 'title-turn', ['turn']);
  whosTurn.textContent = "".concat(playerOne.playerName, "'s turn !");
  container.appendChild(whosTurn);
  var playerOneTurn = true;

  for (var _i = 1; _i <= 100; _i++) {
    var _square = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.default)('div', _i, ["".concat(playerTwo.playerName, "square")], null);

    _square.addEventListener('click', function (e) {
      if (!e.target.classList.contains('clicked') && !isGameOver(playerOne, playerTwo)) {
        if (playerOneTurn) {
          whosTurn.innerHTML = "".concat(playerTwo.playerName, "'s turn !");
          e.target.classList.add('clicked');
          playRound(playerTwo, Number(e.target.id));
          isGameOver(playerOne, playerTwo);
          playerOneTurn = false;
          setTimeout(function () {
            whosTurn.innerHTML = "".concat(playerOne.playerName, "'s turn !");
            computerRound(playerOne);
            isGameOver(playerOne, playerTwo);
            playerOneTurn = true;
          }, 1000);
        }
      }
    });

    secondGameboard.appendChild(_square);
  }
};

var startGame = function startGame(playerOne, playerTwo) {
  renderBoards(playerOne, playerTwo);
  displayShips(playerOne);
};

var renderWelcomePage = function renderWelcomePage() {
  var container = document.querySelector('.container');
  var welcomePage = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.default)('div', 'welcome-page', null, null);
  container.appendChild(welcomePage);
  var title = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.default)('header', 'title', null, 'Please Choose A name');
  welcomePage.appendChild(title);
  var playerNameInput = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.default)('input', 'playerName', null, null);
  welcomePage.appendChild(playerNameInput);
  var continueBtn = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.default)('button', 'continue-btn', ['btn'], 'continue');
  continueBtn.addEventListener('click', function () {
    var playerName = playerNameInput.value;
    var human = (0,_player__WEBPACK_IMPORTED_MODULE_2__.default)(playerName);
    var computer = (0,_player__WEBPACK_IMPORTED_MODULE_2__.default)('computer');
    renderStartingPage(human, computer);
    computer.placeShip('submarine', 15);
    computer.placeShip('battleship', 30);
    computer.placeShip('carrier', 1);
    computer.placeShip('cruiser', 95);
  });
  welcomePage.appendChild(continueBtn);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderWelcomePage);

/***/ }),

/***/ "./src/JS/gameboard.js":
/*!*****************************!*\
  !*** ./src/JS/gameboard.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Helper_functions_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Helper functions/utilities */ "./src/Helper functions/utilities.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/JS/ship.js");
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
    var length = (0,_Helper_functions_utilities__WEBPACK_IMPORTED_MODULE_0__.getLength)(name);
    var coordinateArray = (0,_Helper_functions_utilities__WEBPACK_IMPORTED_MODULE_0__.getCoordinates)(coordinate, length);
    var ship = (0,_ship__WEBPACK_IMPORTED_MODULE_1__.default)(name, length, coordinateArray);
    shipArray.push(ship);
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
    }

    return false;
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createGameboard);

/***/ }),

/***/ "./src/JS/player.js":
/*!**************************!*\
  !*** ./src/JS/player.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/JS/gameboard.js");


var createPlayer = function createPlayer(playerName) {
  var playerBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.default)();

  var getMissArray = function getMissArray() {
    return playerBoard.missArray;
  };

  var getShipArray = function getShipArray() {
    return playerBoard.shipArray;
  };

  var hasLost = function hasLost() {
    if (playerBoard.isGameLost()) {
      return true;
    }

    return false;
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPlayer);

/***/ }),

/***/ "./src/JS/ship.js":
/*!************************!*\
  !*** ./src/JS/ship.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createShip);

/***/ }),

/***/ "./src/assets/explosion.png":
/*!**********************************!*\
  !*** ./src/assets/explosion.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "84265bf0edd54ca729089e9e6b43fdd1.png");

/***/ }),

/***/ "./src/assets/target.png":
/*!*******************************!*\
  !*** ./src/assets/target.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "b1fdf1a90a4a38246e0a87cede3b522b.png");

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
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

(0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvSGVscGVyIGZ1bmN0aW9ucy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL0pTL2NyZWF0ZUh0bWxFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9KUy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL0pTL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvSlMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9KUy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9hc3NldHMvZXhwbG9zaW9uLnBuZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvYXNzZXRzL3RhcmdldC5wbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9KUy9pbmRleC5qcyJdLCJuYW1lcyI6WyJnZXRSYW5kb21OdW1iZXIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJnZXRMZW5ndGgiLCJuYW1lIiwiZ2V0Q29vcmRpbmF0ZXMiLCJjb29yZGluYXRlIiwibGVuZ3RoIiwiY29vcmRpbmF0ZUFycmF5IiwibGFzdENvb3JkaW5hdGUiLCJpIiwicHVzaCIsImNyZWF0ZUh0bWxFbGVtZW50IiwidHlwZSIsImlkIiwiYXJyYXlDbGFzc2VzIiwiY29udGVudCIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJmb3JFYWNoIiwibXlDbGFzcyIsImNsYXNzTGlzdCIsImFkZCIsImlubmVyVGV4dCIsImRpc3BsYXlTaGlwcyIsInBsYXllciIsInNxdWFyZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicGxheWVyTmFtZSIsImRpc3BsYXlBcnJheSIsImdldFNoaXBBcnJheSIsInNoaXAiLCJzaGlwQ29vcmRpbmF0ZXMiLCJzcXVhcmUiLCJpbmNsdWRlcyIsIk51bWJlciIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiYXR0YWNrIiwiY29vcmRpbmF0ZXMiLCJyZWNlaXZlQXR0YWNrIiwiZ2V0SGl0QXJyYXkiLCJzZXRBdHRyaWJ1dGUiLCJsb2dvIiwic3JjIiwidGFyZ2V0IiwiZmlyc3RDaGlsZCIsImFwcGVuZENoaWxkIiwiZGlzcGxheU1pc3NBcnJheSIsImdldE1pc3NBcnJheSIsInRleHRDb250ZW50IiwiZGlzcGxheVN1bmtTaGlwcyIsInN1bmtBcnJheSIsImlzU3VuayIsImV4cGxvc2lvbiIsImdyYXlPdXRCdG4iLCJ1c2VkQnRuIiwicXVlcnlTZWxlY3RvciIsImNvbG9yIiwiaGlnaExpZ2h0QnRuIiwiYnROYW1lIiwicGxheWVyT25lIiwiYnRuIiwiaXNHYW1lT3ZlciIsInBsYXllclR3byIsImdhbWVPdmVyU2NyZWVuIiwiaGFzTG9zdCIsIndpbmRvdyIsImJvZHkiLCJkaXNwbGF5IiwicGxheVJvdW5kIiwiY29tcHV0ZXJSb3VuZCIsImNvbXB1dGVyUGxheSIsInRyeUFnYWluIiwicmVuZGVyU3RhcnRpbmdQYWdlIiwic2hpcE5hbWUiLCJjb250YWluZXIiLCJnYW1lQm9hcmRDb250YWluZXIiLCJpbm5lckhUTUwiLCJmaXJzdEdhbWVib2FyZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiZG9lc0NvbGxpZGUiLCJjb2xsaWRlIiwicGxhY2VTaGlwIiwiYnV0dG9uV3JhcHBlciIsImJhdHRsZXNoaXBCdXR0b24iLCJzdWJtYXJpbmVCdXR0b24iLCJjcnVpc2VyQnV0dG9uIiwiY2FycmllckJ1dHRvbiIsImJ1dHRvbiIsInNoaXBBcnJheSIsInN0YXJ0QnV0dG9uIiwic3RhcnRHYW1lIiwicmVuZGVyQm9hcmRzIiwiZmlyc3RGcmFtZSIsImZpcnN0R2FtZWJvYXJkVGl0bGUiLCJzZWNvbmRGcmFtZSIsInNlY29uZEdhbWVib2FyZCIsInNlY29uZEdhbWVib2FyZFRpdGxlIiwid2hvc1R1cm4iLCJwbGF5ZXJPbmVUdXJuIiwiY29udGFpbnMiLCJzZXRUaW1lb3V0IiwicmVuZGVyV2VsY29tZVBhZ2UiLCJ3ZWxjb21lUGFnZSIsInRpdGxlIiwicGxheWVyTmFtZUlucHV0IiwiY29udGludWVCdG4iLCJ2YWx1ZSIsImh1bWFuIiwiY3JlYXRlUGxheWVyIiwiY29tcHV0ZXIiLCJjcmVhdGVHYW1lYm9hcmQiLCJtaXNzQXJyYXkiLCJjcmVhdGVTaGlwIiwiaGl0Q29vcmRpbmF0ZXMiLCJtaXNzIiwiaGl0IiwiaGl0QXJyYXkiLCJpc0dhbWVMb3N0IiwicGxheWVyQm9hcmQiLCJzaGlwU3F1YXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCO0FBQUEsU0FBTUMsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxNQUFpQixNQUFNLENBQU4sR0FBVSxDQUEzQixDQUFYLElBQTRDLENBQWxEO0FBQUEsQ0FBeEIsQyxDQUVBOzs7QUFDQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxJQUFELEVBQVU7QUFDMUIsTUFBSUEsSUFBSSxLQUFLLFdBQWIsRUFBMEI7QUFDeEIsV0FBTyxDQUFQO0FBQ0Q7O0FBQ0QsTUFBSUEsSUFBSSxLQUFLLFNBQWIsRUFBd0I7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eUNBQXlDLEU7Ozs7OztVQ0EvRTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkEsMkI7Ozs7Ozs7Ozs7OztBQ0FBO0FBRUFYLDZDQUFpQixHIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG5jb25zdCBnZXRSYW5kb21OdW1iZXIgPSAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAwIC0gMSArIDEpKSArIDE7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuY29uc3QgZ2V0TGVuZ3RoID0gKG5hbWUpID0+IHtcbiAgaWYgKG5hbWUgPT09ICdzdWJtYXJpbmUnKSB7XG4gICAgcmV0dXJuIDI7XG4gIH1cbiAgaWYgKG5hbWUgPT09ICdjYXJyaWVyJykge1xuICAgIHJldHVybiA2O1xuICB9XG4gIGlmIChuYW1lID09PSAnYmF0dGxlc2hpcCcpIHtcbiAgICByZXR1cm4gNDtcbiAgfVxuICBpZiAobmFtZSA9PT0gJ2NydWlzZXInKSB7XG4gICAgcmV0dXJuIDM7XG4gIH1cbn07XG5cbmNvbnN0IGdldENvb3JkaW5hdGVzID0gKGNvb3JkaW5hdGUsIGxlbmd0aCkgPT4ge1xuICBjb25zdCBjb29yZGluYXRlQXJyYXkgPSBbXTtcbiAgY29uc3QgbGFzdENvb3JkaW5hdGUgPSBjb29yZGluYXRlICsgbGVuZ3RoO1xuXG4gIGlmIChjb29yZGluYXRlID49IDEgJiYgbGFzdENvb3JkaW5hdGUgPD0gMTEpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBjb29yZGluYXRlQXJyYXkucHVzaChjb29yZGluYXRlICsgaSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGNvb3JkaW5hdGUgPiAxMCAmJiBsYXN0Q29vcmRpbmF0ZSA8PSAyMSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvb3JkaW5hdGVBcnJheS5wdXNoKGNvb3JkaW5hdGUgKyBpKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoY29vcmRpbmF0ZSA+IDIwICYmIGxhc3RDb29yZGluYXRlIDw9IDMxKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgY29vcmRpbmF0ZUFycmF5LnB1c2goY29vcmRpbmF0ZSArIGkpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChjb29yZGluYXRlID4gMzAgJiYgbGFzdENvb3JkaW5hdGUgPD0gNDEpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBjb29yZGluYXRlQXJyYXkucHVzaChjb29yZGluYXRlICsgaSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGNvb3JkaW5hdGUgPiA0MCAmJiBsYXN0Q29vcmRpbmF0ZSA8PSA1MSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvb3JkaW5hdGVBcnJheS5wdXNoKGNvb3JkaW5hdGUgKyBpKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoY29vcmRpbmF0ZSA+IDUwICYmIGxhc3RDb29yZGluYXRlIDw9IDYxKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgY29vcmRpbmF0ZUFycmF5LnB1c2goY29vcmRpbmF0ZSArIGkpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChjb29yZGluYXRlID4gNjAgJiYgbGFzdENvb3JkaW5hdGUgPD0gNzEpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBjb29yZGluYXRlQXJyYXkucHVzaChjb29yZGluYXRlICsgaSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGNvb3JkaW5hdGUgPiA3MCAmJiBsYXN0Q29vcmRpbmF0ZSA8PSA4MSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvb3JkaW5hdGVBcnJheS5wdXNoKGNvb3JkaW5hdGUgKyBpKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoY29vcmRpbmF0ZSA+IDgwICYmIGxhc3RDb29yZGluYXRlIDw9IDkxKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgY29vcmRpbmF0ZUFycmF5LnB1c2goY29vcmRpbmF0ZSArIGkpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChjb29yZGluYXRlID4gOTAgJiYgbGFzdENvb3JkaW5hdGUgPD0gMTAxKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgY29vcmRpbmF0ZUFycmF5LnB1c2goY29vcmRpbmF0ZSArIGkpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChsYXN0Q29vcmRpbmF0ZSA+IDEwMCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvb3JkaW5hdGVBcnJheS5wdXNoKGNvb3JkaW5hdGUgLSBpKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgY29vcmRpbmF0ZUFycmF5LnB1c2goY29vcmRpbmF0ZSAtIGkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb29yZGluYXRlQXJyYXk7XG59O1xuXG5leHBvcnQgeyBnZXRDb29yZGluYXRlcywgZ2V0TGVuZ3RoLCBnZXRSYW5kb21OdW1iZXIgfTtcbiIsImNvbnN0IGNyZWF0ZUh0bWxFbGVtZW50ID0gKHR5cGUsIGlkLCBhcnJheUNsYXNzZXMsIGNvbnRlbnQpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIGlmIChpZCkgZWxlbWVudC5pZCA9IGlkO1xuICBpZiAoYXJyYXlDbGFzc2VzKSBhcnJheUNsYXNzZXMuZm9yRWFjaCgobXlDbGFzcykgPT4gZWxlbWVudC5jbGFzc0xpc3QuYWRkKG15Q2xhc3MpKTtcblxuICBpZiAoY29udGVudCkgZWxlbWVudC5pbm5lclRleHQgPSBjb250ZW50O1xuXG4gIHJldHVybiBlbGVtZW50O1xufTtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUh0bWxFbGVtZW50O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1sb29wLWZ1bmMgKi9cbmltcG9ydCB7IGdldENvb3JkaW5hdGVzLCBnZXRMZW5ndGgsIGdldFJhbmRvbU51bWJlciB9IGZyb20gJy4uL0hlbHBlciBmdW5jdGlvbnMvdXRpbGl0aWVzJztcbmltcG9ydCBjcmVhdGVIdG1sRWxlbWVudCBmcm9tICcuL2NyZWF0ZUh0bWxFbGVtZW50JztcbmltcG9ydCBjcmVhdGVQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xuaW1wb3J0IGV4cGxvc2lvbiBmcm9tICcuLi9hc3NldHMvZXhwbG9zaW9uLnBuZyc7XG5pbXBvcnQgdGFyZ2V0IGZyb20gJy4uL2Fzc2V0cy90YXJnZXQucG5nJztcblxuY29uc3QgZGlzcGxheVNoaXBzID0gKHBsYXllcikgPT4ge1xuICBjb25zdCBzcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7cGxheWVyLnBsYXllck5hbWV9c3F1YXJlYCk7XG4gIGNvbnN0IGRpc3BsYXlBcnJheSA9IFtdO1xuICBwbGF5ZXIuZ2V0U2hpcEFycmF5KCkuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgIGRpc3BsYXlBcnJheS5wdXNoKC4uLnNoaXAuc2hpcENvb3JkaW5hdGVzKTtcbiAgfSk7XG5cbiAgc3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICBpZiAoZGlzcGxheUFycmF5LmluY2x1ZGVzKE51bWJlcihzcXVhcmUuaWQpKSkge1xuICAgICAgc3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNGQ0ZDRkJztcbiAgICB9XG4gIH0pO1xuXG4gIHNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgcGxheWVyLmdldFNoaXBBcnJheSgpLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGlmIChzaGlwLnNoaXBDb29yZGluYXRlcy5pbmNsdWRlcyhOdW1iZXIoc3F1YXJlLmlkKSkpIHtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoc2hpcC5uYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBhdHRhY2sgPSAocGxheWVyLCBjb29yZGluYXRlcykgPT4ge1xuICBwbGF5ZXIucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcyk7XG4gIGNvbnN0IHNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtwbGF5ZXIucGxheWVyTmFtZX1zcXVhcmVgKTtcbiAgc3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICBpZiAocGxheWVyLmdldEhpdEFycmF5KCkuaW5jbHVkZXMoTnVtYmVyKHNxdWFyZS5pZCkpKSB7XG4gICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzNDM0OycpO1xuXG4gICAgICBjb25zdCBsb2dvID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2ltZycsICdleHBsb3Npb24nLCBbJ2xvZ28nXSwgbnVsbCk7XG4gICAgICBsb2dvLnNyYyA9IHRhcmdldDtcblxuICAgICAgaWYgKCFzcXVhcmUuZmlyc3RDaGlsZCkgc3F1YXJlLmFwcGVuZENoaWxkKGxvZ28pO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBkaXNwbGF5TWlzc0FycmF5ID0gKHNxdWFyZXMsIHBsYXllcikgPT4ge1xuICBzcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgIGlmIChwbGF5ZXIuZ2V0TWlzc0FycmF5KCkuaW5jbHVkZXMoTnVtYmVyKHNxdWFyZS5pZCkpKSB7XG4gICAgICBzcXVhcmUudGV4dENvbnRlbnQgPSAnWCc7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IGRpc3BsYXlTdW5rU2hpcHMgPSAoc3F1YXJlcywgcGxheWVyKSA9PiB7XG4gIGNvbnN0IHN1bmtBcnJheSA9IFtdO1xuICBwbGF5ZXIuZ2V0U2hpcEFycmF5KCkuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgIGlmIChzaGlwLmlzU3VuaygpKSB7XG4gICAgICBzdW5rQXJyYXkucHVzaCguLi5zaGlwLnNoaXBDb29yZGluYXRlcyk7XG4gICAgfVxuICB9KTtcbiAgc3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICBpZiAoc3Vua0FycmF5LmluY2x1ZGVzKE51bWJlcihzcXVhcmUuaWQpKSkge1xuICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjogI2Q0MTUxNTsnKTtcblxuICAgICAgc3F1YXJlLmZpcnN0Q2hpbGQuc3JjID0gZXhwbG9zaW9uO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBncmF5T3V0QnRuID0gKHBsYXllcikgPT4ge1xuICBwbGF5ZXIuZ2V0U2hpcEFycmF5KCkuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgIGNvbnN0IHVzZWRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtzaGlwLm5hbWV9YCk7XG4gICAgdXNlZEJ0bi5zdHlsZS5jb2xvciA9ICcjMzQzNDM0JztcbiAgfSk7XG59O1xuXG5jb25zdCBoaWdoTGlnaHRCdG4gPSAoYnROYW1lLCBwbGF5ZXJPbmUpID0+IHtcbiAgaWYgKHBsYXllck9uZS5nZXRTaGlwQXJyYXkoKS5sZW5ndGggPT09IDQpIHtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtidE5hbWV9YCk7XG4gICAgYnRuLnN0eWxlLmNvbG9yID0gJ3doaXRlc21va2UnO1xuICB9XG59O1xuXG5jb25zdCBpc0dhbWVPdmVyID0gKHBsYXllck9uZSwgcGxheWVyVHdvKSA9PiB7XG4gIGNvbnN0IGdhbWVPdmVyU2NyZWVuID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsICdvdmVybGF5JywgWydvdmVybGF5J10sIG51bGwpO1xuICBpZiAocGxheWVyT25lLmhhc0xvc3QoKSkge1xuICAgIGdhbWVPdmVyU2NyZWVuLnRleHRDb250ZW50ID0gYCR7cGxheWVyVHdvLnBsYXllck5hbWV9IERlc3Ryb3llZCB5b3VyIHNoaXBzLCBZb3UgTG9zZSAhYDtcbiAgICBnYW1lT3ZlclNjcmVlbi5zdHlsZS5jb2xvciA9ICdyZ2IoMjI2LCA3LCA3KSc7XG4gICAgd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZ2FtZU92ZXJTY3JlZW4pO1xuICAgIGdhbWVPdmVyU2NyZWVuLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHBsYXllclR3by5oYXNMb3N0KCkpIHtcbiAgICBnYW1lT3ZlclNjcmVlbi50ZXh0Q29udGVudCA9IGAke3BsYXllck9uZS5wbGF5ZXJOYW1lfSBEZXN0cm95ZWQgdGhlIENvbXB1dGVyJ3Mgc2hpcHMsIFlvdSBXaW4gIWA7XG4gICAgd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZ2FtZU92ZXJTY3JlZW4pO1xuICAgIGdhbWVPdmVyU2NyZWVuLnN0eWxlLmNvbG9yID0gJyMyMzQ1ZGEnO1xuICAgIGdhbWVPdmVyU2NyZWVuLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuY29uc3QgcGxheVJvdW5kID0gKHBsYXllciwgY29vcmRpbmF0ZSkgPT4ge1xuICBjb25zdCBzcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7cGxheWVyLnBsYXllck5hbWV9c3F1YXJlYCk7XG4gIGF0dGFjayhwbGF5ZXIsIGNvb3JkaW5hdGUpO1xuICBkaXNwbGF5TWlzc0FycmF5KHNxdWFyZXMsIHBsYXllcik7XG4gIGRpc3BsYXlTdW5rU2hpcHMoc3F1YXJlcywgcGxheWVyKTtcbn07XG5cbmNvbnN0IGNvbXB1dGVyUm91bmQgPSAocGxheWVyKSA9PiB7XG4gIGNvbnN0IGNvbXB1dGVyUGxheSA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgaWYgKCFwbGF5ZXIuZ2V0TWlzc0FycmF5KCkuaW5jbHVkZXMoY29vcmRpbmF0ZSkgJiYgIXBsYXllci5nZXRIaXRBcnJheSgpLmluY2x1ZGVzKGNvb3JkaW5hdGUpKSB7XG4gICAgICBwbGF5Um91bmQocGxheWVyLCBjb29yZGluYXRlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgbGV0IHRyeUFnYWluID0gdHJ1ZTtcbiAgd2hpbGUgKHRyeUFnYWluKSB7XG4gICAgdHJ5QWdhaW4gPSBjb21wdXRlclBsYXkoZ2V0UmFuZG9tTnVtYmVyKCkpO1xuICB9XG59O1xuXG5jb25zdCByZW5kZXJTdGFydGluZ1BhZ2UgPSAocGxheWVyT25lLCBwbGF5ZXJUd28pID0+IHtcbiAgbGV0IHNoaXBOYW1lID0gbnVsbDtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICBjb25zdCBnYW1lQm9hcmRDb250YWluZXIgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ2dhbWVib2FyZC1jb250YWluZXInLCBudWxsLCBudWxsKTtcbiAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2FtZUJvYXJkQ29udGFpbmVyKTtcbiAgY29uc3QgZmlyc3RHYW1lYm9hcmQgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgYCR7cGxheWVyT25lLnBsYXllck5hbWV9R2FtZWJvYXJkYCwgWydnYW1lYm9hcmQnXSwgbnVsbCk7XG4gIGdhbWVCb2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChmaXJzdEdhbWVib2FyZCk7XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTAwOyBpKyspIHtcbiAgICBjb25zdCBzcXVhcmUgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgaSwgW2Ake3BsYXllck9uZS5wbGF5ZXJOYW1lfXNxdWFyZWBdLCBudWxsKTtcbiAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc3QgZGlzcGxheUFycmF5ID0gW107XG4gICAgICBjb25zdCBsZW5ndGggPSBnZXRMZW5ndGgoc2hpcE5hbWUpO1xuICAgICAgcGxheWVyT25lLmdldFNoaXBBcnJheSgpLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgZGlzcGxheUFycmF5LnB1c2goLi4uc2hpcC5zaGlwQ29vcmRpbmF0ZXMpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGRvZXNDb2xsaWRlID0gKCkgPT4ge1xuICAgICAgICBsZXQgY29sbGlkZSA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IGdldENvb3JkaW5hdGVzKE51bWJlcihlLnRhcmdldC5pZCksIGxlbmd0aCk7XG4gICAgICAgIGNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgICBpZiAoZGlzcGxheUFycmF5LmluY2x1ZGVzKGNvb3JkaW5hdGUpKSB7XG4gICAgICAgICAgICBjb2xsaWRlID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY29sbGlkZTtcbiAgICAgIH07XG5cbiAgICAgIGlmIChzaGlwTmFtZSAmJiAhZGlzcGxheUFycmF5LmluY2x1ZGVzKE51bWJlcihlLnRhcmdldC5pZCkpICYmICFkb2VzQ29sbGlkZSgpKSB7XG4gICAgICAgIHBsYXllck9uZS5wbGFjZVNoaXAoc2hpcE5hbWUsIE51bWJlcihlLnRhcmdldC5pZCkpO1xuICAgICAgICBkaXNwbGF5U2hpcHMocGxheWVyT25lKTtcbiAgICAgICAgc2hpcE5hbWUgPSBudWxsO1xuICAgICAgICBncmF5T3V0QnRuKHBsYXllck9uZSk7XG4gICAgICAgIGhpZ2hMaWdodEJ0bignc3RhcnQnLCBwbGF5ZXJPbmUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZmlyc3RHYW1lYm9hcmQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgfVxuICBjb25zdCBidXR0b25XcmFwcGVyID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsIG51bGwsIFsnYnRuLXdyYXBwZXInXSwgbnVsbCk7XG5cbiAgY29uc3QgYmF0dGxlc2hpcEJ1dHRvbiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdidXR0b24nLCAnYmF0dGxlc2hpcCcsIFsnc2hpcC1idXR0b24nXSwgJ2JhdHRsZXNoaXAnKTtcbiAgY29uc3Qgc3VibWFyaW5lQnV0dG9uID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2J1dHRvbicsICdzdWJtYXJpbmUnLCBbJ3NoaXAtYnV0dG9uJ10sICdzdWJtYXJpbmUnKTtcbiAgY29uc3QgY3J1aXNlckJ1dHRvbiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdidXR0b24nLCAnY3J1aXNlcicsIFsnc2hpcC1idXR0b24nXSwgJ2NydWlzZXInKTtcbiAgY29uc3QgY2FycmllckJ1dHRvbiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdidXR0b24nLCAnY2FycmllcicsIFsnc2hpcC1idXR0b24nXSwgJ2NhcnJpZXInKTtcblxuICBnYW1lQm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uV3JhcHBlcik7XG5cbiAgYnV0dG9uV3JhcHBlci5hcHBlbmRDaGlsZChiYXR0bGVzaGlwQnV0dG9uKTtcbiAgYnV0dG9uV3JhcHBlci5hcHBlbmRDaGlsZChzdWJtYXJpbmVCdXR0b24pO1xuICBidXR0b25XcmFwcGVyLmFwcGVuZENoaWxkKGNydWlzZXJCdXR0b24pO1xuICBidXR0b25XcmFwcGVyLmFwcGVuZENoaWxkKGNhcnJpZXJCdXR0b24pO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwLWJ1dHRvbicpLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjb25zdCBzaGlwQXJyYXkgPSBbXTtcblxuICAgICAgcGxheWVyT25lLmdldFNoaXBBcnJheSgpLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgc2hpcEFycmF5LnB1c2goc2hpcC5uYW1lKTtcbiAgICAgICAgY29uc3QgdXNlZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3NoaXAubmFtZX1gKTtcbiAgICAgICAgdXNlZEJ0bi5zdHlsZS5jb2xvciA9ICcjMzQzNDM0JztcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXNoaXBBcnJheS5pbmNsdWRlcyhlLnRhcmdldC5pZCkpIHtcbiAgICAgICAgc2hpcE5hbWUgPSBlLnRhcmdldC5pZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3Qgc3RhcnRCdXR0b24gPSBjcmVhdGVIdG1sRWxlbWVudCgnYnV0dG9uJywgJ3N0YXJ0JywgWydjb250cm9sLWJ1dHRvbiddLCAnc3RhcnQgZ2FtZScpO1xuICBzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAocGxheWVyT25lLmdldFNoaXBBcnJheSgpLmxlbmd0aCA9PT0gNCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG4gICAgICBzdGFydEdhbWUocGxheWVyT25lLCBwbGF5ZXJUd28pO1xuICAgIH1cbiAgfSk7XG4gIGdhbWVCb2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChzdGFydEJ1dHRvbik7XG59O1xuXG5jb25zdCByZW5kZXJCb2FyZHMgPSAocGxheWVyT25lLCBwbGF5ZXJUd28pID0+IHtcbiAgY29uc3QgZ2FtZUJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWVib2FyZC1jb250YWluZXInKTtcbiAgZ2FtZUJvYXJkQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICBjb25zdCBmaXJzdEZyYW1lID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsIGAke3BsYXllck9uZS5wbGF5ZXJOYW1lfWZyYW1lYCwgWydmcmFtZSddLCBudWxsKTtcblxuICBjb25zdCBmaXJzdEdhbWVib2FyZCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCBgJHtwbGF5ZXJPbmUucGxheWVyTmFtZX1HYW1lYm9hcmRgLCBbJ2dhbWVib2FyZCddLCBudWxsKTtcbiAgZmlyc3RGcmFtZS5hcHBlbmRDaGlsZChmaXJzdEdhbWVib2FyZCk7XG4gIGdhbWVCb2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChmaXJzdEZyYW1lKTtcblxuICBjb25zdCBmaXJzdEdhbWVib2FyZFRpdGxlID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsICdmaXJzdC10aXRsZScsIFsnZ2FtZWJvYXJkLXRpdGxlJ10sIGAke3BsYXllck9uZS5wbGF5ZXJOYW1lfSdzIEJvYXJkYCk7XG4gIGZpcnN0RnJhbWUuYXBwZW5kQ2hpbGQoZmlyc3RHYW1lYm9hcmRUaXRsZSk7XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTAwOyBpKyspIHtcbiAgICBjb25zdCBzcXVhcmUgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgaSwgW2Ake3BsYXllck9uZS5wbGF5ZXJOYW1lfXNxdWFyZWBdLCBudWxsKTtcbiAgICBmaXJzdEdhbWVib2FyZC5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICB9XG5cbiAgY29uc3Qgc2Vjb25kRnJhbWUgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgYCR7cGxheWVyT25lLnBsYXllck5hbWV9ZnJhbWVgLCBbJ2ZyYW1lJ10sIG51bGwpO1xuXG4gIGNvbnN0IHNlY29uZEdhbWVib2FyZCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCBgJHtwbGF5ZXJUd28ucGxheWVyTmFtZX1HYW1lYm9hcmRgLCBbJ2dhbWVib2FyZCddLCBudWxsKTtcbiAgc2Vjb25kRnJhbWUuYXBwZW5kQ2hpbGQoc2Vjb25kR2FtZWJvYXJkKTtcbiAgZ2FtZUJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlY29uZEZyYW1lKTtcblxuICBjb25zdCBzZWNvbmRHYW1lYm9hcmRUaXRsZSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAnc2Vjb25kLXRpdGxlJywgWydnYW1lYm9hcmQtdGl0bGUnXSwgYCR7cGxheWVyVHdvLnBsYXllck5hbWV9J3MgQm9hcmRgKTtcbiAgc2Vjb25kRnJhbWUuYXBwZW5kQ2hpbGQoc2Vjb25kR2FtZWJvYXJkVGl0bGUpO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgY29uc3Qgd2hvc1R1cm4gPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ3RpdGxlLXR1cm4nLCBbJ3R1cm4nXSk7XG4gIHdob3NUdXJuLnRleHRDb250ZW50ID0gYCR7cGxheWVyT25lLnBsYXllck5hbWV9J3MgdHVybiAhYDtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHdob3NUdXJuKTtcblxuICBsZXQgcGxheWVyT25lVHVybiA9IHRydWU7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwMDsgaSsrKSB7XG4gICAgY29uc3Qgc3F1YXJlID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsIGksIFtgJHtwbGF5ZXJUd28ucGxheWVyTmFtZX1zcXVhcmVgXSwgbnVsbCk7XG4gICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjbGlja2VkJykgJiYgIWlzR2FtZU92ZXIocGxheWVyT25lLCBwbGF5ZXJUd28pKSB7XG4gICAgICAgIGlmIChwbGF5ZXJPbmVUdXJuKSB7XG4gICAgICAgICAgd2hvc1R1cm4uaW5uZXJIVE1MID0gYCR7cGxheWVyVHdvLnBsYXllck5hbWV9J3MgdHVybiAhYDtcbiAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdjbGlja2VkJyk7XG4gICAgICAgICAgcGxheVJvdW5kKHBsYXllclR3bywgTnVtYmVyKGUudGFyZ2V0LmlkKSk7XG4gICAgICAgICAgaXNHYW1lT3ZlcihwbGF5ZXJPbmUsIHBsYXllclR3byk7XG5cbiAgICAgICAgICBwbGF5ZXJPbmVUdXJuID0gZmFsc2U7XG5cbiAgICAgICAgICBzZXRUaW1lb3V0KCgoKSA9PiB7XG4gICAgICAgICAgICB3aG9zVHVybi5pbm5lckhUTUwgPSBgJHtwbGF5ZXJPbmUucGxheWVyTmFtZX0ncyB0dXJuICFgO1xuICAgICAgICAgICAgY29tcHV0ZXJSb3VuZChwbGF5ZXJPbmUpO1xuICAgICAgICAgICAgaXNHYW1lT3ZlcihwbGF5ZXJPbmUsIHBsYXllclR3byk7XG4gICAgICAgICAgICBwbGF5ZXJPbmVUdXJuID0gdHJ1ZTtcbiAgICAgICAgICB9KSwgMTAwMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZWNvbmRHYW1lYm9hcmQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgfVxufTtcbmNvbnN0IHN0YXJ0R2FtZSA9IChwbGF5ZXJPbmUsIHBsYXllclR3bykgPT4ge1xuICByZW5kZXJCb2FyZHMocGxheWVyT25lLCBwbGF5ZXJUd28pO1xuICBkaXNwbGF5U2hpcHMocGxheWVyT25lKTtcbn07XG5jb25zdCByZW5kZXJXZWxjb21lUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IHdlbGNvbWVQYWdlID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsICd3ZWxjb21lLXBhZ2UnLCBudWxsLCBudWxsKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHdlbGNvbWVQYWdlKTtcblxuICBjb25zdCB0aXRsZSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdoZWFkZXInLCAndGl0bGUnLCBudWxsLCAnUGxlYXNlIENob29zZSBBIG5hbWUnKTtcbiAgd2VsY29tZVBhZ2UuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIGNvbnN0IHBsYXllck5hbWVJbnB1dCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdpbnB1dCcsICdwbGF5ZXJOYW1lJywgbnVsbCwgbnVsbCk7XG4gIHdlbGNvbWVQYWdlLmFwcGVuZENoaWxkKHBsYXllck5hbWVJbnB1dCk7XG5cbiAgY29uc3QgY29udGludWVCdG4gPSBjcmVhdGVIdG1sRWxlbWVudCgnYnV0dG9uJywgJ2NvbnRpbnVlLWJ0bicsIFsnYnRuJ10sICdjb250aW51ZScpO1xuICBjb250aW51ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBwbGF5ZXJOYW1lID0gcGxheWVyTmFtZUlucHV0LnZhbHVlO1xuICAgIGNvbnN0IGh1bWFuID0gY3JlYXRlUGxheWVyKHBsYXllck5hbWUpO1xuICAgIGNvbnN0IGNvbXB1dGVyID0gY3JlYXRlUGxheWVyKCdjb21wdXRlcicpO1xuICAgIHJlbmRlclN0YXJ0aW5nUGFnZShodW1hbiwgY29tcHV0ZXIpO1xuXG4gICAgY29tcHV0ZXIucGxhY2VTaGlwKCdzdWJtYXJpbmUnLCAxNSk7XG4gICAgY29tcHV0ZXIucGxhY2VTaGlwKCdiYXR0bGVzaGlwJywgMzApO1xuICAgIGNvbXB1dGVyLnBsYWNlU2hpcCgnY2FycmllcicsIDEpO1xuICAgIGNvbXB1dGVyLnBsYWNlU2hpcCgnY3J1aXNlcicsIDk1KTtcbiAgfSk7XG4gIHdlbGNvbWVQYWdlLmFwcGVuZENoaWxkKGNvbnRpbnVlQnRuKTtcbn07XG5leHBvcnQgZGVmYXVsdCByZW5kZXJXZWxjb21lUGFnZTtcbiIsImltcG9ydCB7IGdldENvb3JkaW5hdGVzLCBnZXRMZW5ndGggfSBmcm9tICcuLi9IZWxwZXIgZnVuY3Rpb25zL3V0aWxpdGllcyc7XG5pbXBvcnQgY3JlYXRlU2hpcCBmcm9tICcuL3NoaXAnO1xuXG5jb25zdCBjcmVhdGVHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IHNoaXBBcnJheSA9IFtdO1xuICBjb25zdCBtaXNzQXJyYXkgPSBbXTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAobmFtZSwgY29vcmRpbmF0ZSkgPT4ge1xuICAgIGNvbnN0IGxlbmd0aCA9IGdldExlbmd0aChuYW1lKTtcbiAgICBjb25zdCBjb29yZGluYXRlQXJyYXkgPSBnZXRDb29yZGluYXRlcyhjb29yZGluYXRlLCBsZW5ndGgpO1xuICAgIGNvbnN0IHNoaXAgPSBjcmVhdGVTaGlwKG5hbWUsIGxlbmd0aCwgY29vcmRpbmF0ZUFycmF5KTtcbiAgICBzaGlwQXJyYXkucHVzaChzaGlwKTtcbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGhpdENvb3JkaW5hdGVzKSA9PiB7XG4gICAgbGV0IG1pc3MgPSB0cnVlO1xuXG4gICAgc2hpcEFycmF5LmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGlmIChzaGlwLnNoaXBDb29yZGluYXRlcy5pbmNsdWRlcyhoaXRDb29yZGluYXRlcykpIHtcbiAgICAgICAgc2hpcC5oaXQoaGl0Q29vcmRpbmF0ZXMpO1xuICAgICAgICBtaXNzID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAobWlzcykge1xuICAgICAgbWlzc0FycmF5LnB1c2goaGl0Q29vcmRpbmF0ZXMpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXRIaXRBcnJheSA9ICgpID0+IHtcbiAgICBjb25zdCBoaXRBcnJheSA9IFtdO1xuICAgIHNoaXBBcnJheS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBoaXRBcnJheS5wdXNoKC4uLnNoaXAuaGl0QXJyYXkpO1xuICAgIH0pO1xuICAgIHJldHVybiBoaXRBcnJheTtcbiAgfTtcblxuICBjb25zdCBpc0dhbWVMb3N0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHN1bmtBcnJheSA9IFtdO1xuICAgIHNoaXBBcnJheS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBpZiAoc2hpcC5pc1N1bmsoKSA9PT0gdHJ1ZSkge1xuICAgICAgICBzdW5rQXJyYXkucHVzaChzaGlwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoc3Vua0FycmF5Lmxlbmd0aCA9PT0gc2hpcEFycmF5Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgaXNHYW1lTG9zdCwgcmVjZWl2ZUF0dGFjaywgcGxhY2VTaGlwLCBtaXNzQXJyYXksIHNoaXBBcnJheSwgZ2V0SGl0QXJyYXksXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVHYW1lYm9hcmQ7XG4iLCJpbXBvcnQgY3JlYXRlR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcblxuY29uc3QgY3JlYXRlUGxheWVyID0gKHBsYXllck5hbWUpID0+IHtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBjcmVhdGVHYW1lYm9hcmQoKTtcblxuICBjb25zdCBnZXRNaXNzQXJyYXkgPSAoKSA9PiBwbGF5ZXJCb2FyZC5taXNzQXJyYXk7XG5cbiAgY29uc3QgZ2V0U2hpcEFycmF5ID0gKCkgPT4gcGxheWVyQm9hcmQuc2hpcEFycmF5O1xuXG4gIGNvbnN0IGhhc0xvc3QgPSAoKSA9PiB7XG4gICAgaWYgKHBsYXllckJvYXJkLmlzR2FtZUxvc3QoKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGhpdENvb3JkaW5hdGVzKSA9PiB7XG4gICAgcGxheWVyQm9hcmQucmVjZWl2ZUF0dGFjayhoaXRDb29yZGluYXRlcyk7XG4gIH07XG4gIGNvbnN0IGdldEhpdEFycmF5ID0gKCkgPT4gcGxheWVyQm9hcmQuZ2V0SGl0QXJyYXkoKTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAobmFtZSwgY29vcmRpbmF0ZXMpID0+IHtcbiAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAobmFtZSwgY29vcmRpbmF0ZXMpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcGxheWVyTmFtZSwgaGFzTG9zdCwgcGxhY2VTaGlwLCByZWNlaXZlQXR0YWNrLCBnZXRNaXNzQXJyYXksIGdldFNoaXBBcnJheSwgZ2V0SGl0QXJyYXksXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQbGF5ZXI7XG4iLCJjb25zdCBjcmVhdGVTaGlwID0gKG5hbWUsIGxlbmd0aCwgY29vcmRpbmF0ZXMpID0+IHtcbiAgY29uc3Qgc2hpcENvb3JkaW5hdGVzID0gWy4uLmNvb3JkaW5hdGVzXTtcbiAgY29uc3QgaGl0QXJyYXkgPSBbXTtcblxuICBjb25zdCBoaXQgPSAoaGl0Q29vcmRpbmF0ZXMpID0+IHtcbiAgICBjb29yZGluYXRlcy5mb3JFYWNoKChzaGlwU3F1YXJlKSA9PiB7XG4gICAgICBpZiAoc2hpcFNxdWFyZSA9PT0gaGl0Q29vcmRpbmF0ZXMpIHtcbiAgICAgICAgaGl0QXJyYXkucHVzaChoaXRDb29yZGluYXRlcyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIGlmIChoaXRBcnJheS5sZW5ndGggPT09IGxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG5hbWUsIGhpdCwgaXNTdW5rLCBzaGlwQ29vcmRpbmF0ZXMsIGhpdEFycmF5LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2hpcDtcbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4NDI2NWJmMGVkZDU0Y2E3MjkwODllOWU2YjQzZmRkMS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYjFmZGYxYTkwYTRhMzgyNDZlMGE4N2NlZGUzYjUyMmIucG5nXCI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsImltcG9ydCByZW5kZXJXZWxjb21lUGFnZSBmcm9tICcuL2RvbSc7XG5cbnJlbmRlcldlbGNvbWVQYWdlKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9