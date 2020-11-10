const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'defjam',
    password: 'postgres',
    port: 5432,
})

const getDefjam = (request, response) => {
    pool.query('SELECT * FROM defjam', (error, results) => {
        if(error){
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getDefjamById = (request, response) => {
    const id = parseInt(request.params.id);   
    pool.query('SELECT * FROM defjam WHERE id = $1, [id]', (error, results) =>{
        if(error){
            throw error;
        }
        response.status(200).json(results.rows)
    });
}

const createDefjam = (request, response) => {
    const {name, skill} = request.body;

    pool.query('INSERT INTO defjam (name, skill) VALUES ($1, $2) RETURNING *', [name, skill], (error, results) =>{
        if(error){
            throw error;
        }
        response.status(200).send(`Defjam added with name: ${name}, skill: ${skill}`);
    })
}

module.exports = {
    getDefjam,
    getDefjamById,
    createDefjam
}