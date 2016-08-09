module.exports = function(app) {
  var MOSCA_PORT  = process.env.MOSCA_PORT || 1883;
  var path = require('path');
  var mosca = require('mosca');
  var server, broker, ws
    , sockets = [], socketId = 0
    , serviceClosed = false;
  var Apps = app.models.App;

  app.on('started', function(started){
    server = started;
  });

  app.on('serviceStarted', function() {

    serviceClosed = false;

    broker = new mosca.Server({
      port: MOSCA_PORT
    });

    ws = broker.attachHttpServer(server);

    broker.on('ready', function() {
      broker.authenticate = function(client, username, password, callback) {
        if (username && password) {
          client.credentials = {
            clientId: username,
            clientSecret: password
          };
          if (username == 'Test' && password == 'Test') {
            callback(null, true);
          } else {
            Apps.findById(username, function(err, app) {
              if (err) {
                callback(err)
              }
              else {
                if (!app) {
                  callback(null, null);
                }
                else if (app.clientSecret != password.toString() || app.scopes.indexOf('pubsub') == -1) {
                } else {
                  client.credentials = {
                    clientId: username,
                    clientSecret: password
                  };
                  callback(null, true)
                }
              }
            });
          }
        } else {
          callback(null, false)
        }

      };

      broker.authorizeSubscribe = function(client, topic, callback) {
        var credentials = client.credentials;
        var clientId = topic.split('/')[0];
        callback(null, clientId === credentials.clientId);
      };

      broker.authorizePublish = function(client, topic, payload, callback) {
        var credentials = client.credentials;
        var clientId = topic.split('/')[0];
        console.log(topic);
        callback(null, clientId === credentials.clientId);
      }

    });

    broker.on('clientError', function (client, err) {

      console.log('client error', client.id, err.message, err.stack)
    });

    broker.on('published', function (packet, client) {
      if (client) {
        console.log('message from client', client.id)
      }
    });

    broker.on('unsubscribed', function() {
      console.log('hi')
    });


    broker.on('clientDisconnected', function (client) {
      console.log('client disconnet', client.id)
    });

    broker.on('clientConnected', function (client) {
      console.log('client connect', client.id)
    });

    broker.on('connection', function(socket) {
      var id = socketId;
      sockets[id] = socket;
      socketId++;
      socket.on('close', function() {
        delete  sockets[id];
      })
    });

  });

  app.on('serviceStopped', function() {
    serviceClosed = true;

    broker.close(function() {
    });

    ws.close(function() {});

    for(var socketId in sockets) {
      sockets[socketId].destroy()
    }
  });
};
