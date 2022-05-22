const {
  getProducts,
  getIndex,
  getCart,
  getCheckout,
  getOrders,
} = require("../controllers/shop");

const router = require("express").Router();

router.get("/", getIndex);

router.get("/products", getProducts);

router.get("/products/:id");

router.get("/cart", getCart);

router.get("/orders", getOrders);

router.get("/checkout", getCheckout);

module.exports = router;
