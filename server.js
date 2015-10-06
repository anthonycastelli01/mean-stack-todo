var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Connect to server and use the Task model
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost');
var Task = require('./app/models/task');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

// Setup routes
var APIrouter = express.Router(); // Instance of Express router

// Logging middleware
APIrouter.use(function(request, response, next) {
  console.log("Something is happening!");
  next();
})

// Test route
APIrouter.get('/', function(req, res) {
    res.json({ message: 'welcome to the api!' });
});

// actual useful API routes

// Routes that begin in /tasks
APIrouter.route('/tasks')
  .post(function(request, response) {
    var task = new Task();
    task.name = request.body.name;

    task.save(function(err) {
      if (err) {
        response.send(err);
      }

      Task.find(function(err, tasks) {
        if (err) {
          response.send(err);
        }
        response.json(tasks);
      })
    });
  })

  .get(function(request, response) {
    Task.find(function(err, tasks) {
      if (err) {
        response.send(err);
      }
      response.json(tasks);
    })
  })

// Routes ending in :task_id
APIrouter.route('/tasks/:task_id')
  .get(function(request, response) {
    Task.findById(request.params.task_id, function(err, task) {
      if (err) {
        response.send(err);
      }
      response.json(task);
    })
  })

  .put(function(request, response) {
    Task.findById(request.params.task_id, function(err, task) {
      if (err) {
        response.send(err);
      }
      task.name = request.body.name;

      task.save(function(err) {
        if (err) {
          response.send(err);
        }
        response.json({ message: 'Task updated!' });
      });
    });
  })

  .delete(function(request, response) {
    Task.remove({
      _id: request.params.task_id
    }, function(err, task) {
      if (err) {
        response.send(err);
      }

      Task.find(function(err, tasks) {
        if (err) {
          response.send(err);
        }
        response.json(tasks);
      });
    });
  });

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