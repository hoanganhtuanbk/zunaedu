/**
 * Created by duyhung on 05/07/2016.
 */
module.exports = function(app) {

  app.use(app.loopback.token({
    model: app.models.accessToken
  }));

  var User = app.models.user, AccessToken = app.models.AccessToken;

  app.post('/password-reset-request', function(req, res, next) {
    User.resetPassword({
      email: req.body.email
    }, function(err) {
      if (err) return res.status(401).send(err);
      res.status(200).send(true);
    });
  });

  app.post('/reset-password', function(req, res, next) {
    console.log(req.accessToken);
    if (!req.accessToken) return res.sendStatus(401);

    //verify passwords match
    if (!req.body.password ||
      !req.body.confirmation ||
      req.body.password !== req.body.confirmation) {
      return res.sendStatus(400, new Error('Passwords do not match'));
    }

    User.findById(req.accessToken.userId, function(err, user) {
      if (err) return res.sendStatus(404);
      user.updateAttribute('password', req.body.password, function(err, user) {
        if (err) return res.sendStatus(404);
        console.log('> password reset processed successfully');
        AccessToken.deleteById(req.accessToken.id, function(err) {
          if (err) console.log(err)
        });
        res.status(200).send(true);
      });
    });
  });

};
