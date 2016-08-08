var loopback = require('loopback');
var boot = require('loopback-boot');
var app = module.exports = loopback();
var config = require('./config.json');


app.start = function() {

  // start the web server
  return app.listen(function() {
    console.log('Web server listening at: %s', app.get('url'));
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s',  explorerPath);
    }
  });
};

app.use(loopback.static(require('path').join(__dirname, '..', 'client')));


app.get('/admin', function(req, res){
  res.sendFile(require('path').join(__dirname + '/../client/admin/index.html'));
});
app.get('/admin/*', function(req, res){
  res.sendFile(require('path').join(__dirname + '/../client/admin/index.html'));
});
app.get('/consumer', function(req, res){
  res.sendFile(require('path').join(__dirname + '/..client/consumer/index.html'))
});
app.get('/consumer/*', function(req, res){
  res.sendFile(require('path').join(__dirname + '/../client/consumer/index.html'))
})
app.get('/', function(req, res){
  res.sendFile(require('path').join(__dirname + '/../client/index/index.html'));
});
app.get('/home', function(req, res){
  res.sendFile(require('path').join(__dirname + '/../client/index/index.html'));
});
app.get('/home/*', function(req, res){
  res.sendFile(require('path').join(__dirname + '/../client/index/index.html'));
});
app.get('/van-tay-hoc', function(req, res){
  res.sendFile(require('path').join(__dirname + '/../client/index/index.html'));
});
app.get('/van-tay-hoc/*', function(req, res){
  res.sendFile(require('path').join(__dirname + '/../client/index/index.html'));
});
app.get('/goc-cha-me', function(req, res){
  res.sendFile(require('path').join(__dirname + '/../client/index/index.html'));
});
app.get('/goc-cha-me/*', function(req, res){
  res.sendFile(require('path').join(__dirname + '/../client/index/index.html'));
});
app.get('/lien-he', function(req, res){
  res.sendFile(require('path').join(__dirname + '/../client/index/index.html'));
});
app.get('/login', function(req, res){
  res.sendFile(require('path').join(__dirname + '/../client/index/index.html'));
});
app.get('/register', function(req, res){
  res.sendFile(require('path').join(__dirname + '/../client/index/index.html'));
});
app.get('/verified', function(req, res){
  res.sendFile(require('path').join(__dirname + '/../client/index/index.html'));
});
app.get('/forgot-password', function(req, res){
  res.sendFile(require('path').join(__dirname + '/../client/index/index.html'));
});
app.get('/reset-password', function(req, res){
  res.sendFile(require('path').join(__dirname + '/../client/index/index.html'));
});

app.get('/chat', function(req, res) {
  res.sendFile(require('path').join(__dirname + '/../client/chat.html'))
});


boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module) {
    app.emit('started', app.start());
  }
});
