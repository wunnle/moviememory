const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 5000;
const queries = require('./queries')
const cookieParser = require('cookie-parser')
const cors = require('cors')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(cookieParser('keyboard_cat'));

const auth = require('./auth/index')

app.use('/auth', auth)

//app.get('/customers', queries.getCustomers);
//app.post('/createcustomers', queries.createcustomers);
//app.post('/updatecustomers', queries.updateCustomers);
//app.post('/deletecustomers', queries.deleteCustomers);



// error handler

app.use(function(err, req, res, next) {
  
    // render the error page
    res.status(err.status || 500);

    res.json({
        message:err.message,
        error: req.app.get('env') === 'development' ? err : {}
    });
    
  });


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

