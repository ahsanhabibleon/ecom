import express, { NextFunction, Request, Response } from "express";
import { seedRouter, productsRouter, userRouter } from "./routes";
import path from "path";
import cors from "cors";

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
mongoose
  .connect(
    process.env.MONGODB_URI ||
      "mongodb+srv://arrayinobject:Passmetheword786@cluster0.uchrt.mongodb.net/mern-ecom?retryWrites=true&w=majority"
  )
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

// const __dirname = path.resolve();
console.log(__dirname);
app.use("/static", express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/client/build/index.html"))
);

app.listen(port, () => console.log("Server is running on port " + port));

export default app;
