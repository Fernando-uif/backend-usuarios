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
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield connection_1.default.query("SELECT * FROM users");
    res.json(rows);
});
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { rows } = yield connection_1.default.query(`SELECT * FROM users WHERE user_id = ${id}`);
        res.json(rows);
    }
    catch (error) {
        res.status(400).json({
            error,
        });
    }
});
exports.getUsuario = getUsuario;
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    console.log(body);
    const { user_name, last_name, password, birthday, email, genre, phone, address, } = body;
    try {
        yield connection_1.default.query(`
    INSERT INTO users (user_name,last_name,email,password,phone,address,birthday,genre)VALUES (
      '${user_name}',
      '${last_name}',
      '${email}',
      '${password}',
      '${phone}',
      '${address}',
      '${birthday}',
      '${genre}'
    )`);
        res.json({
            msg: "The user is saved",
            body,
        });
    }
    catch (error) {
        res.status(400).json({
            msg: "It was not possible save the user, try again",
            error,
        });
    }
});
exports.postUsuario = postUsuario;
const putUsuario = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    connection_1.default.query(`UPDATE users SET ${body} = `);
    res.json({
        msg: "postUsuario",
        body,
        id,
    });
};
exports.putUsuario = putUsuario;
const deleteUsuario = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: "deleteUsuario",
        body,
        id,
    });
};
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuarios.js.map