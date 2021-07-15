import { getCoordinates } from "../Helper functions/getCoordinates";
import { getLength } from "../Helper functions/getLength";
import { createShip } from "./ship"

const createGameboard = () => {
    const shipArray = [];
    const missArray = [];

    const placeShip = (name,coordinate) => {
          const length = getLength(name);
          const coordinateArray = getCoordinates(coordinate, length)
          const ship = createShip(name,length,coordinateArray);
          shipArray.push(ship);  
}

const receiveAttack = (hitCoordinates) =>{
    let miss = true;
 
     shipArray.forEach(ship=>{
         if (ship.shipCoordinates.includes(hitCoordinates)){
             ship.hit(hitCoordinates);
            miss=false;
         }
     })
 
     if (miss){
         missArray.push(hitCoordinates)
     }      
      
 }

 const getHitArray = ()=>{
    const hitArray = [];
     shipArray.forEach(ship=>{
         hitArray.push(...ship.hitArray)
     })
     return hitArray
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

    return {isGameLost,receiveAttack,placeShip,missArray,shipArray,getHitArray}
}

export{createGameboard}