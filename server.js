const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


//-express middleware
/*
app.use((req, res, next)=> {
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;
    
    console.log(log);
    //--write data to file
    fs.appendFile('server.log', log + '\n', (err) => {
        if(err) {
            console.log('Unable to append to server.log.');
        }
    });
    next();
});
*/


//-GET REQUEST FOR MAINTENANCE PAGE
/*app.use((req,res,next) => {
    res.render('maintenance.hbs', {
       pageTitle: 'Sorry server is down',
       welcome: 'server down.. error 404'
   })
});*/
 
//-ENTRY TO PUBLIC DIR
app.use(express.static(__dirname + '/public'));

//-HELPER FOR CUR YEAR
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
});

//-HELPER FOR UPPER CASE
hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

//-GET REQUEST FOR HOME PAGE
app.get('/', (req,res) => {
    res.render('home.hbs', {
        pageTitle: 'HashPower Converter',
        welcome: 'Convert HashPower and calculate daily mined coins',
    });
});

//-GET REQUEST FOR CALC PAGE 
app.get('/calc', (req,res) => {
  res.render('calc.hbs', {
  pageTitle: 'HashPower Converter',
  welcome: 'Here you can calculate hashpower', 
  });
});




app.listen(3000, () => {
    console.log('server is up on port 3000');
});