import { createGameboard } from "./gameboard"

const createPayer = (playerName) =>{
    const playerBoard = createGameboard();

    const hasLost = () => {
        if ( playerBoard.isGamelost() ){
            return true
        }
        else return false
    }
    return {playerBoard, playerName, hasLost}

}