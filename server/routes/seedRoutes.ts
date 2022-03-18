import express, { NextFunction, Request, Response } from "express";
import Product from "../models/productModel";
import { data } from "../public/javascripts/data";
const seedRouter = express.Router();

const seedProducts = async (req: Request, res: Response, next: NextFunction) => {
  await Product.deleteMany({});
      try {
        const seedProducts = await Product.insertMany(data);
        res.send({seedProducts});
      } catch (e) {
        console.log(e);
      }
};

// seedRouter.get('/', (req, res, next) => {
//       res.send("This is the product seedRouter!");
// })

seedRouter.get("/", seedProducts);

export default seedRouter;
