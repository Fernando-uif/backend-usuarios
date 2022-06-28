"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: "postgres",
    host: "localhost",
    password: process.env.DBPASSWORD || '@fGch8MbuU9G',
    database: "rick_and_morty",
});
exports.default = pool;
//# sourceMappingURL=connection.js.map