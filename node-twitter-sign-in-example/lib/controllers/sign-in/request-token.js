"use strict";

var twitter = include("api/twitter"),
    secret = include("secret");

var cors = require('cors');

module.exports = function(app) {
    
    app.use(cors({origin: 'http://localhost:3000'}));
    
    app.get("/request-token", function(req, res) {
        console.log("requesttttttttttttttttttttttttttt", req);
        twitter.requestToken().then(function(requestToken) {
            res.send(requestToken);
        }).catch(function(error) {
            console.log("request token exceptionnnnnnnnnnnn", error);
            res.status(500).send(error);
        });
    });
};
