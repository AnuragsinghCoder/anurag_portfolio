import React from "react";

const baseClasses =
  "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-button bg-button text-foreground hover:bg-button/90 transition-colors duration-300 shadow-lg shadow-button/25";

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  default: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const Button = ({
  className = "",
  size = "default",
  children,
  ...props
}) => {
  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default Button;