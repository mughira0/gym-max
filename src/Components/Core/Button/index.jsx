import React from "react";
import classes from "./Button.module.css";

const Button = ({
  label,
  className,
  onClick,
  disabled,
  customStyle,
  variant = "primary",
  leftIcon,
}) => {
  const Icon = leftIcon;
  return (
    <>
      <button
        style={customStyle}
        disabled={disabled}
        onClick={onClick}
        data-variant={variant}
        className={[classes.button, className && className].join(" ")}
      >
        {Icon && <Icon size={25} color="green" />}
        {label}
      </button>
    </>
  );
};

export default Button;
