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
    "border focus:ring-1 focus:ring-blue-500 rounded-md py-4 px-3";

  let variantStyles = "";
  if (variant === "outlined") {
    variantStyles = "border-gray-400";
  } else if (variant === "filled") {
    variantStyles = "bg-gray-100";
  }

  const fullWidthStyles = fullWidth ? "w-full" : "";

  return (
    <div>
      <input
        value={value}
        type="text"
        className={`${baseStyles} ${variantStyles} ${fullWidthStyles} ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        placeholder={label}
        {...rest}
      />
      {error && <p className="text-red-500 text-xs mt-1 ml-3">{helperText}</p>}
    </div>
  );
}

export default TextField;
