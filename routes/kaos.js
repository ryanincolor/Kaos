exports.home = function(req, res) {
  res.render('pages/home', {title: "Familjen Kaos"});
};

exports.projects = function(req, res) {
  res.render('pages/projects', {title: "Familjen Kaos Projects"});
};
