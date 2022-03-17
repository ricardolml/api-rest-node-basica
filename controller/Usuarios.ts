import { Request , Response } from 'express'
import Usuario from '../models/Usuario';

export const getUsuarios = async( req: Request , res: Response ) => {

    const usuarios = await Usuario.findAll();
    
    res.json({usuarios});
}

export const getUsuario = async ( req: Request , res: Response ) => {

    const { id } = req.params;

    const usuario = await Usuario.findByPk(id);

    if( usuario ){
        res.json(usuario);
    }else{
        res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        });
    }

}

export const postUsuario = ( req: Request , res: Response ) => {

    const { body } = req;

    res.json({
        msg : 'postUser',
        body
    });
}

export const putUsuario = ( req: Request , res: Response ) => {

    const { id } = req.params;
    const { body } = req;

    res.json({
        msg : 'putUser',
        body,
        id
    });
}

export const deleteUsuario = ( req: Request , res: Response ) => {

    const { id } = req.params;

    res.json({
        msg : 'deleteUsuario',
        id
    });
}