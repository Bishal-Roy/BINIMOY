import Order from "../models/orderModel.js";
import asynchandeler from "express-async-handler";

 const addOrderItem = asynchandeler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;
if(orderItems && orderItems.length === 0 ){
    res.status(400)
    throw new Error('no order items')
    return
}else{
    const order = new Order({
        orderItems,
        user: req.user._id,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice
    })

    const createdOrder = await order.save()
    res.status(201).json(createdOrder)
}

});


export {addOrderItem}