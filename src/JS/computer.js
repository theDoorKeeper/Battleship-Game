import { getRandomNumber } from "../Helper functions/getRandomNumber";

    const coordinateArray = []

    const getComputerCoordinate = ()=>{
    
    let number = getRandomNumber();
    if (coordinateArray.includes(number)){
        getComputerCoordinate();
    }
    else {
        coordinateArray.push(number);
        return number
    }
    
    
    }

    export {getComputerCoordinate}