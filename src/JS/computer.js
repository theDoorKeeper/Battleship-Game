/* eslint-disable consistent-return */
import { getRandomNumber } from '../Helper functions/utilities';

const coordinateArray = [];

const getComputerCoordinate = () => {
  const number = getRandomNumber();
  if (coordinateArray.includes(number)) {
    getComputerCoordinate();
  } else {
    coordinateArray.push(number);
    return number;
  }
};

export default getComputerCoordinate;
