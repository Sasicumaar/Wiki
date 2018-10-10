const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());
//get all Employess
app.get('/employeemaster', (req, res) => {
    mysqlConnection.query('call GetAllEmployeeMaster', (err, rows, fields) => {
        debugger
        if (!err)
            res.send(rows);
        // rows.forEach(element => {
        //     if(element.constructor==Array)
        //     res.send(rows);
        //});
        else
            console.log(err);
    })
});

//get Employess by ID
app.get('/employeemaster/:ID', (req, res) => {
    mysqlConnection.query('select * from employeemaster where ID=?', [req.params.ID], (err, rows, fields) => {
        debugger
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

//Delete by ID
app.delete('/Deleteemployeemaster/:ID', (req, res) => {
    mysqlConnection.query('Delete from employeemaster where ID=?', [req.params.ID], (err, rows, fields) => {

        if (!err)
            res.send('Deleted Successfully');
        else
            console.log(err);
    })
});

//POST
//http://localhost:5000/employeemaster
app.post('/employeemaster', (req, res) => {

    let input = req.body;
    var sql = "SET @EmployeeName=?; SET @Address=?; SET @City =?; SET @ReturnValue=0;\
    CALL InsertEmployeeMaster(@EmployeeName,@Address,@City,@ReturnValue);";
    mysqlConnection.query(sql, [input.EmployeeName, input.Address, input.City, input.ReturnValue], (err, rows, fields) => {

        if (!err)
            rows.forEach(element => {
                if (element.constructor == Array)
                    if (element[0].ReturnValue > 0) {
                        res.send('Insert Successfully');
                    }
                else {
                    res.send('Something Went Wrong');
                }
            });
        else
            console.log(err);
    })
});

//PUT
//http://localhost:5000/employeemaster
app.put('/employeemaster', (req, res) => {

    let input = req.body;
    var sql = "SET @ID=?; SET @EmployeeName=?; SET @Address=?; SET @City =?; \
    CALL UpdateEmployeeMaster(@ID,@EmployeeName,@Address,@City);";
    mysqlConnection.query(sql, [input.ID,input.EmployeeName, input.Address, input.City], (err, rows, fields) => {

        if (!err)
        res.send('Update Successfully');
        else
            console.log(err);
    })
});