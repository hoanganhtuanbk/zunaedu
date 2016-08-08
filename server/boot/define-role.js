/**
 * Created by duyhung on 04/07/2016.
 */
module.exports = function(app) {
  var roles = ['master-admin', 'admin', 'consumer'];
  var Role = app.models.Role;

  roles.forEach(function(roleName) {
    Role.create({
      name: roleName
    }, function(err, role) {
      if (err) console.log(err);
    })
  })
};
