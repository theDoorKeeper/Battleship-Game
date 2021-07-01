import { createShip } from "../JS/ship";


test('Works with single index arrays', () => {
    const coordinates = [25];
    const name = "submarine" ;
    const length = 1;
    const submarine = createShip(name,length,coordinates);
    submarine.hit(25);
    expect( submarine.isSunk() ).toBe( true );
  });

  test('Works with single index arrays', () => {
    const coordinates = [28];
    const name = "submarine" ;
    const length = 1;
    const submarine = createShip(name,length,coordinates);
    submarine.hit(25);
    expect( submarine.isSunk() ).toBe( false );
  });


  