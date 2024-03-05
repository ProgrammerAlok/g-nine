import React from "react";

const sizes = {
  xs: "text-[10px] font-medium",
  lg: "text-xl font-medium leading-[25px]",
  s: "text-base font-normal leading-[19px]",
  "2xl": "text-2xl font-medium leading-[29px]",
  "3xl": "text-[25px] font-normal",
  xl: "text-[22px] font-normal leading-[35px]",
  md: "text-lg font-normal leading-7",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-500_01 font-inter font-[400] text-[18px] md:text-[14px] leading-[28px] md:leading-[16.94px] ${className}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
