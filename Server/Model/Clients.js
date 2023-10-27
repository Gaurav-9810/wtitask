import mongoose from "mongoose";

const client = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
mobile : {
      type: String,
      required: true,
     
      trim: true,
  },
  project : {
      type: String,
      required: true,
     
      trim: true,
  },
    name:{
      type : String,
      required : true,
      trim:true,
    },
    lastname:{
      type : String,
      required : true,
      trim:true,
    },
  },
  { timestamps: true },
);

export const Client = mongoose.model("Client", client);