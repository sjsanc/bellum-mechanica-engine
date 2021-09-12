import { Router } from "express";
import { GameController } from "src/logic/game";
import { Errors } from "../types/enums";
import { IRouter } from "./types";
import { v4 as uuid } from "uuid";
import { DEFAULT_CONFIG } from "../data/defaultConfig";

// Init router
const router = Router();

class GameRouter implements IRouter {
  private controller: GameController;
  constructor(controller: GameController) {
    this.controller = controller;
  }

  get routes() {
    router.post("/createGame", async (req, res) => {
      const id = uuid();
      const config = req.body;
      console.log(config);
      if (config == {}) console.log("empty");

      this.controller
        .createGame(id, config !== {} ? config : DEFAULT_CONFIG)
        .then(() => {
          res.send(id);
        })
        .catch((error) => {
          res.send(error);
        });
    });

    router.get("/getGames", async (req, res) => {
      const output = [];
      for (const [key, value] of this.controller.getGames().entries()) {
        output.push({ key });
      }
      res.send(JSON.stringify(output));
    });

    return router;
  }
}

export default GameRouter;
