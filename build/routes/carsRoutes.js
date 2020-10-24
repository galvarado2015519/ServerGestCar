"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carController_1 = __importDefault(require("../controllers/carController"));
class CarsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', carController_1.default.list);
        this.router.get('/:id', carController_1.default.getOne);
        this.router.post('/', carController_1.default.create);
        this.router.put('/:id', carController_1.default.update);
        this.router.delete('/:id', carController_1.default.delete);
    }
}
const carsRoutes = new CarsRoutes();
exports.default = carsRoutes.router;
