const express = require('express');
const app = express();
const exphb = require('express-handlebars');
const ejs = require('ejs');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const logger = require('morgan');
const routes = require('./endpoints');
const path = require('path');

app.set('views', path.join(__dirname, 'static/html'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

app.use('/', routes);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000, () => console.log(`Example app listening on port 3000!`))

module.exports = app;