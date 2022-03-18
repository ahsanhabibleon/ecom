import express, { NextFunction, Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import User from "../models/userModal";
import bcrypt from "bcryptjs";
const userRoueter = express.Router();

const userSignin = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            if(bcrypt.compareSync(req.body.password, user.password)) {
                res.send({ 
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    isAdmin: user.isAdmin
                });
                return;
            }
        }
    res.send({ user });
  }
);

userRoueter.post("/", userSignin);

export default userRoueter;
