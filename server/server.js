const express = require("express");
const app = express();
const cors = require("cors");
const products = require("./routes/products/products");

//  middleware
app.use(cors());
app.use(express.json());

//  Mount Routes
app.use("/api/v1/products", products);

//  Set port
const PORT = process.env.PORT || 5000;

//  connect
app.listen(PORT, () => {
  console.log(`Backend Connected - App running on PORT ${PORT}`);
});
