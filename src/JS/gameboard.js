import { createShip } from "./ship"

const createGameboard = () => {
    const shipArray = [];
    const missArray = [];

    const placeShip = (name,coordinates) => {
        if (name === "submarine"){
          const ship = createShip(name,2,coordinates);
          shipArray.push(ship);  
        }
        else if (name === "battleship"){
          const ship = createShip(name,8,coordinates);
          shipArray.push(ship)
        }
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

 isGameLost = () => {
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

    return {isGameLost,receiveAttack,placeShip,missArray}
}

export{createGameboard}