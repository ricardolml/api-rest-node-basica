import { Sequelize } from 'sequelize';

const db = new Sequelize('db', 'user', 'password', {
    host: 'ip',
    dialect: 'mssql',
    // logging: false
});

export default db;