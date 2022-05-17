const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.postAddProduct = (req, res) => {
  const body = req.body;
  const product = new Product(req.body.title);
  product.save();
  console.log(body);
  res.redirect("/");
};

exports.getProducts = async (req, res, next) => {
  const products = await Product.fetchAll();
  res.render("shop", {
    products: products,
    pageTitle: "My Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
};
