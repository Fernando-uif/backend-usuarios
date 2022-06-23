"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuarios_1 = __importDefault(require("../routes/usuarios"));
class Server {
    constructor() {
        this.apiPaths = {
            usuarios: "/api/usuarios",
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "8000";
        this.routes();
    }
    routes() {
        this.app.use(this.apiPaths.usuarios, usuarios_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map