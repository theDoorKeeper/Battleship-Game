import { createGameboard } from "./gameboard"

const createPlayer = (playerName) =>{
    const playerBoard = createGameboard();

    const getMissArray =()=>{
        return playerBoard.missArray
    }

    const getShipArray =()=>{
        return playerBoard.shipArray
    }

    const hasLost = () => {
        if ( playerBoard.isGameLost() ){
            return true
        }
        else return false
    }
   
    const receiveAttack = (hitCoordinates)=>{
        playerBoard.receiveAttack(hitCoordinates)
    }
    const getHitArray = ()=>{
        return playerBoard.getHitArray()
    }


    const placeShip = (name,coordinates)=>{
        playerBoard.placeShip(name,coordinates)
    }


     return {playerName, hasLost, placeShip, receiveAttack, getMissArray, getShipArray, getHitArray()}
}

export {createPlayer}