import React from "react";
function TextField({
  value,
  label,
  variant,
  fullWidth,
  error,
  helperText,
  ...rest
}) {
  const baseStyles =
    "border-2  focus:ring-2 focus:ring-[#ff90e8]   rounded-md py-4 px-3";

  let variantStyles = "";
  if (variant === "outlined") {
    variantStyles = "border-black";
  } else if (variant === "filled") {
    variantStyles = "bg-black";
  }

  const fullWidthStyles = fullWidth ? "w-full" : "";

  return (
    <div className="">
      <input
        value={value}
        type="text"
        className={`${baseStyles} focus:border-none focus:outline-none ${variantStyles} ${fullWidthStyles}  ${
          error ? "border-red-500" : "border-black"
        }`}
        placeholder={label}
        {...rest}
      />
      {error && <p className="ml-3 mt-1 text-xs text-red-500">{helperText}</p>}
    </div>
  );
}

export default TextField;
