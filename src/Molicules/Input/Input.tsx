import { forwardRef } from "react";
import { InputProps } from "./Input.types";

const Input: React.FC<InputProps> = forwardRef((props, ref) => {
  return <input {...props} />;
});

export default Input;
