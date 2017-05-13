var mysql = require('mysql');

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);

}
// google maps API key: AIzaSyAxhkimBc8By2IOKHTmsFA4U4KI9qKI5kU :from Samuel
else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '8aller$tatuS',
        database: 'test'
    });
}

module.exports = connection;