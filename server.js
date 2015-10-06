var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Connect to server
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

// Setup routes
var APIrouter = require('./app/routes/api_routes');
var appRouter = express.Router();

appRouter.route('/')
  .get(function(request, response) {
    response.sendFile(__dirname + "/public/index.html");
  });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', APIrouter);
app.use('/', appRouter);
// Serve static pages in public folder
app.use(express.static(__dirname + '/public'));

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Listening on port ' + port);