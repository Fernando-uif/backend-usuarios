"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const animales_1 = require("../controllers/animales");
const router = (0, express_1.Router)();
router.post('/', animales_1.getAnimal);
exports.default = router;
//# sourceMappingURL=animales.js.map