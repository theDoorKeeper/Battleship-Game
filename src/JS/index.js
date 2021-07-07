import { displayShips, renderBoards } from "./dom";
import { createPlayer } from "./player";


renderBoards();

const game = () =>{
    const human = createPlayer("human");
    const computer = createPlayer("computer");
    human.placeShip("submarine",12);
    human.placeShip("battleship",20);
    computer.placeShip("sumbarine",60);
    computer.placeShip("battleship",80);
    displayShips(human);
}
game();
