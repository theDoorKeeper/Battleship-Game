import { createHtmlElement } from "./createHtmlElement";

const renderBoards = () =>{
    const gameboard = document.querySelector(".gameboard");
    for (let i = 1; i <= 100; i++) {
        const square = createHtmlElement("div",`square${i}`,['square'],null);
        gameboard.appendChild(square);
 }

}
export {renderBoards}