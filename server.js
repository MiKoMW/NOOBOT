var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  bodyParser = require('body-parser');
  
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/nodeapiRoutes'); //importing route
routes(app); //register the route


var server = app.listen(80, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

});

app.get('*', function(req, res) {
  res.send("hi");
  console.log("Incoming message!")
});

console.log('Portal Node example RESTful API server started on: ' + port);

module.exports = app;