var db = require("../models");

module.exports = function(app) {

app.get('/', function(req,res){
    db.Burger.findAll({}).then(function(burger_data) {
        console.log(burger_data);
        res.render('index',{
            burger_data});
        });
    });
};

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

// module.exports = router;
