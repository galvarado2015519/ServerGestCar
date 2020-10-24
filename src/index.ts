import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import fs from 'fs';

import indexRoutes from './routes/indexRoutes';
import carsRoutes from './routes/carsRoutes';


// Configuraciones de express
class Server {

    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void{
        this.app.use(indexRoutes);
        this.app.use('/cars', carsRoutes);
    }

    start(): void{
        this.app.listen(this.app.get('port'), ()=>{
            console.log("El servidor esta corriendo en el puerto ", this.app.get('port'));
            fs.readFile('../Readme.md','utf8', function (err, data) {
                if(err){
                    console.log(err);
                }else if(data){
                    console.log(data);
                }
            });
        });
    }
}

const server = new Server();
server.start();