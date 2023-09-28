const mongoose = require("mongoose");

const menSchema = new  mongoose.Schema({
  ranking:{
    type:Number,
  },
  name:{
    type:String,
    trim:true,
  },
  country:{
    type:String,
    trim:true,
  },
})

const mensRanking = new mongoose.model("menranking", menSchema);

module.exports = mensRanking;