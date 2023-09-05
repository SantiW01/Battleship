const Ship = require("../Model/Ship");

test("Create ship", () => {
  const newShip = Ship(3, 0);
  expect(newShip).toEqual({
    BeingHit: expect.any(Function),
    GetLength: expect.any(Function),
    GetTimesHit: expect.any(Function),
    GetShipPosition: expect.any(Function),
    GetIsVertical: expect.any(Function),
    IsSunk: expect.any(Function),
  });
});

test("Return ship's length", () => {
  const newShip = Ship(3, 0, false);
  const length = newShip.GetLength();
  expect(length).toBe(3);
});

test("Return total times ship has been hit", () => {
  const newShip = Ship(3, 0, false);
  const timesHit = newShip.GetTimesHit();
  expect(timesHit).toBe(0);
});

test("Total times the has been hit must equal 1", () => {
  const newShip = Ship(3, 0, false);
  newShip.BeingHit(true);
  const timesHit = newShip.GetTimesHit();
  expect(timesHit).toBe(1);
});

test("Ship must sunk if total hits equal ship's length", () => {
  const newShip = Ship(3, 0, false);
  newShip.BeingHit(true);
  newShip.BeingHit(true);
  newShip.BeingHit(true);
  expect(newShip.IsSunk()).toBe(true);
});
