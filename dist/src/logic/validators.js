"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configSchema = exports.teamSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const customJoi = joi_1.default.extend((joi) => {
    return {
        type: "tuple",
        base: joi.array(),
        messages: {
            "tuple.length": "{{#label}} must be a tuple pair",
            "tuple.type": "{{#label}} must be a Javascript array",
        },
        validate(value, helpers) {
            if (!Array.isArray(value)) {
                return { value, errors: helpers.error("tuple.type") };
            }
            if (value.length !== 2) {
                return { value, errors: helpers.error("tuple.length") };
            }
        },
    };
});
exports.teamSchema = joi_1.default.array().items(joi_1.default.object().keys({
    name: joi_1.default.string().required(),
    entityType: joi_1.default.string().required(),
    primaryItem: joi_1.default.string().required(),
    secondaryItem: joi_1.default.string(),
    outfit: joi_1.default.string(),
    initialLocation: customJoi.tuple(),
}));
exports.configSchema = joi_1.default.object().keys({
    xAxis: joi_1.default.number().required(),
    yAxis: joi_1.default.number().required(),
    obstacles: joi_1.default.number().required(),
    playerName: joi_1.default.string().required(),
    playerEndpoint: joi_1.default.string().uri().required(),
    teamConfiguration: exports.teamSchema,
});
//# sourceMappingURL=validators.js.map