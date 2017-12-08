module.exports = {
    db_uri: 'mongodb://rmnkbofficial:lolrama@ds135196.mlab.com:35196/wonderlab',
    db: function(callback) {
        var MongoClient = require('mongodb').MongoClient;
        MongoClient.connect('mongodb://rmnkbofficial:lolrama@ds135196.mlab.com:35196/wonderlab', callback);
    }
};

