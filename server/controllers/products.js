const axios = require("axios");
require("dotenv").config({ path: "./config/config.env" });
const headers = {
  "X-Authorization": process.env.API_KEY,
  "Content-Type": "application/json",
};
const url = "https://api.chec.io/v1";
//  GET ALL PRODUCTS
exports.getAllProducts = async (req, res, next) => {
  try {
    const { data } = await axios.get(`${url}/products`, { headers });
    const { name } = data.data;
    console.log(name);
    res.status("200").json({
      status: true,
      name,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      error,
    });
  }
};

//  GET SINGLE PRODUCT
exports.getProduct = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "Display a Single Product",
  });
};
