"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
//Archivo de pruebas
class IndexController {
    index(req, res) {
        res.json({ text: 'se pueden acceder a los carros por la ruta /cars' });
    }
}
exports.indexController = new IndexController();
