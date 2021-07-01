import { createShip } from "../JS/ship";


test('Works with single index arrays (hit)', () => {
    const coordinates = [25];
    const name = "submarine" ;
    const length = 1;
    const submarine = createShip(name,length,coordinates);
    submarine.hit(25);
    expect( submarine.isSunk() ).toBe( true );
  });

  test('Works with single index arrays (miss) ', () => {
    const coordinates = [28];
    const name = "submarine" ;
    const length = 1;
    const submarine = createShip(name,length,coordinates);
    submarine.hit(25);
    expect( submarine.isSunk() ).toBe( false );
  });

  test('Works with multiple index arrays (hit)', () => {
    const coordinates = [25,24,23];
    const name = "submarine" ;
    const length = 1;
    const submarine = createShip(name,length,coordinates);
    submarine.hit(23);
    expect( submarine.isSunk() ).toBe( true );
  });

  test('Works with multiple index arrays (miss)', () => {
    const coordinates = [25,24,23];
    const name = "submarine" ;
    const length = 1;
    const submarine = createShip(name,length,coordinates);
    submarine.hit(29);
    expect( submarine.isSunk() ).toBe( false );
  });

  