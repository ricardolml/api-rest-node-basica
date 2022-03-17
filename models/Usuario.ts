import { DataTypes } from 'sequelize';
import db from '../db/connection';


const Usuario = db.define('oficina_virtual',
    {
        curp: {
            type: DataTypes.STRING
        },
        rfc: {
            type: DataTypes.STRING
        },
        paterno: {
            type: DataTypes.STRING
        },
        materno: {
            type: DataTypes.STRING
        },
        nombre: {
            type: DataTypes.STRING
        },
        correo: {
            type: DataTypes.STRING
        },
        municipio: {
            type: DataTypes.STRING
        },
        direccion: {
            type: DataTypes.STRING
        },
        telefono: {
            type: DataTypes.STRING
        },
        imagen: {
            type: DataTypes.STRING
        },
        estatus: {
            type: DataTypes.BOOLEAN
        },
        calle: {
            type: DataTypes.STRING,
        },
        codigo_postal: {
            type: DataTypes.STRING
        },
        fechaRegistro: {
            type: DataTypes.DATEONLY
        },
        sub_grupo: {
            type: DataTypes.INTEGER
        },
    },
    {
        freezeTableName: true,
        // tableName: 'oficina_virtual',
        // If don't want createdAt
        timestamps: false,
        createdAt: false,

        // If don't want updatedAt
        updatedAt: false,
    }
);

export default Usuario;