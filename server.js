var express = require('express');
// var nodemailer = require("nodemailer");
var app = express();
const { success, validate } = require('./utils/form-util');
// var mailService = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "example@gmail.com",
//     pass: "contra",
//   },
// });

// app.use(express.static("public"));
app.use('/static', express.static(__dirname + '/public'));
app.use(express.urlencoded({}));

app.get('/', function(req, res) {
    res.sendFile('public/index.html', { root: __dirname });
});

app.route('/api/form').post((req, res) => {
    const data = req.body;
    const error = validate(data);
    if (error) {
        res.send(error);
    } else {
        res.app.set('data', data);
        res.redirect('/success');
    }
});

app.get('/success', (req, res) => {
    const info = res.app.get('data');
    res.send(success(info));
});

app.get('*', (req, res) => {
    res.redirect('/');
});

var server = app.listen(3000, () => {
    console.log(
        'App listening on port http://localhost:' + server.address().port
    );
});