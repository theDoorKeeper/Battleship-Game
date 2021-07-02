import { createGameboard } from "../JS/gameboard";


test('Works with single index arrays (hit)', () => {
    const coordinates = [25];
    const name = "submarine" ;
    const testingGameboard = createGameboard();
    testingGameboard.placeShip("submarine",22)
    testingGameboard.receiveAttack(22);
    testingGameboard.receiveAttack(23);

    expect( testingGameboard.isGameLost() ).toBe( true );
  });
