"use strict";

var twitter = include("api/twitter");
var cors = require('cors');

module.exports = function(app) {

    app.use(cors({origin: 'http://localhost:3000'}));

    app.get("/access-token", function(req, res) {

        console.log("requesttttttttttttttttttttttttttt", req);

        var token = req.query.oauth_token,
			verifier = req.query.oauth_verifier;

        twitter.accessToken(token, verifier).then(function(accessToken) {
            return twitter.verifyCredentials(accessToken);
        }).then(function(user) {
            res.send(user);
        }).catch(function(error) {

            console.log("access token exceptionnnnnnnnnnnn", error);

            res.status(500).send(error);
        });
    });
};
