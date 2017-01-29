var express = require('express');
var path = require('path');
var logger = require('morgan');
// var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('express-handlebars');
var methodOverride = require('method-override');

//require routes
var routes = require('./routes/index');
var dataroute = require('./routes/data');
var updateroute = require('./routes/update');
var deleteroute = require('./routes/delete');
var commentroute = require('./routes/comments');

var app = express();

//view engine set-up
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



//apply the routes to our app
app.use('/', routes);
app.use('/data', dataroute);
app.use('/update', updateroute);
app.use('/delete', deleteroute);
app.use('/comments', commentroute);


// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}


var port = 3000;
app.listen(port, function(){
  console.log("listening on port " + port);
});

module.exports = app;
