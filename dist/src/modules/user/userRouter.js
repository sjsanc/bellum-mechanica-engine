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
const express_1 = require("express");
const userService_1 = __importDefault(require("./services/userService"));
const router = express_1.Router();
class UserRouter {
    get routes() {
        router.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
            // eslint-disable-next-line no-useless-catch
            try {
                const quote = yield userService_1.default.getRandomTest();
                return res.send(quote);
            }
            catch (err) {
                throw err;
            }
        }));
        return router;
    }
}
exports.default = new UserRouter();
//# sourceMappingURL=userRouter.js.map