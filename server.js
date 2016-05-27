const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine' , 'pug');

// Serves static files
app.use(express.static(path.join(__dirname, 'public')));


var kaos = require('./routes/kaos');

//Routes
app.get('/', kaos.home);
app.get('/projects', kaos.projects);

// Server
app.listen(PORT, function() {
  console.log('Listening on ' + PORT);
});
