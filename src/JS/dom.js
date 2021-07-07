import {createHtmlElement} from './createHtmlElement'

const renderBoards = () =>{
    const firstGameboard = document.querySelector("#playerGameboard");
    for (let i = 1; i <= 100; i++) {
        const square = createHtmlElement("div",i,['square'],null);
        firstGameboard.appendChild(square);
 }

 const secondGameboard = document.querySelector("#computerGameboard");
 for (let i = 1; i <= 100; i++) {
    const square = createHtmlElement("div",i,['square'],null);
    secondGameboard.appendChild(square);
}

}


  const displayShips = (player) =>{   
      const squares = document.querySelectorAll(".square")

      const displayArray = [];
      player.getShipArray().forEach(ship=>{
          displayArray.push(...ship.shipCoordinates)
      })

     squares.forEach(square=>{
        if(displayArray.includes(Number(square.id))){
            square.textContent = "Ship"
        }
      }) 
    }
 
    export {displayShips,renderBoards}

