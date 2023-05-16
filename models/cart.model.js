const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    product_name: { type: String, required: true },
    price: { type: String, required: true },
    product_desc: { type: String, required: true },
    discount:{ type: String, required: true },
    user_id:{type:mongoose.Schema.Types.ObjectId, ref:"user",required:true}
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;
