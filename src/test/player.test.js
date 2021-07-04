import { createPlayer } from "../JS/player";

test('sinking a single ship when shipArray contains only one', () => {
    const testPlayer = createPlayer("tester")
    testPlayer.playerBoard.placeShip("submarine",22)
    testPlayer.playerBoard.receiveAttack(22);
    testPlayer.playerBoard.receiveAttack(23);

    expect( testPlayer.hasLost() ).toBe( true );
  });
