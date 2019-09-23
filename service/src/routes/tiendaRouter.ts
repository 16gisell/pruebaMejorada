import {Router} from 'express'; //definir un enrutador
import TiendaController from '../controller/tiendaController';

class TiendaRouter{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', TiendaController.tienda);
        this.router.get('/:id',TiendaController.listienda); 
        this.router.post('/',TiendaController.create);
        this.router.put('/:id',TiendaController.updated);
        this.router.delete('/:id',TiendaController.delete);
    }

}
const tiendaRouter = new TiendaRouter();
export default tiendaRouter.router;