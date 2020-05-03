const db = require('./db')

const getCustomers = (request, response) => {
  db.query('SELECT * FROM "public"."Customers" ORDER BY "id"', (error, result) => {
    if (error) {
      return response.status(500).json({
        message: error.message,
      })
    }
    // response.status(200).json(result.rows) same as below
    response.json(result.rows)
  })
}

const createcustomers = (name, surname, username, password) =>{
  const query = `INSERT INTO "Customers" (name,surname,username,password) VALUES ($1, $2, $3, $4 ) RETURNING *`
  return db.one(query, [name,surname, username, password])
}


const updateCustomers = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, surname, username, password } = request.body
  db.query(
    `UPDATE "public"."Customers" SET "name" = 'Berk', "surname" = 'Çapar', "username" = 'berkcapar', "password" = 'berk123' WHERE id = '3'`,
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID:` + id);
    })
}

const deleteCustomers = (request, response) => {

  const id = parseInt(request.params.id)

  db.query(`DELETE FROM "public"."Customers" WHERE id = '13'`,(error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID:` + id);
  })
}

module.exports = {
  getCustomers,
  createcustomers,
  updateCustomers,
  deleteCustomers,
}
