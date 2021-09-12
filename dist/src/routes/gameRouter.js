"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const uuid_1 = require("uuid");
const defaultConfig_1 = require("../data/defaultConfig");
// Init router
const router = express_1.Router();
class GameRouter {
    constructor(controller) {
        this.controller = controller;
    }
    get routes() {
        router.post("/createGame", (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = uuid_1.v4();
            const config = req.body;
            console.log(config);
            if (config == {})
                console.log("empty");
            this.controller
                .createGame(id, config !== {} ? config : defaultConfig_1.DEFAULT_CONFIG)
                .then(() => {
                res.send(id);
            })
                .catch((error) => {
                res.send(error);
            });
        }));
        router.get("/getGames", (req, res) => __awaiter(this, void 0, void 0, function* () {
            const output = [];
            for (const [key, value] of this.controller.getGames().entries()) {
                output.push({ key });
            }
            res.send(JSON.stringify(output));
        }));
        return router;
    }
}
exports.default = GameRouter;
//# sourceMappingURL=gameRouter.js.map