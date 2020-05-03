
  exports.up = knex =>
  knex.schema.createTable("newcustomer", tbl => {
    tbl.increments();
    
    tbl.text('email').notNullable();
   
    tbl.text("password").notNullable();
   

  });

exports.down = knex => knex.schema.dropTableIfExists("newcustomer");
  


