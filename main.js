const express=require("express");
const router = require("./Router/Router");
const connection = require("./DB/db");
const port = 5667
const app= express() 
const cors=require("cors");
const routerPayment = require("./Router/Routerstripe");
app.use(express.json())

connection()
app.listen(port,console.log(`server is runing at http://192.168.3.63:${port}`))
app.use("/product",router)
app.use('/paiement',routerPayment)


