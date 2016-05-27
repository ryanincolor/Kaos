const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine' , 'pug');

// Serves static files
app.use(express.static(path.join(__dirname, 'public')));

//Routes
var kaos = require('./routes/kaos');

app.get('/', kaos.home);

// Server
app.listen(PORT, function() {
  console.log('Listening on ' + PORT);
});
