const knex = require('./connection');


module.exports = {
    getOneByEmail: function (email) {
        return knex('newcustomer').where('email', email).first();
    },
    create: function(newcustomer){
        return knex('newcustomer').insert(newcustomer,'id').then(ids=>{
            return ids[0];
        })
    }
}