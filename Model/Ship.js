const Ship = (length, timesHit) => {
  const GetLength = () => length;
  const GetTimesHit = () => timesHit;
  const BeingHit = (hit) => {
    if (hit) return timesHit++;
  };
  const IsSunk = () => {
    if (GetTimesHit() == GetLength()) return true;
  };
  return { GetLength, GetTimesHit, IsSunk, BeingHit };
};

module.exports = Ship;
