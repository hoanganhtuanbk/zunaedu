module.exports = function(App) {
  var app = require('../../server/server');
  App.observe('before save', function(ctx, next) {
    var Services = app.models.Service
      , instance = ctx.instance || ctx.currentInstance
      , instanceServices = ctx.instance?ctx.instance.serviceId:ctx.data.serviceId
      , instanceScopes = [];
    if (instanceServices) {
      Services.find({}, function (err, services) {
        if (err) next();
        else {
          for (var i in instanceServices) {
            var service = services.find(function (item) {
              return item.id == instanceServices[i]
            });
            if (service) {
              for (var j in service.scopes) {
                if (typeof service.scopes[j] == 'string') {
                  instanceScopes.push(service.scopes[j])
                }
              }
            }
          }
          instance.scopes = instanceScopes;
          next()
        }
      })
    }
    else next();
  })
};
