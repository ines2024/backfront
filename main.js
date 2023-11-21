const express=require("express");
const router = require("./Router/Router");
const connection = require("./DB/db");
const port = 5667
const app= express() 
const cors=require("cors")
app.use(express.json())
app.use(cors({
    origin:"http://localhost:3000"
}))
connection()
app.listen(port,console.log(`server is runing at http://192.168.3.63:${port}`))
app.use("/product",router)


