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

/***/ "./src/JS/computer.js":
/*!****************************!*\
  !*** ./src/JS/computer.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getComputerCoordinate": () => (/* binding */ getComputerCoordinate)
/* harmony export */ });
/* harmony import */ var _Helper_functions_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Helper functions/utilities */ "./src/Helper functions/utilities.js");

var coordinateArray = [];

var getComputerCoordinate = function getComputerCoordinate() {
  var number = (0,_Helper_functions_utilities__WEBPACK_IMPORTED_MODULE_0__.getRandomNumber)();

  if (coordinateArray.includes(number)) {
    getComputerCoordinate();
  } else {
    coordinateArray.push(number);
    return number;
  }
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
/* harmony import */ var _computer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./computer */ "./src/JS/computer.js");
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
    computer.placeShip("submarine", 15);
    computer.placeShip("battleship", 30);
    computer.placeShip("carrier", 1);
    computer.placeShip("cruiser", 95);
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
  var container = document.querySelector('.container');
  var whosTurn = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'title-turn', ['turn']);
  whosTurn.textContent = "".concat(playerOne.playerName, "'s turn !");
  container.appendChild(whosTurn);
  var playerOneTurn = true;

  for (var _i = 1; _i <= 100; _i++) {
    var _square = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', _i, ["".concat(playerTwo.playerName, "square")], null);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvSGVscGVyIGZ1bmN0aW9ucy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL0pTL2NvbXB1dGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9KUy9jcmVhdGVIdG1sRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvSlMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9KUy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL0pTL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvSlMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvYXNzZXRzL2V4cGxvc2lvbi5wbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL2Fzc2V0cy90YXJnZXQucG5nIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvSlMvaW5kZXguanMiXSwibmFtZXMiOlsiZ2V0UmFuZG9tTnVtYmVyIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZ2V0TGVuZ3RoIiwibmFtZSIsImdldENvb3JkaW5hdGVzIiwiY29vcmRpbmF0ZSIsImxlbmd0aCIsImNvb3JkaW5hdGVBcnJheSIsImxhc3RDb29yZGluYXRlIiwiaSIsInB1c2giLCJnZXRDb21wdXRlckNvb3JkaW5hdGUiLCJudW1iZXIiLCJpbmNsdWRlcyIsImNyZWF0ZUh0bWxFbGVtZW50IiwidHlwZSIsImlkIiwiYXJyYXlDbGFzc2VzIiwiY29udGVudCIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJmb3JFYWNoIiwibXlDbGFzcyIsImNsYXNzTGlzdCIsImFkZCIsImlubmVyVGV4dCIsInJlbmRlcldlbGNvbWVQYWdlIiwiY29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsIndlbGNvbWVQYWdlIiwiYXBwZW5kQ2hpbGQiLCJ0aXRsZSIsInBsYXllck5hbWVJbnB1dCIsImNvbnRpbnVlQnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBsYXllck5hbWUiLCJ2YWx1ZSIsImh1bWFuIiwiY3JlYXRlUGxheWVyIiwiY29tcHV0ZXIiLCJyZW5kZXJTdGFydGluZ1BhZ2UiLCJwbGFjZVNoaXAiLCJwbGF5ZXJPbmUiLCJwbGF5ZXJUd28iLCJzaGlwTmFtZSIsImdhbWVCb2FyZENvbnRhaW5lciIsImlubmVySFRNTCIsImZpcnN0R2FtZWJvYXJkIiwic3F1YXJlIiwiZSIsImRpc3BsYXlBcnJheSIsImdldFNoaXBBcnJheSIsInNoaXAiLCJzaGlwQ29vcmRpbmF0ZXMiLCJkb2VzQ29sbGlkZSIsImNvbGxpZGUiLCJjb29yZGluYXRlcyIsIk51bWJlciIsInRhcmdldCIsImRpc3BsYXlTaGlwcyIsImdyYXlPdXRCdG4iLCJoaWdoTGlnaHRCdG4iLCJidXR0b25XcmFwcGVyIiwiYmF0dGxlc2hpcEJ1dHRvbiIsInN1Ym1hcmluZUJ1dHRvbiIsImNydWlzZXJCdXR0b24iLCJjYXJyaWVyQnV0dG9uIiwicXVlcnlTZWxlY3RvckFsbCIsImJ1dHRvbiIsInNoaXBBcnJheSIsInVzZWRCdG4iLCJzdHlsZSIsImNvbG9yIiwic3RhcnRCdXR0b24iLCJzdGFydEdhbWUiLCJyZW5kZXJCb2FyZHMiLCJmaXJzdEZyYW1lIiwiZmlyc3RHYW1lYm9hcmRUaXRsZSIsInNlY29uZEZyYW1lIiwic2Vjb25kR2FtZWJvYXJkIiwic2Vjb25kR2FtZWJvYXJkVGl0bGUiLCJ3aG9zVHVybiIsInRleHRDb250ZW50IiwicGxheWVyT25lVHVybiIsImNvbnRhaW5zIiwiaXNHYW1lT3ZlciIsInBsYXlSb3VuZCIsInNldFRpbWVvdXQiLCJjb21wdXRlclJvdW5kIiwicGxheWVyIiwic3F1YXJlcyIsImJhY2tncm91bmRDb2xvciIsImF0dGFjayIsInJlY2VpdmVBdHRhY2siLCJnZXRIaXRBcnJheSIsInNldEF0dHJpYnV0ZSIsImxvZ28iLCJzcmMiLCJmaXJzdENoaWxkIiwiZGlzcGxheU1pc3NBcnJheSIsImdldE1pc3NBcnJheSIsImRpc3BsYXlTdW5rU2hpcHMiLCJzdW5rQXJyYXkiLCJpc1N1bmsiLCJleHBsb3Npb24iLCJidE5hbWUiLCJidG4iLCJnYW1lT3ZlclNjcmVlbiIsImhhc0xvc3QiLCJ3aW5kb3ciLCJib2R5IiwiZGlzcGxheSIsImNvbnNvbGUiLCJsb2ciLCJjb21wdXRlclBsYXkiLCJ0cnlBZ2FpbiIsImNyZWF0ZUdhbWVib2FyZCIsIm1pc3NBcnJheSIsImNyZWF0ZVNoaXAiLCJoaXRDb29yZGluYXRlcyIsIm1pc3MiLCJoaXQiLCJoaXRBcnJheSIsImlzR2FtZUxvc3QiLCJwbGF5ZXJCb2FyZCIsInNoaXBTcXVhcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQUk7QUFDeEIsU0FBT0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxNQUFpQixNQUFNLENBQU4sR0FBVSxDQUEzQixDQUFYLElBQTRDLENBQW5EO0FBQ0gsQ0FGRDs7QUFJQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxJQUFELEVB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QUQsRUFBb0I7QUFDNUIvRCxlQUFXLENBQUNuQyxPQUFaLENBQW9CLFVBQUF3RyxVQUFVLEVBQUk7QUFDOUIsVUFBSUEsVUFBVSxLQUFLTixjQUFuQixFQUFrQztBQUM5QkcsZ0JBQVEsQ0FBQ2pILElBQVQsQ0FBYzhHLGNBQWQ7QUFDSDtBQUNKLEtBSkQ7QUFLSCxHQU5EOztBQVFBLE1BQU1oQixNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFJO0FBQ2YsUUFBR21CLFFBQVEsQ0FBQ3JILE1BQVQsS0FBa0JBLE1BQXJCLEVBQTRCO0FBQ3hCLGFBQU8sSUFBUDtBQUNIOztBQUNELFdBQU8sS0FBUDtBQUVILEdBTkQ7O0FBUUEsU0FBTztBQUFDSCxRQUFJLEVBQUpBLElBQUQ7QUFBT3VILE9BQUcsRUFBSEEsR0FBUDtBQUFZbEIsVUFBTSxFQUFOQSxNQUFaO0FBQW9CbEQsbUJBQWUsRUFBZkEsZUFBcEI7QUFBcUNxRSxZQUFRLEVBQVJBO0FBQXJDLEdBQVA7QUFFUCxDQXRCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FELGlFQUFlLHFCQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7Ozs7QUNBL0UsaUVBQWUscUJBQXVCLHlDQUF5QyxFOzs7Ozs7VUNBL0U7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BLDJCOzs7Ozs7Ozs7Ozs7QUNBQTtBQUVBaEcsdURBQWlCLEciLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2V0UmFuZG9tTnVtYmVyID0gKCk9PntcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwMCAtIDEgKyAxKSkgKyAxO1xufTtcblxuY29uc3QgZ2V0TGVuZ3RoID0gKG5hbWUpID0+e1xuICAgIGlmIChuYW1lID09PSBcInN1Ym1hcmluZVwiKXtcbiAgICAgICAgcmV0dXJuIDJcbiAgICB9XG4gICAgZWxzZSBpZiAobmFtZSA9PT0gXCJjYXJyaWVyXCIpe1xuICAgICAgICByZXR1cm4gNlxuICAgIH1cbiAgICBlbHNlIGlmIChuYW1lID09PSBcImJhdHRsZXNoaXBcIil7XG4gICAgICByZXR1cm4gNFxuICB9XG4gIGVsc2UgaWYgKG5hbWUgPT09IFwiY3J1aXNlclwiKXtcbiAgICByZXR1cm4gM1xufVxufTtcbi8qIFxuY29uc3QgZ2V0Q29vcmRpbmF0ZXMgPSAoY29vcmRpbmF0ZSwgbGVuZ3RoKSA9PiB7XG4gICAgY29uc3QgY29vcmRpbmF0ZUFycmF5ID0gW107XG4gIFxuICAgIGlmIChjb29yZGluYXRlICsgbGVuZ3RoID4gMTAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvb3JkaW5hdGVBcnJheS5wdXNoKGNvb3JkaW5hdGUgLSBpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjb29yZGluYXRlQXJyYXkucHVzaChjb29yZGluYXRlICsgaSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb29yZGluYXRlQXJyYXk7XG4gIH07ICovXG5cbiAgY29uc3QgZ2V0Q29vcmRpbmF0ZXMgPSAoY29vcmRpbmF0ZSwgbGVuZ3RoKSA9PiB7XG4gICAgY29uc3QgY29vcmRpbmF0ZUFycmF5ID0gW107XG4gICAgbGV0IGxhc3RDb29yZGluYXRlID0gY29vcmRpbmF0ZStsZW5ndGg7XG5cbiAgICBpZiAoY29vcmRpbmF0ZSA+PTEgJiYgbGFzdENvb3JkaW5hdGU8PTExICkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjb29yZGluYXRlQXJyYXkucHVzaChjb29yZGluYXRlICsgaSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgIGVsc2UgaWYgKGNvb3JkaW5hdGUgPiAxMCAmJiBsYXN0Q29vcmRpbmF0ZTw9MjEpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29vcmRpbmF0ZUFycmF5LnB1c2goY29vcmRpbmF0ZSArIGkpO1xuICAgICAgfSAgICAgIFxuICAgIH1cblxuICAgIGVsc2UgaWYgKGNvb3JkaW5hdGU+MjAgJiYgbGFzdENvb3JkaW5hdGU8PTMxKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvb3JkaW5hdGVBcnJheS5wdXNoKGNvb3JkaW5hdGUgKyBpKTtcbiAgICAgIH0gICAgICBcbiAgICB9XG5cbiAgICBlbHNlIGlmIChjb29yZGluYXRlPjMwICYmIGxhc3RDb29yZGluYXRlPD00MSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjb29yZGluYXRlQXJyYXkucHVzaChjb29yZGluYXRlICsgaSk7XG4gICAgICB9ICAgICAgXG4gICAgfVxuXG4gICAgZWxzZSBpZiAoY29vcmRpbmF0ZT40MCAmJiBsYXN0Q29vcmRpbmF0ZTw9NTEpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29vcmRpbmF0ZUFycmF5LnB1c2goY29vcmRpbmF0ZSArIGkpO1xuICAgICAgfSAgICAgIFxuICAgIH1cblxuICAgIGVsc2UgaWYgKGNvb3JkaW5hdGU+NTAgJiYgbGFzdENvb3JkaW5hdGU8PTYxKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvb3JkaW5hdGVBcnJheS5wdXNoKGNvb3JkaW5hdGUgKyBpKTtcbiAgICAgIH0gICAgICBcbiAgICB9XG5cbiAgICBlbHNlIGlmIChjb29yZGluYXRlPjYwICYmIGxhc3RDb29yZGluYXRlPD03MSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjb29yZGluYXRlQXJyYXkucHVzaChjb29yZGluYXRlICsgaSk7XG4gICAgICB9ICAgICAgXG4gICAgfVxuXG4gICAgZWxzZSBpZiAoY29vcmRpbmF0ZT43MCAmJiBsYXN0Q29vcmRpbmF0ZTw9ODEpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29vcmRpbmF0ZUFycmF5LnB1c2goY29vcmRpbmF0ZSArIGkpO1xuICAgICAgfSAgICAgIFxuICAgIH1cblxuICAgIGVsc2UgaWYgKGNvb3JkaW5hdGU+ODAgJiYgbGFzdENvb3JkaW5hdGU8PTkxKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvb3JkaW5hdGVBcnJheS5wdXNoKGNvb3JkaW5hdGUgKyBpKTtcbiAgICAgIH0gICAgICBcbiAgICB9XG5cbiAgICBlbHNlIGlmIChjb29yZGluYXRlPjkwICYmIGxhc3RDb29yZGluYXRlPD0xMDEpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29vcmRpbmF0ZUFycmF5LnB1c2goY29vcmRpbmF0ZSArIGkpO1xuICAgICAgfSAgICAgIFxuICAgIH1cbiAgICBlbHNlIGlmIChsYXN0Q29vcmRpbmF0ZT4xMDApIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29vcmRpbmF0ZUFycmF5LnB1c2goY29vcmRpbmF0ZSAtIGkpO1xuICAgICAgfSAgICAgIFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29vcmRpbmF0ZUFycmF5LnB1c2goY29vcmRpbmF0ZSAtIGkpO1xuICAgICAgfSAgXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvb3JkaW5hdGVBcnJheTtcbiAgfTtcblxuICBleHBvcnQge2dldENvb3JkaW5hdGVzLGdldExlbmd0aCxnZXRSYW5kb21OdW1iZXJ9XG5cbiIsImltcG9ydCB7IGdldFJhbmRvbU51bWJlciB9IGZyb20gXCIuLi9IZWxwZXIgZnVuY3Rpb25zL3V0aWxpdGllc1wiO1xuXG4gICAgY29uc3QgY29vcmRpbmF0ZUFycmF5ID0gW11cblxuICAgIGNvbnN0IGdldENvbXB1dGVyQ29vcmRpbmF0ZSA9ICgpPT57XG4gICAgXG4gICAgbGV0IG51bWJlciA9IGdldFJhbmRvbU51bWJlcigpO1xuICAgIGlmIChjb29yZGluYXRlQXJyYXkuaW5jbHVkZXMobnVtYmVyKSl7XG4gICAgICAgIGdldENvbXB1dGVyQ29vcmRpbmF0ZSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29vcmRpbmF0ZUFycmF5LnB1c2gobnVtYmVyKTtcbiAgICAgICAgcmV0dXJuIG51bWJlclxuICAgIH1cbiAgICBcbiAgICBcbiAgICB9XG5cbiAgICBleHBvcnQge2dldENvbXB1dGVyQ29vcmRpbmF0ZX0iLCJjb25zdCBjcmVhdGVIdG1sRWxlbWVudCA9ICh0eXBlLCBpZCwgYXJyYXlDbGFzc2VzLCBjb250ZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgaWYgKGlkKSBlbGVtZW50LmlkID0gaWQ7XG4gICAgaWYgKGFycmF5Q2xhc3NlcykgYXJyYXlDbGFzc2VzLmZvckVhY2goKG15Q2xhc3MpID0+IGVsZW1lbnQuY2xhc3NMaXN0LmFkZChteUNsYXNzKSk7XG4gIFxuICAgIGlmIChjb250ZW50KSBlbGVtZW50LmlubmVyVGV4dCA9IGNvbnRlbnQ7XG4gIFxuICAgIHJldHVybiBlbGVtZW50O1xuICB9O1xuICBleHBvcnQge2NyZWF0ZUh0bWxFbGVtZW50fSIsImltcG9ydCB7IGdldENvb3JkaW5hdGVzIH0gZnJvbSAnLi4vSGVscGVyIGZ1bmN0aW9ucy91dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlSHRtbEVsZW1lbnQgfSBmcm9tICcuL2NyZWF0ZUh0bWxFbGVtZW50JztcbmltcG9ydCB7IGdldExlbmd0aCB9IGZyb20gJy4uL0hlbHBlciBmdW5jdGlvbnMvdXRpbGl0aWVzJztcbmltcG9ydCB7IGdldFJhbmRvbU51bWJlciB9IGZyb20gJy4uL0hlbHBlciBmdW5jdGlvbnMvdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZVBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IGV4cGxvc2lvbiBmcm9tIFwiLi4vYXNzZXRzL2V4cGxvc2lvbi5wbmdcIjtcbmltcG9ydCB0YXJnZXQgZnJvbSBcIi4uL2Fzc2V0cy90YXJnZXQucG5nXCI7XG5pbXBvcnQgeyBnZXRDb21wdXRlckNvb3JkaW5hdGUgfSBmcm9tICcuL2NvbXB1dGVyJztcblxuY29uc3QgcmVuZGVyV2VsY29tZVBhZ2UgPSAoKT0+e1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG5cbiAgY29uc3Qgd2VsY29tZVBhZ2UgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2Jywnd2VsY29tZS1wYWdlJyxudWxsLG51bGwpXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWxjb21lUGFnZSk7XG5cbiAgY29uc3QgdGl0bGUgPSBjcmVhdGVIdG1sRWxlbWVudCgnaGVhZGVyJywndGl0bGUnLG51bGwsJ1BsZWFzZSBDaG9vc2UgQSBuYW1lJyk7XG4gIHdlbGNvbWVQYWdlLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb25zdCBwbGF5ZXJOYW1lSW5wdXQgID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2lucHV0JywncGxheWVyTmFtZScsbnVsbCxudWxsKTtcbiAgd2VsY29tZVBhZ2UuYXBwZW5kQ2hpbGQocGxheWVyTmFtZUlucHV0KTtcblxuICBjb25zdCBjb250aW51ZUJ0biA9IGNyZWF0ZUh0bWxFbGVtZW50KCdidXR0b24nLCdjb250aW51ZS1idG4nLFsnYnRuJ10sJ2NvbnRpbnVlJyk7XG4gIGNvbnRpbnVlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcblxuICAgIGNvbnN0IHBsYXllck5hbWUgPSBwbGF5ZXJOYW1lSW5wdXQudmFsdWU7XG4gICAgY29uc3QgaHVtYW4gPSBjcmVhdGVQbGF5ZXIocGxheWVyTmFtZSk7XG4gICAgY29uc3QgY29tcHV0ZXIgPSBjcmVhdGVQbGF5ZXIoXCJjb21wdXRlclwiKTtcbiAgICByZW5kZXJTdGFydGluZ1BhZ2UoaHVtYW4sY29tcHV0ZXIpO1xuXG4gICAgY29tcHV0ZXIucGxhY2VTaGlwKFwic3VibWFyaW5lXCIsMTUpO1xuICAgIGNvbXB1dGVyLnBsYWNlU2hpcChcImJhdHRsZXNoaXBcIiwzMCk7XG4gICAgY29tcHV0ZXIucGxhY2VTaGlwKFwiY2FycmllclwiLDEpO1xuICAgIGNvbXB1dGVyLnBsYWNlU2hpcChcImNydWlzZXJcIiw5NSk7XG4gIH0pXG4gIHdlbGNvbWVQYWdlLmFwcGVuZENoaWxkKGNvbnRpbnVlQnRuKTtcbn1cblxuY29uc3QgcmVuZGVyU3RhcnRpbmdQYWdlID0gKHBsYXllck9uZSwgcGxheWVyVHdvKSA9PiB7XG4gIGxldCBzaGlwTmFtZSA9IG51bGw7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgY29uc3QgZ2FtZUJvYXJkQ29udGFpbmVyID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsJ2dhbWVib2FyZC1jb250YWluZXInLG51bGwsbnVsbCk7XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdhbWVCb2FyZENvbnRhaW5lcilcbiAgY29uc3QgZmlyc3RHYW1lYm9hcmQgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgYCR7cGxheWVyT25lLnBsYXllck5hbWV9R2FtZWJvYXJkYCwgWydnYW1lYm9hcmQnXSwgbnVsbCk7XG4gIGdhbWVCb2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChmaXJzdEdhbWVib2FyZCk7XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTAwOyBpKyspIHtcbiAgICBjb25zdCBzcXVhcmUgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgaSwgW2Ake3BsYXllck9uZS5wbGF5ZXJOYW1lfXNxdWFyZWBdLCBudWxsKTtcbiAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc3QgZGlzcGxheUFycmF5ID0gW107XG4gICAgICBjb25zdCBsZW5ndGggPSBnZXRMZW5ndGgoc2hpcE5hbWUpO1xuICAgICAgcGxheWVyT25lLmdldFNoaXBBcnJheSgpLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgZGlzcGxheUFycmF5LnB1c2goLi4uc2hpcC5zaGlwQ29vcmRpbmF0ZXMpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGRvZXNDb2xsaWRlID0gKCkgPT4ge1xuICAgICAgICBsZXQgY29sbGlkZSA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IGdldENvb3JkaW5hdGVzKE51bWJlcihlLnRhcmdldC5pZCksIGxlbmd0aCk7XG4gICAgICAgIGNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgICBpZiAoZGlzcGxheUFycmF5LmluY2x1ZGVzKGNvb3JkaW5hdGUpKSB7XG4gICAgICAgICAgICBjb2xsaWRlID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY29sbGlkZTtcbiAgICAgIH07XG5cbiAgICAgIGlmIChzaGlwTmFtZSAmJiAhZGlzcGxheUFycmF5LmluY2x1ZGVzKE51bWJlcihlLnRhcmdldC5pZCkpICYmICFkb2VzQ29sbGlkZSgpKSB7XG4gICAgICAgIHBsYXllck9uZS5wbGFjZVNoaXAoc2hpcE5hbWUsIE51bWJlcihlLnRhcmdldC5pZCkpO1xuICAgICAgICBkaXNwbGF5U2hpcHMocGxheWVyT25lKTtcbiAgICAgICAgc2hpcE5hbWUgPSBudWxsO1xuICAgICAgICBncmF5T3V0QnRuKHBsYXllck9uZSlcbiAgICAgICAgaGlnaExpZ2h0QnRuKFwic3RhcnRcIiwgcGxheWVyT25lKVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZmlyc3RHYW1lYm9hcmQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgfVxuICBjb25zdCBidXR0b25XcmFwcGVyID0gY3JlYXRlSHRtbEVsZW1lbnQoXCJkaXZcIixudWxsLFsnYnRuLXdyYXBwZXInXSxudWxsKTtcblxuICBjb25zdCBiYXR0bGVzaGlwQnV0dG9uID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2J1dHRvbicsICdiYXR0bGVzaGlwJywgWydzaGlwLWJ1dHRvbiddLCAnYmF0dGxlc2hpcCcpO1xuICBjb25zdCBzdWJtYXJpbmVCdXR0b24gPSBjcmVhdGVIdG1sRWxlbWVudCgnYnV0dG9uJywgJ3N1Ym1hcmluZScsIFsnc2hpcC1idXR0b24nXSwgJ3N1Ym1hcmluZScpO1xuICBjb25zdCBjcnVpc2VyQnV0dG9uID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2J1dHRvbicsICdjcnVpc2VyJywgWydzaGlwLWJ1dHRvbiddLCAnY3J1aXNlcicpO1xuICBjb25zdCBjYXJyaWVyQnV0dG9uID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2J1dHRvbicsICdjYXJyaWVyJywgWydzaGlwLWJ1dHRvbiddLCAnY2FycmllcicpO1xuXG5cblxuXG4gIGdhbWVCb2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25XcmFwcGVyKTtcblxuICBidXR0b25XcmFwcGVyLmFwcGVuZENoaWxkKGJhdHRsZXNoaXBCdXR0b24pO1xuICBidXR0b25XcmFwcGVyLmFwcGVuZENoaWxkKHN1Ym1hcmluZUJ1dHRvbik7XG4gIGJ1dHRvbldyYXBwZXIuYXBwZW5kQ2hpbGQoY3J1aXNlckJ1dHRvbik7XG4gIGJ1dHRvbldyYXBwZXIuYXBwZW5kQ2hpbGQoY2FycmllckJ1dHRvbik7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAtYnV0dG9uJykuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXG4gICAgICBjb25zdCBzaGlwQXJyYXkgPSBbXTsgICAgIFxuXG4gICAgICBwbGF5ZXJPbmUuZ2V0U2hpcEFycmF5KCkuZm9yRWFjaChzaGlwPT57XG4gICAgICAgIHNoaXBBcnJheS5wdXNoKHNoaXAubmFtZSk7XG4gICAgICAgIGNvbnN0IHVzZWRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtzaGlwLm5hbWV9YCk7XG4gICAgICAgIHVzZWRCdG4uc3R5bGUuY29sb3I9JyMzNDM0MzQnXG5cbiAgICAgIH0pXG5cbiAgICBpZiAoIXNoaXBBcnJheS5pbmNsdWRlcyhlLnRhcmdldC5pZCkpe1xuICAgICAgc2hpcE5hbWUgPSBlLnRhcmdldC5pZDtcbiAgICAgIH1cblxuICAgICAgXG4gICAgfSk7XG5cbiAgXG4gIH0pO1xuXG4gIGNvbnN0IHN0YXJ0QnV0dG9uID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2J1dHRvbicsICdzdGFydCcsIFsnY29udHJvbC1idXR0b24nXSwgJ3N0YXJ0IGdhbWUnKTtcbiAgc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICBpZihwbGF5ZXJPbmUuZ2V0U2hpcEFycmF5KCkubGVuZ3RoPT09NCl7XG4gICAgc3RhcnRHYW1lKHBsYXllck9uZSwgcGxheWVyVHdvKTtcbiAgfVxuXG4gIH0pO1xuICBnYW1lQm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RhcnRCdXR0b24pO1xufTtcblxuY29uc3QgcmVuZGVyQm9hcmRzID0gKHBsYXllck9uZSwgcGxheWVyVHdvKSA9PiB7XG4gIGNvbnN0IGdhbWVCb2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lYm9hcmQtY29udGFpbmVyJyk7XG4gIGdhbWVCb2FyZENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgY29uc3QgZmlyc3RGcmFtZSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCBgJHtwbGF5ZXJPbmUucGxheWVyTmFtZX1mcmFtZWAsIFsnZnJhbWUnXSwgbnVsbCk7XG5cbiAgY29uc3QgZmlyc3RHYW1lYm9hcmQgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgYCR7cGxheWVyT25lLnBsYXllck5hbWV9R2FtZWJvYXJkYCwgWydnYW1lYm9hcmQnXSwgbnVsbCk7XG4gIGZpcnN0RnJhbWUuYXBwZW5kQ2hpbGQoZmlyc3RHYW1lYm9hcmQpO1xuICBnYW1lQm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZmlyc3RGcmFtZSk7XG5cbiAgY29uc3QgZmlyc3RHYW1lYm9hcmRUaXRsZSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCBgZmlyc3QtdGl0bGVgLCBbJ2dhbWVib2FyZC10aXRsZSddLCBgJHtwbGF5ZXJPbmUucGxheWVyTmFtZX0ncyBCb2FyZGApO1xuICBmaXJzdEZyYW1lLmFwcGVuZENoaWxkKGZpcnN0R2FtZWJvYXJkVGl0bGUpO1xuXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwMDsgaSsrKSB7XG4gICAgY29uc3Qgc3F1YXJlID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsIGksIFtgJHtwbGF5ZXJPbmUucGxheWVyTmFtZX1zcXVhcmVgXSwgbnVsbCk7XG4gICAgZmlyc3RHYW1lYm9hcmQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgfVxuXG4gIGNvbnN0IHNlY29uZEZyYW1lID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsIGAke3BsYXllck9uZS5wbGF5ZXJOYW1lfWZyYW1lYCwgWydmcmFtZSddLCBudWxsKTtcblxuICBjb25zdCBzZWNvbmRHYW1lYm9hcmQgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgYCR7cGxheWVyVHdvLnBsYXllck5hbWV9R2FtZWJvYXJkYCwgWydnYW1lYm9hcmQnXSwgbnVsbCk7XG4gIHNlY29uZEZyYW1lLmFwcGVuZENoaWxkKHNlY29uZEdhbWVib2FyZCk7XG4gIGdhbWVCb2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChzZWNvbmRGcmFtZSk7XG5cbiAgY29uc3Qgc2Vjb25kR2FtZWJvYXJkVGl0bGUgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgYHNlY29uZC10aXRsZWAsIFsnZ2FtZWJvYXJkLXRpdGxlJ10sIGAke3BsYXllclR3by5wbGF5ZXJOYW1lfSdzIEJvYXJkYCk7XG4gIHNlY29uZEZyYW1lLmFwcGVuZENoaWxkKHNlY29uZEdhbWVib2FyZFRpdGxlKTtcbiAgXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgY29uc3Qgd2hvc1R1cm4gPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywndGl0bGUtdHVybicsWyd0dXJuJ10pO1xuICB3aG9zVHVybi50ZXh0Q29udGVudD1gJHtwbGF5ZXJPbmUucGxheWVyTmFtZX0ncyB0dXJuICFgXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3aG9zVHVybilcblxuXG4gIGxldCBwbGF5ZXJPbmVUdXJuICA9IHRydWU7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwMDsgaSsrKSB7XG4gICAgY29uc3Qgc3F1YXJlID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsIGksIFtgJHtwbGF5ZXJUd28ucGxheWVyTmFtZX1zcXVhcmVgXSwgbnVsbCk7XG4gICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjbGlja2VkJykgJiYgIWlzR2FtZU92ZXIocGxheWVyT25lLCBwbGF5ZXJUd28pKSB7XG5cbiAgICAgICAgaWYgKHBsYXllck9uZVR1cm4pe1xuICAgICAgICB3aG9zVHVybi5pbm5lckhUTUw9YCR7cGxheWVyVHdvLnBsYXllck5hbWV9J3MgdHVybiAhYDtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnY2xpY2tlZCcpO1xuICAgICAgICBwbGF5Um91bmQocGxheWVyVHdvLCBOdW1iZXIoZS50YXJnZXQuaWQpKTsgICBcbiAgICAgICAgaXNHYW1lT3ZlcihwbGF5ZXJPbmUsIHBsYXllclR3byk7XG5cbiAgICAgICAgcGxheWVyT25lVHVybj1mYWxzZTtcblxuICAgICAgICAgc2V0VGltZW91dCgoKCk9PntcbiAgICAgICAgICB3aG9zVHVybi5pbm5lckhUTUw9YCR7cGxheWVyT25lLnBsYXllck5hbWV9J3MgdHVybiAhYFxuICAgICAgICAgIGNvbXB1dGVyUm91bmQocGxheWVyT25lKTtcbiAgICAgICAgICBpc0dhbWVPdmVyKHBsYXllck9uZSwgcGxheWVyVHdvKTtcbiAgICAgICAgICBwbGF5ZXJPbmVUdXJuPXRydWVcblxuICAgICAgICB9KSwxMDAwKVxuXG4gICAgICB9XG4gICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZWNvbmRHYW1lYm9hcmQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgfVxufTtcblxuY29uc3QgZGlzcGxheVNoaXBzID0gKHBsYXllcikgPT4ge1xuICBjb25zdCBzcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7cGxheWVyLnBsYXllck5hbWV9c3F1YXJlYCk7XG4gIGNvbnN0IGRpc3BsYXlBcnJheSA9IFtdO1xuICBwbGF5ZXIuZ2V0U2hpcEFycmF5KCkuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgIGRpc3BsYXlBcnJheS5wdXNoKC4uLnNoaXAuc2hpcENvb3JkaW5hdGVzKTtcbiAgfSk7XG5cbiAgc3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICBpZiAoZGlzcGxheUFycmF5LmluY2x1ZGVzKE51bWJlcihzcXVhcmUuaWQpKSkge1xuICAgICAgc3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNGQ0ZDRkJztcbiAgICB9XG4gIH0pO1xuXG4gIHNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgcGxheWVyLmdldFNoaXBBcnJheSgpLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGlmIChzaGlwLnNoaXBDb29yZGluYXRlcy5pbmNsdWRlcyhOdW1iZXIoc3F1YXJlLmlkKSkpIHtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoc2hpcC5uYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBhdHRhY2sgPSAocGxheWVyLCBjb29yZGluYXRlcykgPT4ge1xuICBwbGF5ZXIucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcyk7XG4gIGNvbnN0IHNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtwbGF5ZXIucGxheWVyTmFtZX1zcXVhcmVgKTtcbiAgc3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICBpZiAocGxheWVyLmdldEhpdEFycmF5KCkuaW5jbHVkZXMoTnVtYmVyKHNxdWFyZS5pZCkpKSB7XG4gICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzNDM0OycpOyBcblxuICAgICAgY29uc3QgbG9nbyA9IGNyZWF0ZUh0bWxFbGVtZW50KFwiaW1nXCIsXCJleHBsb3Npb25cIixbJ2xvZ28nXSxudWxsKVxuICAgICAgbG9nby5zcmM9dGFyZ2V0O1xuXG4gICAgICBpZiAoIXNxdWFyZS5maXJzdENoaWxkKVxuICAgICAgc3F1YXJlLmFwcGVuZENoaWxkKGxvZ28pXG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IGRpc3BsYXlNaXNzQXJyYXkgPSAoc3F1YXJlcywgcGxheWVyKSA9PiB7XG4gIHNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgaWYgKHBsYXllci5nZXRNaXNzQXJyYXkoKS5pbmNsdWRlcyhOdW1iZXIoc3F1YXJlLmlkKSkpIHtcbiAgICAgIHNxdWFyZS50ZXh0Q29udGVudCA9ICdYJztcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgZGlzcGxheVN1bmtTaGlwcyA9IChzcXVhcmVzLCBwbGF5ZXIpID0+IHtcbiAgY29uc3Qgc3Vua0FycmF5ID0gW107XG4gIHBsYXllci5nZXRTaGlwQXJyYXkoKS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgaWYgKHNoaXAuaXNTdW5rKCkpIHtcbiAgICAgIHN1bmtBcnJheS5wdXNoKC4uLnNoaXAuc2hpcENvb3JkaW5hdGVzKTtcbiAgICB9XG4gIH0pO1xuICBzcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgIGlmIChzdW5rQXJyYXkuaW5jbHVkZXMoTnVtYmVyKHNxdWFyZS5pZCkpKSB7XG5cbiAgICAgIFxuICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjogI2Q0MTUxNTsnKTsgXG5cbiAgICAgIHNxdWFyZS5maXJzdENoaWxkLnNyYz1leHBsb3Npb247XG5cbiAgICAgIGlmICghc3F1YXJlLmZpcnN0Q2hpbGQuc3JjPT09dGFyZ2V0KXsgXG4gICAgICBzcXVhcmUuYXBwZW5kQ2hpbGQobG9nbylcbiAgICAgIFxuICAgIH1cblxuXG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IGdyYXlPdXRCdG4gPSAocGxheWVyKT0+eyAgICAgXG4gIHBsYXllci5nZXRTaGlwQXJyYXkoKS5mb3JFYWNoKHNoaXA9PntcbiAgY29uc3QgdXNlZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3NoaXAubmFtZX1gKTtcbiAgdXNlZEJ0bi5zdHlsZS5jb2xvcj0nIzM0MzQzNCdcblxufSl9XG5cbmNvbnN0IGhpZ2hMaWdodEJ0biA9IChidE5hbWUscGxheWVyT25lKT0+e1xuICBpZihwbGF5ZXJPbmUuZ2V0U2hpcEFycmF5KCkubGVuZ3RoPT09NCl7XG5cbiAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7YnROYW1lfWApO1xuICBidG4uc3R5bGUuY29sb3I9XCJ3aGl0ZXNtb2tlXCJcblxuICB9XG59XG5cbmNvbnN0IGlzR2FtZU92ZXIgPSAocGxheWVyT25lLCBwbGF5ZXJUd28pID0+IHtcbiAgY29uc3QgZ2FtZU92ZXJTY3JlZW4gPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2Jywnb3ZlcmxheScsWydvdmVybGF5J10sbnVsbCk7XG4gIGlmIChwbGF5ZXJPbmUuaGFzTG9zdCgpKSB7XG4gICAgZ2FtZU92ZXJTY3JlZW4udGV4dENvbnRlbnQ9YCR7cGxheWVyVHdvLnBsYXllck5hbWV9IERlc3Ryb3llZCB5b3VyIHNoaXBzLCBZb3UgTG9zZSAhYDtcbiAgICBnYW1lT3ZlclNjcmVlbi5zdHlsZS5jb2xvcj0ncmdiKDIyNiwgNywgNyknO1xuICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGdhbWVPdmVyU2NyZWVuKVxuICAgIGdhbWVPdmVyU2NyZWVuLnN0eWxlLmRpc3BsYXk9XCJmbGV4XCI7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgZWxzZSBpZiAocGxheWVyVHdvLmhhc0xvc3QoKSkge1xuICAgIGNvbnNvbGUubG9nKGdhbWVPdmVyU2NyZWVuKVxuICAgIGdhbWVPdmVyU2NyZWVuLnRleHRDb250ZW50PWAke3BsYXllck9uZS5wbGF5ZXJOYW1lfSBEZXN0cm95ZWQgdGhlIENvbXB1dGVyJ3Mgc2hpcHMsIFlvdSBXaW4gIWA7XG4gICAgd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZ2FtZU92ZXJTY3JlZW4pO1xuICAgIGdhbWVPdmVyU2NyZWVuLnN0eWxlLmNvbG9yPScjMjM0NWRhJztcbiAgICBnYW1lT3ZlclNjcmVlbi5zdHlsZS5kaXNwbGF5PVwiZmxleFwiO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcbmNvbnN0IHBsYXlSb3VuZCA9IChwbGF5ZXIsIGNvb3JkaW5hdGUpID0+IHtcbiAgY29uc3Qgc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke3BsYXllci5wbGF5ZXJOYW1lfXNxdWFyZWApO1xuICBhdHRhY2socGxheWVyLCBjb29yZGluYXRlKTtcbiAgZGlzcGxheU1pc3NBcnJheShzcXVhcmVzLCBwbGF5ZXIpO1xuICBkaXNwbGF5U3Vua1NoaXBzKHNxdWFyZXMsIHBsYXllcik7XG59O1xuXG5jb25zdCBjb21wdXRlclJvdW5kID0gKHBsYXllcikgPT4ge1xuICBjb25zdCBjb21wdXRlclBsYXkgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgIGlmICghcGxheWVyLmdldE1pc3NBcnJheSgpLmluY2x1ZGVzKGNvb3JkaW5hdGUpICYmICFwbGF5ZXIuZ2V0SGl0QXJyYXkoKS5pbmNsdWRlcyhjb29yZGluYXRlKSkge1xuICAgICAgcGxheVJvdW5kKHBsYXllciwgY29vcmRpbmF0ZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGxldCB0cnlBZ2FpbiA9IHRydWU7XG4gIHdoaWxlICh0cnlBZ2Fpbikge1xuICAgIHRyeUFnYWluID0gY29tcHV0ZXJQbGF5KGdldFJhbmRvbU51bWJlcigpKTtcbiAgfVxufTtcblxuY29uc3Qgc3RhcnRHYW1lID0gKHBsYXllck9uZSwgcGxheWVyVHdvKSA9PiB7XG4gIHJlbmRlckJvYXJkcyhwbGF5ZXJPbmUsIHBsYXllclR3byk7XG4gIGRpc3BsYXlTaGlwcyhwbGF5ZXJPbmUpO1xufTtcblxuZXhwb3J0IHtyZW5kZXJXZWxjb21lUGFnZSB9O1xuIiwiaW1wb3J0IHsgZ2V0Q29vcmRpbmF0ZXMgfSBmcm9tICcuLi9IZWxwZXIgZnVuY3Rpb25zL3V0aWxpdGllcyc7XG5pbXBvcnQgeyBnZXRMZW5ndGggfSBmcm9tICcuLi9IZWxwZXIgZnVuY3Rpb25zL3V0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVTaGlwIH0gZnJvbSAnLi9zaGlwJztcblxuY29uc3QgY3JlYXRlR2FtZWJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBzaGlwQXJyYXkgPSBbXTtcbiAgY29uc3QgbWlzc0FycmF5ID0gW107XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKG5hbWUsIGNvb3JkaW5hdGUpID0+IHtcbiAgICBjb25zdCBsZW5ndGggPSBnZXRMZW5ndGgobmFtZSk7XG4gICAgY29uc3QgY29vcmRpbmF0ZUFycmF5ID0gZ2V0Q29vcmRpbmF0ZXMoY29vcmRpbmF0ZSwgbGVuZ3RoKTtcbiAgICBjb25zdCBzaGlwID0gY3JlYXRlU2hpcChuYW1lLCBsZW5ndGgsIGNvb3JkaW5hdGVBcnJheSk7XG4gICAgc2hpcEFycmF5LnB1c2goc2hpcCk7XG4gIH07XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChoaXRDb29yZGluYXRlcykgPT4ge1xuICAgIGxldCBtaXNzID0gdHJ1ZTtcblxuICAgIHNoaXBBcnJheS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBpZiAoc2hpcC5zaGlwQ29vcmRpbmF0ZXMuaW5jbHVkZXMoaGl0Q29vcmRpbmF0ZXMpKSB7XG4gICAgICAgIHNoaXAuaGl0KGhpdENvb3JkaW5hdGVzKTtcbiAgICAgICAgbWlzcyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKG1pc3MpIHtcbiAgICAgIG1pc3NBcnJheS5wdXNoKGhpdENvb3JkaW5hdGVzKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0SGl0QXJyYXkgPSAoKSA9PiB7XG4gICAgY29uc3QgaGl0QXJyYXkgPSBbXTtcbiAgICBzaGlwQXJyYXkuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgaGl0QXJyYXkucHVzaCguLi5zaGlwLmhpdEFycmF5KTtcbiAgICB9KTtcbiAgICByZXR1cm4gaGl0QXJyYXk7XG4gIH07XG5cbiAgY29uc3QgaXNHYW1lTG9zdCA9ICgpID0+IHtcbiAgICBjb25zdCBzdW5rQXJyYXkgPSBbXTtcbiAgICBzaGlwQXJyYXkuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgaWYgKHNoaXAuaXNTdW5rKCkgPT09IHRydWUpIHtcbiAgICAgICAgc3Vua0FycmF5LnB1c2goc2hpcCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHN1bmtBcnJheS5sZW5ndGggPT09IHNoaXBBcnJheS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGlzR2FtZUxvc3QsIHJlY2VpdmVBdHRhY2ssIHBsYWNlU2hpcCwgbWlzc0FycmF5LCBzaGlwQXJyYXksIGdldEhpdEFycmF5LFxuICB9O1xufTtcblxuZXhwb3J0IHsgY3JlYXRlR2FtZWJvYXJkIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIlxuXG5jb25zdCBjcmVhdGVQbGF5ZXIgPSAocGxheWVyTmFtZSkgPT57XG4gICAgY29uc3QgcGxheWVyQm9hcmQgPSBjcmVhdGVHYW1lYm9hcmQoKTtcblxuICAgIGNvbnN0IGdldE1pc3NBcnJheSA9KCk9PntcbiAgICAgICAgcmV0dXJuIHBsYXllckJvYXJkLm1pc3NBcnJheVxuICAgIH1cblxuICAgIGNvbnN0IGdldFNoaXBBcnJheSA9KCk9PntcbiAgICAgICAgcmV0dXJuIHBsYXllckJvYXJkLnNoaXBBcnJheVxuICAgIH1cblxuICAgIGNvbnN0IGhhc0xvc3QgPSAoKSA9PiB7XG4gICAgICAgIGlmICggcGxheWVyQm9hcmQuaXNHYW1lTG9zdCgpICl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgXG4gICAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChoaXRDb29yZGluYXRlcyk9PntcbiAgICAgICAgcGxheWVyQm9hcmQucmVjZWl2ZUF0dGFjayhoaXRDb29yZGluYXRlcylcbiAgICB9XG4gICAgY29uc3QgZ2V0SGl0QXJyYXkgPSAoKT0+e1xuICAgICAgICByZXR1cm4gcGxheWVyQm9hcmQuZ2V0SGl0QXJyYXkoKVxuICAgIH1cblxuXG4gICAgY29uc3QgcGxhY2VTaGlwID0gKG5hbWUsY29vcmRpbmF0ZXMpPT57XG4gICAgICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcChuYW1lLGNvb3JkaW5hdGVzKVxuICAgIH1cblxuXG4gICAgIHJldHVybiB7cGxheWVyTmFtZSwgaGFzTG9zdCwgcGxhY2VTaGlwLCByZWNlaXZlQXR0YWNrLCBnZXRNaXNzQXJyYXksIGdldFNoaXBBcnJheSwgZ2V0SGl0QXJyYXl9XG59XG5cbmV4cG9ydCB7Y3JlYXRlUGxheWVyfSIsIiBjb25zdCBjcmVhdGVTaGlwID0gKG5hbWUsIGxlbmd0aCwgY29vcmRpbmF0ZXMpID0+IHtcbiAgICBjb25zdCBzaGlwQ29vcmRpbmF0ZXMgPSBbLi4uY29vcmRpbmF0ZXNdXG4gICAgY29uc3QgaGl0QXJyYXkgPSBbXTtcblxuICAgICAgICBjb25zdCBoaXQgPSAoaGl0Q29vcmRpbmF0ZXMpID0+IHtcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzLmZvckVhY2goc2hpcFNxdWFyZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHNoaXBTcXVhcmUgPT09IGhpdENvb3JkaW5hdGVzKXtcbiAgICAgICAgICAgICAgICAgICAgaGl0QXJyYXkucHVzaChoaXRDb29yZGluYXRlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpc1N1bmsgPSAoKT0+e1xuICAgICAgICAgICAgaWYoaGl0QXJyYXkubGVuZ3RoPT09bGVuZ3RoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHtuYW1lLCBoaXQsIGlzU3Vuaywgc2hpcENvb3JkaW5hdGVzLCBoaXRBcnJheX1cblxufVxuXG5leHBvcnQge2NyZWF0ZVNoaXB9IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjg0MjY1YmYwZWRkNTRjYTcyOTA4OWU5ZTZiNDNmZGQxLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJiMWZkZjFhOTBhNGEzODI0NmUwYTg3Y2VkZTNiNTIyYi5wbmdcIjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiaW1wb3J0IHtyZW5kZXJXZWxjb21lUGFnZSB9IGZyb20gXCIuL2RvbVwiO1xuXG5yZW5kZXJXZWxjb21lUGFnZSgpOyJdLCJzb3VyY2VSb290IjoiIn0=