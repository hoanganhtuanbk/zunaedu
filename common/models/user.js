var config = require('../../server/config.json');
var path = require('path');

module.exports = function(User) {
  var app = require('../../server/server');
  User.observe('before save', function setDefaultUsername(ctx, next) {
    if (ctx.instance) {
      if(ctx.isNewInstance) {
        ctx.instance.username = ctx.instance.email;
      }
      ctx.instance.status = 'created';
      ctx.instance.created = Date.now();
    }
    next();
  });

  User.afterRemote('create', function(context, result, next) {

    var options = {
      host: 'localhost',
      port: 3000,
      type: 'email',
      to: result.email,
      from: 'hungtd@lungvang.vn',
      subject: 'Thanks for registering.',
      redirect: '/verified'
    };

    result.verify(options, function(err, response) {
      console.log(err);
      if (err) return next(err);

      next();
    });
  });

  //send password reset link when requested
  User.on('resetPasswordRequest', function(info) {
    var url = 'http://' + config.domain + '/reset-password';
    var html = 'Click <a href="' + url + '?access_token=' +
        info.accessToken.id + '">here</a> to reset your password';

    User.app.models.Email.send({
      to: info.email,
      from: info.email,
      subject: 'Password reset',
      html: html
    }, function(err) {
      if (err) return console.log('> error sending password reset email');
    });
  });
};
