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
var getRandomNumber = function getRandomNumber() {
  return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
};

var getLength = function getLength(name) {
  if (name === "submarine") {
    return 2;
  } else if (name === "carrier") {
    return 6;
  } else if (name === "battleship") {
    return 4;
  } else if (name === "cruiser") {
    return 3;
  }
};
/* 
const getCoordinates = (coordinate, length) => {
    const coordinateArray = [];
  
    if (coordinate + length > 100) {
      for (let i = 0; i < length; i++) {
        coordinateArray.push(coordinate - i);
      }
    } else {
      for (let i = 0; i < length; i++) {
        coordinateArray.push(coordinate + i);
      }
    }
    return coordinateArray;
  }; */


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
/* harmony export */   "renderWelcomePage": () => (/* binding */ renderWelcomePage)
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









var renderWelcomePage = function renderWelcomePage() {
  var container = document.querySelector('.container');
  var welcomePage = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'welcome-page', null, null);
  container.appendChild(welcomePage);
  var title = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('header', 'title', null, 'Please Choose A name');
  welcomePage.appendChild(title);
  var playerNameInput = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('input', 'playerName', null, null);
  welcomePage.appendChild(playerNameInput);
  var continueBtn = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('button', 'continue-btn', ['btn'], 'continue');
  continueBtn.addEventListener('click', function () {
    var playerName = playerNameInput.value;
    var human = (0,_player__WEBPACK_IMPORTED_MODULE_2__.createPlayer)(playerName);
    var computer = (0,_player__WEBPACK_IMPORTED_MODULE_2__.createPlayer)("computer");
    renderStartingPage(human, computer);
    computer.placeShip("submarine", 60);
    computer.placeShip("battleship", 80);
  });
  welcomePage.appendChild(continueBtn);
};

var renderStartingPage = function renderStartingPage(playerOne, playerTwo) {
  var shipName = null;
  var container = document.querySelector('.container');
  var gameBoardContainer = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'gameboard-container', null, null);
  container.innerHTML = '';
  container.appendChild(gameBoardContainer);
  var firstGameboard = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', "".concat(playerOne.playerName, "Gameboard"), ['gameboard'], null);
  gameBoardContainer.appendChild(firstGameboard);

  for (var i = 1; i <= 100; i++) {
    var square = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', i, ["".concat(playerOne.playerName, "square")], null);
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
        highLightBtn("start", playerOne);
      }
    });
    firstGameboard.appendChild(square);
  }

  var buttonWrapper = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)("div", null, ['btn-wrapper'], null);
  var battleshipButton = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('button', 'battleship', ['ship-button'], 'battleship');
  var submarineButton = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('button', 'submarine', ['ship-button'], 'submarine');
  var cruiserButton = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('button', 'cruiser', ['ship-button'], 'cruiser');
  var carrierButton = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('button', 'carrier', ['ship-button'], 'carrier');
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
  var startButton = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('button', 'start', ['control-button'], 'start game');
  startButton.addEventListener('click', function () {
    if (playerOne.getShipArray().length === 4) {
      startGame(playerOne, playerTwo);
    }
  });
  gameBoardContainer.appendChild(startButton);
};

