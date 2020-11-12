const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'defjam',
    password: 'postgres',
    port: 5432,
})

const getStreetfighter = (request, response) => {
    pool.query('SELECT * FROM streetfighter', (error, results) => {
        if(error){
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getStreetfighterById = (request, response) => {
    const id = parseInt(request.params.id);   
    pool.query('SELECT * FROM streetfighter WHERE id = $1, [id]', (error, results) =>{
        if(error){
            throw error;
        }
        response.status(200).json(results.rows)
    });
}

const createStreetfighter = (request, response) => {
    const {name, nickname, power, health, mobility, techniques, range, occupation, style, skill} = request.body;

    pool.query('INSERT INTO Streetfighter (name, skill) VALUES ($1, $2) RETURNING *', [name, skill], (error, results) =>{
        if(error){
            throw error;
        }
        response.status(200).send(`Streetfighter added with name: ${name}, skill: ${skill}`);
    })
}

module.exports = {
    getStreetfighter,
    getStreetfighterById,
    createStreetfighter
}