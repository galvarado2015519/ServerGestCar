"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const fs_1 = __importDefault(require("fs"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const carsRoutes_1 = __importDefault(require("./routes/carsRoutes"));
// Configuraciones de express
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/cars', carsRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log("El servidor esta corriendo en el puerto ", this.app.get('port'));
            fs_1.default.readFile('../Readme.md', 'utf8', function (err, data) {
                if (err) {
                    console.log(err);
                }
                else if (data) {
                    console.log(data);
                }
            });
        });
    }
}
const server = new Server();
server.start();
