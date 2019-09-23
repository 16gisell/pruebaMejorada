import {Request, Response} from 'express';
import pool from '../database';

class PagosController{

//listar una consulta de la base de datos
    public async Pagos(req: Request, res: Response){//para listar todos
       const pago = await pool.query('SELECT * FROM relacion')
       res.json(pago)
    }
//listar por individual 
    public async lispagos(req:Request, res:Response): Promise<any>{//para listar por uno
        const{id} = req.params;
        const pago = await pool.query('SELECT * FROM relacion WHERE id = ?', [id]);
        if(pago.length>0){
            return res.json(pago[0]);
        }
        res.status(404).json({text:"no existe"});
    }

//inserta en la base de datos.
    public async create(req:Request, res:Response): Promise<void>{//para crear
        //console.log(req.body);// para ejecutarlo desde el posman 
        await pool.query('INSERT INTO relacion set ?', [req.body]); //esto es el inserto y consulta con la base de datos
        res.json({message: 'guardado'});
    }

//actualizamos 
    public async updated(req:Request, res:Response): Promise<void> {//para actualizar
        const {id}= req.params;
        await pool.query('UPDATE relacion set ? WHERE id = ?', [req.body, id]);
        res.json({text: 'actualizando'});

    }

//eliminamos elementos o datos de la base de datos    
    public async delete(req:Request, res:Response): Promise<void>{//para eliminar
        const {id}= req.params;
       await pool.query('DELETE FROM relacion WHERE id = ?', [id]);
        res.json({text: 'eliminando'})
    }
}

const pagosController = new PagosController();
export default pagosController;