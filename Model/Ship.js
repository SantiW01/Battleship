const Ship = (length, timesHit, isVertical, shipPosition) => {
  const GetShipPosition = () => shipPosition;
  const GetIsVertical = () => isVertical;
  const GetLength = () => length;
  const GetTimesHit = () => timesHit;
  const BeingHit = (hit) => {
    if (hit) return timesHit++;
  };
  const IsSunk = () => {
    if (GetTimesHit() == GetLength()) return true;
  };
  return {
    GetLength,
    GetTimesHit,
    GetIsVertical,
    GetShipPosition,
    IsSunk,
    BeingHit,
  };
};

module.exports = Ship;
