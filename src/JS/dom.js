import {createHtmlElement} from './createHtmlElement'

const renderBoards = (playerOne,playerTwo) =>{

    const firstGameboard = document.querySelector("#playerGameboard");
    for (let i = 1; i <= 100; i++) {
        const square = createHtmlElement("div",i,[`${playerOne.playerName}square`],null);
        firstGameboard.appendChild(square);
        }


 const secondGameboard = document.querySelector("#computerGameboard");
 for (let i = 1; i <= 100; i++) {
    const square = createHtmlElement("div",i,[`${playerTwo.playerName}square`],null);
    square.addEventListener("click",e => {
        if( !e.target.classList.contains("clicked" ) && !isGameOver(playerOne,playerTwo)){
          playRound(playerTwo,Number(e.target.id));
            e.target.classList.add("clicked");
            isGameOver(playerOne, playerTwo)
        }
               
    })
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
        console.log(player.playerName,coordinates)
        const squares = document.querySelectorAll(`.${player.playerName}square`);
        squares.forEach(square=>{
            if(player.getHitArray().includes(Number(square.id))){
                square.setAttribute("style", "background-color: red;")
            }
          }) 
        }

       const displayMissArray = (squares,player) =>{
                squares.forEach(square=>{
                    if(player.getMissArray().includes(Number(square.id))){
                        square.textContent="X"
                    }
                  }) 
            }

            const displaySunkShips = (squares,player) =>{
                const sunkArray=[];
                player.getShipArray().forEach(ship=>{
                    if(ship.isSunk()){
                      sunkArray.push(...ship.shipCoordinates)
                    }
                })
                squares.forEach(square=>{
                    if (sunkArray.includes(Number(square.id))){
                        square.textContent="SUNK"
                    }
                })
              
            }
            const isGameOver = (playerOne, playerTwo)=>{
                    if (playerOne.hasLost()){
                        alert(`${playerOne.playerName} has won  !`)
                        return true
                    }
                    else if (playerTwo.hasLost()){
                        alert(`${playerTwo.playerName} has won !`);
                        return true
                    }
                    else {
                       return false     
                    }
                    
            }
            const playRound = (playerTwo, coordinates) =>{
                const squares = document.querySelectorAll(`.${playerTwo.playerName}square`);
                attack(playerTwo,coordinates)
                displayMissArray(squares,playerTwo);
                displaySunkShips(squares,playerTwo);
                
            }



 
    export {displayShips,renderBoards}

