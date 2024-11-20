const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  age: {
    type: Number,
    required: true,
  },
  work: {
    type: String,
    enum: ["chef", "waiter", "manager"],
    required: true,
  },

  salary: {
    type: Number,
    required: true,
  },

  mobile: {
    type: String,
    required: true,
    unique:true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },

  address:{
    type:String,
  },
 
});


// create person Modal

const Person=mongoose.model('Person', personSchema);
module.exports=Person