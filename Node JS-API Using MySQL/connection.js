const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());
var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Amana@123',
    database: 'test',
    multipleStatements: true

});
mysqlConnection.connect((err) => {
    if (!err)
        console.log('DB connection succeded');
    else
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});


app.listen(5000, () => console.log('Express server at :5000'));
