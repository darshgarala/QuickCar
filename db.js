const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect(
      "mongodb+srv://darshgarala:mongoDB123@darsh.dspzkel.mongodb.net/sheycars-udemy",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB();

module.exports = mongoose