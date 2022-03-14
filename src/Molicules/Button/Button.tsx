import classNames from "classnames";
import React from "react";
import { ButtonProps } from "./Button.types";
import "./Button.scss";

const Button: React.FC<ButtonProps> = ({
  text,
  type,
  primary = false,
  secondary = false,
  onClick,
  disabled
}) => {
  const buttonClasses = classNames({
    btn: true,
    "btn-primary": primary,
    "btn-secondary": secondary,
    "disabled": disabled,
  });
  return (
    <button onClick={onClick} type={type} className={buttonClasses}>
      {text}
    </button>
  );
};

export default Button;
