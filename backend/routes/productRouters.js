import express from 'express';
import { protect, admin } from '../middleware/authMiddleware.js';
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProductById,
  updateProduct,
} from '../controlers/productControler.js';
const router = express.Router();

router.route('/').get(getProduct).post(protect, admin, createProduct);

router
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

export default router;
