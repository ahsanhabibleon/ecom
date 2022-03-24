import jwt from 'jsonwebtoken';
import { userType } from './models/userModal';

export const generateToken = (user: userType) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET,
    { expiresIn: "30d" }
  );
};