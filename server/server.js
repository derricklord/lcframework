var express = require('express');
var morgan = require('morgan');

var app = express();

var port = process.env.PORT || 80;

app.use(morgan('combined'));

app.use('/app', express.static('../client/app'));
app.use('/bower_components', express.static('../client/bower_components'));
app.use('/css', express.static('../client/css'));
app.use('/img', express.static('../client/img'));
app.use('/media', express.static('../client/media'));

app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root:'../client/' });
});

//app.use(express.static('../client/'));

app.listen(port, launchMsg);

function launchMsg(){
    console.log('Server listening on port: ' + port);
}