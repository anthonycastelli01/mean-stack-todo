# MEAN Stack Todo List

This application implements a single page todo list app using the MEAN stack. The MEAN stack is comprised of:

* **(M)ongoDB** - A non-relational database that stores information in a JSON-like format
* **(E)xpress.js** - A web framework for Node.js that enables routing and more in this case
* **(A)ngular.js** - A web frontend accesses the database through an API and displays information to the user
* **(N)ode.js** - A Javascript runtime that allows the backend to be controlled entirely in Javascript

For this application, Express and Node were used to create an API around the MongoDB database. Angular makes calls to this API in order to get the data and render the page. Any frontend can be used with the API as long as it can handle JSON data.

# Setup
While the app requires a number of dependencies to be installed, the Node Package Manager (npm) allows all of them to be installed using the `npm install` command in the terminal once the repo has been cloned. Inside the `package.json` file there is a dependency list that tells npm exactly what you need so it can go find it for you. So, the only things you need in the beginning is:

1. Node.js installed on your machine
2. NPM installed on top of that so that dependencies can be installed
3. MongoDB installed and able to be run from the command line

Optional but helpful programs to have installed include:
- `nodemon` - Can be used to run the app server. It listens to changes in the file structure and restarts the server so that a new `node` instance doesn't need to be started up each time a change is made.

# Running the App
## Starting the MongoDB Server
Once the repo has been cloned and the `npm install` command has been run to get the dependencies, start up a MongoDB server with `mongod` in one terminal. The Node and Express portions of the app are setup to access the local server through Mongoose so if possible use the default MongoDB configurations. (If you just installed MongoDB you're probably fine.)

## Starting the App
With the Mongo database server running in one Terminal window, open the same directory in a new window so that the two servers can run at the same time. Using the `node` or `nodemon` command, run `server.js` to start teh server listening on port 8080. As long as no errors are generated, you should then be able to direct your web browser to `localhost:8080` and start using the app! As long as the database isn't dropped your todo list will be persisted in the database for later use.