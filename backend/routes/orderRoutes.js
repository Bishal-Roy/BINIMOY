import express from 'express';
import { protect, admin } from '../middleware/authMiddleware.js';
import {
  addOrderItem,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
  getOrders,
} from '../controlers/orderControler.js';
const router = express.Router();

router.route('/').post(protect, addOrderItem).get(protect,admin,getOrders);
router.route('/myorders').get(protect, getMyOrders);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/pay').get(protect, updateOrderToPaid);

export default router;
