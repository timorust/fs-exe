import express from "express";
import cors from "cors";
import { productRouter } from "./productsRouter";

const app = express();
const PORT = process.env.PORT || 3000;

// Use the CORS middleware with the appropriate configuration
app.use(
  cors({
    origin: "http://localhost:5173", // Allow requests from this origin
    credentials: true, // Allow credentials (cookies, authentication headers)
  })
);

// Your other middleware and routes...
app.use("/products", productRouter);

app.get("/", (req, res) => {
  res.send({ message: "Root" });
});

// Listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
