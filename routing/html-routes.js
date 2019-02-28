const path = require('path');

module.exports = function (app) {

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/login.html'));
    });

    app.get('/gamepage', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/main.html'));
    });

    app.get('/easteregg', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/mainwitheasteregg.html'));
    });

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/login.html'));
    });
}