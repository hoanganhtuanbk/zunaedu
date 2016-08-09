var mqtt = require('mqtt');

module.exports = function() {
  var pubsub = {};
  pubsub.connect  = function(clientId, clientSecret, url) {
    if (!url) url = 'http://' + window.location.host;
    var client = mqtt.connect(url, {
      username: clientId,
      password: clientSecret
    });

    client.on('error', function(error) {
      var err = error.toString().split(":")[2];
      var msg;
      if (err.toLowerCase().replace(/\s/g,"") == 'notauthorized') {
        msg = 'Please submit the valid clientId and clientSecret';
      }
      alert(msg);
      client.end(true);
    });

    var api = Object.create(client);

    api.subscribe = function(topic, cb) {
      topic = clientId + '/' + topic;
      client.subscribe(topic, cb);
    };

    api.publish = function(topic, cb) {
      topic = clientId + '/' + topic;
      client.publish(topic, cb)
    };

    api.unsubscribe = function(topic, cb) {
      topic = clientId + '/' + topic;
      client.unsubscribe(topic, cb);
    };


    return api
  };

  return pubsub
};
