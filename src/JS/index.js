import { attack, displayShips, renderBoards } from "./dom";
import { createPlayer } from "./player";




const game = () =>{
    const human = createPlayer(prompt("choose a name"));
    const computer = createPlayer("computer");
    renderBoards(human,computer);
    human.placeShip("submarine",12);
    human.placeShip("battleship",20);
    computer.placeShip("sumbarine",60);
    computer.placeShip("battleship",80);
    displayShips(human);
/*     attack(human,12);
    attack(computer,80) */
  /*   displayShips(); */
}
game();
