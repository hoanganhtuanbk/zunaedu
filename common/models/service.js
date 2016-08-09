module.exports = function(Service) {
  Service.observe('after save', function(ctx, next) {
    var app = require('../../server/server');
    if (ctx.instance.name == 'Pubsub') {
      if (ctx.instance.active) {
        app.emit('serviceStarted')
      } else {
        app.emit('serviceStopped')
      }
    }
    next();
  });
};
