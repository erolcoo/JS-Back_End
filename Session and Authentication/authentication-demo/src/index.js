const express = require('express');
const handlebars = require('express-handlebars');
const session = require('express-session');
const { homeController } = require('./controllers/home');
const { loginGet, loginPost, logoutGet, registerGet, registerPost, details } = require('./controllers/auth');

const app = express();

app.engine('hbs', handlebars.create({ extname: 'hbs' }).engine);
app.set('view engine', 'hbs');
app.use(session({
    secret: 'super secret',
    saveUninitialized: true,
    resave: true,
    cookie: { secure: false }
}));

app.use('/static', express.static('static'));
app.use(express.urlencoded({ extended: true }));

app.get('/', homeController);
app.get('/register', registerGet);
app.post('/register', registerPost);
app.get('/login', loginGet);
app.post('/login', loginPost);
app.get('/logout', logoutGet);
app.get('/details', details);

app.listen(3000, () => console.log('Server is working!'));