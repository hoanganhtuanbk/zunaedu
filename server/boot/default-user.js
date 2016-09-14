module.exports = function(app) {

  var users = [{
    email: 'user@user.com',
    password: 'user',
    emailVerified: true
  }, {
    username: 'admin',
    email: 'admin@admin.com',
    password: 'admin',
    emailVerified: true,
    privilege: 1
  }];


  var User = app.models.user;
  users.forEach(function(user) {
    User.create(user, function(err, result) {
      if (err) console.log(err);
    })
  })
};
