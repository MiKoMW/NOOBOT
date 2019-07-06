var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  bodyParser = require('body-parser');
  
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/nodeapiRoutes'); //importing route
routes(app); //register the route

app.listen(port);

app.get('*', function(req, res) {
  res.send("hi");
});

console.log('Portal Node example RESTful API server started on: ' + port);