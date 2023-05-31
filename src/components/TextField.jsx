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
        className={`${baseStyles} focus:outline-none focus:border-none ${variantStyles} ${fullWidthStyles} ${
          error ? "border-red-500" : "border-black"
        }`}
        placeholder={label}
        {...rest}
      />
      {error && <p className="text-red-500 text-xs mt-1 ml-3">{helperText}</p>}
    </div>
  );
}

export default TextField;
