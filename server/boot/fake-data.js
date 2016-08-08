/**
 * Created by duyhung on 06/07/2016.
 */
module.exports = function(app) {
  var services = [{
    name: 'Pubsub',
    active: true,
    scopes: ['pubsub']
  }, {
    name: 'Oauth2',
    active: false,
    scopes: ['oauth2']
  }];
  var Service = app.models.Service;
  for (var i in services) {
    Service.create(services[i], function(err, result) {
      console.log('service created: '+result.name)
    })
  }
};
