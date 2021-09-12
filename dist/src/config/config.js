"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv = __importStar(require("dotenv"));
dotenv.config();
exports.config = {
    SERVER_PORT: process.env.PORT || '',
    NODE_ENV: process.env.NODE_ENV || '',
    DB_HOST: process.env.DB_HOST || '',
    DB_USERNAME: process.env.DB_USERNAME || '',
    DB_PASSWORD: process.env.DB_PASSWORD || '',
    DB_NAME: process.env.DB_NAME || '',
    DB_PORT: process.env.DB_PORT
        ? Number(process.env.DB_PORT)
        : 3306,
    TYPEORM_CONNECTION: 'mysql',
    TYPEORM_DEBUG_MODE: process.env.TYPEORM_DEBUG_MODE ? JSON.parse(process.env.TYPEORM_DEBUG_MODE) : false
};
//# sourceMappingURL=config.js.map