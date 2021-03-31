import express from "express";
import {protect} from "../middleware/authMiddleware.js"
import {addOrderItem, getOrderById, updateOrderToPaid, getMyOrders} from "../controlers/orderControler.js"
const router = express.Router();

router.route("/").post(protect, addOrderItem)
router.route("/myorders").get(protect, getMyOrders)
router.route("/:id").get(protect, getOrderById)
router.route("/:id/pay").get(protect, updateOrderToPaid)




export default router;