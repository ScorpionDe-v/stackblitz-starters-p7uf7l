import mongoose from "mongoose"

const patientSchema=new mongoose.Schema({

  name:{
    type:String,
    required:true
  },
  diagonsedWith:{
    type:String,
    required:true
  },
  address:{
    type:Number,
    required:true
  },
  age:{
    type:String,
    required:true
  },
  BloodGroup:{
    type:String,
    required:true
  },
  gender:{
    type:String,
    enum:["M","F","Others"],
    required:true

  },
  admittedIn:{
    type:mongoose.Schema.Types.ObjectsId,
    ref:"Hospital"
  }


},{timestamps:true})

export const Patient=mongoose.model("Patient",patientSchema);