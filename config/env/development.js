module.exports = {
    db_uri: 'mongodb://rmnkbofficial-wonderlab-5711845:27017/test',
    db: function(callback) {
        var MongoClient = require('mongodb').MongoClient;
        MongoClient.connect('mongodb://rmnkbofficial-wonderlab-5711845:27017/test', callback);
    }
};

