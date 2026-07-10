const express = require("express");

const mysql = require("mysql2");

const app = express();

const db = mysql.createConnection({
    host: "database",
    user: "root",
    password: "root",
    database: "fullstackdb"
});

db.connect((err) => {
    if(err){
        console.log(err);
    }else{
        console.log("Connected to MySQL");
    }
});

app.get("/",(req,res)=>{
    res.send("Backend Running Successfully");
});

app.listen(5000,()=>{
    console.log("Backend running on port 5000");
});
