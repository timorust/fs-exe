import { Router } from "express";
import { prismaDB } from "./dbConnect";

export const productRouter = Router();

productRouter.get("/new", async (req, res) => {
  const data = await prismaDB.films.findMany();
  res.send(data);
});

productRouter.get("/old", (req, res) => {
  res.send({ id: 2, message: "Old Product", price: 11, quantity: false });
});
