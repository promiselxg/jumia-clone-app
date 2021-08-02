require("dotenv").config({ path: "./config/config.env" });
const headers = {
  "X-Authorization": process.env.API_KEY,
  "Content-Type": "application/json",
};
//  GET ALL PRODUCTS
exports.getAllProducts = async (req, res, next) => {
  res.status(200).json({
    data: headers,
  });
};

//  GET SINGLE PRODUCT
exports.getProduct = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "Display a Single Product",
  });
};
