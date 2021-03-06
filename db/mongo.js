/**
 * Created by Rasmus on 13-09-2016.
 */
var MongoClient = require('mongodb').MongoClient;
var connection;
var connect = function(url, done) {
    if (connection) return done();

    MongoClient.connect(url, function(err, db) {
        if (err){
            return done(err);
        }
        connection = db;
        console.log("Connection established, Successfully");
        done();
    })
};
var get = function() {
    return connection;
};
var close = function(done) {
    if (connection) {
        connection.close(function(err, result) {
            connection= null;
            if(err){
                return done(err);
            }
            console.log("conn closed");
            done();
        })
    }
};
module.exports.connect = connect;
module.exports.get = get;
module.exports.close = close;
