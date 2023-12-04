
const express = require('express');
require('dotenv').config()
const {connection} = require("./db")

const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.listen(8080,async()=>{
    try {
        await connection;
        console.log(`server connected to Database successfully`);
        console.log(`server Running at port successfully`);
 
    } 
    catch (error) {
        console.log(error)
    }
 })
