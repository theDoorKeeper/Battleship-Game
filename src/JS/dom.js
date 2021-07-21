import { getCoordinates } from '../Helper functions/utilities';
import { createHtmlElement } from './createHtmlElement';
import { getLength } from '../Helper functions/utilities';
import { getRandomNumber } from '../Helper functions/utilities';
import { createPlayer } from "./player";
import explosion from "../assets/explosion.png";
import target from "../assets/target.png";

const renderWelcomePage = ()=>{
  const container = document.querySelector('.container');

  const welcomePage = createHtmlElement('div','welcome-page',null,null)
  container.appendChild(welcomePage);

  const title = createHtmlElement('header','title',null,'Please Choose A name');
  welcomePage.appendChild(title);

  const playerNameInput  = createHtmlElement('input','playerName',null,null);
  welcomePage.appendChild(playerNameInput);

  const continueBtn = createHtmlElement('button','continue-btn',['btn'],'continue');
  continueBtn.addEventListener('click', ()=>{

    const playerName = playerNameInput.value;
    const human = createPlayer(playerName);
    const computer = createPlayer("computer");
    renderStartingPage(human,computer);

    computer.placeShip("submarine",60);
    computer.placeShip("battleship",80);
  })
  welcomePage.appendChild(continueBtn);
}

const renderStartingPage = (playerOne, playerTwo) => {
  let shipName = null;
  const container = document.querySelector('.container');
  const gameBoardContainer = createHtmlElement('div','gameboard-container',null,null);
  container.innerHTML = '';
  container.appendChild(gameBoardContainer)
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
        grayOutBtn(playerOne)
        highLightBtn("start", playerOne)
      }
    });

    firstGameboard.appendChild(square);
  }
  const buttonWrapper = createHtmlElement("div",null,['btn-wrapper'],null);

  const battleshipButton = createHtmlElement('button', 'battleship', ['ship-button'], 'battleship');
  const submarineButton = createHtmlElement('button', 'submarine', ['ship-button'], 'submarine');
  const cruiserButton = createHtmlElement('button', 'cruiser', ['ship-button'], 'cruiser');
  const carrierButton = createHtmlElement('button', 'carrier', ['ship-button'], 'carrier');




  gameBoardContainer.appendChild(buttonWrapper);

  buttonWrapper.appendChild(battleshipButton);
  buttonWrapper.appendChild(submarineButton);
  buttonWrapper.appendChild(cruiserButton);
  buttonWrapper.appendChild(carrierButton);

  document.querySelectorAll('.ship-button').forEach((button) => {

    button.addEventListener('click', (e) => {

      const shipArray = [];     

      playerOne.getShipArray().forEach(ship=>{
        shipArray.push(ship.name);
        const usedBtn = document.querySelector(`#${ship.name}`);
        usedBtn.style.color='#343434'

      })

    if (!shipArray.includes(e.target.id)){
      shipName = e.target.id;
      }

      
    });

  
  });

  const startButton = createHtmlElement('button', 'start', ['control-button'], 'start game');
  startButton.addEventListener('click', () => {

    if(playerOne.getShipArray().length===4){
    startGame(playerOne, playerTwo);
  }

  });
  gameBoardContainer.appendChild(startButton);
};

const renderBoards = (playerOne, playerTwo) => {
  const gameBoardContainer = document.querySelector('#gameboard-container');
  gameBoardContainer.innerHTML = '';
  const firstFrame = createHtmlElement('div', `${playerOne.playerName}frame`, ['frame'], null);

  const firstGameboard = createHtmlElement('div', `${playerOne.playerName}Gameboard`, ['gameboard'], null);
  firstFrame.appendChild(firstGameboard);
  gameBoardContainer.appendChild(firstFrame);

  const firstGameboardTitle = createHtmlElement('div', `first-title`, ['gameboard-title'], `${playerOne.playerName}'s Board`);
  firstFrame.appendChild(firstGameboardTitle);

  for (let i = 1; i <= 100; i++) {
    const square = createHtmlElement('div', i, [`${playerOne.playerName}square`], null);
    firstGameboard.appendChild(square);
  }

  const secondFrame = createHtmlElement('div', `${playerOne.playerName}frame`, ['frame'], null);

  const secondGameboard = createHtmlElement('div', `${playerTwo.playerName}Gameboard`, ['gameboard'], null);
  secondFrame.appendChild(secondGameboard);
  gameBoardContainer.appendChild(secondFrame);

  const secondGameboardTitle = createHtmlElement('div', `second-title`, ['gameboard-title'], `${playerTwo.playerName}'s Board`);
  secondFrame.appendChild(secondGameboardTitle);
  
  const container = document.querySelector('.container');
  const whosTurn = createHtmlElement('div','title-turn',['turn']);
  whosTurn.textContent=`${playerOne.playerName}'s turn !`
  container.appendChild(whosTurn)


  let playerOneTurn  = true;
  for (let i = 1; i <= 100; i++) {
    const square = createHtmlElement('div', i, [`${playerTwo.playerName}square`], null);
    square.addEventListener('click', (e) => {
      if (!e.target.classList.contains('clicked') && !isGameOver(playerOne, playerTwo)) {

        if (playerOneTurn){
        whosTurn.textContent=`${playerTwo.playerName}'s turn !`
        e.target.classList.add('clicked');
        playRound(playerTwo, Number(e.target.id));   
        isGameOver(playerOne, playerTwo);

        playerOneTurn=false;

         setTimeout((()=>{
          whosTurn.textContent=`${playerOne.playerName}'s turn !`
          computerRound(playerOne);
          isGameOver(playerOne, playerTwo);
          playerOneTurn=true

        }),800)

      }
       
        
        
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
      square.style.backgroundColor = '#4d4d4d';
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
  const squares = document.querySelectorAll(`.${player.playerName}square`);
  squares.forEach((square) => {
    if (player.getHitArray().includes(Number(square.id))) {
      square.setAttribute('style', 'background-color: #353434;'); 

      const logo = createHtmlElement("img","explosion",['logo'],null)
      logo.src=target;

      if (!square.firstChild)
      square.appendChild(logo)
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

      
      square.setAttribute('style', 'background-color: #d41515;'); 

      square.firstChild.src=explosion;

      if (!square.firstChild.src===target){ 
      square.appendChild(logo)
      
    }


    }
  });
};

const grayOutBtn = (player)=>{     
  player.getShipArray().forEach(ship=>{
  const usedBtn = document.querySelector(`#${ship.name}`);
  usedBtn.style.color='#343434'

})}

const highLightBtn = (btName,playerOne)=>{
  if(playerOne.getShipArray().length===4){

  const btn = document.querySelector(`#${btName}`);
  btn.style.color="whitesmoke"

  }
}

const isGameOver = (playerOne, playerTwo) => {
  const gameOverScreen = createHtmlElement('div','overlay',['overlay'],null);
  if (playerOne.hasLost()) {
    gameOverScreen.textContent=`${playerTwo.playerName} Destroyed your ships, You Lose !`;
    gameOverScreen.style.color='rgb(226, 7, 7)';
    window.document.body.appendChild(gameOverScreen)
    gameOverScreen.style.display="flex";
    return true;
  }
  else if (playerTwo.hasLost()) {
    console.log(gameOverScreen)
    gameOverScreen.textContent=`${playerOne.playerName} Destroyed the Computer's ships, You Win !`;
    window.document.body.appendChild(gameOverScreen);
    gameOverScreen.style.color='#2345da';
    gameOverScreen.style.display="flex";
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

export {renderWelcomePage };
