/* eslint-disable no-plusplus */
const getRandomNumber = () => Math.floor(Math.random() * (100 - 1 + 1)) + 1;

// eslint-disable-next-line consistent-return
const getLength = (name) => {
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

const getCoordinates = (coordinate, length) => {
  const coordinateArray = [];
  const lastCoordinate = coordinate + length;

  if (coordinate >= 1 && lastCoordinate <= 11) {
    for (let i = 0; i < length; i++) {
      coordinateArray.push(coordinate + i);
    }
  } else if (coordinate > 10 && lastCoordinate <= 21) {
    for (let i = 0; i < length; i++) {
      coordinateArray.push(coordinate + i);
    }
  } else if (coordinate > 20 && lastCoordinate <= 31) {
    for (let i = 0; i < length; i++) {
      coordinateArray.push(coordinate + i);
    }
  } else if (coordinate > 30 && lastCoordinate <= 41) {
    for (let i = 0; i < length; i++) {
      coordinateArray.push(coordinate + i);
    }
  } else if (coordinate > 40 && lastCoordinate <= 51) {
    for (let i = 0; i < length; i++) {
      coordinateArray.push(coordinate + i);
    }
  } else if (coordinate > 50 && lastCoordinate <= 61) {
    for (let i = 0; i < length; i++) {
      coordinateArray.push(coordinate + i);
    }
  } else if (coordinate > 60 && lastCoordinate <= 71) {
    for (let i = 0; i < length; i++) {
      coordinateArray.push(coordinate + i);
    }
  } else if (coordinate > 70 && lastCoordinate <= 81) {
    for (let i = 0; i < length; i++) {
      coordinateArray.push(coordinate + i);
    }
  } else if (coordinate > 80 && lastCoordinate <= 91) {
    for (let i = 0; i < length; i++) {
      coordinateArray.push(coordinate + i);
    }
  } else if (coordinate > 90 && lastCoordinate <= 101) {
    for (let i = 0; i < length; i++) {
      coordinateArray.push(coordinate + i);
    }
  } else if (lastCoordinate > 100) {
    for (let i = 0; i < length; i++) {
      coordinateArray.push(coordinate - i);
    }
  } else {
    for (let i = 0; i < length; i++) {
      coordinateArray.push(coordinate - i);
    }
  }

  return coordinateArray;
};

export { getCoordinates, getLength, getRandomNumber };
