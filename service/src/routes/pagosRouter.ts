import {Router} from 'express'; //definir un enrutador
import PagosController from '../controller/pagosController';

class PagosRouter{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', PagosController.Pagos);
        this.router.get('/:id',PagosController.lispagos); 
        this.router.post('/',PagosController.create);
        this.router.put('/:id',PagosController.updated); 
        this.router.delete('/:id',PagosController.delete); 
    }

}
const pagosRouter = new PagosRouter();
export default pagosRouter.router;