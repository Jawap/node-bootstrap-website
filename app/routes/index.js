/**
 * Created with JetBrains WebStorm.
 * User: Abdelkrim
 * Date: 2013/08/21
 * Time: 00:00
 * Copyright (c) 2013 ALT-F1, We believe in the projects we work on™
 */
/*
 * GET home page.
 */

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
    
};