const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'ai',
  password: '1',
  port: 5432,
});

const getUsers = (request, response) => {
    //pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    pool.query('SELECT * FROM usuarios', (error, results) => {
      if (error) {
        return response.status(400).json("Please check the API request for errors")
      }
      return response.status(200).json(results.rows)
    })
}

const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
  
    //pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    pool.query('SELECT * FROM usuarios WHERE id_usuario = $1', [id], (error, results) => {
      if ((error)||(results.rowCount==0)) {
        return response.status(400).json("Please check the API request for errors")
      }
      return response.status(200).json(results.rows)
    })
}

const createUser = (request, response) => {
    //const { name, email } = request.body
    const { nombre_usuario,usuario_usuario, clave_usuario } = request.body
  
    //pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
    pool.query('INSERT INTO usuario (nombre_usuario,usuario_usuario,clave_usuario) VALUES ($1, $2,$3)', [nombre_usuario,usuario_usuario,clave_usuario], (error, results) => {
      if (error) {
        return response.status(400).json("Please check the API request for errors")
      }
      return response.status(201).json(`User added successfully`)
    })
}

const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { nombre_usuario, usuario_usuario,clave_usuario } = request.body
    console.log(request.body,nombre_usuario, usuario_usuario,clave_usuario)
  
    pool.query(
      'UPDATE usuarios SET nombre_usuario = $1, usuario_usuario = $2,clave_usuario=$3 WHERE id_usuario = $4',
      [nombre_usuario,usuario_usuario,clave_usuario,id],
      (error, results) => {
        if (error) {
            console.log(error)
            return response.status(400).json("Please check the API request for errors")
        }
        return response.status(200).json(`User modified with ID: ${id}`)

      }
    )
}

const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM usuarios WHERE id_usuario = $1', [id], (error, results) => {
      if ((error)||(results.rowCount==0)) {
        return response.status(400).json("Please check the API request for errors")
      }
      return response.status(200).json(`User deleted with ID: ${id}`)
    })
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}


