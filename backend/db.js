const mongoose = require('mongoose');

const mongoURL  = "mongodb://127.0.0.1:27017/inotebook1?";

const connectToMongo  = ()=>{
    mongoose.connect(mongoURL, ()=>{
        console.log("connected to mongo successfully");
    });
} 

module.exports = connectToMongo;