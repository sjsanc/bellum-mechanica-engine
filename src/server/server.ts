import express from "express";
import cors from "cors";
import { Application } from "express";
// import { connectToDatabase } from "../config/db";

import { GameController } from "../logic/game";
import GameRouter from "../routes/gameRouter";

export interface ServerInterface {
  server(): Promise<Application>;
}

class Server implements ServerInterface {
  constructor() {
    // No need
    // connectToDatabase();
  }

  async server(): Promise<express.Application> {
    const app = express();

    const controller = new GameController();

    // middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors({ origin: "*" }));

    // routes
    app.use("/engine", new GameRouter(controller).routes);

    // define a route handler for the default home page
    app.get("/", (req, res) => {
      res.send("Working!");
    });

    return app;
  }
}

export default new Server();
