const express = require('express');
const hbs = require('hbs');

const app = express();

//nodemon server.js -e js,hbs

hbs.registerPartials(__dirname + '/views/partials')
app.use(express.static(__dirname + '/'));
app.set('view engine', 'hbs');

app.use((req, res, next) => {
    var now = new Date().toString();
    console.log('req ' + now);
    next();
});

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});



app.get('/', (req, res) => {
    res.render('home.hbs', {
        title: 'Home page',
        welcomeMsg: 'Welcome to website',
        year: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        title: 'About page',
        year: new Date().getFullYear()
    });
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to handle the request..!'
    });
});

app.listen(3000, () => console.log('listening to the port 3000'));