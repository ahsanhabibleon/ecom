import bcrypt from "bcryptjs";
interface userTypes {
  _id?: string;
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

interface storeItemTypes {
  _id?: string;
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

export const users: userTypes[] = [
  {
    name: "Basir",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456"),
    isAdmin: true,
  },
  {
    name: "John",
    email: "user@example.com",
    password: bcrypt.hashSync("123456"),
    isAdmin: false,
  },
];

export const data: storeItemTypes[] = [
  {
    title: "Gulu",
    category: "shirt",
    description: "This is the description",
    image: "https://via.placeholder.com/150",
    price: 56,
    inStock: 15,
    rating: {
      rate: 3,
      count: 65,
    },
  },
  {
    title: "Gulu",
    category: "shirt",
    description: "This is the description",
    image: "https://via.placeholder.com/150",
    price: 56,
    inStock: 3,
    rating: {
      rate: 4.1,
      count: 65,
    },
  },
  {
    title: "Gulu",
    category: "pant",
    description: "This is the description",
    image: "https://via.placeholder.com/150",
    price: 56,
    inStock: 0,
    rating: {
      rate: 4.1,
      count: 65,
    },
  },
  {
    title: "Gulu",
    category: "trouser",
    description: "This is the description",
    image: "https://via.placeholder.com/150",
    price: 56,
    inStock: 15,
    rating: {
      rate: 4.1,
      count: 65,
    },
  },
  {
    title: "Gulu",
    category: "shirt",
    description: "This is the description",
    image: "https://via.placeholder.com/150",
    price: 56,
    inStock: 0,
    rating: {
      rate: 4.1,
      count: 65,
    },
  },
  {
    title: "Gulu",
    category: "t-shirt",
    description: "This is the description",
    image: "https://via.placeholder.com/150",
    price: 56,
    inStock: 15,
    rating: {
      rate: 4.1,
      count: 65,
    },
  },
  {
    title: "Gulu",
    category: "t-shirt",
    description: "This is the description",
    image: "https://via.placeholder.com/150",
    price: 56,
    inStock: 2,
    rating: {
      rate: 4.1,
      count: 65,
    },
  },
  {
    title: "Gulu",
    category: "t-shirt",
    description: "This is the description",
    image: "https://via.placeholder.com/150",
    price: 56,
    inStock: 15,
    rating: {
      rate: 4.1,
      count: 65,
    },
  },
  {
    title: "Gulu",
    category: "t-shirt",
    description: "This is the description",
    image: "https://via.placeholder.com/150",
    price: 56,
    inStock: 1,
    rating: {
      rate: 4.1,
      count: 65,
    },
  },
  {
    title: "Gulu",
    category: "t-shirt",
    description: "This is the description",
    image: "https://via.placeholder.com/150",
    price: 56,
    inStock: 0,
    rating: {
      rate: 4.1,
      count: 65,
    },
  },
  {
    title: "Gulu",
    category: "t-shirt",
    description: "This is the description",
    image: "https://via.placeholder.com/150",
    price: 56,
    inStock: 15,
    rating: {
      rate: 4.1,
      count: 65,
    },
  },
  {
    title: "Gulu",
    category: "t-shirt",
    description: "This is the description",
    image: "https://via.placeholder.com/150",
    price: 56,
    inStock: 2,
    rating: {
      rate: 4.1,
      count: 65,
    },
  },
  {
    title: "Gulu",
    category: "t-shirt",
    description: "This is the description",
    image: "https://via.placeholder.com/150",
    price: 56,
    inStock: 0,
    rating: {
      rate: 4.1,
      count: 65,
    },
  },
  {
    title: "Gulu",
    category: "t-shirt",
    description: "This is the description",
    image: "https://via.placeholder.com/150",
    price: 56,
    inStock: 15,
    rating: {
      rate: 4.1,
      count: 65,
    },
  },
];
