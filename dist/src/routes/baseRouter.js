"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRouter_1 = __importDefault(require("./user/userRouter"));
// Init router
const router = express_1.Router();
class BaseRouter {
    // eslint-disable-line
    get routes() {
        router.use("/users", userRouter_1.default.routes);
        return router;
    }
}
exports.default = new BaseRouter();
//# sourceMappingURL=baseRouter.js.map