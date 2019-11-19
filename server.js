require("dotenv").config();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');

// INSERT ------

var express = require('express');
var exphbs = require('express-handlebars');
var app = express();

// HANDLEBAR HELPER 'equal'
var hbs = exphbs.create({
  helpers: {
    equal : function(a, b, opts) {
      if (a == b) {
          return opts.fn(this);
      } else {
          return opts.inverse(this);
      }
    }
  },
  defaultLayout: 'main',
  partialsDir: ['views/partials/']
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// END INSERT ------

// HANDLEBARS VIEW ENGINE
// app.engine('handlebars', exphbs({
//   defaultLayout: 'main'
// }));

// SET PUBLIC AS ROOT FOLDER FOR EXPRESS
app.use(express.static(__dirname + '/public'));

// MIDDLEWARE
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(methodOverride('_method'));

// MODELS
var db = require("./models");

// SYNC OPTIONS
var syncOptions = { force: false };
if (process.env.NODE_ENV === "test") {
    syncOptions.force = true;
  }

  // DEFINE PORT
var PORT = process.env.PORT || 8080;

  // STARTING THE SERVER, SYNC THE MODELS
db.sequelize.sync(syncOptions).then(function() {
    app.listen(PORT, function() {
      console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
      );
    });
  });

// ROUTES
require('./controllers/routes.js')(app);

module.exports = app;

// COMPARE HELPER
// exphbs.registerHelper(‘compare’, function (lvalue, operator, rvalue, options) {

//   var operators, result;
    
//   if (arguments.length < 3) {
//       throw new Error("Handlerbars Helper 'compare' needs 2 parameters");
//   }
  
//   if (options === undefined) {
//       options = rvalue;
//       rvalue = operator;
//       operator = "===";
//   }
  
//   operators = {
//       '==': function (l, r) { return l == r; },
//       '===': function (l, r) { return l === r; },
//       '!=': function (l, r) { return l != r; },
//       '!==': function (l, r) { return l !== r; },
//       '<': function (l, r) { return l < r; },
//       '>': function (l, r) { return l > r; },
//       '<=': function (l, r) { return l <= r; },
//       '>=': function (l, r) { return l >= r; },
//       'typeof': function (l, r) { return typeof l == r; }
//   };
  
//   if (!operators[operator]) {
//       throw new Error("Handlerbars Helper 'compare' doesn't know the operator " + operator);
//   }
  
//   result = operators[operator](lvalue, rvalue);
  
//   if (result) {
//       return options.fn(this);
//   } else {
//       return options.inverse(this);
//   }

// });
