import express from "express";
import productRoutes from "./routes/product.routes";

import cors from "cors";
const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.json());
app.use("/products", productRoutes);
export default app;
