module.exports = {
    db: function(callback) {
        var MongoClient = require('mongodb').MongoClient
        MongoClient.connect('mongodb://rmnkbofficial-express-5648413:27017/db', callback)
    }
};

