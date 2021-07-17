import { getCoordinates } from '../Helper functions/utilities';
import { createHtmlElement } from './createHtmlElement';
import { getLength } from '../Helper functions/utilities';
import { getRandomNumber } from '../Helper functions/utilities';

const renderStartingPage = (playerOne, playerTwo) => {
  let shipName = null;
  const gameBoardContainer = document.querySelector('#gameboard-container');

  const firstGameboard = createHtmlElement('div', `${playerOne.playerName}Gameboard`, ['gameboard'], null);
  gameBoardContainer.appendChild(firstGameboard);

  for (let i = 1; i <= 100; i++) {
    const square = createHtmlElement('div', i, [`${playerOne.playerName}square`], null);
    square.addEventListener('click', (e) => {
      const displayArray = [];
      const length = getLength(shipName);
      playerOne.getShipArray().forEach((ship) => {
        displayArray.push(...ship.shipCoordinates);
      });

      const doesCollide = () => {
        let collide = false;
        const coordinates = getCoordinates(Number(e.target.id), length);
        coordinates.forEach((coordinate) => {
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
      }
    });

    firstGameboard.appendChild(square);
  }

  const battleshipButton = createHtmlElement('button', 'battleship', ['ship-button'], 'battleship');
  const submarineButton = createHtmlElement('button', 'submarine', ['ship-button'], 'submarine');

  gameBoardContainer.appendChild(battleshipButton);
  gameBoardContainer.appendChild(submarineButton);

  document.querySelectorAll('.ship-button').forEach((button) => {
    button.addEventListener('click', (e) => {
      shipName = e.target.id;
    });
  });

  const startButton = createHtmlElement('button', 'start', ['control-button'], 'start game');
  startButton.addEventListener('click', () => {
    startGame(playerOne, playerTwo);
  });
  gameBoardContainer.appendChild(startButton);
};
const renderBoards = (playerOne, playerTwo) => {
  const gameBoardContainer = document.querySelector('#gameboard-container');
  gameBoardContainer.innerHTML = '';
  const firstGameboard = createHtmlElement('div', `${playerOne.playerName}Gameboard`, ['gameboard'], null);
  gameBoardContainer.appendChild(firstGameboard);

  for (let i = 1; i <= 100; i++) {
    const square = createHtmlElement('div', i, [`${playerOne.playerName}square`], null);
    firstGameboard.appendChild(square);
  }

  const secondGameboard = createHtmlElement('div', `${playerTwo.playerName}Gameboard`, ['gameboard'], null);
  gameBoardContainer.appendChild(secondGameboard);

  for (let i = 1; i <= 100; i++) {
    const square = createHtmlElement('div', i, [`${playerTwo.playerName}square`], null);
    square.addEventListener('click', (e) => {
      if (!e.target.classList.contains('clicked') && !isGameOver(playerOne, playerTwo)) {
        playRound(playerTwo, Number(e.target.id));
        e.target.classList.add('clicked');
        isGameOver(playerOne, playerTwo);
        computerRound(playerOne);
        isGameOver(playerOne, playerTwo);
      }
    });
    secondGameboard.appendChild(square);
  }
};

const displayShips = (player) => {
  const squares = document.querySelectorAll(`.${player.playerName}square`);
  const displayArray = [];
  player.getShipArray().forEach((ship) => {
    displayArray.push(...ship.shipCoordinates);
  });

  squares.forEach((square) => {
    if (displayArray.includes(Number(square.id))) {
      square.textContent = 'Ship';
    }
  });

  squares.forEach((square) => {
    player.getShipArray().forEach((ship) => {
      if (ship.shipCoordinates.includes(Number(square.id))) {
        square.classList.add(ship.name);
      }
    });
  });
};

const attack = (player, coordinates) => {
  player.receiveAttack(coordinates);
  console.log(player.playerName, coordinates);
  const squares = document.querySelectorAll(`.${player.playerName}square`);
  squares.forEach((square) => {
    if (player.getHitArray().includes(Number(square.id))) {
      square.setAttribute('style', 'background-color: red;');
    }
  });
};

const displayMissArray = (squares, player) => {
  squares.forEach((square) => {
    if (player.getMissArray().includes(Number(square.id))) {
      square.textContent = 'X';
    }
  });
};

const displaySunkShips = (squares, player) => {
  const sunkArray = [];
  player.getShipArray().forEach((ship) => {
    if (ship.isSunk()) {
      sunkArray.push(...ship.shipCoordinates);
    }
  });
  squares.forEach((square) => {
    if (sunkArray.includes(Number(square.id))) {
      square.textContent = 'SUNK';
    }
  });
};
const isGameOver = (playerOne, playerTwo) => {
  if (playerOne.hasLost()) {
    alert(`${playerOne.playerName} has won  !`);
    return true;
  }
  if (playerTwo.hasLost()) {
    alert(`${playerTwo.playerName} has won !`);
    return true;
  }

  return false;
};
const playRound = (player, coordinate) => {
  const squares = document.querySelectorAll(`.${player.playerName}square`);
  attack(player, coordinate);
  displayMissArray(squares, player);
  displaySunkShips(squares, player);
};

const computerRound = (player) => {
  const computerPlay = (coordinate) => {
    if (!player.getMissArray().includes(coordinate) && !player.getHitArray().includes(coordinate)) {
      playRound(player, coordinate);
      return false;
    }
    return true;
  };

  let tryAgain = true;
  while (tryAgain) {
    tryAgain = computerPlay(getRandomNumber());
  }
};

const startGame = (playerOne, playerTwo) => {
  renderBoards(playerOne, playerTwo);
  displayShips(playerOne);
};

export { displayShips, renderBoards, renderStartingPage };
