const product = require("../model/productsModel");

const getAllProduct = async (req, res) => {
  try {
    const products = await product.productDataFindAll();
    res.writeHead(200, { "Content-Type": "application/json" });
    // res.write();
    res.end(JSON.stringify(products));
  } catch (error) {
    res.end({ message: "404 Not Found", error: error });
  }
};
module.exports = { getAllProduct };
