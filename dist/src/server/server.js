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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// import { connectToDatabase } from "../config/db";
const game_1 = require("../logic/game");
const gameRouter_1 = __importDefault(require("../routes/gameRouter"));
class Server {
    constructor() {
        // No need
        // connectToDatabase();
    }
    server() {
        return __awaiter(this, void 0, void 0, function* () {
            const app = express_1.default();
            const controller = new game_1.GameController();
            // middleware
            app.use(express_1.default.json());
            app.use(express_1.default.urlencoded({ extended: true }));
            app.use(cors_1.default({ origin: "*" }));
            // routes
            app.use("/engine", new gameRouter_1.default(controller).routes);
            // define a route handler for the default home page
            app.get("/", (req, res) => {
                res.send("Working!");
            });
            return app;
        });
    }
}
exports.default = new Server();
//# sourceMappingURL=server.js.map