import express, { NextFunction, Request, Response } from "express";
import { seedRouter, productsRouter, userRouter } from "./routes";
import path from "path";
import cors from "cors";

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/api/seed", seedRouter);
app.use("/api/products", productsRouter);
app.use("/api/users", userRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send({ message: err.message });
  res.status(401).send({ message: err.message });
});

// app.use("/static", express.static("public"));
// app.use(express.static('public'));

app.use("/static", express.static(path.join(__dirname, "public")));

app.listen(port, () => console.log("Server is running on port " + port));

export default app;
