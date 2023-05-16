const mongoose = require("mongoose");

const mobileSchema = new mongoose.Schema(
    {
      product_name: { type: String, required: true },
      product_id:{type:Number,required:true,unique:true},
      rating: { type: Number, required: true },
      reviews: { type: Number, required: true },
      price: { type: Number, required: true },
      discount: { type: String, required: true },
      image: { type: String, required: true },
      color: { type: String, required: true },
      product_desc:{type:String,required:true}
      
  
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  
  const Mobile = mongoose.model("mobile", mobileSchema)

  module.exports = Mobile;