"use strict";
//Uncomment the code in this file to see typeorm in work
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
const logger_1 = require("../../../helpers/logger");
// import { User } from "../../../models/entities/Users";
// import { EntityManager, getManager } from "typeorm";
class UserService {
    // private manager: EntityManager;
    // constructor() {
    //     this.manager = getManager();
    // }
    getRandomTest() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // const user = new User();
                // user.firstName = "Test"
                // this.manager.save(user);
                logger_1.logger.info("success");
                return "it works";
            }
            catch (error) {
                logger_1.logger.error(error);
                return error;
            }
        });
    }
}
exports.default = new UserService();
//# sourceMappingURL=userService.js.map