var projects = require('./../scripts/projects');
var kaosProjects = require('./../data/projects.json');

var allProjects = projects.getProjects(kaosProjects);

exports.home = function(req, res) {
   res.render('pages/home', {projects: allProjects});
};

exports.projects = function(req, res) {
  res.render('pages/projects', {title: "Familjen Kaos Projects"});

};

exports.project = function(req, res) {
    var project = projects.getProject(kaosProjects, req.params.slug);
    var nextProject = projects.nextProject(kaosProjects, req.params.slug);
    var prevProject = projects.prevProject(kaosProjects, req.params.slug);
   res.render('pages/project' , {project: project, next: nextProject, prev: prevProject, projects: allProjects});
  
};


