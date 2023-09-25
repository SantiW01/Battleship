const Gameboard = require("../Model/Gameboard");
const Player = require("../Model/Player");
const Ship = require("../Model/Ship");
test("Getter and Setter of player's name", () => {
  const newPlayer = Player();
  newPlayer.SetName("Santiago");
  expect(newPlayer.GetName()).toBe("Santiago");
});

test("Getter and Setter of player's life", () => {
  const newPlayer = Player();
  newPlayer.SetPlayerLife(6);
  expect(newPlayer.GetPlayerLife()).toBe(6);
});

test("Getter and Setter of player's ships position", () => {
  const newPlayer = Player();
  const ship1 = Ship(3, 0, true);
  const newGameboard = Gameboard();
  ship1.SetShipPosition(["A", 1]);
  newGameboard.SetCoordinates(
    ship1.GetLength(),
    ship1.GetShipPosition(),
    ship1.GetIsVertical()
  );
  const finalShip1Position = newGameboard.PlaceShip(ship1.GetShipPosition());
  ship1.SetShipPosition(finalShip1Position);
  newPlayer.SetShipsPosition(ship1.GetShipPosition());
  const ship2 = Ship(5, 0, false);
  ship2.SetShipPosition(["E", 4]);
  newGameboard.SetCoordinates(
    ship2.GetLength(),
    ship2.GetShipPosition(),
    ship2.GetIsVertical()
  );
  const finalShip2Position = newGameboard.PlaceShip(ship1.GetShipPosition());
  ship2.SetShipPosition(finalShip2Position);

  newPlayer.SetShipsPosition(ship2.GetShipPosition());
  expect(newPlayer.GetShipsPosition()).toStrictEqual([
    ["A", 1, true],
    ["A", 2, true],
    ["A", 3, true],
    ["A", 4, true],
    ["A", 5, true],
    ["B", 1, true],
    ["C", 1, true],
    ["E", 4, true],
  ]);
});
