import React from "react";

const sizes = {
  "3xl": "text-[90px] font-bold leading-[106px]",
  "2xl": "text-[70px] font-bold leading-[83px]",
  xl: "text-[25px] font-semibold",
  "4xl": "text-[115px] font-bold leading-[148px]",
  s: "text-base font-extrabold",
  md: "text-lg font-semibold leading-[22px]",
  xs: "text-xs font-bold leading-[15px]",
  lg: "text-[23px] font-semibold leading-7",
};

const Heading = ({ children, className = "", size = "3xl", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-blue_gray-900_01 font-roboto font-[700] text-[70px] leading-[90px] md:text-[24px] md:leading-[28.13px] ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
