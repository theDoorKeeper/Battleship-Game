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
          whosTurn.textContent = "".concat(playerTwo.playerName, "'s turn !");
          e.target.classList.add('clicked');
          playRound(playerTwo, Number(e.target.id));
          isGameOver(playerOne, playerTwo);
          playerOneTurn = false;
          setTimeout(function () {
            whosTurn.textContent = "".concat(playerOne.playerName, "'s turn !");
            computerRound(playerOne);
            isGameOver(playerOne, playerTwo);
            playerOneTurn = true;
          }, 800);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvSGVscGVyIGZ1bmN0aW9ucy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL0pTL2NyZWF0ZUh0bWxFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9KUy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL0pTL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvSlMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9KUy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9hc3NldHMvZXhwbG9zaW9uLnBuZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvYXNzZXRzL3RhcmdldC5wbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9KUy9pbmRleC5qcyJdLCJuYW1lcyI6WyJnZXRSYW5kb21OdW1iZXIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJnZXRMZW5ndGgiLCJuYW1lIiwiZ2V0Q29vcmRpbmF0ZXMiLCJjb29yZGluYXRlIiwibGVuZ3RoIiwiY29vcmRpbmF0ZUFycmF5IiwibGFzdENvb3JkaW5hdGUiLCJpIiwicHVzaCIsImNyZWF0ZUh0bWxFbGVtZW50IiwidHlwZSIsImlkIiwiYXJyYXlDbGFzc2VzIiwiY29udGVudCIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJmb3JFYWNoIiwibXlDbGFzcyIsImNsYXNzTGlzdCIsImFkZCIsImlubmVyVGV4dCIsInJlbmRlcldlbGNvbWVQYWdlIiwiY29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsIndlbGNvbWVQYWdlIiwiYXBwZW5kQ2hpbGQiLCJ0aXRsZSIsInBsYXllck5hbWVJbnB1dCIsImNvbnRpbnVlQnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBsYXllck5hbWUiLCJ2YWx1ZSIsImh1bWFuIiwiY3JlYXRlUGxheWVyIiwiY29tcHV0ZXIiLCJyZW5kZXJTdGFydGluZ1BhZ2UiLCJwbGFjZVNoaXAiLCJwbGF5ZXJPbmUiLCJwbGF5ZXJUd28iLCJzaGlwTmFtZSIsImdhbWVCb2FyZENvbnRhaW5lciIsImlubmVySFRNTCIsImZpcnN0R2FtZWJvYXJkIiwic3F1YXJlIiwiZSIsImRpc3BsYXlBcnJheSIsImdldFNoaXBBcnJheSIsInNoaXAiLCJzaGlwQ29vcmRpbmF0ZXMiLCJkb2VzQ29sbGlkZSIsImNvbGxpZGUiLCJjb29yZGluYXRlcyIsIk51bWJlciIsInRhcmdldCIsImluY2x1ZGVzIiwiZGlzcGxheVNoaXBzIiwiZ3JheU91dEJ0biIsImhpZ2hMaWdodEJ0biIsImJ1dHRvbldyYXBwZXIiLCJiYXR0bGVzaGlwQnV0dG9uIiwic3VibWFyaW5lQnV0dG9uIiwiY3J1aXNlckJ1dHRvbiIsImNhcnJpZXJCdXR0b24iLCJxdWVyeVNlbGVjdG9yQWxsIiwiYnV0dG9uIiwic2hpcEFycmF5IiwidXNlZEJ0biIsInN0eWxlIiwiY29sb3IiLCJzdGFydEJ1dHRvbiIsInN0YXJ0R2FtZSIsInJlbmRlckJvYXJkcyIsImZpcnN0RnJhbWUiLCJmaXJzdEdhbWVib2FyZFRpdGxlIiwic2Vjb25kRnJhbWUiLCJzZWNvbmRHYW1lYm9hcmQiLCJzZWNvbmRHYW1lYm9hcmRUaXRsZSIsIndob3NUdXJuIiwidGV4dENvbnRlbnQiLCJwbGF5ZXJPbmVUdXJuIiwiY29udGFpbnMiLCJpc0dhbWVPdmVyIiwicGxheVJvdW5kIiwic2V0VGltZW91dCIsImNvbXB1dGVyUm91bmQiLCJwbGF5ZXIiLCJzcXVhcmVzIiwiYmFja2dyb3VuZENvbG9yIiwiYXR0YWNrIiwicmVjZWl2ZUF0dGFjayIsImdldEhpdEFycmF5Iiwic2V0QXR0cmlidXRlIiwibG9nbyIsInNyYyIsImZpcnN0Q2hpbGQiLCJkaXNwbGF5TWlzc0FycmF5IiwiZ2V0TWlzc0FycmF5IiwiZGlzcGxheVN1bmtTaGlwcyIsInN1bmtBcnJheSIsImlzU3VuayIsImV4cGxvc2lvbiIsImJ0TmFtZSIsImJ0biIsImdhbWVPdmVyU2NyZWVuIiwiaGFzTG9zdCIsIndpbmRvdyIsImJvZHkiLCJkaXNwbGF5IiwiY29uc29sZSIsImxvZyIsImNvbXB1dGVyUGxheSIsInRyeUFnYWluIiwiY3JlYXRlR2FtZWJvYXJkIiwibWlzc0FycmF5IiwiY3JlYXRlU2hpcCIsImhpdENvb3JkaW5hdGVzIiwibWlzcyIsImhpdCIsImhpdEFycmF5IiwiaXNHYW1lTG9zdCIsInBsYXllckJvYXJkIiwic2hpcFNxdWFyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBSTtBQUN4QixTQUFPQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLE1BQWlCLE1BQU0sQ0FBTixHQUFVLENBQTNCLENBQVgsSUFBNEMsQ0FBbkQ7QUFDSCxDQUZEOztBQUlBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQsRUFBUztBQUN2QixNQUFJQSxJQUFJLEtBQUssV0FBYixFQUF5QjtBQUNyQixXQUFPLENBQVA7QUFDSCxHQUZELE1BR0ssSUFBSUEsSUFBSSxLQUFL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Q0FBeUMsRTs7Ozs7Ozs7Ozs7Ozs7QUNBL0UsaUVBQWUscUJBQXVCLHlDQUF5QyxFOzs7Ozs7VUNBL0U7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BLDJCOzs7Ozs7Ozs7Ozs7QUNBQTtBQUVBakcsdURBQWlCLEciLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2V0UmFuZG9tTnVtYmVyID0gKCk9PntcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwMCAtIDEgKyAxKSkgKyAxO1xufTtcblxuY29uc3QgZ2V0TGVuZ3RoID0gKG5hbWUpID0+e1xuICAgIGlmIChuYW1lID09PSBcInN1Ym1hcmluZVwiKXtcbiAgICAgICAgcmV0dXJuIDJcbiAgICB9XG4gICAgZWxzZSBpZiAobmFtZSA9PT0gXCJjYXJyaWVyXCIpe1xuICAgICAgICByZXR1cm4gNlxuICAgIH1cbiAgICBlbHNlIGlmIChuYW1lID09PSBcImJhdHRsZXNoaXBcIil7XG4gICAgICByZXR1cm4gNFxuICB9XG4gIGVsc2UgaWYgKG5hbWUgPT09IFwiY3J1aXNlclwiKXtcbiAgICByZXR1cm4gM1xufVxufTtcbi8qIFxuY29uc3QgZ2V0Q29vcmRpbmF0ZXMgPSAoY29vcmRpbmF0ZSwgbGVuZ3RoKSA9PiB7XG4gICAgY29uc3QgY29vcmRpbmF0ZUFycmF5ID0gW107XG4gIFxuICAgIGlmIChjb29yZGluYXRlICsgbGVuZ3RoID4gMTAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvb3JkaW5hdGVBcnJheS5wdXNoKGNvb3JkaW5hdGUgLSBpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjb29yZGluYXRlQXJyYXkucHVzaChjb29yZGluYXRlICsgaSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb29yZGluYXRlQXJyYXk7XG4gIH07ICovXG5cbiAgY29uc3QgZ2V0Q29vcmRpbmF0ZXMgPSAoY29vcmRpbmF0ZSwgbGVuZ3RoKSA9PiB7XG4gICAgY29uc3QgY29vcmRpbmF0ZUFycmF5ID0gW107XG4gICAgbGV0IGxhc3RDb29yZGluYXRlID0gY29vcmRpbmF0ZStsZW5ndGg7XG5cbiAgICBpZiAoY29vcmRpbmF0ZSA+PTEgJiYgbGFzdENvb3JkaW5hdGU8PTExICkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjb29yZGluYXRlQXJyYXkucHVzaChjb29yZGluYXRlICsgaSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgIGVsc2UgaWYgKGNvb3JkaW5hdGUgPiAxMCAmJiBsYXN0Q29vcmRpbmF0ZTw9MjEpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29vcmRpbmF0ZUFycmF5LnB1c2goY29vcmRpbmF0ZSArIGkpO1xuICAgICAgfSAgICAgIFxuICAgIH1cblxuICAgIGVsc2UgaWYgKGNvb3JkaW5hdGU+MjAgJiYgbGFzdENvb3JkaW5hdGU8PTMxKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvb3JkaW5hdGVBcnJheS5wdXNoKGNvb3JkaW5hdGUgKyBpKTtcbiAgICAgIH0gICAgICBcbiAgICB9XG5cbiAgICBlbHNlIGlmIChjb29yZGluYXRlPjMwICYmIGxhc3RDb29yZGluYXRlPD00MSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjb29yZGluYXRlQXJyYXkucHVzaChjb29yZGluYXRlICsgaSk7XG4gICAgICB9ICAgICAgXG4gICAgfVxuXG4gICAgZWxzZSBpZiAoY29vcmRpbmF0ZT40MCAmJiBsYXN0Q29vcmRpbmF0ZTw9NTEpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29vcmRpbmF0ZUFycmF5LnB1c2goY29vcmRpbmF0ZSArIGkpO1xuICAgICAgfSAgICAgIFxuICAgIH1cblxuICAgIGVsc2UgaWYgKGNvb3JkaW5hdGU+NTAgJiYgbGFzdENvb3JkaW5hdGU8PTYxKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvb3JkaW5hdGVBcnJheS5wdXNoKGNvb3JkaW5hdGUgKyBpKTtcbiAgICAgIH0gICAgICBcbiAgICB9XG5cbiAgICBlbHNlIGlmIChjb29yZGluYXRlPjYwICYmIGxhc3RDb29yZGluYXRlPD03MSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjb29yZGluYXRlQXJyYXkucHVzaChjb29yZGluYXRlICsgaSk7XG4gICAgICB9ICAgICAgXG4gICAgfVxuXG4gICAgZWxzZSBpZiAoY29vcmRpbmF0ZT43MCAmJiBsYXN0Q29vcmRpbmF0ZTw9ODEpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29vcmRpbmF0ZUFycmF5LnB1c2goY29vcmRpbmF0ZSArIGkpO1xuICAgICAgfSAgICAgIFxuICAgIH1cblxuICAgIGVsc2UgaWYgKGNvb3JkaW5hdGU+ODAgJiYgbGFzdENvb3JkaW5hdGU8PTkxKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvb3JkaW5hdGVBcnJheS5wdXNoKGNvb3JkaW5hdGUgKyBpKTtcbiAgICAgIH0gICAgICBcbiAgICB9XG5cbiAgICBlbHNlIGlmIChjb29yZGluYXRlPjkwICYmIGxhc3RDb29yZGluYXRlPD0xMDEpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29vcmRpbmF0ZUFycmF5LnB1c2goY29vcmRpbmF0ZSArIGkpO1xuICAgICAgfSAgICAgIFxuICAgIH1cbiAgICBlbHNlIGlmIChsYXN0Q29vcmRpbmF0ZT4xMDApIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29vcmRpbmF0ZUFycmF5LnB1c2goY29vcmRpbmF0ZSAtIGkpO1xuICAgICAgfSAgICAgIFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29vcmRpbmF0ZUFycmF5LnB1c2goY29vcmRpbmF0ZSAtIGkpO1xuICAgICAgfSAgXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvb3JkaW5hdGVBcnJheTtcbiAgfTtcblxuICBleHBvcnQge2dldENvb3JkaW5hdGVzLGdldExlbmd0aCxnZXRSYW5kb21OdW1iZXJ9XG5cbiIsImNvbnN0IGNyZWF0ZUh0bWxFbGVtZW50ID0gKHR5cGUsIGlkLCBhcnJheUNsYXNzZXMsIGNvbnRlbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICBpZiAoaWQpIGVsZW1lbnQuaWQgPSBpZDtcbiAgICBpZiAoYXJyYXlDbGFzc2VzKSBhcnJheUNsYXNzZXMuZm9yRWFjaCgobXlDbGFzcykgPT4gZWxlbWVudC5jbGFzc0xpc3QuYWRkKG15Q2xhc3MpKTtcbiAgXG4gICAgaWYgKGNvbnRlbnQpIGVsZW1lbnQuaW5uZXJUZXh0ID0gY29udGVudDtcbiAgXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH07XG4gIGV4cG9ydCB7Y3JlYXRlSHRtbEVsZW1lbnR9IiwiaW1wb3J0IHsgZ2V0Q29vcmRpbmF0ZXMgfSBmcm9tICcuLi9IZWxwZXIgZnVuY3Rpb25zL3V0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVIdG1sRWxlbWVudCB9IGZyb20gJy4vY3JlYXRlSHRtbEVsZW1lbnQnO1xuaW1wb3J0IHsgZ2V0TGVuZ3RoIH0gZnJvbSAnLi4vSGVscGVyIGZ1bmN0aW9ucy91dGlsaXRpZXMnO1xuaW1wb3J0IHsgZ2V0UmFuZG9tTnVtYmVyIH0gZnJvbSAnLi4vSGVscGVyIGZ1bmN0aW9ucy91dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgZXhwbG9zaW9uIGZyb20gXCIuLi9hc3NldHMvZXhwbG9zaW9uLnBuZ1wiO1xuaW1wb3J0IHRhcmdldCBmcm9tIFwiLi4vYXNzZXRzL3RhcmdldC5wbmdcIjtcblxuY29uc3QgcmVuZGVyV2VsY29tZVBhZ2UgPSAoKT0+e1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG5cbiAgY29uc3Qgd2VsY29tZVBhZ2UgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2Jywnd2VsY29tZS1wYWdlJyxudWxsLG51bGwpXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWxjb21lUGFnZSk7XG5cbiAgY29uc3QgdGl0bGUgPSBjcmVhdGVIdG1sRWxlbWVudCgnaGVhZGVyJywndGl0bGUnLG51bGwsJ1BsZWFzZSBDaG9vc2UgQSBuYW1lJyk7XG4gIHdlbGNvbWVQYWdlLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb25zdCBwbGF5ZXJOYW1lSW5wdXQgID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2lucHV0JywncGxheWVyTmFtZScsbnVsbCxudWxsKTtcbiAgd2VsY29tZVBhZ2UuYXBwZW5kQ2hpbGQocGxheWVyTmFtZUlucHV0KTtcblxuICBjb25zdCBjb250aW51ZUJ0biA9IGNyZWF0ZUh0bWxFbGVtZW50KCdidXR0b24nLCdjb250aW51ZS1idG4nLFsnYnRuJ10sJ2NvbnRpbnVlJyk7XG4gIGNvbnRpbnVlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcblxuICAgIGNvbnN0IHBsYXllck5hbWUgPSBwbGF5ZXJOYW1lSW5wdXQudmFsdWU7XG4gICAgY29uc3QgaHVtYW4gPSBjcmVhdGVQbGF5ZXIocGxheWVyTmFtZSk7XG4gICAgY29uc3QgY29tcHV0ZXIgPSBjcmVhdGVQbGF5ZXIoXCJjb21wdXRlclwiKTtcbiAgICByZW5kZXJTdGFydGluZ1BhZ2UoaHVtYW4sY29tcHV0ZXIpO1xuXG4gICAgY29tcHV0ZXIucGxhY2VTaGlwKFwic3VibWFyaW5lXCIsNjApO1xuICAgIGNvbXB1dGVyLnBsYWNlU2hpcChcImJhdHRsZXNoaXBcIiw4MCk7XG4gIH0pXG4gIHdlbGNvbWVQYWdlLmFwcGVuZENoaWxkKGNvbnRpbnVlQnRuKTtcbn1cblxuY29uc3QgcmVuZGVyU3RhcnRpbmdQYWdlID0gKHBsYXllck9uZSwgcGxheWVyVHdvKSA9PiB7XG4gIGxldCBzaGlwTmFtZSA9IG51bGw7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgY29uc3QgZ2FtZUJvYXJkQ29udGFpbmVyID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsJ2dhbWVib2FyZC1jb250YWluZXInLG51bGwsbnVsbCk7XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdhbWVCb2FyZENvbnRhaW5lcilcbiAgY29uc3QgZmlyc3RHYW1lYm9hcmQgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgYCR7cGxheWVyT25lLnBsYXllck5hbWV9R2FtZWJvYXJkYCwgWydnYW1lYm9hcmQnXSwgbnVsbCk7XG4gIGdhbWVCb2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChmaXJzdEdhbWVib2FyZCk7XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTAwOyBpKyspIHtcbiAgICBjb25zdCBzcXVhcmUgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgaSwgW2Ake3BsYXllck9uZS5wbGF5ZXJOYW1lfXNxdWFyZWBdLCBudWxsKTtcbiAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc3QgZGlzcGxheUFycmF5ID0gW107XG4gICAgICBjb25zdCBsZW5ndGggPSBnZXRMZW5ndGgoc2hpcE5hbWUpO1xuICAgICAgcGxheWVyT25lLmdldFNoaXBBcnJheSgpLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgZGlzcGxheUFycmF5LnB1c2goLi4uc2hpcC5zaGlwQ29vcmRpbmF0ZXMpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGRvZXNDb2xsaWRlID0gKCkgPT4ge1xuICAgICAgICBsZXQgY29sbGlkZSA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IGdldENvb3JkaW5hdGVzKE51bWJlcihlLnRhcmdldC5pZCksIGxlbmd0aCk7XG4gICAgICAgIGNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgICBpZiAoZGlzcGxheUFycmF5LmluY2x1ZGVzKGNvb3JkaW5hdGUpKSB7XG4gICAgICAgICAgICBjb2xsaWRlID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY29sbGlkZTtcbiAgICAgIH07XG5cbiAgICAgIGlmIChzaGlwTmFtZSAmJiAhZGlzcGxheUFycmF5LmluY2x1ZGVzKE51bWJlcihlLnRhcmdldC5pZCkpICYmICFkb2VzQ29sbGlkZSgpKSB7XG4gICAgICAgIHBsYXllck9uZS5wbGFjZVNoaXAoc2hpcE5hbWUsIE51bWJlcihlLnRhcmdldC5pZCkpO1xuICAgICAgICBkaXNwbGF5U2hpcHMocGxheWVyT25lKTtcbiAgICAgICAgc2hpcE5hbWUgPSBudWxsO1xuICAgICAgICBncmF5T3V0QnRuKHBsYXllck9uZSlcbiAgICAgICAgaGlnaExpZ2h0QnRuKFwic3RhcnRcIiwgcGxheWVyT25lKVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZmlyc3RHYW1lYm9hcmQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgfVxuICBjb25zdCBidXR0b25XcmFwcGVyID0gY3JlYXRlSHRtbEVsZW1lbnQoXCJkaXZcIixudWxsLFsnYnRuLXdyYXBwZXInXSxudWxsKTtcblxuICBjb25zdCBiYXR0bGVzaGlwQnV0dG9uID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2J1dHRvbicsICdiYXR0bGVzaGlwJywgWydzaGlwLWJ1dHRvbiddLCAnYmF0dGxlc2hpcCcpO1xuICBjb25zdCBzdWJtYXJpbmVCdXR0b24gPSBjcmVhdGVIdG1sRWxlbWVudCgnYnV0dG9uJywgJ3N1Ym1hcmluZScsIFsnc2hpcC1idXR0b24nXSwgJ3N1Ym1hcmluZScpO1xuICBjb25zdCBjcnVpc2VyQnV0dG9uID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2J1dHRvbicsICdjcnVpc2VyJywgWydzaGlwLWJ1dHRvbiddLCAnY3J1aXNlcicpO1xuICBjb25zdCBjYXJyaWVyQnV0dG9uID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2J1dHRvbicsICdjYXJyaWVyJywgWydzaGlwLWJ1dHRvbiddLCAnY2FycmllcicpO1xuXG5cblxuXG4gIGdhbWVCb2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25XcmFwcGVyKTtcblxuICBidXR0b25XcmFwcGVyLmFwcGVuZENoaWxkKGJhdHRsZXNoaXBCdXR0b24pO1xuICBidXR0b25XcmFwcGVyLmFwcGVuZENoaWxkKHN1Ym1hcmluZUJ1dHRvbik7XG4gIGJ1dHRvbldyYXBwZXIuYXBwZW5kQ2hpbGQoY3J1aXNlckJ1dHRvbik7XG4gIGJ1dHRvbldyYXBwZXIuYXBwZW5kQ2hpbGQoY2FycmllckJ1dHRvbik7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAtYnV0dG9uJykuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXG4gICAgICBjb25zdCBzaGlwQXJyYXkgPSBbXTsgICAgIFxuXG4gICAgICBwbGF5ZXJPbmUuZ2V0U2hpcEFycmF5KCkuZm9yRWFjaChzaGlwPT57XG4gICAgICAgIHNoaXBBcnJheS5wdXNoKHNoaXAubmFtZSk7XG4gICAgICAgIGNvbnN0IHVzZWRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtzaGlwLm5hbWV9YCk7XG4gICAgICAgIHVzZWRCdG4uc3R5bGUuY29sb3I9JyMzNDM0MzQnXG5cbiAgICAgIH0pXG5cbiAgICBpZiAoIXNoaXBBcnJheS5pbmNsdWRlcyhlLnRhcmdldC5pZCkpe1xuICAgICAgc2hpcE5hbWUgPSBlLnRhcmdldC5pZDtcbiAgICAgIH1cblxuICAgICAgXG4gICAgfSk7XG5cbiAgXG4gIH0pO1xuXG4gIGNvbnN0IHN0YXJ0QnV0dG9uID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2J1dHRvbicsICdzdGFydCcsIFsnY29udHJvbC1idXR0b24nXSwgJ3N0YXJ0IGdhbWUnKTtcbiAgc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICBpZihwbGF5ZXJPbmUuZ2V0U2hpcEFycmF5KCkubGVuZ3RoPT09NCl7XG4gICAgc3RhcnRHYW1lKHBsYXllck9uZSwgcGxheWVyVHdvKTtcbiAgfVxuXG4gIH0pO1xuICBnYW1lQm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RhcnRCdXR0b24pO1xufTtcblxuY29uc3QgcmVuZGVyQm9hcmRzID0gKHBsYXllck9uZSwgcGxheWVyVHdvKSA9PiB7XG4gIGNvbnN0IGdhbWVCb2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lYm9hcmQtY29udGFpbmVyJyk7XG4gIGdhbWVCb2FyZENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgY29uc3QgZmlyc3RGcmFtZSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCBgJHtwbGF5ZXJPbmUucGxheWVyTmFtZX1mcmFtZWAsIFsnZnJhbWUnXSwgbnVsbCk7XG5cbiAgY29uc3QgZmlyc3RHYW1lYm9hcmQgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgYCR7cGxheWVyT25lLnBsYXllck5hbWV9R2FtZWJvYXJkYCwgWydnYW1lYm9hcmQnXSwgbnVsbCk7XG4gIGZpcnN0RnJhbWUuYXBwZW5kQ2hpbGQoZmlyc3RHYW1lYm9hcmQpO1xuICBnYW1lQm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZmlyc3RGcmFtZSk7XG5cbiAgY29uc3QgZmlyc3RHYW1lYm9hcmRUaXRsZSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCBgZmlyc3QtdGl0bGVgLCBbJ2dhbWVib2FyZC10aXRsZSddLCBgJHtwbGF5ZXJPbmUucGxheWVyTmFtZX0ncyBCb2FyZGApO1xuICBmaXJzdEZyYW1lLmFwcGVuZENoaWxkKGZpcnN0R2FtZWJvYXJkVGl0bGUpO1xuXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwMDsgaSsrKSB7XG4gICAgY29uc3Qgc3F1YXJlID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsIGksIFtgJHtwbGF5ZXJPbmUucGxheWVyTmFtZX1zcXVhcmVgXSwgbnVsbCk7XG4gICAgZmlyc3RHYW1lYm9hcmQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgfVxuXG4gIGNvbnN0IHNlY29uZEZyYW1lID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsIGAke3BsYXllck9uZS5wbGF5ZXJOYW1lfWZyYW1lYCwgWydmcmFtZSddLCBudWxsKTtcblxuICBjb25zdCBzZWNvbmRHYW1lYm9hcmQgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgYCR7cGxheWVyVHdvLnBsYXllck5hbWV9R2FtZWJvYXJkYCwgWydnYW1lYm9hcmQnXSwgbnVsbCk7XG4gIHNlY29uZEZyYW1lLmFwcGVuZENoaWxkKHNlY29uZEdhbWVib2FyZCk7XG4gIGdhbWVCb2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChzZWNvbmRGcmFtZSk7XG5cbiAgY29uc3Qgc2Vjb25kR2FtZWJvYXJkVGl0bGUgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgYHNlY29uZC10aXRsZWAsIFsnZ2FtZWJvYXJkLXRpdGxlJ10sIGAke3BsYXllclR3by5wbGF5ZXJOYW1lfSdzIEJvYXJkYCk7XG4gIHNlY29uZEZyYW1lLmFwcGVuZENoaWxkKHNlY29uZEdhbWVib2FyZFRpdGxlKTtcbiAgXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgY29uc3Qgd2hvc1R1cm4gPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywndGl0bGUtdHVybicsWyd0dXJuJ10pO1xuICB3aG9zVHVybi50ZXh0Q29udGVudD1gJHtwbGF5ZXJPbmUucGxheWVyTmFtZX0ncyB0dXJuICFgXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3aG9zVHVybilcblxuXG4gIGxldCBwbGF5ZXJPbmVUdXJuICA9IHRydWU7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwMDsgaSsrKSB7XG4gICAgY29uc3Qgc3F1YXJlID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsIGksIFtgJHtwbGF5ZXJUd28ucGxheWVyTmFtZX1zcXVhcmVgXSwgbnVsbCk7XG4gICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjbGlja2VkJykgJiYgIWlzR2FtZU92ZXIocGxheWVyT25lLCBwbGF5ZXJUd28pKSB7XG5cbiAgICAgICAgaWYgKHBsYXllck9uZVR1cm4pe1xuICAgICAgICB3aG9zVHVybi50ZXh0Q29udGVudD1gJHtwbGF5ZXJUd28ucGxheWVyTmFtZX0ncyB0dXJuICFgXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2NsaWNrZWQnKTtcbiAgICAgICAgcGxheVJvdW5kKHBsYXllclR3bywgTnVtYmVyKGUudGFyZ2V0LmlkKSk7ICAgXG4gICAgICAgIGlzR2FtZU92ZXIocGxheWVyT25lLCBwbGF5ZXJUd28pO1xuXG4gICAgICAgIHBsYXllck9uZVR1cm49ZmFsc2U7XG5cbiAgICAgICAgIHNldFRpbWVvdXQoKCgpPT57XG4gICAgICAgICAgd2hvc1R1cm4udGV4dENvbnRlbnQ9YCR7cGxheWVyT25lLnBsYXllck5hbWV9J3MgdHVybiAhYFxuICAgICAgICAgIGNvbXB1dGVyUm91bmQocGxheWVyT25lKTtcbiAgICAgICAgICBpc0dhbWVPdmVyKHBsYXllck9uZSwgcGxheWVyVHdvKTtcbiAgICAgICAgICBwbGF5ZXJPbmVUdXJuPXRydWVcblxuICAgICAgICB9KSw4MDApXG5cbiAgICAgIH1cbiAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgfVxuICAgIH0pO1xuICAgIHNlY29uZEdhbWVib2FyZC5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICB9XG59O1xuXG5jb25zdCBkaXNwbGF5U2hpcHMgPSAocGxheWVyKSA9PiB7XG4gIGNvbnN0IHNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtwbGF5ZXIucGxheWVyTmFtZX1zcXVhcmVgKTtcbiAgY29uc3QgZGlzcGxheUFycmF5ID0gW107XG4gIHBsYXllci5nZXRTaGlwQXJyYXkoKS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgZGlzcGxheUFycmF5LnB1c2goLi4uc2hpcC5zaGlwQ29vcmRpbmF0ZXMpO1xuICB9KTtcblxuICBzcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgIGlmIChkaXNwbGF5QXJyYXkuaW5jbHVkZXMoTnVtYmVyKHNxdWFyZS5pZCkpKSB7XG4gICAgICBzcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM0ZDRkNGQnO1xuICAgIH1cbiAgfSk7XG5cbiAgc3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICBwbGF5ZXIuZ2V0U2hpcEFycmF5KCkuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgaWYgKHNoaXAuc2hpcENvb3JkaW5hdGVzLmluY2x1ZGVzKE51bWJlcihzcXVhcmUuaWQpKSkge1xuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChzaGlwLm5hbWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGF0dGFjayA9IChwbGF5ZXIsIGNvb3JkaW5hdGVzKSA9PiB7XG4gIHBsYXllci5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKTtcbiAgY29uc3Qgc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke3BsYXllci5wbGF5ZXJOYW1lfXNxdWFyZWApO1xuICBzcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgIGlmIChwbGF5ZXIuZ2V0SGl0QXJyYXkoKS5pbmNsdWRlcyhOdW1iZXIoc3F1YXJlLmlkKSkpIHtcbiAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6ICMzNTM0MzQ7Jyk7IFxuXG4gICAgICBjb25zdCBsb2dvID0gY3JlYXRlSHRtbEVsZW1lbnQoXCJpbWdcIixcImV4cGxvc2lvblwiLFsnbG9nbyddLG51bGwpXG4gICAgICBsb2dvLnNyYz10YXJnZXQ7XG5cbiAgICAgIGlmICghc3F1YXJlLmZpcnN0Q2hpbGQpXG4gICAgICBzcXVhcmUuYXBwZW5kQ2hpbGQobG9nbylcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgZGlzcGxheU1pc3NBcnJheSA9IChzcXVhcmVzLCBwbGF5ZXIpID0+IHtcbiAgc3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICBpZiAocGxheWVyLmdldE1pc3NBcnJheSgpLmluY2x1ZGVzKE51bWJlcihzcXVhcmUuaWQpKSkge1xuICAgICAgc3F1YXJlLnRleHRDb250ZW50ID0gJ1gnO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBkaXNwbGF5U3Vua1NoaXBzID0gKHNxdWFyZXMsIHBsYXllcikgPT4ge1xuICBjb25zdCBzdW5rQXJyYXkgPSBbXTtcbiAgcGxheWVyLmdldFNoaXBBcnJheSgpLmZvckVhY2goKHNoaXApID0+IHtcbiAgICBpZiAoc2hpcC5pc1N1bmsoKSkge1xuICAgICAgc3Vua0FycmF5LnB1c2goLi4uc2hpcC5zaGlwQ29vcmRpbmF0ZXMpO1xuICAgIH1cbiAgfSk7XG4gIHNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgaWYgKHN1bmtBcnJheS5pbmNsdWRlcyhOdW1iZXIoc3F1YXJlLmlkKSkpIHtcblxuICAgICAgXG4gICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiAjZDQxNTE1OycpOyBcblxuICAgICAgc3F1YXJlLmZpcnN0Q2hpbGQuc3JjPWV4cGxvc2lvbjtcblxuICAgICAgaWYgKCFzcXVhcmUuZmlyc3RDaGlsZC5zcmM9PT10YXJnZXQpeyBcbiAgICAgIHNxdWFyZS5hcHBlbmRDaGlsZChsb2dvKVxuICAgICAgXG4gICAgfVxuXG5cbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgZ3JheU91dEJ0biA9IChwbGF5ZXIpPT57ICAgICBcbiAgcGxheWVyLmdldFNoaXBBcnJheSgpLmZvckVhY2goc2hpcD0+e1xuICBjb25zdCB1c2VkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7c2hpcC5uYW1lfWApO1xuICB1c2VkQnRuLnN0eWxlLmNvbG9yPScjMzQzNDM0J1xuXG59KX1cblxuY29uc3QgaGlnaExpZ2h0QnRuID0gKGJ0TmFtZSxwbGF5ZXJPbmUpPT57XG4gIGlmKHBsYXllck9uZS5nZXRTaGlwQXJyYXkoKS5sZW5ndGg9PT00KXtcblxuICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtidE5hbWV9YCk7XG4gIGJ0bi5zdHlsZS5jb2xvcj1cIndoaXRlc21va2VcIlxuXG4gIH1cbn1cblxuY29uc3QgaXNHYW1lT3ZlciA9IChwbGF5ZXJPbmUsIHBsYXllclR3bykgPT4ge1xuICBjb25zdCBnYW1lT3ZlclNjcmVlbiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCdvdmVybGF5JyxbJ292ZXJsYXknXSxudWxsKTtcbiAgaWYgKHBsYXllck9uZS5oYXNMb3N0KCkpIHtcbiAgICBnYW1lT3ZlclNjcmVlbi50ZXh0Q29udGVudD1gJHtwbGF5ZXJUd28ucGxheWVyTmFtZX0gRGVzdHJveWVkIHlvdXIgc2hpcHMsIFlvdSBMb3NlICFgO1xuICAgIGdhbWVPdmVyU2NyZWVuLnN0eWxlLmNvbG9yPSdyZ2IoMjI2LCA3LCA3KSc7XG4gICAgd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZ2FtZU92ZXJTY3JlZW4pXG4gICAgZ2FtZU92ZXJTY3JlZW4uc3R5bGUuZGlzcGxheT1cImZsZXhcIjtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBlbHNlIGlmIChwbGF5ZXJUd28uaGFzTG9zdCgpKSB7XG4gICAgY29uc29sZS5sb2coZ2FtZU92ZXJTY3JlZW4pXG4gICAgZ2FtZU92ZXJTY3JlZW4udGV4dENvbnRlbnQ9YCR7cGxheWVyT25lLnBsYXllck5hbWV9IERlc3Ryb3llZCB0aGUgQ29tcHV0ZXIncyBzaGlwcywgWW91IFdpbiAhYDtcbiAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChnYW1lT3ZlclNjcmVlbik7XG4gICAgZ2FtZU92ZXJTY3JlZW4uc3R5bGUuY29sb3I9JyMyMzQ1ZGEnO1xuICAgIGdhbWVPdmVyU2NyZWVuLnN0eWxlLmRpc3BsYXk9XCJmbGV4XCI7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuY29uc3QgcGxheVJvdW5kID0gKHBsYXllciwgY29vcmRpbmF0ZSkgPT4ge1xuICBjb25zdCBzcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7cGxheWVyLnBsYXllck5hbWV9c3F1YXJlYCk7XG4gIGF0dGFjayhwbGF5ZXIsIGNvb3JkaW5hdGUpO1xuICBkaXNwbGF5TWlzc0FycmF5KHNxdWFyZXMsIHBsYXllcik7XG4gIGRpc3BsYXlTdW5rU2hpcHMoc3F1YXJlcywgcGxheWVyKTtcbn07XG5cbmNvbnN0IGNvbXB1dGVyUm91bmQgPSAocGxheWVyKSA9PiB7XG4gIGNvbnN0IGNvbXB1dGVyUGxheSA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgaWYgKCFwbGF5ZXIuZ2V0TWlzc0FycmF5KCkuaW5jbHVkZXMoY29vcmRpbmF0ZSkgJiYgIXBsYXllci5nZXRIaXRBcnJheSgpLmluY2x1ZGVzKGNvb3JkaW5hdGUpKSB7XG4gICAgICBwbGF5Um91bmQocGxheWVyLCBjb29yZGluYXRlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgbGV0IHRyeUFnYWluID0gdHJ1ZTtcbiAgd2hpbGUgKHRyeUFnYWluKSB7XG4gICAgdHJ5QWdhaW4gPSBjb21wdXRlclBsYXkoZ2V0UmFuZG9tTnVtYmVyKCkpO1xuICB9XG59O1xuXG5jb25zdCBzdGFydEdhbWUgPSAocGxheWVyT25lLCBwbGF5ZXJUd28pID0+IHtcbiAgcmVuZGVyQm9hcmRzKHBsYXllck9uZSwgcGxheWVyVHdvKTtcbiAgZGlzcGxheVNoaXBzKHBsYXllck9uZSk7XG59O1xuXG5leHBvcnQge3JlbmRlcldlbGNvbWVQYWdlIH07XG4iLCJpbXBvcnQgeyBnZXRDb29yZGluYXRlcyB9IGZyb20gJy4uL0hlbHBlciBmdW5jdGlvbnMvdXRpbGl0aWVzJztcbmltcG9ydCB7IGdldExlbmd0aCB9IGZyb20gJy4uL0hlbHBlciBmdW5jdGlvbnMvdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZVNoaXAgfSBmcm9tICcuL3NoaXAnO1xuXG5jb25zdCBjcmVhdGVHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IHNoaXBBcnJheSA9IFtdO1xuICBjb25zdCBtaXNzQXJyYXkgPSBbXTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAobmFtZSwgY29vcmRpbmF0ZSkgPT4ge1xuICAgIGNvbnN0IGxlbmd0aCA9IGdldExlbmd0aChuYW1lKTtcbiAgICBjb25zdCBjb29yZGluYXRlQXJyYXkgPSBnZXRDb29yZGluYXRlcyhjb29yZGluYXRlLCBsZW5ndGgpO1xuICAgIGNvbnN0IHNoaXAgPSBjcmVhdGVTaGlwKG5hbWUsIGxlbmd0aCwgY29vcmRpbmF0ZUFycmF5KTtcbiAgICBzaGlwQXJyYXkucHVzaChzaGlwKTtcbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGhpdENvb3JkaW5hdGVzKSA9PiB7XG4gICAgbGV0IG1pc3MgPSB0cnVlO1xuXG4gICAgc2hpcEFycmF5LmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGlmIChzaGlwLnNoaXBDb29yZGluYXRlcy5pbmNsdWRlcyhoaXRDb29yZGluYXRlcykpIHtcbiAgICAgICAgc2hpcC5oaXQoaGl0Q29vcmRpbmF0ZXMpO1xuICAgICAgICBtaXNzID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAobWlzcykge1xuICAgICAgbWlzc0FycmF5LnB1c2goaGl0Q29vcmRpbmF0ZXMpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXRIaXRBcnJheSA9ICgpID0+IHtcbiAgICBjb25zdCBoaXRBcnJheSA9IFtdO1xuICAgIHNoaXBBcnJheS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBoaXRBcnJheS5wdXNoKC4uLnNoaXAuaGl0QXJyYXkpO1xuICAgIH0pO1xuICAgIHJldHVybiBoaXRBcnJheTtcbiAgfTtcblxuICBjb25zdCBpc0dhbWVMb3N0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHN1bmtBcnJheSA9IFtdO1xuICAgIHNoaXBBcnJheS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBpZiAoc2hpcC5pc1N1bmsoKSA9PT0gdHJ1ZSkge1xuICAgICAgICBzdW5rQXJyYXkucHVzaChzaGlwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoc3Vua0FycmF5Lmxlbmd0aCA9PT0gc2hpcEFycmF5Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgaXNHYW1lTG9zdCwgcmVjZWl2ZUF0dGFjaywgcGxhY2VTaGlwLCBtaXNzQXJyYXksIHNoaXBBcnJheSwgZ2V0SGl0QXJyYXksXG4gIH07XG59O1xuXG5leHBvcnQgeyBjcmVhdGVHYW1lYm9hcmQgfTtcbiIsImltcG9ydCB7IGNyZWF0ZUdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZFwiXG5cbmNvbnN0IGNyZWF0ZVBsYXllciA9IChwbGF5ZXJOYW1lKSA9PntcbiAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IGNyZWF0ZUdhbWVib2FyZCgpO1xuXG4gICAgY29uc3QgZ2V0TWlzc0FycmF5ID0oKT0+e1xuICAgICAgICByZXR1cm4gcGxheWVyQm9hcmQubWlzc0FycmF5XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0U2hpcEFycmF5ID0oKT0+e1xuICAgICAgICByZXR1cm4gcGxheWVyQm9hcmQuc2hpcEFycmF5XG4gICAgfVxuXG4gICAgY29uc3QgaGFzTG9zdCA9ICgpID0+IHtcbiAgICAgICAgaWYgKCBwbGF5ZXJCb2FyZC5pc0dhbWVMb3N0KCkgKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSByZXR1cm4gZmFsc2VcbiAgICB9XG4gICBcbiAgICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGhpdENvb3JkaW5hdGVzKT0+e1xuICAgICAgICBwbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKGhpdENvb3JkaW5hdGVzKVxuICAgIH1cbiAgICBjb25zdCBnZXRIaXRBcnJheSA9ICgpPT57XG4gICAgICAgIHJldHVybiBwbGF5ZXJCb2FyZC5nZXRIaXRBcnJheSgpXG4gICAgfVxuXG5cbiAgICBjb25zdCBwbGFjZVNoaXAgPSAobmFtZSxjb29yZGluYXRlcyk9PntcbiAgICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKG5hbWUsY29vcmRpbmF0ZXMpXG4gICAgfVxuXG5cbiAgICAgcmV0dXJuIHtwbGF5ZXJOYW1lLCBoYXNMb3N0LCBwbGFjZVNoaXAsIHJlY2VpdmVBdHRhY2ssIGdldE1pc3NBcnJheSwgZ2V0U2hpcEFycmF5LCBnZXRIaXRBcnJheX1cbn1cblxuZXhwb3J0IHtjcmVhdGVQbGF5ZXJ9IiwiIGNvbnN0IGNyZWF0ZVNoaXAgPSAobmFtZSwgbGVuZ3RoLCBjb29yZGluYXRlcykgPT4ge1xuICAgIGNvbnN0IHNoaXBDb29yZGluYXRlcyA9IFsuLi5jb29yZGluYXRlc11cbiAgICBjb25zdCBoaXRBcnJheSA9IFtdO1xuXG4gICAgICAgIGNvbnN0IGhpdCA9IChoaXRDb29yZGluYXRlcykgPT4ge1xuICAgICAgICAgICAgY29vcmRpbmF0ZXMuZm9yRWFjaChzaGlwU3F1YXJlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc2hpcFNxdWFyZSA9PT0gaGl0Q29vcmRpbmF0ZXMpe1xuICAgICAgICAgICAgICAgICAgICBoaXRBcnJheS5wdXNoKGhpdENvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzU3VuayA9ICgpPT57XG4gICAgICAgICAgICBpZihoaXRBcnJheS5sZW5ndGg9PT1sZW5ndGgpe1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcblxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4ge25hbWUsIGhpdCwgaXNTdW5rLCBzaGlwQ29vcmRpbmF0ZXMsIGhpdEFycmF5fVxuXG59XG5cbmV4cG9ydCB7Y3JlYXRlU2hpcH0iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiODQyNjViZjBlZGQ1NGNhNzI5MDg5ZTllNmI0M2ZkZDEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImIxZmRmMWE5MGE0YTM4MjQ2ZTBhODdjZWRlM2I1MjJiLnBuZ1wiOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJpbXBvcnQge3JlbmRlcldlbGNvbWVQYWdlIH0gZnJvbSBcIi4vZG9tXCI7XG5cbnJlbmRlcldlbGNvbWVQYWdlKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==