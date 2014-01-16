/*
 * GET home page.
 */
/*jslint white: false */
'use strict';

module.exports = function (app) {
  // app.get('/', function (req, res) {
  //     res.render('index', {});
  // });
  app.get('/', function (req, res) {
    res.render('index', {
        'pathToAssets': '/bootstrap-3.0.0',
        'pathToSelectedTemplateWithinBootstrap' : '/stylesheets/carousel'
    });
  });
  app.get('/about', function (req, res) {
    res.redirect('http://www.commsp.ee.ic.ac.uk/jpearson/');
  });
  app.get('/contact', function (req, res) {
    res.redirect('http://www.commsp.ee.ic.ac.uk/jpearson/contact');
  });
  app.post('/update/:key', function (req, res) {
    var validKey = process.env.UPDATE_KEY;
    var inputKey = req.params.key;
    var keys = {};
    keys.validKey = validKey;
    keys.inputKey = inputKey;
    keys.equal = inputKey == validKey;

    var gitCmd = 'git pull';

    if(inputKey == validKey) {
      var exec = require('child_process').exec;
      exec(gitCmd, function callback(error, stdout, stderr){
        res.send({error: stdout, stdout: stdout, stderr: stderr});
      });
    } else {
      res.redirect('/update')
    }
  });
    
};