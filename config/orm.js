var connection = require('./connection.js');

orm = {
    selectAll: function() {
        connection.query("SELECT * FROM burgers", function(err) {

        })
        console.log('you called select all');

    },

    insertOne: function() {

    },
    updateOne: function () {

    }
}

module.exports = orm;