const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const jquery = require('jquery');
const mongoose= require('mongoose');
const mongoClient = require('mongodb').MongoClient


const app = express();
const PORT = 3000;
var db;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine' , 'pug');

// Serves static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use(bodyParser.json());

mongoClient.connect('mongodb://madebyhuman:everclear86@ds023603.mlab.com:23603/kaos', (err, database) => {
  db = database;
  // Server
  app.listen(PORT, function() {
    console.log('Listening on ' + PORT);
  });
})

var kaos = require('./routes/kaos');
var allProjects = require('./scripts/projects')

app.post('/', (req, res) => {
  db.collection('projects').save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
});

//Routes
app.get('/', (req, res) => {
  db.collection('projects').find().toArray((err, results) => {
  if (err) return console.log(err)
    console.log(results)
    res.render('pages/home', {projects: allProjects, data: results});
  });
});
app.get('/projects', kaos.projects);
app.get('/project/:slug', kaos.project);
app.get('/dashboard', kaos.dashboard);








