/*
 * GET home page.
 */
/*jslint white: false */
'use strict';
var nodemailer = require('nodemailer');

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
//  app.get('/about', function (req, res) {
//    res.redirect('http://www.commsp.ee.ic.ac.uk/jpearson/');
//  });
  app.get('/contact', function (req, res) {
    res.render('contact', { title: 'James Pearson - Contact', page: 'contact' })
  });

  app.post('/contact', function (req, res) {

    var mailOpts, smtpTrans;
    //Setup Nodemailer transport, I chose gmail. Create an application-specific password to avoid problems.
    smtpTrans = nodemailer.createTransport( {
      service: 'Gmail',
      auth: {
        user: process.env.MAILER_USER,
        pass: process.env.MAILER_PASS
      }
    });
    //Mail options
    mailOpts = {
      from: req.body.name + ' &lt;' + req.body.email + '&gt;', //grab form data from the request body object
      to: 'monkey.jim@gmail.com',
      subject: 'Website contact form',
      text: req.body.name + " at : " +  req.body.email + "\n \n" + req.body.message
    };
    smtpTrans.sendMail(mailOpts, function (error, response) {
      //Email not sent
      if (error) {
        //res.render('contact', { title: 'James Pearson - Contact', msg: 'Error occured, message not sent. : ' + error + ' : ' + response, err: true, page: 'contact' })
        res.status(400).send('Error occured, message not sent. : ' + error + ' : ' + response)
      }
      //Yay!! Email sent
      else {
        //res.render('contact', { title: 'James Pearson - Contact', msg: 'Message sent! Thank you.', err: false, page: 'contact' })
        res.status(201).send('Message send successfully')
      }
    });
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