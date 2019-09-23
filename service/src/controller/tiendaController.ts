import {Request, Response} from 'express';
import pool from '../database';

class TiendaController{

//listar una consulta de la base de datos
    public async tienda(req: Request, res: Response){//para listar todos
       const tienda = await pool.query('SELECT * FROM tienda')
       res.json(tienda)
    }
//listar por individual 
    public async listienda(req:Request, res:Response): Promise<any>{//para listar por uno
        const{id} = req.params;
        const tienda = await pool.query('SELECT * FROM tienda WHERE id = ?', [id]);
        if(tienda.length>0){
            return res.json(tienda[0]);
        }
        res.status(404).json({text:"no existe"});
    }

//inserta en la base de datos.
    public async create(req:Request, res:Response): Promise<void>{//para crear
        //console.log(req.body);// para ejecutarlo desde el posman 
        await pool.query('INSERT INTO tienda set ?', [req.body]); //esto es el inserto y consulta con la base de datos
        res.json({message: 'guardado'});
    }

//actualizamos 
    public async updated(req:Request, res:Response): Promise<void> {//para actualizar
        const {id}= req.params;
        await pool.query('UPDATE tienda set ? WHERE id = ?', [req.body, id]);
        res.json({text: 'actualizando'});

    }

//eliminamos elementos o datos de la base de datos    
    public async delete(req:Request, res:Response): Promise<void>{//para eliminar
        const {id}= req.params;
       await pool.query('DELETE FROM tienda WHERE id = ?', [id]);
        res.json({text: 'eliminando'})
    }
}

const tiendaController = new TiendaController();
export default tiendaController;