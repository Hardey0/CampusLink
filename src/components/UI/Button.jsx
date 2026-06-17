import React from "react";

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const baseStyles = "font-medium font-sans";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary-strong active:bg-primary/90 cursor-pointer",

    primaryLight: "bg-primary-soft text-primary hover:bg-primary hover:text-white cursor-pointer",

    accent: "bg-accent text-white hover:bg-accent-strong active:bg-accent/80 cursor-pointer",

    accentLight: "bg-accent-soft text-accent hover:bg-accent hover:text-white cursor-pointer",

    secondary: "bg-secondary text-text hover:bg-secondary/50 active:bg-secondary/90 cursor-pointer",

    danger: "bg-danger text-white hover:bg-danger/80 active:bg-danger/90 cursor-pointer",

    dangerLight: "bg-danger-soft/50 text-danger-strong hover:bg-danger  hover:text-white cursor-pointer",

    ghost: "bg-primary-soft text-primary hover:bg-primary/80 active:bg-primary/20 cursor-pointer",

    card: "bg-card border border-border text-muted hover:bg-card/90 active:bg-card/80 cursor-pointer",
  };

 const sizes = {
  sm: "text-button-sm px-[var(--btn-px-sm)] py-[var(--btn-py-sm)]",
  
  md: "text-button-md px-[var(--btn-px-md)] py-[var(--btn-py-md)]",
  
  lg: "text-button-lg px-[var(--btn-px-lg)] py-[var(--btn-py-lg)]",
};

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
