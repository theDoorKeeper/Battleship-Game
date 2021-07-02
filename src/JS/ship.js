 const createShip = (name, length, coordinates) => {
    const shipCoordinates = [...coordinates]
    const hitArray = [];

        const hit = (hitCoordinates) => {
            coordinates.forEach(shipSquare => {
                if (shipSquare === hitCoordinates){
                    hitArray.push(hitCoordinates);
                }
            });
        }

        const isSunk = ()=>{
            if(hitArray.length===length){
                return true
            }
            return false

        }
        
        return {name, hit, isSunk, shipCoordinates}

}

export {createShip}