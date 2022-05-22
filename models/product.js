const fs = require("fs");
const path = require("path");

const products = [];

const p = path.join(
  path.dirname(require.main.filename),
  "data",
  "products.json"
);

const getProductsFromFile = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(p, (err, data) => {
      if (err) {
        resolve([]);
      }
      resolve(JSON.parse(data));
    });
  });
};

module.exports = class Product {
  constructor(title, description, imageUrl, price) {
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.price = price;
  }

  async save() {
    const products = await getProductsFromFile();
    products.push(this);
    fs.writeFile(p, JSON.stringify(products), (err) => {
      console.log(err);
    });
  }

  static fetchAll() {
    return getProductsFromFile();
  }
};
