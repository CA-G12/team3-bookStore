const { Pool } = require('pg');
require('dotenv').config();

let ssl;
let DATABASE_URL;

if(process.env.NODE_ENV === 'development'){
    DATABASE_URL = process.env.DB_DEVELOPMENT
}else if(process.env.NODE_ENV === 'production'){
    DATABASE_URL = process.env.DB_PRODUCTION
}else if(process.env.NODE_ENV === 'testing'){
    DATABASE_URL = process.env.DB_TESTING
}else{
    throw new Error('GO TO HELL');
}

const connection = new Pool({
    connectionString: DATABASE_URL,
    ssl,
});

module.exports = connection;