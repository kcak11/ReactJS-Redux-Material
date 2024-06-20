//============================
// Import our dependencies, and
// our controllers
//============================
const express = require('express');
const _ourController = 
   require('./controllers/_our-controller');

// localhost:3000/api/helloworld
//============================
// Export the api routes
//============================
module.exports = function(app) {

  //create the router
  const apiRoutes = express.Router();

  //define first router
  apiRoutes.get('/helloworld', _ourController.helloworld);

 // apiRoutes.post(...)
//apiroutes.delete(...)

  //tell the app to use apiRoutes
  //and set the base url to
  // localhost:300/api
  app.use('/api', apiRoutes);
}
