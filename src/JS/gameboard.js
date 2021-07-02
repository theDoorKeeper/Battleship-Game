import { createShip } from "./ship"

const createGameboard = () => {
    const shipArray = [];
    const missArray = [];

    const placeShip = (name,coordinate) => {
        if (name === "submarine"){
            const  length = 2;
            const coordinateArray = getCoordinates(coordinate, length)
          const ship = createShip(name,length,coordinateArray);
          shipArray.push(ship);  
        }
        else if (name === "battleship"){
          const  length = 6;
          const coordinateArray = getCoordinates(coordinate, length)
          const ship = createShip(name,length,coordinateArray);
          shipArray.push(ship)
        }
}

const getCoordinates = (coordinate, length) =>{
    let coordinateArray =[];

    if (coordinate+length > 100){

        for (let i = 0; i < length; i--) {                  
            coordinateArray.push(coordinate + i)
        }

    }
    else {
        for (let i = 0; i < length; i++) {                  
            coordinateArray.push(coordinate + i)
        }

    }
    return coordinateArray
}

const receiveAttack = (hitCoordinates) =>{
    let miss = true;
 
     shipArray.forEach(ship=>{
         if (ship.coordinates.incude(hitCoordinates)){
             ship.hit(hitCoordinates);
             let miss=false;
         }
     })
 
     if (miss){
         missArray.push(hitCoordinates)
     }      
      
 }

 const isGameLost = () => {
    const sunkArray = [];
    shipArray.forEach(ship =>{
        if(ship.isSunk() === true){
            sunkArray.push(ship);
        }
    })
    if (sunkArray.length === shipArray.length){
        return true
    }
    else {
        return false
    }
}

    return {isGameLost,receiveAttack,placeShip,missArray,shipArray}
}

export{createGameboard}