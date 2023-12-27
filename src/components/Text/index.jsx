import React from "react";

const sizeClasses = {
  txtPoppinsMedium13Bluegray300: "font-medium font-poppins",
  txtPoppinsMedium13Bluegray30001: "font-medium font-poppins",
  txtPoppinsMedium13Black900: "font-medium font-poppins",
  txtPoppinsSemiBold17Gray90002: "font-poppins font-semibold",
  txtPoppinsRegular12Bluegray400: "font-normal font-poppins",
  txtPoppinsMedium13AmberA700: "font-medium font-poppins",
  txtPoppinsRegular12WhiteA700: "font-normal font-poppins",
  txtPoppinsSemiBold20WhiteA700: "font-poppins font-semibold",
  txtPoppinsExtraBold30: "font-extrabold font-poppins",
  txtPoppinsMedium13: "font-medium font-poppins",
  txtPoppinsMedium11AmberA700: "font-medium font-poppins",
  txtPoppinsMedium12Bluegray40001: "font-medium font-poppins",
  txtPoppinsSemiBold14: "font-poppins font-semibold",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtPoppinsMedium11: "font-medium font-poppins",
  txtPoppinsRegular13: "font-normal font-poppins",
  txtPoppinsMedium12: "font-medium font-poppins",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtPoppinsSemiBold12: "font-poppins font-semibold",
  txtPoppinsSemiBold17: "font-poppins font-semibold",
  txtPoppinsSemiBold18: "font-poppins font-semibold",
  txtPoppinsMedium18: "font-medium font-poppins",
  txtPoppinsMedium13Bluegray200: "font-medium font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
