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
  disabled,
  large = false,
  leftIcon = "",
  rightIcon = "",
  btnText = false,
  full = false,
}) => {
  const buttonClasses = classNames({
    btn: true,
    "btn-primary": primary,
    "btn-secondary": secondary,
    "btn-text": btnText,
    "btn-full": full,
    disabled: disabled,
    large: large,
  });
  return (
    <button onClick={onClick} type={type} className={buttonClasses}>
      {leftIcon && leftIcon}
      {text && text}
      {rightIcon && rightIcon}
    </button>
  );
};

export default Button;
