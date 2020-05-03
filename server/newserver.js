const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 5000;
const db = require('./db')
var cors = require('cors')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors())

// app.post("/createcustomers", async (req, res) => {
  //   try {
 //     console.log(req.body);
 //     const { name, surname, username, password } = req.body;
  //    const newCustomer = await db.query(
  //      'INSERT INTO "Customers" (name,surname,username,password) VALUES ($1, $2, $3, $4 ) RETURNING *',
  //      [name, surname, username, password]
  //    );
  
   //   res.json(newCustomer.rows[0]);
//    } catch (err) {
 //     console.error(err.message);
 //   }
 // });



  const createcustomers = (name, surname, username, password) =>{
      const query = `INSERT INTO "Customers" (name,surname,username,password) VALUES ($1, $2, $3, $4 ) RETURNING *`
      return db.one(query, [name,surname, username, password])
  }




app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


module.exports = { createcustomers } 
