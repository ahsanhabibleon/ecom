import mongoose from "mongoose";
const { Schema } = mongoose;
interface storeItemTypes {
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
  inStock: number;
  rating: {
    rate: number;
    count: number;
  };
}

const productSchema = new Schema<storeItemTypes>(
  {
    title: { type: String, required: true },
    category: { type: String },
    description: { type: String },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    inStock: { type: Number, required: true },
    rating: {
      rate: { type: Number },
      count: { type: Number },
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model<storeItemTypes>("Product", productSchema);
export default Product;
