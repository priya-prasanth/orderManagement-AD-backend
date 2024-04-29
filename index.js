import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./Database/dbConfig.js";
import cookieParser from "cookie-parser";
import ImportData from "./Dataimport.js";
import products from "./Data/Product.js";
import productRoute from "./Routes/ProductRoutes.js";
import userRouter from "./Routes/UserRoutes.js";
import orderRouter from "./Routes/orderRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(
  cors({
    origin: ["https://localhost:5173"],
    methods: ["GET", "POST", "PUT", "PATCH"],
    credentials: true,
  })
);

app.use(cookieParser());

connectDB();

// API
app.use("/api/import", ImportData);
app.use("/api/products", productRoute);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

app.get("/", (req, res) => {
  res.send("API is running...");
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log("My app is listening at-", port);
});
