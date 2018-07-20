const express = require('express');
const bodyParser = require('body-parser');

const app = express();


// for parsing application/json
app.use(bodyParser.json());

// for parsing application/x-www-form-urlencoded
// extended
// - true: use https://www.npmjs.com/package/qs
// - false: use https://www.npmjs.com/package/querystring
app.use(bodyParser.urlencoded({
    extended: true
}));

const users = [];

app.get('/index.html', function(req, res) {
    res.sendFile('views/index.html', {
        root: __dirname
    })
});

app.get('/index2.html', function(req, res) {
    res.type("html").send("<html><body>res.type('html').send(...)</body></html>")
})

app.listen(3000, function() {
    console.log('Listening on 3000');
});