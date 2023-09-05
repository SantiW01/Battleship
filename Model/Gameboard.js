const Gameboard = () => {
  const positions = [
    ["A", 0, false],
    ["A", 1, false],
    ["A", 2, false],
    ["A", 3, false],
    ["A", 4, false],
    ["A", 5, false],
    ["A", 6, false],
    ["A", 7, false],
    ["A", 8, false],
    ["A", 9, false],
    ["B", 0, false],
    ["B", 1, false],
    ["B", 2, false],
    ["B", 3, false],
    ["B", 4, false],
    ["B", 5, false],
    ["B", 6, false],
    ["B", 7, false],
    ["B", 8, false],
    ["B", 9, false],
    ["C", 0, false],
    ["C", 1, false],
    ["C", 2, false],
    ["C", 3, false],
    ["C", 4, false],
    ["C", 5, false],
    ["C", 6, false],
    ["C", 7, false],
    ["C", 8, false],
    ["C", 9, false],
    ["D", 0, false],
    ["D", 1, false],
    ["D", 2, false],
    ["D", 3, false],
    ["D", 4, false],
    ["D", 5, false],
    ["D", 6, false],
    ["D", 7, false],
    ["D", 8, false],
    ["D", 9, false],
    ["E", 0, false],
    ["E", 1, false],
    ["E", 2, false],
    ["E", 3, false],
    ["E", 4, false],
    ["E", 5, false],
    ["E", 6, false],
    ["E", 7, false],
    ["E", 8, false],
    ["E", 9, false],
    ["F", 0, false],
    ["F", 1, false],
    ["F", 2, false],
    ["F", 3, false],
    ["F", 4, false],
    ["F", 5, false],
    ["F", 6, false],
    ["F", 7, false],
    ["F", 8, false],
    ["F", 9, false],
    ["G", 0, false],
    ["G", 1, false],
    ["G", 2, false],
    ["G", 3, false],
    ["G", 4, false],
    ["G", 5, false],
    ["G", 6, false],
    ["G", 7, false],
    ["G", 8, false],
    ["G", 9, false],
    ["H", 0, false],
    ["H", 1, false],
    ["H", 2, false],
    ["H", 3, false],
    ["H", 4, false],
    ["H", 5, false],
    ["H", 6, false],
    ["H", 7, false],
    ["H", 8, false],
    ["H", 9, false],
    ["I", 0, false],
    ["I", 1, false],
    ["I", 2, false],
    ["I", 3, false],
    ["I", 4, false],
    ["I", 5, false],
    ["I", 6, false],
    ["I", 7, false],
    ["I", 8, false],
    ["I", 9, false],
    ["J", 0, false],
    ["J", 1, false],
    ["J", 2, false],
    ["J", 3, false],
    ["J", 4, false],
    ["J", 5, false],
    ["J", 6, false],
    ["J", 7, false],
    ["J", 8, false],
    ["J", 9, false],
  ];
  const GetPositions = () => positions;
  const SetCoordinates = (shipSize, positionChosen, isVertical) => {
    let firstPosition = GetPositions().filter((value) => {
      if (!value[0].includes(positionChosen[0])) return false;
      if (!value[1].toString().includes(positionChosen[1])) return false;
      if (value[2] == true) return false;
      value[2] = true;
      return value;
    });

    GetPositions().map((value) => {
      if (!value[0].includes(firstPosition[0][0])) return false;
      if (!value[1].toString().includes(firstPosition[0][1])) return false;
      value = firstPosition;
    });
    for (let i = 0; i < positions.length; i++) {
      if (positions[i][2] == true) {
        let number = 0;
        for (let j = 0; j < shipSize; j++) {
          if (isVertical) {
            positions[i + number][2] = true;
          } else {
            positions[i + j][2] = true;
          }
          number += 10;
        }
        return;
      }
    }
  };

  const PlaceShip = (arrayShip) => {
    const shipPositions = GetPositions().filter((value) => {
      if (!value[2] == true) return false;
      return value;
    });
    arrayShip = [...shipPositions];
    return arrayShip;
  };
  return { GetPositions, SetCoordinates, PlaceShip };
};
module.exports = Gameboard;
