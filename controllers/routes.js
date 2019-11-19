var db = require("../models");

module.exports = function(app) {

    app.get('/', function(req,res){
        db.Customer.findAll(
          { 
          //   include: [{
          // model:db.Burger}]
        }
          ).then(function(customer_data) {
            console.log(customer_data);
            db.Burger.findAll({}).then(function(burger_data) {
                console.log(burger_data);
            res.render('index',{
                customer_data, burger_data});
            });
        });
    });

// UPDATE CURRENT VERSION

// 1 post a new burger (button submit)

  app.post("/burgers/create", function(req, res) {
    console.log(req.body)
    db.Burger.create(req.body).then(function(dbBurger) {
      // res.json(dbBurger);
      res.redirect('/');
    });
  });

// 2 add a new customer (button submit)

  app.post("/customers/create", function(req, res) {
    console.log(req.body)
    db.Customer.create(req.body).then(function(dbCustomer) {
      // res.json(dbCustomer);
      res.redirect('/');
    });
  });

// 3 update burger devoured value when button clicked
// gather the selected customer id
// append the burger name to the customer div

  app.post('/burgers/update/:id',function(req,res){
    console.log(req.body);
    db.Burger.update({ 
      CustomerId: req.body.CustomerId}, { 
        where: {
        id : parseInt(req.params.id) }
      }
      // ).then(
      //   data => { console.log(data);
    ).then(function(data) {
      console.log(data);
          res.redirect('/');
      })
      .catch(e => console.log(e));
  })
} 

// end module exports code section

// FUTURE VERSION
// 4 setup a burger menu with checkboxes, qty, and cost

// 5 store all purchases each customer makes
// render purchases in a customer summary page (findAll, findOne)

// 6 add customer sign-in / register to buy burgers
// 7 add admin sign-in / register to makes burgers


// ORM ROUTES CODE

// app.get('/burgers/update',function(req,res){
//     db.update(req.body.id, function(result){
//         console.log(result);
//         res.redirect('/');
//     });
// });

// app.post('/burgers/create', function(req,res){
//     db.create(req.body.name,req.body.toppings, function(result){
//         res.redirect('/');
//     });
// });


