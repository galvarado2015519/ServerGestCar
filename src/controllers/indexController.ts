import {Request, Response} from 'express';

//Archivo de pruebas
class IndexController {

    index (req: Request, res: Response){
        res.json({text: 'se pueden acceder a los carros por la ruta /cars'})
    }
}

export const indexController = new IndexController();