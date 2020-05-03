const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 5000;
const queries = require('./queries')
var cors = require('cors')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors())

app.get('/customers', queries.getCustomers);
app.post('/createcustomers', queries.createcustomers);
app.post('/updatecustomers', queries.updateCustomers);
app.post('/deletecustomers', queries.deleteCustomers);


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

