import mongoose from "mongoose";
export interface userType {
  _id?: string;
  name?: string;
  email?: string;
  password?: string;
  isAdmin?: boolean;
}

const userSchema = new mongoose.Schema<userType>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
export default User;
