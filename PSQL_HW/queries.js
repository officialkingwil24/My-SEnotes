const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'postgres',
  port: 5432,
})
const psql = (request, response) => {
  pool.query('SELECT * FROM psql ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getPsqlById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM psql WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createPsql = (request, response) => {
  const { name, email } = request.body

  pool.query('INSERT INTO psql (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Psql added with ID: ${result.insertId}`)
  })
}

const updatePsql = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, email } = request.body

  pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3',
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Psql modified with ID: ${id}`)
    }
  )
}

const deletePsql = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM psql WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Psql deleted with ID: ${id}`)
  })
}

module.exports = {
  getPsql,
  getPsqlById,
  createPsql,
  updatePsql,
  deletePsql,
}