const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
var jquery = require('jquery');



const app = express();
const PORT = 3000;


app.set('views', path.join(__dirname, 'views'));
app.set('view engine' , 'pug');

// Serves static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use(bodyParser.json());

var kaos = require('./routes/kaos');


//Routes
app.get('/', kaos.home);
app.get('/projects', kaos.projects);
app.get('/project/:slug', kaos.project);
// Server
app.listen(PORT, function() {
  console.log('Listening on ' + PORT);
});




