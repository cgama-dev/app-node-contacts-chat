const createError = require('http-errors')
const express = require('express')
const path = require('path')

const logger = require('morgan')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const chatRouter = require('./routes/chats')
const contatosRouter = require('./routes/contatos')
const autenticar = require('./middleware/autenticador')
const { notFound, serverError } = require('./middleware/error')

const KEY = 'ntalk.sid'

const SECRET = 'ntalk'

const store = new session.MemoryStore()

const optionsSession = { secret: SECRET, resave: false, saveUninitialized: true, name: KEY, store: store }

const cookie  = cookieParser(SECRET)

const app = express();

app.cookie = cookie

app.store = store

app.session = session(optionsSession)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookie);
app.use(session(optionsSession));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/contatos', autenticar, contatosRouter);
app.use('/chat', autenticar, chatRouter);
app.use(notFound);
app.use(serverError);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;