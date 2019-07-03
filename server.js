// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});


// --------- project stuff ----------
// call with parameter
app.get("/api/timestamp/:date_string", function (req, res) {
  let p = req.params.date_string;
  let d; // Date
   
  // milliseconds? - 1450137600000 
  if( p==parseInt(p) && p==String(p) ) {
    d = new Date(parseInt(p));
  } else {
    // create date: NO EXCEPTION!
    d = new Date(p);  
   
    // invalid: take d as it is
    // d.toUTCString() => 'Invalid Date'
    
    // alternative: take current date instead of invalid
    // https://stackoverflow.com/questions/1353684/detecting-an-invalid-date-date-instance-in-javascript
    /*if( isNaN(Date.parse(p)) ) { 
      d = new Date();
    }*/
  }

  res.json({unix: d.getTime(), utc:d.toUTCString()});
});

// call without parameter
app.get("/api/timestamp", function (req, res) {
  let d = new Date();
  res.json({unix: d.getTime(), utc:d.toUTCString()});
});