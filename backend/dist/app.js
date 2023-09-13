"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const productsRouter_1 = require("./productsRouter");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Use the CORS middleware with the appropriate configuration
app.use((0, cors_1.default)({
    origin: "http://localhost:5173",
    credentials: true, // Allow credentials (cookies, authentication headers)
}));
// Your other middleware and routes...
app.use("/products", productsRouter_1.productRouter);
app.get("/", (req, res) => {
    res.send({ message: "Root" });
});
// Listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
