//var path = require('path');
//var express = require('express');
//
//var app = express();
//
//var staticPath = path.join(__dirname, '/dist/index.html');
//
//app.use(express.static(staticPath));
//
//app.listen(3001, function() {
//  console.log('listening');
//});
//
//const express = require('express')
//const app = express()
//const path = require('path')
//
//var staticPath = path.join(__dirname, '/dist/index.html');
//
//app.get('/', (req, res) => res.send('Hello World!'))
//
//app.listen(3001, () => console.log('Example app listening on port 3001!'))
//

var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('../dist'));

// viewed at http://localhost:8080
app.all('*', function(req, res) {
    res.status(200).sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(3001, () => console.log('Example app listening on port 3001!'))
