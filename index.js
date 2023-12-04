const express = require('express');
var cors = require('cors');

require('dotenv').config()
const {connection} = require("./db");
const {contactRouter} = require("./Routes/contact.routes")

const app = express();

app.use(express.json());
app.use(cors());

app.use("/contacts", contactRouter);

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log(`server connected to Database successfully`);
        console.log(`server Running at port successfully`);
 
    } 
    catch (error) {
        console.log(error)
    }
 })
