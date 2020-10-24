import mysql from 'promise-mysql';

// Importacion de datos para la creacion de conexion a base de datos
import keys from './keys';

/// Conexion a base de datos
const pool = mysql.createPool(keys.database);

pool.getConnection()
    .then(connection =>{
        pool.releaseConnection(connection);
        console.log('DB is connected');
    });

export default pool;