import Product from "../models/productModel.js";
import asynchandeler from "express-async-handler";

const getProduct = asynchandeler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

const getProductById = asynchandeler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "product not found" });
  }
});

export { getProduct, getProductById };
