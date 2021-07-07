import { createHtmlElement } from "./createHtmlElement";

const renderBoards = () =>{
    const firstGameboard = document.querySelector("#playerGameboard");
    for (let i = 1; i <= 100; i++) {
        const square = createHtmlElement("div",`square${i}`,['square'],null);
        firstGameboard.appendChild(square);
 }

 const secondGameboard = document.querySelector("#computerGameboard");
 for (let i = 1; i <= 100; i++) {
    const square = createHtmlElement("div",`square${i}`,['square'],null);
    secondGameboard.appendChild(square);
}

}
export {renderBoards}