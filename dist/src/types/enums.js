"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIObjectTypes = exports.Errors = exports.EntityTypes = exports.GamePhases = exports.Direction = exports.ItemTypes = void 0;
var ItemTypes;
(function (ItemTypes) {
    ItemTypes[ItemTypes["MELEE"] = 0] = "MELEE";
    ItemTypes[ItemTypes["RANGED"] = 1] = "RANGED";
    ItemTypes[ItemTypes["UTILITY"] = 2] = "UTILITY";
})(ItemTypes = exports.ItemTypes || (exports.ItemTypes = {}));
var Direction;
(function (Direction) {
    Direction[Direction["NORTH"] = 0] = "NORTH";
    Direction[Direction["EAST"] = 1] = "EAST";
    Direction[Direction["SOUTH"] = 2] = "SOUTH";
    Direction[Direction["WEST"] = 3] = "WEST";
    Direction[Direction["NORTHEAST"] = 4] = "NORTHEAST";
    Direction[Direction["NORTHWEST"] = 5] = "NORTHWEST";
    Direction[Direction["SOUTHEAST"] = 6] = "SOUTHEAST";
    Direction[Direction["SOUTHWEST"] = 7] = "SOUTHWEST";
})(Direction = exports.Direction || (exports.Direction = {}));
var GamePhases;
(function (GamePhases) {
    GamePhases[GamePhases["PRELOADING"] = 0] = "PRELOADING";
    GamePhases[GamePhases["EXECUTING"] = 1] = "EXECUTING";
    GamePhases[GamePhases["WAITING_FOR_PLAYERS"] = 2] = "WAITING_FOR_PLAYERS";
    GamePhases[GamePhases["FINISHED"] = 3] = "FINISHED";
})(GamePhases = exports.GamePhases || (exports.GamePhases = {}));
var EntityTypes;
(function (EntityTypes) {
    EntityTypes[EntityTypes["ACTION"] = 0] = "ACTION";
    EntityTypes[EntityTypes["ITEM"] = 1] = "ITEM";
    EntityTypes[EntityTypes["ARMOUR"] = 2] = "ARMOUR";
    EntityTypes[EntityTypes["BOT"] = 3] = "BOT";
})(EntityTypes = exports.EntityTypes || (exports.EntityTypes = {}));
var Errors;
(function (Errors) {
    Errors["INVALID_COMMAND"] = "The command object contained an invalid instruction";
    Errors["INVALID_ENTITY_NAME"] = "Unable to find an entity with the name: ";
    Errors["INVALID_MOVE"] = "";
    Errors["INVALID_GAME_CONFIG"] = "The supplied config was invalid";
    Errors["INVALID_PLAYER_CONFIG"] = "";
    Errors["INVALID_GAME_ID"] = "";
    Errors["INVALID_VALIDATION_REQUEST"] = "The object supplied for validation does not have an object type specified";
    Errors["PRELIGHT_CHECKS_FAILED"] = "Game could not start";
})(Errors = exports.Errors || (exports.Errors = {}));
var APIObjectTypes;
(function (APIObjectTypes) {
    APIObjectTypes[APIObjectTypes["COMMAND"] = 0] = "COMMAND";
    APIObjectTypes[APIObjectTypes["STATE"] = 1] = "STATE";
})(APIObjectTypes = exports.APIObjectTypes || (exports.APIObjectTypes = {}));
//# sourceMappingURL=enums.js.map