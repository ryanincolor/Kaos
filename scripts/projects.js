// Gets all projects
exports.getProjects = function(data) {
  return data;
}

// Gets project based on id
exports.getProject = function(data, slug) {
  for (var i=0; i < data.length; i++) {
    if(data[i].slug == slug) {
      return data[i];
    }
  }
}

exports.nextProject = function(data, slug) {
  for (var i=0; i < data.length; i++) {
    if(data[data.length-1].slug == slug ) {
      return data[0];
    } else if(data[i].slug == slug) {
        return data[i + 1];
    }
  }
}

exports.prevProject = function(data, slug) {
  for (var i=0; i < data.length; i++) {
    if(data[0].slug == slug) {
      return data[data.length-1];
    } else if(data[i].slug == slug){
      return data[i - 1];
    }
  }
}

