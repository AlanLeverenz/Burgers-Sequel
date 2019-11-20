var db = require("../models");

// redirect route loads all burgers and customers
module.exports = function(app) {

    app.get('/', function(req,res){
      db.Customer.findAll({}).then(function(customer_data) {
        console.log(customer_data);
        db.Burger.findAll({}).then(function(burger_data) {
          console.log(burger_data);
          res.render('index',{
            customer_data, burger_data});
        });
      });
    });

  // add a burger
  app.post("/burgers/create", function(req, res) {
    console.log(req.body)
    db.Burger.create(req.body).then(function() {
      res.redirect('/');
    });
  });

  // add a customer
  app.post("/customers/create", function(req, res) {
    console.log(req.body)
    db.Customer.create(req.body).then(function() {
      res.redirect('/');
    });
  });

  // update a burger with CustomerId
  app.post("/burgers/update", function(req, res) {
  console.log(req.body);
  
  const condition = {
    where : {
    id : req.body.id
    }
  };

  db.Burger.update({
    CustomerId : req.body.CustomerId,
    devoured : 1
  }, condition)
  .then(function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.redirect('/');
      }
    });
  });
}



