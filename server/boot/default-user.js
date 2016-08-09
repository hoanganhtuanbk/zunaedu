/**
 * Created by duyhung on 04/07/2016.
 */
module.exports = function(app) {

  var users = [{
    email: 'user@user.com',
    password: 'user',
    emailVerified: true
  }, {
    username: 'master',
    email: 'master@master.com',
    password: 'admin',
    emailVerified: true,
    privilege: 1
  }, {
    username: 'admin',
    email: 'admin@admin.com',
    password: 'admin',
    emailVerified: true,
    privilege: 2
  }];

  var User = app.models.user;
  users.forEach(function(user) {
    User.create(user, function(err, result) {
      if (err) console.log(err);
    })
  })
};
