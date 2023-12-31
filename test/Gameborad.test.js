const Gameboard = require("../Model/Gameboard");
const Ship = require("../Model/Ship");
test("Create gameboard", () => {
  const newGameboard = Gameboard();
  expect(newGameboard).toEqual({
    GetPositions: expect.any(Function),
    SetCoordinates: expect.any(Function),
    PlaceShip: expect.any(Function),
    AttackReceived: expect.any(Function),
  });
});

test("Gameboard should have 100 positions", () => {
  const newGameboard = Gameboard();
  const countElements = newGameboard.GetPositions().length;
  expect(countElements).toEqual(100);
});

test("ship must be placed into positions selected", () => {
  const newShip = Ship(3, 0, false, []);
  const newGameboard = Gameboard();
  newGameboard.SetCoordinates(
    newShip.GetLength(),
    ["A", 1],
    newShip.GetIsVertical()
  );
  const finalPosition = newGameboard.PlaceShip(newShip.GetShipPosition());
  expect(finalPosition).toEqual([
    ["A", 1, true],
    ["A", 2, true],
    ["A", 3, true],
  ]);
});

test("ship must be placed into positions selected", () => {
  const newShip = Ship(3, 0, true, []);
  const newGameboard = Gameboard();
  newGameboard.SetCoordinates(
    newShip.GetLength(),
    ["A", 1],
    newShip.GetIsVertical()
  );
  const finalPosition = newGameboard.PlaceShip(newShip.GetShipPosition());
  newShip.SetShipPosition(finalPosition);
  expect(newShip.GetShipPosition()).toEqual([
    ["A", 1, true],
    ["B", 1, true],
    ["C", 1, true],
  ]);
});

test("Position selected must be taken of from array", () => {
  const newGameboard = Gameboard();
  newGameboard.SetCoordinates(3, ["A", 0], false);
  newGameboard.PlaceShip([]);
  newGameboard.AttackReceived(["A", 1]);
  expect(newGameboard.GetPositions()).not.toContain(["A", 1]);
});
