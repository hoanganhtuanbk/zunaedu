module.exports = function(app) {
  var roles = ['admin', 'consumer'];
  var Role = app.models.Role;

  roles.forEach(function(roleName) {
    Role.create({
      name: roleName
    }, function(err, role) {
      if (err) console.log(err);
    })
  })
};
