import express from 'express';
import { protect, admin } from '../middleware/authMiddleware.js';
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProductById,
  updateProduct,
  createProductReview
} from '../controlers/productControler.js';
const router = express.Router();

router.route('/').get(getProduct).post(protect, admin, createProduct);
router.route('/:id/reviews').post(protect, createProductReview)
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

export default router;
