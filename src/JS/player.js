import { createGameboard } from "./gameboard"

const createPayer = (playerName) =>{
    let playerBoard = createGameboard();

    return {playerBoard, playerName}

}