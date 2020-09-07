const mysql = require('mysql');
const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'employeedb'
});

mysqlConnection.connect((err) => {
    if (!err)
        console.log('Database connection succeeded');
    else
        console.log('Database connection failed \n Error' + JSON.stringify(err, undefined, 2));
});

app.listen(3000, () => console.log('Express server is running at port 3000'));


// get all
app.get('/employees', (res, req) => {
   mysqlConnection.query('SELECT * FROM employee', (err, rows, field) => {
       if(!err)
           console.log(rows);
       else
           console.log(err);
   })
});
