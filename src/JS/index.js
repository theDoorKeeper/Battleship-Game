import {displayShips, renderBoards, renderStartingPage } from "./dom";
import { createPlayer } from "./player";




const game = () =>{
/*     const human = createPlayer(prompt("choose a name"));
    const computer = createPlayer("computer"); */
    renderBoards(human,computer);
    human.placeShip("submarine",12);
    human.placeShip("battleship",20);
    computer.placeShip("submarine",60);
    computer.placeShip("battleship",80);
   /*  displayShips(human); */
}


const human = createPlayer(prompt("choose a name"));
const computer = createPlayer("computer");
renderStartingPage(human,computer);
computer.placeShip("submarine",60);
computer.placeShip("battleship",80);