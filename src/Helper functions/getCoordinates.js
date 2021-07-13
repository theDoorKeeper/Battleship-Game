const getCoordinates = (coordinate, length) =>{
    let coordinateArray =[];

    if ( coordinate+length > 100 ){
        for (let i = 0; i < length; i++) {                  
            coordinateArray.push(coordinate - i)
        }

    }
    else {
        for (let i = 0; i < length; i++) {                  
            coordinateArray.push(coordinate + i)
        }

    }
    return coordinateArray
}

export {getCoordinates}