"use strict";
/**
 * Setup the winston logger.
 *
 * Documentation: https://github.com/winstonjs/winston
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = require("winston");
exports.logger = winston_1.createLogger({
    level: 'info',
    format: winston_1.format.json(),
    transports: [
        //
        // - Write to all logs with level `info` and below to `combined.log` 
        // - Write all logs error (and below) to `error.log`.
        //
        new winston_1.transports.File({ filename: 'error.log', level: 'error' }),
        new winston_1.transports.File({ filename: 'combined.log' })
    ]
});
//# sourceMappingURL=logger.js.map