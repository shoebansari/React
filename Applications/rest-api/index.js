const express = require('express');
const bodyparser = require('body-parser');
const cors =require('cors');
const app = express();
const mysql = require('mysql');

app.use(cors());
//parser application/json
app.use(bodyparser.json());

//create database connection
const conn = mysql.createConnection({
  host:'127.0.0.1',
  user:'root',
  password:'password',
  database:'MyDb'
})

conn.connect((err)=>{
  if(err) throw err
  console.log('My sql connected ')
})

//Create user
app.post("/api/create",(req, res)=>{
let data ={name:req.body.name, location:req.body.location};
let sql = "INSERT INTO users SET ? ";
let query = conn.query(sql, data,(err, result)=>{
  if(err) throw err
  res.send(JSON.stringify({status:200, error:null, respose:'new record added succesfully!'}))
})
})

//SHOW ALL RECORDS
app.get("/api/view", (req,res)=>{
  let sql = "SELECT * FROM users";
  let query = conn.query(sql,(err, result)=>{
    if(err) throw err;
    res.send(JSON.stringify({status:200, error:null, response: result}));
  })
})

//SHOW RECORDS BY Id
app.get("/api/view/:id", (req,res)=>{
  let sql = "SELECT * FROM users WHERE id=" + req.params.id;
  let query = conn.query(sql,(err, result)=>{
    if(err) throw err;
    res.send(JSON.stringify({status:200, error:null, response: result}));
  })
})

//UPDATE RECORD
app.post("/api/update", (req,res)=>{
  let sql = "UPDATE users SET name='" + req.body.name+"',location='"+req.body.location+"' WHERE id="+ req.body.id;
  let query = conn.query(sql,(err, result)=>{
    if(err) throw err;
    res.send(JSON.stringify({status:200, error:null, response: "RECORD UPDATED SUCCESSFULLY."}));
  })
})

//DELETE RECORD
app.delete("/api/delete/:id", (req,res)=>{
  let sql = "DELETE FROM users WHERE id="+ req.params.id;
  let query = conn.query(sql,(err, result)=>{
    if(err) throw err;
    res.send(JSON.stringify({status:200, error:null, response: "RECORD DELETED SUCCESSFULLY."}));
  })
})


app.listen(8000, ()=>{
  console.log('serverasdsdsad started on port 8000...');
})