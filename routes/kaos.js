var projects = require('../projects.js');

exports.home = function(req, res) {
   var projectId = req.params.id;
   var project = projects.getProject(projectId);
  res.render('pages/home', {title: "Familjen Kaos", project: project});
};

exports.projects = function(req, res) {
  res.render('pages/projects', {title: "Familjen Kaos Projects"});
};

exports.project = function(req, res) {
  var project = projects.getProject(req.params.id);
  // res.render('pages/project' , {project: project});
};
