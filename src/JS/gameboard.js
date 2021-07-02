import { createShip } from "./ship"

const createGameboard = () => {
    const shipArray =[];

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

    
}