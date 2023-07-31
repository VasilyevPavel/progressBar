require('dotenv').config();
const path = require('path');

const express = require('express');
const morgan = require('morgan');
const expressSession = require('express-session');
const FileStore = require('session-file-store')(expressSession);
const { dbCheck } = require('./src/lib/dbCheck');

const indexRouter = require('./src/routes/index.router');
const viewRouter = require('./src/routes/view.router');
const apiRouter = require('./src/routes/api.router');

const sessionConfig = {
  name: 'progress-bar_uuid',
  store: new FileStore(),
  secret: process.env.COOKIE_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 60 * 60 * 1000,
    httpOnly: true,
  },
};

const app = express();
const PORT = process.env.PORT || 3000;

app.use(expressSession(sessionConfig));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(process.cwd(), 'public')));

app.use('/', indexRouter);
app.use('/', viewRouter);
app.use('/api', apiRouter);

dbCheck();

app.listen(PORT, () => {
  console.log('Server starting on PORT', PORT);
});
