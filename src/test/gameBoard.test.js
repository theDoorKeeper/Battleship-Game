import { createGameboard } from "../JS/gameboard";



test('works with 0 coordinate', () => {
  const testingGameboard = createGameboard();
  testingGameboard.placeShip("submarine",0)
  testingGameboard.receiveAttack(0);
  testingGameboard.receiveAttack(1);
  expect( testingGameboard.getHitArray() ).toEqual( [0,1] );
});




test('sinking a single ship when shipArray contains only one', () => {
    const testingGameboard = createGameboard();
    testingGameboard.placeShip("submarine",22)
    testingGameboard.receiveAttack(22);
    testingGameboard.receiveAttack(23);

    expect( testingGameboard.isGameLost() ).toBe( true );
  });


test('sinking a single ship when shipArray contains multipleOnes', () => {
  const testingGameboard = createGameboard();
  testingGameboard.placeShip("submarine",22);
  testingGameboard.placeShip("battleship",10);
  testingGameboard.receiveAttack(22);
  testingGameboard.receiveAttack(23);

  expect( testingGameboard.isGameLost() ).toBe( false );
});

test('sinking all the  ships when shipArray contains multipleOnes', () => {
  const testingGameboard = createGameboard();
  testingGameboard.placeShip("submarine",22);
  testingGameboard.placeShip("battleship",10);
  testingGameboard.receiveAttack(22);
  testingGameboard.receiveAttack(23);
  testingGameboard.receiveAttack(10);
  testingGameboard.receiveAttack(11);
  testingGameboard.receiveAttack(12);
  testingGameboard.receiveAttack(13);
  testingGameboard.receiveAttack(14);
  testingGameboard.receiveAttack(15);


  expect( testingGameboard.isGameLost() ).toBe( true );
});

test('missing shots correctly display', () => {
  const testingGameboard = createGameboard();
  testingGameboard.placeShip("battleship",10);
  testingGameboard.receiveAttack(22);
  testingGameboard.receiveAttack(23);
  testingGameboard.receiveAttack(10);


  expect( testingGameboard.missArray ).toEqual( [22,23] );
});
test('getHitArray returns the correct information', () => {
  const testingGameboard = createGameboard();
  testingGameboard.placeShip("submarine",22);
  testingGameboard.placeShip("battleship",10);
  testingGameboard.receiveAttack(22);
  testingGameboard.receiveAttack(23);
  testingGameboard.receiveAttack(10);
  testingGameboard.receiveAttack(11);
  testingGameboard.receiveAttack(12);
  testingGameboard.receiveAttack(13);
  testingGameboard.receiveAttack(14);
  testingGameboard.receiveAttack(18);
  testingGameboard.receiveAttack(15);


  expect( testingGameboard.getHitArray() ).toEqual( [22,23,10,11,12,13,14,15] );
});