module.exports = {
    db_uri: 'mongodb://rmnkbofficial:pink4ever@ds135196.mlab.com:35196/wonderlab',
    db: function(callback) {
        var MongoClient = require('mongodb').MongoClient;
        MongoClient.connect('mongodb://rmnkbofficial:pink4ever@ds135196.mlab.com:35196/wonderlab', callback);
    }
};