var renderBoards = function renderBoards(playerOne, playerTwo) {
  var gameBoardContainer = document.querySelector('#gameboard-container');
  gameBoardContainer.innerHTML = '';
  var firstFrame = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', "".concat(playerOne.playerName, "frame"), ['frame'], null);
  var firstGameboard = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', "".concat(playerOne.playerName, "Gameboard"), ['gameboard'], null);
  firstFrame.appendChild(firstGameboard);
  gameBoardContainer.appendChild(firstFrame);
  var firstGameboardTitle = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', "first-title", ['gameboard-title'], "".concat(playerOne.playerName, "'s Board"));
  firstFrame.appendChild(firstGameboardTitle);

  for (var i = 1; i <= 100; i++) {
    var square = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', i, ["".concat(playerOne.playerName, "square")], null);
    firstGameboard.appendChild(square);
  }

  var secondFrame = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', "".concat(playerOne.playerName, "frame"), ['frame'], null);
  var secondGameboard = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', "".concat(playerTwo.playerName, "Gameboard"), ['gameboard'], null);
  secondFrame.appendChild(secondGameboard);
  gameBoardContainer.appendChild(secondFrame);
  var secondGameboardTitle = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', "second-title", ['gameboard-title'], "".concat(playerTwo.playerName, "'s Board"));
  secondFrame.appendChild(secondGameboardTitle);

  for (var _i = 1; _i <= 100; _i++) {
    var _square = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', _i, ["".concat(playerTwo.playerName, "square")], null);

    _square.addEventListener('click', function (e) {
      if (!e.target.classList.contains('clicked') && !isGameOver(playerOne, playerTwo)) {
        playRound(playerTwo, Number(e.target.id));
        e.target.classList.add('clicked');
        isGameOver(playerOne, playerTwo);
        computerRound(playerOne);
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

      var _logo = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)("img", "explosion", ['logo'], null);

      _logo.src = _assets_target_png__WEBPACK_IMPORTED_MODULE_4__.default;
      if (!square.firstChild) square.appendChild(_logo);
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

      if (!square.firstChild.src === _assets_target_png__WEBPACK_IMPORTED_MODULE_4__.default) {
        square.appendChild(logo);
      }
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
    btn.style.color = "whitesmoke";
  }
};

var isGameOver = function isGameOver(playerOne, playerTwo) {
  var gameOverScreen = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'overlay', ['overlay'], null);

  if (playerOne.hasLost()) {
    gameOverScreen.textContent = "".concat(playerTwo.playerName, " Destroyed your ships, You Lose !");
    gameOverScreen.style.color = 'rgb(226, 7, 7)';
    window.document.body.appendChild(gameOverScreen);
    gameOverScreen.style.display = "flex";
    return true;
  } else if (playerTwo.hasLost()) {
    console.log(gameOverScreen);
    gameOverScreen.textContent = "".concat(playerOne.playerName, " Destroyed the Computer's ships, You Win !");
    window.document.body.appendChild(gameOverScreen);
    gameOverScreen.style.color = '#2345da';
    gameOverScreen.style.display = "flex";
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

var startGame = function startGame(playerOne, playerTwo) {
  renderBoards(playerOne, playerTwo);
  displayShips(playerOne);
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
    var ship = (0,_ship__WEBPACK_IMPORTED_MODULE_1__.createShip)(name, length, coordinateArray);
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

(0,_dom__WEBPACK_IMPORTED_MODULE_0__.renderWelcomePage)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvSGVscGVyIGZ1bmN0aW9ucy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL0pTL2NyZWF0ZUh0bWxFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9KUy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL0pTL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvSlMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9KUy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9hc3NldHMvZXhwbG9zaW9uLnBuZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvYXNzZXRzL3RhcmdldC5wbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9KUy9pbmRleC5qcyJdLCJuYW1lcyI6WyJnZXRSYW5kb21OdW1iZXIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJnZXRMZW5ndGgiLCJuYW1lIiwiZ2V0Q29vcmRpbmF0ZXMiLCJjb29yZGluYXRlIiwibGVuZ3RoIiwiY29vcmRpbmF0ZUFycmF5IiwibGFzdENvb3JkaW5hdGUiLCJpIiwicHVzaCIsImNyZWF0ZUh0bWxFbGVtZW50IiwidHlwZSIsImlkIiwiYXJyYXlDbGFzc2VzIiwiY29udGVudCIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJmb3JFYWNoIiwibXlDbGFzcyIsImNsYXNzTGlzdCIsImFkZCIsImlubmVyVGV4dCIsInJlbmRlcldlbGNvbWVQYWdlIiwiY29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsIndlbGNvbWVQYWdlIiwiYXBwZW5kQ2hpbGQiLCJ0aXRsZSIsInBsYXllck5hbWVJbnB1dCIsImNvbnRpbnVlQnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBsYXllck5hbWUiLCJ2YWx1ZSIsImh1bWFuIiwiY3JlYXRlUGxheWVyIiwiY29tcHV0ZXIiLCJyZW5kZXJTdGFydGluZ1BhZ2UiLCJwbGFjZVNoaXAiLCJwbGF5ZXJPbmUiLCJwbGF5ZXJUd28iLCJzaGlwTmFtZSIsImdhbWVCb2FyZENvbnRhaW5lciIsImlubmVySFRNTCIsImZpcnN0R2FtZWJvYXJkIiwic3F1YXJlIiwiZSIsImRpc3BsYXlBcnJheSIsImdldFNoaXBBcnJheSIsInNoaXAiLCJzaGlwQ29vcmRpbmF0ZXMiLCJkb2VzQ29sbGlkZSIsImNvbGxpZGUiLCJjb29yZGluYXRlcyIsIk51bWJlciIsInRhcmdldCIsImluY2x1ZGVzIiwiZGlzcGxheVNoaXBzIiwiZ3JheU91dEJ0biIsImhpZ2hMaWdodEJ0biIsImJ1dHRvbldyYXBwZXIiLCJiYXR0bGVzaGlwQnV0dG9uIiwic3VibWFyaW5lQnV0dG9uIiwiY3J1aXNlckJ1dHRvbiIsImNhcnJpZXJCdXR0b24iLCJxdWVyeVNlbGVjdG9yQWxsIiwiYnV0dG9uIiwic2hpcEFycmF5IiwidXNlZEJ0biIsInN0eWxlIiwiY29sb3IiLCJzdGFydEJ1dHRvbiIsInN0YXJ0R2FtZSIsInJlbmRlckJvYXJkcyIsImZpcnN0RnJhbWUiLCJmaXJzdEdhbWVib2FyZFRpdGxlIiwic2Vjb25kRnJhbWUiLCJzZWNvbmRHYW1lYm9hcmQiLCJzZWNvbmRHYW1lYm9hcmRUaXRsZSIsImNvbnRhaW5zIiwiaXNHYW1lT3ZlciIsInBsYXlSb3VuZCIsImNvbXB1dGVyUm91bmQiLCJwbGF5ZXIiLCJzcXVhcmVzIiwiYmFja2dyb3VuZENvbG9yIiwiYXR0YWNrIiwicmVjZWl2ZUF0dGFjayIsImdldEhpdEFycmF5Iiwic2V0QXR0cmlidXRlIiwibG9nbyIsInNyYyIsImZpcnN0Q2hpbGQiLCJkaXNwbGF5TWlzc0FycmF5IiwiZ2V0TWlzc0FycmF5IiwidGV4dENvbnRlbnQiLCJkaXNwbGF5U3Vua1NoaXBzIiwic3Vua0FycmF5IiwiaXNTdW5rIiwiZXhwbG9zaW9uIiwiYnROYW1lIiwiYnRuIiwiZ2FtZU92ZXJTY3JlZW4iLCJoYXNMb3N0Iiwid2luZG93IiwiYm9keSIsImRpc3BsYXkiLCJjb25zb2xlIiwibG9nIiwiY29tcHV0ZXJQbGF5IiwidHJ5QWdhaW4iLCJjcmVhdGVHYW1lYm9hcmQiLCJtaXNzQXJyYXkiLCJjcmVhdGVTaGlwIiwiaGl0Q29vcmRpbmF0ZXMiLCJtaXNzIiwiaGl0IiwiaGl0QXJyYXkiLCJpc0dhbWVMb3N0IiwicGxheWVyQm9hcmQiLCJzaGlwU3F1YXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFJO0FBQ3hCLFNBQU9DLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsTUFBaUIsTUFBTSxDQUFOLEdBQVUsQ0FBM0IsQ0FBWCxJQUE0QyxDQUFuRDtBQUNILENBRkQ7O0FBSUEsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsSUFBRCxFQUFTO0FBQ3ZCLE1BQUlBLElBQUksS0FBSyxXQUFiLEVBQXlCO0FBQ3JCLFdBQU8sQ0FBUDtBQUNILEdBRkQsTUFHSyxJQUFJQSxJQUFJLEtBQUssU0FBYixFQUF1QjtBQUN4QixXQUFPLENBQVA7QUFDSCxHQUZJLE1B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QUtOLGNBQW5CLEVBQWtDO0FBQzlCRyxnQkFBUSxDQUFDNUcsSUFBVCxDQUFjeUcsY0FBZDtBQUNIO0FBQ0osS0FKRDtBQUtILEdBTkQ7O0FBUUEsTUFBTWhCLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQUk7QUFDZixRQUFHbUIsUUFBUSxDQUFDaEgsTUFBVCxLQUFrQkEsTUFBckIsRUFBNEI7QUFDeEIsYUFBTyxJQUFQO0FBQ0g7O0FBQ0QsV0FBTyxLQUFQO0FBRUgsR0FORDs7QUFRQSxTQUFPO0FBQUNILFFBQUksRUFBSkEsSUFBRDtBQUFPa0gsT0FBRyxFQUFIQSxHQUFQO0FBQVlsQixVQUFNLEVBQU5BLE1BQVo7QUFBb0JoRCxtQkFBZSxFQUFmQSxlQUFwQjtBQUFxQ21FLFlBQVEsRUFBUkE7QUFBckMsR0FBUDtBQUVQLENBdEJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUQsaUVBQWUscUJBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDLEU7Ozs7OztVQ0EvRTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkEsMkI7Ozs7Ozs7Ozs7OztBQ0FBO0FBRUE5Rix1REFBaUIsRyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBnZXRSYW5kb21OdW1iZXIgPSAoKT0+e1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAwIC0gMSArIDEpKSArIDE7XG59O1xuXG5jb25zdCBnZXRMZW5ndGggPSAobmFtZSkgPT57XG4gICAgaWYgKG5hbWUgPT09IFwic3VibWFyaW5lXCIpe1xuICAgICAgICByZXR1cm4gMlxuICAgIH1cbiAgICBlbHNlIGlmIChuYW1lID09PSBcImNhcnJpZXJcIil7XG4gICAgICAgIHJldHVybiA2XG4gICAgfVxuICAgIGVsc2UgaWYgKG5hbWUgPT09IFwiYmF0dGxlc2hpcFwiKXtcbiAgICAgIHJldHVybiA0XG4gIH1cbiAgZWxzZSBpZiAobmFtZSA9PT0gXCJjcnVpc2VyXCIpe1xuICAgIHJldHVybiAzXG59XG59O1xuLyogXG5jb25zdCBnZXRDb29yZGluYXRlcyA9IChjb29yZGluYXRlLCBsZW5ndGgpID0+IHtcbiAgICBjb25zdCBjb29yZGluYXRlQXJyYXkgPSBbXTtcbiAgXG4gICAgaWYgKGNvb3JkaW5hdGUgKyBsZW5ndGggPiAxMDApIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29vcmRpbmF0ZUFycmF5LnB1c2goY29vcmRpbmF0ZSAtIGkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvb3JkaW5hdGVBcnJheS5wdXNoKGNvb3JkaW5hdGUgKyBpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvb3JkaW5hdGVBcnJheTtcbiAgfTsgKi9cblxuICBjb25zdCBnZXRDb29yZGluYXRlcyA9IChjb29yZGluYXRlLCBsZW5ndGgpID0+IHtcbiAgICBjb25zdCBjb29yZGluYXRlQXJyYXkgPSBbXTtcbiAgICBsZXQgbGFzdENvb3JkaW5hdGUgPSBjb29yZGluYXRlK2xlbmd0aDtcblxuICAgIGlmIChjb29yZGluYXRlID49MSAmJiBsYXN0Q29vcmRpbmF0ZTw9MTEgKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvb3JkaW5hdGVBcnJheS5wdXNoKGNvb3JkaW5hdGUgKyBpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAgZWxzZSBpZiAoY29vcmRpbmF0ZSA+IDEwICYmIGxhc3RDb29yZGluYXRlPD0yMSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjb29yZGluYXRlQXJyYXkucHVzaChjb29yZGluYXRlICsgaSk7XG4gICAgICB9ICAgICAgXG4gICAgfVxuXG4gICAgZWxzZSBpZiAoY29vcmRpbmF0ZT4yMCAmJiBsYXN0Q29vcmRpbmF0ZTw9MzEpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29vcmRpbmF0ZUFycmF5LnB1c2goY29vcmRpbmF0ZSArIGkpO1xuICAgICAgfSAgICAgIFxuICAgIH1cblxuICAgIGVsc2UgaWYgKGNvb3JkaW5hdGU+MzAgJiYgbGFzdENvb3JkaW5hdGU8PTQxKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvb3JkaW5hdGVBcnJheS5wdXNoKGNvb3JkaW5hdGUgKyBpKTtcbiAgICAgIH0gICAgICBcbiAgICB9XG5cbiAgICBlbHNlIGlmIChjb29yZGluYXRlPjQwICYmIGxhc3RDb29yZGluYXRlPD01MSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjb29yZGluYXRlQXJyYXkucHVzaChjb29yZGluYXRlICsgaSk7XG4gICAgICB9ICAgICAgXG4gICAgfVxuXG4gICAgZWxzZSBpZiAoY29vcmRpbmF0ZT41MCAmJiBsYXN0Q29vcmRpbmF0ZTw9NjEpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29vcmRpbmF0ZUFycmF5LnB1c2goY29vcmRpbmF0ZSArIGkpO1xuICAgICAgfSAgICAgIFxuICAgIH1cblxuICAgIGVsc2UgaWYgKGNvb3JkaW5hdGU+NjAgJiYgbGFzdENvb3JkaW5hdGU8PTcxKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvb3JkaW5hdGVBcnJheS5wdXNoKGNvb3JkaW5hdGUgKyBpKTtcbiAgICAgIH0gICAgICBcbiAgICB9XG5cbiAgICBlbHNlIGlmIChjb29yZGluYXRlPjcwICYmIGxhc3RDb29yZGluYXRlPD04MSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjb29yZGluYXRlQXJyYXkucHVzaChjb29yZGluYXRlICsgaSk7XG4gICAgICB9ICAgICAgXG4gICAgfVxuXG4gICAgZWxzZSBpZiAoY29vcmRpbmF0ZT44MCAmJiBsYXN0Q29vcmRpbmF0ZTw9OTEpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29vcmRpbmF0ZUFycmF5LnB1c2goY29vcmRpbmF0ZSArIGkpO1xuICAgICAgfSAgICAgIFxuICAgIH1cblxuICAgIGVsc2UgaWYgKGNvb3JkaW5hdGU+OTAgJiYgbGFzdENvb3JkaW5hdGU8PTEwMSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjb29yZGluYXRlQXJyYXkucHVzaChjb29yZGluYXRlICsgaSk7XG4gICAgICB9ICAgICAgXG4gICAgfVxuICAgIGVsc2UgaWYgKGxhc3RDb29yZGluYXRlPjEwMCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjb29yZGluYXRlQXJyYXkucHVzaChjb29yZGluYXRlIC0gaSk7XG4gICAgICB9ICAgICAgXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjb29yZGluYXRlQXJyYXkucHVzaChjb29yZGluYXRlIC0gaSk7XG4gICAgICB9ICBcbiAgICB9XG5cbiAgICByZXR1cm4gY29vcmRpbmF0ZUFycmF5O1xuICB9O1xuXG4gIGV4cG9ydCB7Z2V0Q29vcmRpbmF0ZXMsZ2V0TGVuZ3RoLGdldFJhbmRvbU51bWJlcn1cblxuIiwiY29uc3QgY3JlYXRlSHRtbEVsZW1lbnQgPSAodHlwZSwgaWQsIGFycmF5Q2xhc3NlcywgY29udGVudCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIGlmIChpZCkgZWxlbWVudC5pZCA9IGlkO1xuICAgIGlmIChhcnJheUNsYXNzZXMpIGFycmF5Q2xhc3Nlcy5mb3JFYWNoKChteUNsYXNzKSA9PiBlbGVtZW50LmNsYXNzTGlzdC5hZGQobXlDbGFzcykpO1xuICBcbiAgICBpZiAoY29udGVudCkgZWxlbWVudC5pbm5lclRleHQgPSBjb250ZW50O1xuICBcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfTtcbiAgZXhwb3J0IHtjcmVhdGVIdG1sRWxlbWVudH0iLCJpbXBvcnQgeyBnZXRDb29yZGluYXRlcyB9IGZyb20gJy4uL0hlbHBlciBmdW5jdGlvbnMvdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUh0bWxFbGVtZW50IH0gZnJvbSAnLi9jcmVhdGVIdG1sRWxlbWVudCc7XG5pbXBvcnQgeyBnZXRMZW5ndGggfSBmcm9tICcuLi9IZWxwZXIgZnVuY3Rpb25zL3V0aWxpdGllcyc7XG5pbXBvcnQgeyBnZXRSYW5kb21OdW1iZXIgfSBmcm9tICcuLi9IZWxwZXIgZnVuY3Rpb25zL3V0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCBleHBsb3Npb24gZnJvbSBcIi4uL2Fzc2V0cy9leHBsb3Npb24ucG5nXCI7XG5pbXBvcnQgdGFyZ2V0IGZyb20gXCIuLi9hc3NldHMvdGFyZ2V0LnBuZ1wiO1xuXG5jb25zdCByZW5kZXJXZWxjb21lUGFnZSA9ICgpPT57XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcblxuICBjb25zdCB3ZWxjb21lUGFnZSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCd3ZWxjb21lLXBhZ2UnLG51bGwsbnVsbClcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHdlbGNvbWVQYWdlKTtcblxuICBjb25zdCB0aXRsZSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdoZWFkZXInLCd0aXRsZScsbnVsbCwnUGxlYXNlIENob29zZSBBIG5hbWUnKTtcbiAgd2VsY29tZVBhZ2UuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIGNvbnN0IHBsYXllck5hbWVJbnB1dCAgPSBjcmVhdGVIdG1sRWxlbWVudCgnaW5wdXQnLCdwbGF5ZXJOYW1lJyxudWxsLG51bGwpO1xuICB3ZWxjb21lUGFnZS5hcHBlbmRDaGlsZChwbGF5ZXJOYW1lSW5wdXQpO1xuXG4gIGNvbnN0IGNvbnRpbnVlQnRuID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2J1dHRvbicsJ2NvbnRpbnVlLWJ0bicsWydidG4nXSwnY29udGludWUnKTtcbiAgY29udGludWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuXG4gICAgY29uc3QgcGxheWVyTmFtZSA9IHBsYXllck5hbWVJbnB1dC52YWx1ZTtcbiAgICBjb25zdCBodW1hbiA9IGNyZWF0ZVBsYXllcihwbGF5ZXJOYW1lKTtcbiAgICBjb25zdCBjb21wdXRlciA9IGNyZWF0ZVBsYXllcihcImNvbXB1dGVyXCIpO1xuICAgIHJlbmRlclN0YXJ0aW5nUGFnZShodW1hbixjb21wdXRlcik7XG5cbiAgICBjb21wdXRlci5wbGFjZVNoaXAoXCJzdWJtYXJpbmVcIiw2MCk7XG4gICAgY29tcHV0ZXIucGxhY2VTaGlwKFwiYmF0dGxlc2hpcFwiLDgwKTtcbiAgfSlcbiAgd2VsY29tZVBhZ2UuYXBwZW5kQ2hpbGQoY29udGludWVCdG4pO1xufVxuXG5jb25zdCByZW5kZXJTdGFydGluZ1BhZ2UgPSAocGxheWVyT25lLCBwbGF5ZXJUd28pID0+IHtcbiAgbGV0IHNoaXBOYW1lID0gbnVsbDtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICBjb25zdCBnYW1lQm9hcmRDb250YWluZXIgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywnZ2FtZWJvYXJkLWNvbnRhaW5lcicsbnVsbCxudWxsKTtcbiAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2FtZUJvYXJkQ29udGFpbmVyKVxuICBjb25zdCBmaXJzdEdhbWVib2FyZCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCBgJHtwbGF5ZXJPbmUucGxheWVyTmFtZX1HYW1lYm9hcmRgLCBbJ2dhbWVib2FyZCddLCBudWxsKTtcbiAgZ2FtZUJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGZpcnN0R2FtZWJvYXJkKTtcblxuICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDA7IGkrKykge1xuICAgIGNvbnN0IHNxdWFyZSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCBpLCBbYCR7cGxheWVyT25lLnBsYXllck5hbWV9c3F1YXJlYF0sIG51bGwpO1xuICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjb25zdCBkaXNwbGF5QXJyYXkgPSBbXTtcbiAgICAgIGNvbnN0IGxlbmd0aCA9IGdldExlbmd0aChzaGlwTmFtZSk7XG4gICAgICBwbGF5ZXJPbmUuZ2V0U2hpcEFycmF5KCkuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICBkaXNwbGF5QXJyYXkucHVzaCguLi5zaGlwLnNoaXBDb29yZGluYXRlcyk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZG9lc0NvbGxpZGUgPSAoKSA9PiB7XG4gICAgICAgIGxldCBjb2xsaWRlID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gZ2V0Q29vcmRpbmF0ZXMoTnVtYmVyKGUudGFyZ2V0LmlkKSwgbGVuZ3RoKTtcbiAgICAgICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICAgIGlmIChkaXNwbGF5QXJyYXkuaW5jbHVkZXMoY29vcmRpbmF0ZSkpIHtcbiAgICAgICAgICAgIGNvbGxpZGUgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjb2xsaWRlO1xuICAgICAgfTtcblxuICAgICAgaWYgKHNoaXBOYW1lICYmICFkaXNwbGF5QXJyYXkuaW5jbHVkZXMoTnVtYmVyKGUudGFyZ2V0LmlkKSkgJiYgIWRvZXNDb2xsaWRlKCkpIHtcbiAgICAgICAgcGxheWVyT25lLnBsYWNlU2hpcChzaGlwTmFtZSwgTnVtYmVyKGUudGFyZ2V0LmlkKSk7XG4gICAgICAgIGRpc3BsYXlTaGlwcyhwbGF5ZXJPbmUpO1xuICAgICAgICBzaGlwTmFtZSA9IG51bGw7XG4gICAgICAgIGdyYXlPdXRCdG4ocGxheWVyT25lKVxuICAgICAgICBoaWdoTGlnaHRCdG4oXCJzdGFydFwiLCBwbGF5ZXJPbmUpXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBmaXJzdEdhbWVib2FyZC5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICB9XG4gIGNvbnN0IGJ1dHRvbldyYXBwZXIgPSBjcmVhdGVIdG1sRWxlbWVudChcImRpdlwiLG51bGwsWydidG4td3JhcHBlciddLG51bGwpO1xuXG4gIGNvbnN0IGJhdHRsZXNoaXBCdXR0b24gPSBjcmVhdGVIdG1sRWxlbWVudCgnYnV0dG9uJywgJ2JhdHRsZXNoaXAnLCBbJ3NoaXAtYnV0dG9uJ10sICdiYXR0bGVzaGlwJyk7XG4gIGNvbnN0IHN1Ym1hcmluZUJ1dHRvbiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdidXR0b24nLCAnc3VibWFyaW5lJywgWydzaGlwLWJ1dHRvbiddLCAnc3VibWFyaW5lJyk7XG4gIGNvbnN0IGNydWlzZXJCdXR0b24gPSBjcmVhdGVIdG1sRWxlbWVudCgnYnV0dG9uJywgJ2NydWlzZXInLCBbJ3NoaXAtYnV0dG9uJ10sICdjcnVpc2VyJyk7XG4gIGNvbnN0IGNhcnJpZXJCdXR0b24gPSBjcmVhdGVIdG1sRWxlbWVudCgnYnV0dG9uJywgJ2NhcnJpZXInLCBbJ3NoaXAtYnV0dG9uJ10sICdjYXJyaWVyJyk7XG5cblxuXG5cbiAgZ2FtZUJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbldyYXBwZXIpO1xuXG4gIGJ1dHRvbldyYXBwZXIuYXBwZW5kQ2hpbGQoYmF0dGxlc2hpcEJ1dHRvbik7XG4gIGJ1dHRvbldyYXBwZXIuYXBwZW5kQ2hpbGQoc3VibWFyaW5lQnV0dG9uKTtcbiAgYnV0dG9uV3JhcHBlci5hcHBlbmRDaGlsZChjcnVpc2VyQnV0dG9uKTtcbiAgYnV0dG9uV3JhcHBlci5hcHBlbmRDaGlsZChjYXJyaWVyQnV0dG9uKTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcC1idXR0b24nKS5mb3JFYWNoKChidXR0b24pID0+IHtcblxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cbiAgICAgIGNvbnN0IHNoaXBBcnJheSA9IFtdOyAgICAgXG5cbiAgICAgIHBsYXllck9uZS5nZXRTaGlwQXJyYXkoKS5mb3JFYWNoKHNoaXA9PntcbiAgICAgICAgc2hpcEFycmF5LnB1c2goc2hpcC5uYW1lKTtcbiAgICAgICAgY29uc3QgdXNlZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3NoaXAubmFtZX1gKTtcbiAgICAgICAgdXNlZEJ0bi5zdHlsZS5jb2xvcj0nIzM0MzQzNCdcblxuICAgICAgfSlcblxuICAgIGlmICghc2hpcEFycmF5LmluY2x1ZGVzKGUudGFyZ2V0LmlkKSl7XG4gICAgICBzaGlwTmFtZSA9IGUudGFyZ2V0LmlkO1xuICAgICAgfVxuXG4gICAgICBcbiAgICB9KTtcblxuICBcbiAgfSk7XG5cbiAgY29uc3Qgc3RhcnRCdXR0b24gPSBjcmVhdGVIdG1sRWxlbWVudCgnYnV0dG9uJywgJ3N0YXJ0JywgWydjb250cm9sLWJ1dHRvbiddLCAnc3RhcnQgZ2FtZScpO1xuICBzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuICAgIGlmKHBsYXllck9uZS5nZXRTaGlwQXJyYXkoKS5sZW5ndGg9PT00KXtcbiAgICBzdGFydEdhbWUocGxheWVyT25lLCBwbGF5ZXJUd28pO1xuICB9XG5cbiAgfSk7XG4gIGdhbWVCb2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChzdGFydEJ1dHRvbik7XG59O1xuXG5jb25zdCByZW5kZXJCb2FyZHMgPSAocGxheWVyT25lLCBwbGF5ZXJUd28pID0+IHtcbiAgY29uc3QgZ2FtZUJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWVib2FyZC1jb250YWluZXInKTtcbiAgZ2FtZUJvYXJkQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICBjb25zdCBmaXJzdEZyYW1lID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsIGAke3BsYXllck9uZS5wbGF5ZXJOYW1lfWZyYW1lYCwgWydmcmFtZSddLCBudWxsKTtcblxuICBjb25zdCBmaXJzdEdhbWVib2FyZCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCBgJHtwbGF5ZXJPbmUucGxheWVyTmFtZX1HYW1lYm9hcmRgLCBbJ2dhbWVib2FyZCddLCBudWxsKTtcbiAgZmlyc3RGcmFtZS5hcHBlbmRDaGlsZChmaXJzdEdhbWVib2FyZCk7XG4gIGdhbWVCb2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChmaXJzdEZyYW1lKTtcblxuICBjb25zdCBmaXJzdEdhbWVib2FyZFRpdGxlID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsIGBmaXJzdC10aXRsZWAsIFsnZ2FtZWJvYXJkLXRpdGxlJ10sIGAke3BsYXllck9uZS5wbGF5ZXJOYW1lfSdzIEJvYXJkYCk7XG4gIGZpcnN0RnJhbWUuYXBwZW5kQ2hpbGQoZmlyc3RHYW1lYm9hcmRUaXRsZSk7XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTAwOyBpKyspIHtcbiAgICBjb25zdCBzcXVhcmUgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgaSwgW2Ake3BsYXllck9uZS5wbGF5ZXJOYW1lfXNxdWFyZWBdLCBudWxsKTtcbiAgICBmaXJzdEdhbWVib2FyZC5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICB9XG5cbiAgY29uc3Qgc2Vjb25kRnJhbWUgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgYCR7cGxheWVyT25lLnBsYXllck5hbWV9ZnJhbWVgLCBbJ2ZyYW1lJ10sIG51bGwpO1xuXG4gIGNvbnN0IHNlY29uZEdhbWVib2FyZCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCBgJHtwbGF5ZXJUd28ucGxheWVyTmFtZX1HYW1lYm9hcmRgLCBbJ2dhbWVib2FyZCddLCBudWxsKTtcbiAgc2Vjb25kRnJhbWUuYXBwZW5kQ2hpbGQoc2Vjb25kR2FtZWJvYXJkKTtcbiAgZ2FtZUJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlY29uZEZyYW1lKTtcblxuICBjb25zdCBzZWNvbmRHYW1lYm9hcmRUaXRsZSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCBgc2Vjb25kLXRpdGxlYCwgWydnYW1lYm9hcmQtdGl0bGUnXSwgYCR7cGxheWVyVHdvLnBsYXllck5hbWV9J3MgQm9hcmRgKTtcbiAgc2Vjb25kRnJhbWUuYXBwZW5kQ2hpbGQoc2Vjb25kR2FtZWJvYXJkVGl0bGUpO1xuXG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTAwOyBpKyspIHtcbiAgICBjb25zdCBzcXVhcmUgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgaSwgW2Ake3BsYXllclR3by5wbGF5ZXJOYW1lfXNxdWFyZWBdLCBudWxsKTtcbiAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NsaWNrZWQnKSAmJiAhaXNHYW1lT3ZlcihwbGF5ZXJPbmUsIHBsYXllclR3bykpIHtcbiAgICAgICAgXG4gICAgICAgIHBsYXlSb3VuZChwbGF5ZXJUd28sIE51bWJlcihlLnRhcmdldC5pZCkpO1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdjbGlja2VkJyk7XG4gICAgICAgIGlzR2FtZU92ZXIocGxheWVyT25lLCBwbGF5ZXJUd28pO1xuICAgICAgICBjb21wdXRlclJvdW5kKHBsYXllck9uZSk7XG4gICAgICAgIGlzR2FtZU92ZXIocGxheWVyT25lLCBwbGF5ZXJUd28pO1xuICAgICAgICBcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZWNvbmRHYW1lYm9hcmQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgfVxufTtcblxuY29uc3QgZGlzcGxheVNoaXBzID0gKHBsYXllcikgPT4ge1xuICBjb25zdCBzcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7cGxheWVyLnBsYXllck5hbWV9c3F1YXJlYCk7XG4gIGNvbnN0IGRpc3BsYXlBcnJheSA9IFtdO1xuICBwbGF5ZXIuZ2V0U2hpcEFycmF5KCkuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgIGRpc3BsYXlBcnJheS5wdXNoKC4uLnNoaXAuc2hpcENvb3JkaW5hdGVzKTtcbiAgfSk7XG5cbiAgc3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICBpZiAoZGlzcGxheUFycmF5LmluY2x1ZGVzKE51bWJlcihzcXVhcmUuaWQpKSkge1xuICAgICAgc3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNGQ0ZDRkJztcbiAgICB9XG4gIH0pO1xuXG4gIHNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgcGxheWVyLmdldFNoaXBBcnJheSgpLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGlmIChzaGlwLnNoaXBDb29yZGluYXRlcy5pbmNsdWRlcyhOdW1iZXIoc3F1YXJlLmlkKSkpIHtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoc2hpcC5uYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBhdHRhY2sgPSAocGxheWVyLCBjb29yZGluYXRlcykgPT4ge1xuICBwbGF5ZXIucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcyk7XG4gIGNvbnN0IHNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtwbGF5ZXIucGxheWVyTmFtZX1zcXVhcmVgKTtcbiAgc3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICBpZiAocGxheWVyLmdldEhpdEFycmF5KCkuaW5jbHVkZXMoTnVtYmVyKHNxdWFyZS5pZCkpKSB7XG4gICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzNDM0OycpOyBcblxuICAgICAgY29uc3QgbG9nbyA9IGNyZWF0ZUh0bWxFbGVtZW50KFwiaW1nXCIsXCJleHBsb3Npb25cIixbJ2xvZ28nXSxudWxsKVxuICAgICAgbG9nby5zcmM9dGFyZ2V0O1xuXG4gICAgICBpZiAoIXNxdWFyZS5maXJzdENoaWxkKVxuICAgICAgc3F1YXJlLmFwcGVuZENoaWxkKGxvZ28pXG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IGRpc3BsYXlNaXNzQXJyYXkgPSAoc3F1YXJlcywgcGxheWVyKSA9PiB7XG4gIHNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgaWYgKHBsYXllci5nZXRNaXNzQXJyYXkoKS5pbmNsdWRlcyhOdW1iZXIoc3F1YXJlLmlkKSkpIHtcbiAgICAgIHNxdWFyZS50ZXh0Q29udGVudCA9ICdYJztcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgZGlzcGxheVN1bmtTaGlwcyA9IChzcXVhcmVzLCBwbGF5ZXIpID0+IHtcbiAgY29uc3Qgc3Vua0FycmF5ID0gW107XG4gIHBsYXllci5nZXRTaGlwQXJyYXkoKS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgaWYgKHNoaXAuaXNTdW5rKCkpIHtcbiAgICAgIHN1bmtBcnJheS5wdXNoKC4uLnNoaXAuc2hpcENvb3JkaW5hdGVzKTtcbiAgICB9XG4gIH0pO1xuICBzcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgIGlmIChzdW5rQXJyYXkuaW5jbHVkZXMoTnVtYmVyKHNxdWFyZS5pZCkpKSB7XG5cbiAgICAgIFxuICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjogI2Q0MTUxNTsnKTsgXG5cbiAgICAgIHNxdWFyZS5maXJzdENoaWxkLnNyYz1leHBsb3Npb247XG5cbiAgICAgIGlmICghc3F1YXJlLmZpcnN0Q2hpbGQuc3JjPT09dGFyZ2V0KXsgXG4gICAgICBzcXVhcmUuYXBwZW5kQ2hpbGQobG9nbylcbiAgICAgIFxuICAgIH1cblxuXG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IGdyYXlPdXRCdG4gPSAocGxheWVyKT0+eyAgICAgXG4gIHBsYXllci5nZXRTaGlwQXJyYXkoKS5mb3JFYWNoKHNoaXA9PntcbiAgY29uc3QgdXNlZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3NoaXAubmFtZX1gKTtcbiAgdXNlZEJ0bi5zdHlsZS5jb2xvcj0nIzM0MzQzNCdcblxufSl9XG5cbmNvbnN0IGhpZ2hMaWdodEJ0biA9IChidE5hbWUscGxheWVyT25lKT0+e1xuICBpZihwbGF5ZXJPbmUuZ2V0U2hpcEFycmF5KCkubGVuZ3RoPT09NCl7XG5cbiAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7YnROYW1lfWApO1xuICBidG4uc3R5bGUuY29sb3I9XCJ3aGl0ZXNtb2tlXCJcblxuICB9XG59XG5cbmNvbnN0IGlzR2FtZU92ZXIgPSAocGxheWVyT25lLCBwbGF5ZXJUd28pID0+IHtcbiAgY29uc3QgZ2FtZU92ZXJTY3JlZW4gPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2Jywnb3ZlcmxheScsWydvdmVybGF5J10sbnVsbCk7XG4gIGlmIChwbGF5ZXJPbmUuaGFzTG9zdCgpKSB7XG4gICAgZ2FtZU92ZXJTY3JlZW4udGV4dENvbnRlbnQ9YCR7cGxheWVyVHdvLnBsYXllck5hbWV9IERlc3Ryb3llZCB5b3VyIHNoaXBzLCBZb3UgTG9zZSAhYDtcbiAgICBnYW1lT3ZlclNjcmVlbi5zdHlsZS5jb2xvcj0ncmdiKDIyNiwgNywgNyknO1xuICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGdhbWVPdmVyU2NyZWVuKVxuICAgIGdhbWVPdmVyU2NyZWVuLnN0eWxlLmRpc3BsYXk9XCJmbGV4XCI7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgZWxzZSBpZiAocGxheWVyVHdvLmhhc0xvc3QoKSkge1xuICAgIGNvbnNvbGUubG9nKGdhbWVPdmVyU2NyZWVuKVxuICAgIGdhbWVPdmVyU2NyZWVuLnRleHRDb250ZW50PWAke3BsYXllck9uZS5wbGF5ZXJOYW1lfSBEZXN0cm95ZWQgdGhlIENvbXB1dGVyJ3Mgc2hpcHMsIFlvdSBXaW4gIWA7XG4gICAgd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZ2FtZU92ZXJTY3JlZW4pO1xuICAgIGdhbWVPdmVyU2NyZWVuLnN0eWxlLmNvbG9yPScjMjM0NWRhJztcbiAgICBnYW1lT3ZlclNjcmVlbi5zdHlsZS5kaXNwbGF5PVwiZmxleFwiO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcbmNvbnN0IHBsYXlSb3VuZCA9IChwbGF5ZXIsIGNvb3JkaW5hdGUpID0+IHtcbiAgY29uc3Qgc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke3BsYXllci5wbGF5ZXJOYW1lfXNxdWFyZWApO1xuICBhdHRhY2socGxheWVyLCBjb29yZGluYXRlKTtcbiAgZGlzcGxheU1pc3NBcnJheShzcXVhcmVzLCBwbGF5ZXIpO1xuICBkaXNwbGF5U3Vua1NoaXBzKHNxdWFyZXMsIHBsYXllcik7XG59O1xuXG5jb25zdCBjb21wdXRlclJvdW5kID0gKHBsYXllcikgPT4ge1xuICBjb25zdCBjb21wdXRlclBsYXkgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgIGlmICghcGxheWVyLmdldE1pc3NBcnJheSgpLmluY2x1ZGVzKGNvb3JkaW5hdGUpICYmICFwbGF5ZXIuZ2V0SGl0QXJyYXkoKS5pbmNsdWRlcyhjb29yZGluYXRlKSkge1xuICAgICAgcGxheVJvdW5kKHBsYXllciwgY29vcmRpbmF0ZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGxldCB0cnlBZ2FpbiA9IHRydWU7XG4gIHdoaWxlICh0cnlBZ2Fpbikge1xuICAgIHRyeUFnYWluID0gY29tcHV0ZXJQbGF5KGdldFJhbmRvbU51bWJlcigpKTtcbiAgfVxufTtcblxuY29uc3Qgc3RhcnRHYW1lID0gKHBsYXllck9uZSwgcGxheWVyVHdvKSA9PiB7XG4gIHJlbmRlckJvYXJkcyhwbGF5ZXJPbmUsIHBsYXllclR3byk7XG4gIGRpc3BsYXlTaGlwcyhwbGF5ZXJPbmUpO1xufTtcblxuZXhwb3J0IHtyZW5kZXJXZWxjb21lUGFnZSB9O1xuIiwiaW1wb3J0IHsgZ2V0Q29vcmRpbmF0ZXMgfSBmcm9tICcuLi9IZWxwZXIgZnVuY3Rpb25zL3V0aWxpdGllcyc7XG5pbXBvcnQgeyBnZXRMZW5ndGggfSBmcm9tICcuLi9IZWxwZXIgZnVuY3Rpb25zL3V0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVTaGlwIH0gZnJvbSAnLi9zaGlwJztcblxuY29uc3QgY3JlYXRlR2FtZWJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBzaGlwQXJyYXkgPSBbXTtcbiAgY29uc3QgbWlzc0FycmF5ID0gW107XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKG5hbWUsIGNvb3JkaW5hdGUpID0+IHtcbiAgICBjb25zdCBsZW5ndGggPSBnZXRMZW5ndGgobmFtZSk7XG4gICAgY29uc3QgY29vcmRpbmF0ZUFycmF5ID0gZ2V0Q29vcmRpbmF0ZXMoY29vcmRpbmF0ZSwgbGVuZ3RoKTtcbiAgICBjb25zdCBzaGlwID0gY3JlYXRlU2hpcChuYW1lLCBsZW5ndGgsIGNvb3JkaW5hdGVBcnJheSk7XG4gICAgc2hpcEFycmF5LnB1c2goc2hpcCk7XG4gIH07XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChoaXRDb29yZGluYXRlcykgPT4ge1xuICAgIGxldCBtaXNzID0gdHJ1ZTtcblxuICAgIHNoaXBBcnJheS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBpZiAoc2hpcC5zaGlwQ29vcmRpbmF0ZXMuaW5jbHVkZXMoaGl0Q29vcmRpbmF0ZXMpKSB7XG4gICAgICAgIHNoaXAuaGl0KGhpdENvb3JkaW5hdGVzKTtcbiAgICAgICAgbWlzcyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKG1pc3MpIHtcbiAgICAgIG1pc3NBcnJheS5wdXNoKGhpdENvb3JkaW5hdGVzKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0SGl0QXJyYXkgPSAoKSA9PiB7XG4gICAgY29uc3QgaGl0QXJyYXkgPSBbXTtcbiAgICBzaGlwQXJyYXkuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgaGl0QXJyYXkucHVzaCguLi5zaGlwLmhpdEFycmF5KTtcbiAgICB9KTtcbiAgICByZXR1cm4gaGl0QXJyYXk7XG4gIH07XG5cbiAgY29uc3QgaXNHYW1lTG9zdCA9ICgpID0+IHtcbiAgICBjb25zdCBzdW5rQXJyYXkgPSBbXTtcbiAgICBzaGlwQXJyYXkuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgaWYgKHNoaXAuaXNTdW5rKCkgPT09IHRydWUpIHtcbiAgICAgICAgc3Vua0FycmF5LnB1c2goc2hpcCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHN1bmtBcnJheS5sZW5ndGggPT09IHNoaXBBcnJheS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGlzR2FtZUxvc3QsIHJlY2VpdmVBdHRhY2ssIHBsYWNlU2hpcCwgbWlzc0FycmF5LCBzaGlwQXJyYXksIGdldEhpdEFycmF5LFxuICB9O1xufTtcblxuZXhwb3J0IHsgY3JlYXRlR2FtZWJvYXJkIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIlxuXG5jb25zdCBjcmVhdGVQbGF5ZXIgPSAocGxheWVyTmFtZSkgPT57XG4gICAgY29uc3QgcGxheWVyQm9hcmQgPSBjcmVhdGVHYW1lYm9hcmQoKTtcblxuICAgIGNvbnN0IGdldE1pc3NBcnJheSA9KCk9PntcbiAgICAgICAgcmV0dXJuIHBsYXllckJvYXJkLm1pc3NBcnJheVxuICAgIH1cblxuICAgIGNvbnN0IGdldFNoaXBBcnJheSA9KCk9PntcbiAgICAgICAgcmV0dXJuIHBsYXllckJvYXJkLnNoaXBBcnJheVxuICAgIH1cblxuICAgIGNvbnN0IGhhc0xvc3QgPSAoKSA9PiB7XG4gICAgICAgIGlmICggcGxheWVyQm9hcmQuaXNHYW1lTG9zdCgpICl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgXG4gICAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChoaXRDb29yZGluYXRlcyk9PntcbiAgICAgICAgcGxheWVyQm9hcmQucmVjZWl2ZUF0dGFjayhoaXRDb29yZGluYXRlcylcbiAgICB9XG4gICAgY29uc3QgZ2V0SGl0QXJyYXkgPSAoKT0+e1xuICAgICAgICByZXR1cm4gcGxheWVyQm9hcmQuZ2V0SGl0QXJyYXkoKVxuICAgIH1cblxuXG4gICAgY29uc3QgcGxhY2VTaGlwID0gKG5hbWUsY29vcmRpbmF0ZXMpPT57XG4gICAgICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcChuYW1lLGNvb3JkaW5hdGVzKVxuICAgIH1cblxuXG4gICAgIHJldHVybiB7cGxheWVyTmFtZSwgaGFzTG9zdCwgcGxhY2VTaGlwLCByZWNlaXZlQXR0YWNrLCBnZXRNaXNzQXJyYXksIGdldFNoaXBBcnJheSwgZ2V0SGl0QXJyYXl9XG59XG5cbmV4cG9ydCB7Y3JlYXRlUGxheWVyfSIsIiBjb25zdCBjcmVhdGVTaGlwID0gKG5hbWUsIGxlbmd0aCwgY29vcmRpbmF0ZXMpID0+IHtcbiAgICBjb25zdCBzaGlwQ29vcmRpbmF0ZXMgPSBbLi4uY29vcmRpbmF0ZXNdXG4gICAgY29uc3QgaGl0QXJyYXkgPSBbXTtcblxuICAgICAgICBjb25zdCBoaXQgPSAoaGl0Q29vcmRpbmF0ZXMpID0+IHtcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzLmZvckVhY2goc2hpcFNxdWFyZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHNoaXBTcXVhcmUgPT09IGhpdENvb3JkaW5hdGVzKXtcbiAgICAgICAgICAgICAgICAgICAgaGl0QXJyYXkucHVzaChoaXRDb29yZGluYXRlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpc1N1bmsgPSAoKT0+e1xuICAgICAgICAgICAgaWYoaGl0QXJyYXkubGVuZ3RoPT09bGVuZ3RoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHtuYW1lLCBoaXQsIGlzU3Vuaywgc2hpcENvb3JkaW5hdGVzLCBoaXRBcnJheX1cblxufVxuXG5leHBvcnQge2NyZWF0ZVNoaXB9IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjg0MjY1YmYwZWRkNTRjYTcyOTA4OWU5ZTZiNDNmZGQxLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJiMWZkZjFhOTBhNGEzODI0NmUwYTg3Y2VkZTNiNTIyYi5wbmdcIjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiaW1wb3J0IHtyZW5kZXJXZWxjb21lUGFnZSB9IGZyb20gXCIuL2RvbVwiO1xuXG5yZW5kZXJXZWxjb21lUGFnZSgpOyJdLCJzb3VyY2VSb290IjoiIn0=