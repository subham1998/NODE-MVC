const urlencoded = require("body-parser/lib/types/urlencoded");
const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res) => {
  const body = req.body;
  const product = new Product(
    body.title,
    body.description,
    body["image-url"],
    body.price
  );
  product.save();
  console.log(body);
  res.redirect("/");
};

exports.getProducts = async (req, res) => {
  const products = await Product.fetchAll();
  res.render("admin/products", {
    products: products,
    pageTitle: "Admin Products",
    path: "/admin/products",
  });
};
