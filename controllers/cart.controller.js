const express = require("express");

const router = express.Router();

const Cart = require("../models/cart.model");

const cartController = require("../controllers/crud.controller");

const authenticate = require("../middleware/authenticate");

router.get("", cartController(Cart).get);

router.get("/:id", authenticate, async (req, res) => {
  try {
    const cart = await Cart.find({ user_id: req.params.id }).lean().exec();
    return res.status(200).send(cart);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.patch("/:id", cartController(Cart).patch);

router.post("", authenticate, async (req, res) => {
  try {
    const user_id = req.user._id;
    const cart = await Cart.create({
      image: req.body.image,
      product_name: req.body.product_name,
      price: req.body.price,
      product_desc: req.body.product_desc,
      discount: req.body.discount,
      user_id: user_id,
    });
    return res.status(200).send(cart);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.delete("/:id", authenticate, cartController(Cart).delete);

module.exports = router;
