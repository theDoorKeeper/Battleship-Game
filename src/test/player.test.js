import { createPlayer } from "../JS/player";

test('sinking a single ship when shipArray contains only one', () => {
    const testPlayer = createPlayer("tester")
    testPlayer.placeShip("submarine",22)
    testPlayer.receiveAttack(22);
    testPlayer.receiveAttack(23);

    expect( testPlayer.hasLost() ).toBe( true );
  });


  test('sinking a single ship when shipArray contains multipleOnes', () => {
    const testPlayer = createPlayer("tester")
    testPlayer.placeShip("submarine",22);
    testPlayer.placeShip("battleship",10);
    testPlayer.receiveAttack(22);
    testPlayer.receiveAttack(23);

    expect( testPlayer.hasLost() ).toBe( false );
  });

  test('missArray dispaying coordinates of unsunked ships', () => {
    const testPlayer = createPlayer("tester")
    testPlayer.placeShip("battleship",10);
    testPlayer.receiveAttack(22);
    testPlayer.receiveAttack(23);

    expect( testPlayer.getMissArray() ).toEqual( [22,23] );
  });

  test('hitArray dispaying hit coordinates of hit ships', () => {
    const testPlayer = createPlayer("tester")
    testPlayer.placeShip("battleship",10);
    testPlayer.receiveAttack(10);
    testPlayer.receiveAttack(11);

    expect( testPlayer.getHitArray() ).toEqual( [10,11] );
  });


  test('hitArray dispaying hit coordinates of mutliple ships', () => {
    const testPlayer = createPlayer("tester")
    testPlayer.placeShip("battleship",10);
    testPlayer.placeShip("submarine",5);
    testPlayer.receiveAttack(10);
    testPlayer.receiveAttack(11);
    testPlayer.receiveAttack(5);
    testPlayer.receiveAttack(6);
    testPlayer.receiveAttack(80);

    expect( testPlayer.getHitArray() ).toEqual( [10,11,5,6] );
  });

