 const createShip = (name, length, coordinates) => {

    const hitArray = [];

        const hit = (hitCoordinates) => {
            coordinates.forEach(shipSquare => {
                if (shipSquare === hitCoordinates){
                    hitArray.push(hitCoordinates);
                    return hitArray
                }
            });
        }

        const isSunk = ()=>{
            if(hitArray.length===length){
                return true
            }
            return false

        }
        
        return {name, hit, isSunk}

}

export {createShip}