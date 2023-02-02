const { Client } = require('pg');

async function getConection () {

    
    const client = new Client({
        host: 'localhost',
        port: 5432,
        user: 'omar',
        password: 'omar',
        database: 'cocina'
    });
    await client.connect();
    return client
}

module.exports= getConection;