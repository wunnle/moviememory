const express =require ('express')
const router = express.Router()
const Newcustomer = require('../db/newcustomer')
const bcrypt = require('bcrypt')

router.get('/', (req, res) => {
    res.json({
        message:'lock'
    });
});

const validUser = (user) => {

    const validEmail = typeof user.email == 'string' && user.email.trim() != ''; 
    const validPassword = typeof user.password =='string' && user.password.trim() != '' && user.password.trim().length >= 8;

    return validEmail && validPassword
}

router.post('/signup', (req,res,next) => {
    if(validUser(req.body)){
        Newcustomer
        .getOneByEmail(req.body.email)
        .then(newcustomer => {
            console.log('newcustomer', newcustomer );
            if(!newcustomer){      
                    bcrypt.hash(req.body.password,10)
                    .then((hash) => {
                        const newcustomer = {
                            email: req.body.email,
                            password:hash
                        };
                        Newcustomer
                        .create(newcustomer)
                        .then(id=>{                         
                            res.json({
                                id,
                                message:'😀'                              
                            })
                        })                      
                    });         
            } else{ 
           next(new Error('Email in use!'))
        }   
        });
    }
    else{
    next(new Error('Invalid user!'));       
    }
})

router.post('/login', (req,res,next) => {
if(validUser(req.body)){
    Newcustomer
    .getOneByEmail(req.body.email)
    .then(newcustomer => {
        console.log('newcustomer', newcustomer)
        if(newcustomer){
            bcrypt.compare(req.body.password, newcustomer.password)
            .then((result) => {
                if(result){
                    const isSecure = req.app.get('env') != 'development';
                    res.cookie('newcustomer_id', newcustomer.id,{                      
                        httpOnly:true,
                        secure: isSecure,
                        signed:true
                    })
                    res.json({                           
                    message:'Logged in!'
                        })
                } else{
                    next(new Error('Invalid login!'))
                }
            });
        }else{
            next(new Error('Invalid login!'))
        }
    });
}else{
    next(new Error('Invalid login!'))
}
})

module.exports = router