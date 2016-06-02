var kaosProjects = require('./data/projects.json'); 

exports.getProjects = function(data) {
  return kaosProjects;
}

exports.getProject = function(id) {
  for (var i=0; i < kaosProjects.length; i++) {
    if(kaosProjects[i].id == id) {
      return kaosProjects[i];
    }
  }
}
