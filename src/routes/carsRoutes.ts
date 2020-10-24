import { Router } from 'express'; 

import carsController from '../controllers/carController';

class CarsRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', carsController.list);
        this.router.get('/:id', carsController.getOne);        
        this.router.post('/', carsController.create);
        this.router.put('/:id', carsController.update);
        this.router.delete('/:id', carsController.delete);
    }
}

const carsRoutes = new CarsRoutes();
export default carsRoutes.router;