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
app.get('/v1/employees', (req, res) => {
    mysqlConnection.query('SELECT * FROM employee', (err, rows, field) => {
        if(!err){
        // console.log(rows);
        res.send(rows);
        }
        else{
        console.log(err);
        }
    })
});


// get by id
app.get('/v1/employees/:id', (req, res) => {
    mysqlConnection.query('SELECT * FROM employee WHERE id = ?', [req.params.id], (err, rows, field) => {
        if(!err){
            console.log(rows);
            res.send(rows);
        }
        else{
            console.log(err);
        }
    })
});

// delete through id
app.delete('/v1/employees/:id', (req, res) => {
    mysqlConnection.query('DELETE FROM employee WHERE id = ?', [req.params.id], (err, rows, field) => {
        if(!err){
            res.send('Deleted successfully');
        }
        else{
            console.log(err);
        }
    })
});
