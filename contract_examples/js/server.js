require('babel-register')({
    presets: [ 'env', 'react' ]
});

var express = require('express');
var renderer = require('./renderer.jsx');

var app = express();
app.get('/', (new renderer.Renderer).render);

var PORT = 3000;
app.listen(PORT, function() {
  console.log('http://localhost:' + PORT);
});
