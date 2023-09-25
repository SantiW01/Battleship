const Player = (name, shipsPositions, life) => {
  const SetName = (playerName) => {
    name = playerName;
  };
  const GetName = () => name;
  const SetShipsPosition = (shipPosition) => {
    shipsPositions = shipPosition;
  };
  const GetShipsPosition = () => shipsPositions;
  const SetPlayerLife = (playerLife) => (life = playerLife);
  const GetPlayerLife = () => life;
  return {
    GetName,
    SetName,
    SetShipsPosition,
    GetShipsPosition,
    SetPlayerLife,
    GetPlayerLife,
  };
};

module.exports = Player;
