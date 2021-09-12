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
exports.connectToDatabase = void 0;
const typeorm_1 = require("typeorm");
const config_1 = require("./config");
const logger_1 = require("../helpers/logger");
function connectToDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const connections = yield typeorm_1.createConnection({
                type: config_1.config.TYPEORM_CONNECTION,
                host: config_1.config.DB_HOST,
                port: config_1.config.DB_PORT,
                username: config_1.config.DB_USERNAME,
                password: config_1.config.DB_PASSWORD,
                database: config_1.config.DB_NAME,
                entities: [
                    __dirname + '/../models/entities/*.*'
                ],
                synchronize: true,
                logging: config_1.config.TYPEORM_DEBUG_MODE
            });
            return connections;
        }
        catch (err) {
            console.log(err);
            logger_1.logger.error(err.message);
            throw err;
        }
    });
}
exports.connectToDatabase = connectToDatabase;
//# sourceMappingURL=db.js.map