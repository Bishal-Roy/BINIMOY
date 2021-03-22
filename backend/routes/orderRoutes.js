import express from "express";
import {protect} from "../middleware/authMiddleware.js"
import {addOrderItem} from "../controlers/orderControler.js"
const router = express.Router();

router.route("/").post(protect, addOrderItem)




export default router;