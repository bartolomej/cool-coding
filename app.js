const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const ejs = require('ejs');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const logger = require('morgan');
const routes = require('./endpoints');
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.enable('view cache');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

app.use('/', routes);


app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000, () => console.log(`Example app listening on port 3000!`))

module.exports = app;