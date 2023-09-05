const Gameboard = () => {
  const positions = [
    ["A", 1, false],
    ["A", 2, false],
    ["B", 1, false],
    ["B", 2, false],
    ["C", 1, false],
    ["C", 2, false],
  ];
  const GetPositions = () => positions;
  const SetCoordinates = (positionChosen) => {
    positions.map((value) => {
      if (!value.includes(positionChosen)) return false;
    });
  };
  const PlaceShip = () => {};
  return { GetPositions, SetCoordinates, PlaceShip };
};

const newGameboard = Gameboard();
newGameboard.SetCoordinates([
  ["A", 1],
  ["B", 1],
  ["C", 1],
]);
//newGameboard.SetCoordinates([['A', 2], ['B', 2], ['C', 2]]);
