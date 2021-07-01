const createShip = (name, length, coordinates) => {

    const hitArray = [];

        const hit = (hitCoordinates) => {
            coordinates.forEach(element => {
                if (element===hitCoordinates){
                    hitArray.push(hitCoordinates)
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