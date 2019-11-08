var connection = require('./connection.js');

var orm = {
    all: function(tableInput, cb) {
        connection.query('SELECT * FROM ' + tableInput + ';', function(err, result){
            if(err) throw err;
            cb(result);
            console.log(result);
        });
    },
    update: function(tableInput, condition, cb){
        connection.query('UPDATE ' + tableInput + ' SET devoured=true WHERE id=' + condition + ';', function(err, result){
            if(err)throw err;
            cb(result);
        });
    },
    create: function(tableInput,name,toppings,cb){
        connection.query("INSERT INTO " + tableInput + " (burger_name,burger_toppings) VALUES ('" + name + "','" + toppings + "');", function(err,result){
            if(err)throw err;
            cb(result);
        });
    }
}

module.exports = orm;