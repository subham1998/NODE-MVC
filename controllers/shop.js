const Product = require("../models/product");

exports.getProducts = async (req, res, next) => {
  const products = await Product.fetchAll();
  res.render("shop/product-list", {
    products: products,
    pageTitle: "All Products",
    path: "/products",
  });
};

exports.getIndex = async (req, res, next) => {
  const products = await Product.fetchAll();
  res.render("shop/index", {
    products: products,
    pageTitle: "My Shop",
    path: "/",
  });
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    path: "/cart",
    pageTitle: "Your Cart",
  });
};

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    path: "/orders",
    pageTitle: "Your Orders",
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    path: "/checkout",
    pageTitle: "Checkout",
  });
};
