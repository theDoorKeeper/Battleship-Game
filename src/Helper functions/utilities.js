const getRandomNumber = ()=>{
    return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
};

const getLength = (name) =>{
    if (name === "submarine"){
        return 2
    }
    else if (name === "carrier"){
        return 6
    }
    else if (name === "battleship"){
      return 4
  }
  else if (name === "cruiser"){
    return 3
}
};

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
  };

  export {getCoordinates,getLength,getRandomNumber}

