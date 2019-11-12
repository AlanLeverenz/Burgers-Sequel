require("dotenv").config();
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');

// SET EXPRESS TO APP VAR
var app = express();

// DEFINE PORT
var PORT = process.env.PORT || 8080;

// SET PUBLIC AS ROOT FOLDER FOR EXPRESS
app.use(express.static(__dirname + '/public'));

// MIDDLEWARE
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(methodOverride('_method'));

// HANDLEBARS VIEW ENGINE
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// MODELS
var db = require("./models");

// SYNC OPTIONS
var syncOptions = { force: false };
if (process.env.NODE_ENV === "test") {
    syncOptions.force = true;
  }

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



