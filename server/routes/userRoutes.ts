import express, { NextFunction, Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import User, { userType } from "../models/userModal";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils";
const userRouter = express.Router();

const getAllUsers = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const users = await User.find();
    res.send(users);
  }
);

const userSignin = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.status(200).send({
          status: "success",
          data: {
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user),
          },
        });
        return;
      }
      res
        .status(401)
        .send({ status: "error", type: "password", message: "Wrong Password" });
    }
    res
      .status(401)
      .send({ status: "error", type: "email", message: "Invalid email" });
  }
);

const userSignup = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password),
      });

      const user = await newUser.save();

      res.status(200).send({
        status: "success",
        data: {
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        },
      });
    } else {
      res.status(404).send({
        status: "error",
        type: "email",
        message: "User already exists.",
      });
    }
  }
);

const userUpdate = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.findById(req.body._id);
    try {
      if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        if (req.body.password) {
          user.password = bcrypt.hashSync(req.body.password, 8);
        }
        const updatedUser = await user.save();

        res.status(200).send({
          status: "success",
          data: {
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            token: generateToken(updatedUser),
          },
        });
      } else {
        res.status(404).send({
          status: "error",
          type: "email",
          message: "User not found!",
        });
      }
    } catch (error) {
      res.status(401).send({
        status: "error",
        type: "email",
        message: error.message,
      });
    }
  }
);

userRouter.get("/", getAllUsers);
userRouter.post("/signin", userSignin);
userRouter.post("/signup", userSignup);
userRouter.put("/update", userUpdate);

export default userRouter;
