const { getAddProduct, postAddProduct } = require("../controllers/products");

const router = require("express").Router();

router.get("/add-product", getAddProduct);

router.post("/add-product", postAddProduct);

module.exports = router;
