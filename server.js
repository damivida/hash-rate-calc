const express = require('express');

var app = express();

app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'));



app.get('/', (req,res) => {
    res.render('home.hbs', {
        pageTitle: 'Convert your HashPower',
        welcome: 'Convert HashPower and calculate daily mined coins',
        currentYear: new Date().getFullYear()
    });
});



app.get('/calc', (req,res) => {
  res.render('calc.hbs', {
  pageTitle: 'HashPower Coverter',
  currentYear: new Date().getFullYear()  
  });
});




app.listen(3000, () => {
    console.log('server is up on port 3000');
});