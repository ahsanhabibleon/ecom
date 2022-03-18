import express, { NextFunction, Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import Product from "../models/productModel";
const productRouter = express.Router();

const getAllProducts = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const products = await Product.find();
    res.send(products);
  }
);

const getProductById = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  }
);

const getProductBySlag = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const product = await Product.findOne({ slug: req.params.slug });
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  }
);

const getProductByCategory = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    console.log({ req });
    const product = await Product.find({
      category: req.params.category,
    }).exec();
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  }
);


productRouter.get("/", getAllProducts);
productRouter.get("/:id", getProductById);
productRouter.get("/slug/:slug", getProductBySlag);
productRouter.get("/category/:category", getProductByCategory);

// const addProduct = (req: Request, res: Response, next: NextFunction) => {
//   const product = {
//     title: req.body.title,
//     category: req.body.category,
//     description: req.body.description,
//     image: req.body.image,
//     price: req.body.price,
//     inStock: req.body.inStock,
//     rating: {
//       rate: req.body.rating.rate,
//       count: req.body.rating.count,
//     },
//   };
//   // products.push(product);
//   res.status(201).json(product);

//   // res.status(200).send("Add product");
// };

// productRouter.get('/', (req, res, next) => {
//       res.send("This is the product productRouter!");
// })
// productRouter.post('/', addProduct);

export default productRouter;
