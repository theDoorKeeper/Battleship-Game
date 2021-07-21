import { createGameboard } from "../JS/gameboard";



test('works with (1) coordinate', () => {
  const testingGameboard = createGameboard();
  testingGameboard.placeShip("submarine",1)
  testingGameboard.receiveAttack(1);
  testingGameboard.receiveAttack(2);
  expect( testingGameboard.getHitArray() ).toEqual( [1,2] );
});

test('works with (97) coordinate', () => {
  const testingGameboard = createGameboard();
  testingGameboard.placeShip("battleship",97)
  testingGameboard.receiveAttack(100);
  testingGameboard.receiveAttack(99);
  testingGameboard.receiveAttack(98);
  testingGameboard.receiveAttack(97);

  expect( testingGameboard.getHitArray() ).toEqual( [100,99,98,97] );
});

test('works with (100) coordinate', () => {
  const testingGameboard = createGameboard();
  testingGameboard.placeShip("carrier",100)
  testingGameboard.receiveAttack(100);
  testingGameboard.receiveAttack(99);
  testingGameboard.receiveAttack(98);
  testingGameboard.receiveAttack(97);
  testingGameboard.receiveAttack(96);
  testingGameboard.receiveAttack(95);

  expect( testingGameboard.getHitArray() ).toEqual( [100,99,98,97,96,95] );
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
  testingGameboard.placeShip("battleship",11);
  testingGameboard.receiveAttack(22);
  testingGameboard.receiveAttack(23);

  expect( testingGameboard.isGameLost() ).toBe( false );
});

test('sinking all the  ships when shipArray contains multipleOnes', () => {
  const testingGameboard = createGameboard();
  testingGameboard.placeShip("submarine",22);
  testingGameboard.placeShip("battleship",11);
  testingGameboard.receiveAttack(22);
  testingGameboard.receiveAttack(23);
  testingGameboard.receiveAttack(11);
  testingGameboard.receiveAttack(12);
  testingGameboard.receiveAttack(13);
  testingGameboard.receiveAttack(14);
  testingGameboard.receiveAttack(15);
  testingGameboard.receiveAttack(16);

  expect( testingGameboard.isGameLost() ).toBe( true );
});

test('missing shots correctly display', () => {
  const testingGameboard = createGameboard();
  testingGameboard.placeShip("battleship",5);
  testingGameboard.receiveAttack(22);
  testingGameboard.receiveAttack(23);
  testingGameboard.receiveAttack(5);


  expect( testingGameboard.missArray ).toEqual( [22,23] );
});

test('getHitArray returns the correct information', () => {
  const testingGameboard = createGameboard();
  testingGameboard.placeShip("submarine",22);
  testingGameboard.placeShip("battleship",11);
  testingGameboard.receiveAttack(22);
  testingGameboard.receiveAttack(23);
  testingGameboard.receiveAttack(11);
  testingGameboard.receiveAttack(12);
  testingGameboard.receiveAttack(13);
  testingGameboard.receiveAttack(14);
  testingGameboard.receiveAttack(18);
  testingGameboard.receiveAttack(15);
  testingGameboard.receiveAttack(16);

  expect( testingGameboard.getHitArray() ).toEqual( [22,23,11,12,13,14] );
});