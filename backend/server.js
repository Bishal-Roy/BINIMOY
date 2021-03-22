import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRouters from "./routes/productRouters.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import { errorHandener, notFound } from "./middleware/errorMiddleware.js";

dotenv.config();

connectDB();

const app = express();
app.use(express.json())

app.get("/", (req, res) => {
  res.send("api id running....");
});

app.use("/api/products", productRouters);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.use(notFound);

app.use(errorHandener);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV}mpde on port ${PORT}`)
);
