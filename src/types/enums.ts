export enum ItemTypes {
  MELEE,
  RANGED,
  UTILITY,
}

export enum Direction {
  NORTH,
  EAST,
  SOUTH,
  WEST,
  NORTHEAST,
  NORTHWEST,
  SOUTHEAST,
  SOUTHWEST,
}

export enum GamePhases {
  PRELOADING,
  EXECUTING,
  WAITING_FOR_PLAYERS,
  FINISHED,
}

export enum EntityTypes {
  ACTION,
  ITEM,
  ARMOUR,
  BOT,
}

export enum Errors {
  INVALID_COMMAND = "The command object contained an invalid instruction",
  INVALID_ENTITY_NAME = "Unable to find an entity with the name: ",
  INVALID_MOVE = "",
  INVALID_GAME_CONFIG = "The supplied config was invalid",
  INVALID_PLAYER_CONFIG = "",
  INVALID_GAME_ID = "",
  INVALID_VALIDATION_REQUEST = "The object supplied for validation does not have an object type specified",
  PRELIGHT_CHECKS_FAILED = "Game could not start",
}

export enum APIObjectTypes {
  COMMAND,
  STATE,
}
