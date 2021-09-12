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
const environment_1 = require("./config/environment");
const server_1 = __importDefault(require("./server/server"));
const logger_1 = require("./helpers/logger");
/**
 * Setuping environment variables
 */
environment_1.Environment.setup();
require("reflect-metadata");
const config_1 = require("./config/config");
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = yield server_1.default.server();
        app.listen(config_1.config.SERVER_PORT, () => {
            console.log(`Listening on port ${config_1.config.SERVER_PORT} in ${config_1.config.NODE_ENV} mode`);
            logger_1.logger.info(`Listening on port ${config_1.config.SERVER_PORT} in ${config_1.config.NODE_ENV} mode`);
        });
    });
}
startServer();
process.on("uncaughtException", (e) => {
    console.log(e);
    process.exit(1);
});
process.on("unhandledRejection", (e) => {
    console.log(e);
    process.exit(1);
});
//# sourceMappingURL=index.js.map