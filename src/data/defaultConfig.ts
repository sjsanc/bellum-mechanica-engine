import { GameConfig, NewGameConfig } from "../../../types";

export const DEFAULT_CONFIG: NewGameConfig = {
  xAxis: 10,
  yAxis: 10,
  obstacles: 4,
  playerName: "Steven",
  playerEndpoint: "http://localhost:3000",
  teamConfiguration: [
    {
      name: "Dirkie",
      entityType: "bot",
      primaryItem: "Item1",
      initialLocation: [0, 1],
    },
  ],
};
