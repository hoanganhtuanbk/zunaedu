/**
 * Created by duyhung on 11/07/2016.
 */
var path = require('path');
var webpack = require("webpack");
var fs = require('fs');

module.exports = function(app) {
  webpack({
    entry: "./pubsub-api/pubsub-api.js",
    output: {
      filename: "./pubsub-api/pubsub-client.js",
      library: 'pubsubApi',
      libraryTarget: 'var'
    }
  }, function(err, stats) {
  });

  app.get('/pubsub-api.js', function(req, res) {
    res.sendFile(path.resolve(__dirname, '..', '..', 'pubsub-api', 'pubsub-client.js'));
  })
};
