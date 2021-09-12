"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameController = exports.Game = void 0;
const enums_1 = require("./../types/enums");
const validators_1 = require("./validators");
const responses_1 = require("../helpers/responses");
class Game {
    constructor(uuid) {
        this.players = [];
        this.bots = new Map();
        this.tiles = new Map();
        this.log = [];
        this.id = uuid;
    }
}
exports.Game = Game;
class GameController {
    constructor() {
        this.activeGames = new Map();
    }
    createGame(id, config) {
        const validConfig = validators_1.configSchema.validate(config);
        if (validConfig.error) {
            return Promise.reject(new responses_1.ErrorResponse(enums_1.Errors.INVALID_GAME_CONFIG, validConfig.error));
        }
        else {
            this.activeGames.set(id, new Game(id));
            return Promise.resolve(true);
        }
    }
    getGames() {
        return this.activeGames;
    }
}
exports.GameController = GameController;
//# sourceMappingURL=game.js.map