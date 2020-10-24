import {Request, Response} from 'express';

// Instancia a la base de datos
import pool from '../database';

class CarsController {

    //CRACION DE CRUD EN API REST POR MEDIO DE TYPESCRIPT

    public async list (req: Request, res: Response){
        const cars = await pool.query('SELECT * FROM cars ')
        res.json(cars);
    }

    public async getOne(req: Request, res: Response):Promise<any>{
        const { id } = req.params;
        const cars =  await pool.query('SELECT * FROM cars WHERE id = ?', [id])
        if(cars.length >0){
            return res.json(cars[0]);
        }
        res.status(404).json({text:"El carro no existe"})
    }

    public async create (req: Request, res: Response): Promise<void>{
        if(req.body.brand.trim() != '' && req.body.model.trim() != '' && req.body.licensePlate.trim() != '' && req.body.state.trim() != ''){
            await pool.query('INSERT INTO cars set ?', [req.body]);
            res.json({message: "Carro creado"});
        }else{
            res.json({err: "Ingrese todos los datos"});
        }

    }
    
    public async update (req: Request, res: Response):Promise<void>{
        const { id } = req.params;
        const cars = await pool.query('UPDATE cars set ? WHERE id = ?', [req.body, id]);
        res.json({message: 'El Carro se ha actualizado'});
    }

    public async delete (req: Request, res: Response):Promise<void>{
        const { id } = req.params;
        const cars = await pool.query('DELETE FROM cars WHERE id = ?',[id]);
        res.json({message: 'El carro fue eliminado'})
    }

}

const carsController = new CarsController();
export default carsController;