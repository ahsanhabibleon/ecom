import express, { NextFunction, Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import Product from "../models/productModel";
import User from "../models/userModal";
import { data } from "../public/javascripts/data";
const seedRouter = express.Router();

const createdData = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    await Product.deleteMany({});
    const createdProducts = await Product.insertMany(data.products);

    await User.deleteMany({});
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdProducts, createdUsers });
  }
);

// seedRouter.get('/', (req, res, next) => {
//       res.send("This is the product seedRouter!");
// })

seedRouter.get("/", createdData);

export default seedRouter;
