const mongoose = require('mongoose')
const express = require('express')
const connectDB = require('./config/connectDB')
app = express()
app.use(express.json())
const port = process.env.PORT || 5000
app.listen(port,err=> err? console.log(`server error ${err}`): console.log(`server is running on port ${port}`))
connectDB()
app.use("/contacts",require("./routes/contact"))