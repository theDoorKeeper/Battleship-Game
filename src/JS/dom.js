import {createHtmlElement} from './createHtmlElement'

const renderBoards = (player) =>{

    const firstGameboard = document.querySelector("#playerGameboard");
    for (let i = 1; i <= 100; i++) {
        const square = createHtmlElement("div",i,[`${player.playerName}square`],null);
        firstGameboard.appendChild(square);
        }


 const secondGameboard = document.querySelector("#computerGameboard");
 for (let i = 1; i <= 100; i++) {
    const square = createHtmlElement("div",i,['computersquare'],null);
    secondGameboard.appendChild(square);
}

}


  const displayShips = (player) =>{   
      const squares = document.querySelectorAll(`.${player.playerName}square`)
      const displayArray=[];
      player.getShipArray().forEach(ship=>{
          displayArray.push(...ship.shipCoordinates)
      })

     squares.forEach(square=>{
        if(displayArray.includes(Number(square.id))){
            square.textContent = "Ship"
        }
      }) 
    }


    const attack = (player,coordinates) =>{
        player.receiveAttack(coordinates);
        const squares = document.querySelectorAll(`.${player.playerName}square`);
        squares.forEach(square=>{
            if(player.getHitArray().includes(Number(square.id))){
                square.setAttribute("style", "background-color: red;")
            }
          }) 
        }
 
    export {displayShips,renderBoards,attack}

