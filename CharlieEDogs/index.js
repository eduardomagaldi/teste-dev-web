/*jslint node: true, nomen: true, unparam: true*/

'use strict';

var express = require('express'),
    compress = require('compression'),
    MongoClient = require('mongodb').MongoClient,
    app = express(),
    collection;

app.use(compress());
app.use(express.static(__dirname));

MongoClient.connect("mongodb://localhost:27017/mydb", function (err, db) {
    if (err) {
        return console.dir(err);
    }

    collection = db.collection('dogs');

    app.get('/db/dogs/:filter?', function (req, res) {
        var filter = {};
        if (req.params.filter && req.params.filter !== '') {
            filter.raca = {$regex : req.params.filter};
        }

        collection.find(filter).toArray(function (err, items) {
            res.send(items);
        });
    });
});

app.listen(80);