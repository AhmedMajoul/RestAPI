const mongoose=require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB=()=>{
    mongoose.connect(db,{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(console.log("Mongo connected"))
    .catch((err)=>console.log(err))
}
module.exports=connectDB