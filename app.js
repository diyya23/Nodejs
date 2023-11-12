const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-items', (req, res, next) => {
    res.send('<form action="/item" method="POST"><input type="text" name="title"><button type="submit">Add item</button></form>');
    // next(); // allows the request to continue to the next middleware of line.
});

app.use('/item', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')   
})

app.use('/', (req, res, next) => {
    res.send('<h1>This is Expressjs</h1>');
})

app.listen(3000)