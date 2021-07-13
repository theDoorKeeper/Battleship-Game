const getCoordinates = (coordinate, length) =>{
    let coordinateArray =[];

    if ( coordinate+length > 100 || coordinate+length > 90 || coordinate+length > 80 || coordinate+length > 70 || coordinate+length > 60 ||
         coordinate+length > 50 ||oordinate+length > 40 || coordinate+length > 30 || coordinate+length > 20 || coordinate+length > 10 ){

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