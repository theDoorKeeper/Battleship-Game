import createGameboard from './gameboard';

const createPlayer = (playerName) => {
  const playerBoard = createGameboard();

  const getMissArray = () => playerBoard.missArray;

  const getShipArray = () => playerBoard.shipArray;

  const hasLost = () => {
    if (playerBoard.isGameLost()) {
      return true;
    }
    return false;
  };

  const receiveAttack = (hitCoordinates) => {
    playerBoard.receiveAttack(hitCoordinates);
  };
  const getHitArray = () => playerBoard.getHitArray();

  const placeShip = (name, coordinates) => {
    playerBoard.placeShip(name, coordinates);
  };

  return {
    playerName, hasLost, placeShip, receiveAttack, getMissArray, getShipArray, getHitArray,
  };
};

export default createPlayer;
