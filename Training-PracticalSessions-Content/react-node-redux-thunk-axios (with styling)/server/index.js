//============================
// Import our dependencies to run the server
// and specify what port we want our server
// to run on.
//============================

const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      app = express();

const router = require('./router');

var port = 3000;

//============================
// initialize the server
//============================
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
router(app);

app.listen(port);
console.log('Your server is running on port ' + port + '.');
