import { createGameboard } from "./gameboard"

const createPlayer = (playerName) =>{
    const playerBoard = createGameboard();

    const hasLost = () => {
        if ( playerBoard.isGameLost() ){
            return true
        }
        else return false
    }
   


    const receiveAttack = (hitCoordinates)=>{
        playerBoard.receiveAttack(hitCoordinates)
    }
     return {playerName, hasLost}
}

export {createPlayer}