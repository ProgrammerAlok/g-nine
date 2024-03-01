import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded-[5px]",
  circle: "rounded-[50%]",
};
const variants = {
  outline: {
    white_A700: "border-white-A700 border border-solid",
    orange_A200_01: "border-orange-A200_01 border border-solid text-orange-A200_01",
  },
};
const sizes = {
  xs: "h-8 px-2",
  md: "h-12 px-5 text-base",
  sm: "h-11 px-3",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "circle",
  variant = "outline",
  size = "sm",
  color = "white_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round", "circle"]),
  size: PropTypes.oneOf(["xs", "md", "sm"]),
  variant: PropTypes.oneOf(["outline"]),
  color: PropTypes.oneOf(["white_A700", "orange_A200_01"]),
};

export { Button };
