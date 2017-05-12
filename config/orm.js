var connection = require("./connection");


var orm = {
    selectAll: function (e) {
    connection.query("select * from users", function (err, data) {
        if(err) throw err;
        e(data);

    });
},
    insertOne: function(burger_name, devoured, data) {
        connection.query("insert into burgers(burger_name, devoured, date) values (?, ?, ?)", [burger_name, devoured, data], function (err,data) {
            if(err) throw err;
            console.log("Data posted");
        });
    },

    updateOne: function(id) {
        connection.query("update burgers set devoured = false where id = ?", [id],  function (err, data) {
            if(err) throw err;
            console.log("data updated");
        })
    }
};

module.exports = orm;