import { Errors } from "./../types/enums";
import Joi from "joi";
import {
  Coord,
  GameConfig,
  GameEvent,
  GameID,
  IBot,
  IGame,
  NewGameConfig,
  Player,
  PlayerCommand,
  Tile,
} from "@bellum-mechanica/types";
import { configSchema } from "./validators";
import { ErrorResponse } from "../helpers/responses";

export class Game implements IGame {
  id: GameID;
  dimensions: Coord;
  obstacles: number;
  players: Player[] = [];
  bots: Map<string, IBot> = new Map();
  tiles: Map<Coord, Tile> = new Map();
  log: Array<GameEvent> = [];
  commands: PlayerCommand[];

  constructor(uuid: GameID) {
    this.id = uuid;
  }
}

export class GameController {
  private activeGames: Map<GameID, IGame> = new Map();

  public createGame(id: string, config?: NewGameConfig): Promise<true | ErrorResponse> {
    const validConfig = configSchema.validate(config);

    if (validConfig.error) {
      return Promise.reject(new ErrorResponse(Errors.INVALID_GAME_CONFIG, validConfig.error));
    } else {
      this.activeGames.set(id, new Game(id));
      return Promise.resolve(true);
    }
  }

  public getGames() {
    return this.activeGames;
  }
}
