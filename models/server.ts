import express, { Application } from 'express';
import userRoutes from '../routes/usuario';
import cors from 'cors'
import db from '../db/connection';

class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios : '/api/usuarios'
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';

        this.dbConnection();
        
        //metodos iniciales
        this.middlewares();
        this.routes();
    }

    async dbConnection(){
        try {
            
            await db.authenticate();

            console.log('db online');

        } catch (error: any) {
            throw new Error(error);
        }
    }

    middlewares(){
        //Cors
        this.app.use( cors() );

        //Lectura body
        this.app.use( express.json() );

        //carpeta publica
        this.app.use( express.static('public') );

    }
    routes(){
        this.app.use( this.apiPaths.usuarios, userRoutes );
    }

    listen(){
        this.app.listen( this.port , () => {
            console.log('server run in ' + this.port);
        } );
    }
}

export default Server;