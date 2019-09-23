import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

//archivos de rutas
import indexRouter from './routes/indexRouter';
import tiendaRouter from './routes/tiendaRouter';
import userRouter from './routes/userRouter';
import pagosRouter from './routes/pagosRouter';

//definimos las clases del servidor, lo que nos permitira iniciar el servidor, 
class Server{
    
    public app: Application;

    constructor(){ //inicializara express
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void{//podrar configurar el metodo app
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev')); //la verificacion y respuesta del servidor y tiempo y peticion del cliente
        this.app.use(cors()); //pedir datos al servidor
        this.app.use(express.json()); //puede aceptar formatos json
        this.app.use(express.urlencoded({extended: false})) //si se desee enviar un correo desde un formulario html.
    }

    routes():void{ //configuramos la rutas de la app
        this.app.use('/',indexRouter);
        this.app.use('/api/tienda', tiendaRouter);
        this.app.use('/api/user',userRouter);
        this.app.use('/api/pagos', pagosRouter)
    }

    start(): void{//inicializa el servidor es decir para ejecutar app.listen
        this.app.listen(this.app.get('port'), ()=>{
            console.log('server on port', this.app.get('port'));
        })//para que se quede escuchando
    }
}
const server = new Server();
server.start();