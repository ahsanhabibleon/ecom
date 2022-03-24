import classNames from "classnames";
import { forwardRef, useState } from "react";
import { InputProps } from "./Input.types";
import "./Input.scss";

const Input: React.FC<InputProps> = forwardRef((props, ref) => {
  //useState is a hook that allows us to create a state variable
  const [showPassword, setShowPassword] = useState(false);

  //toggleShowPassword is a function that will toggle the state of showPassword
  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  //classNames
  const classes = classNames(
    {
      "form-group": true,
      disabled: props.disabled,
    },
    ...(props.className ? [props.className] : [])
  );

  const getInputType = () => {
    if (props.type === "password") {
      return showPassword ? "text" : "password";
    } else {
      return props.type;
    }
  };

  const inputProps: InputProps = {
    type: getInputType(),
    name: props.name,
    id: props.id,
    placeholder: props.placeholder,
    required: props.required,
    autoComplete: props.autoComplete || "off",
    onChange: props.onChange,
    onBlur: props.onBlur,
    value: props.value,
    pattern: props.pattern,
    title: props.title,
  };

  return (
    <div className={classes}>
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <input {...inputProps} ref={ref} />
      {props.type === "password" && (
        <i
          className={`fa-regular fa-eye${showPassword ? "" : "-slash"}`}
          onClick={toggleShowPassword}
        />
      )}
      {props.error?.type === props.type && (
        <p className="form-message color-danger">{props.error?.message}</p>
      )}
    </div>
  );
});

export default Input;
