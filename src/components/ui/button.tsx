import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  /** If true, renders the child element (e.g., <Link>) with button classes */
  asChild?: boolean;
}

export const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  variant = "primary",
  className,
  children,
  asChild = false,
  ...props
}) => {
  const baseClasses = "px-4 py-2 rounded font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  const variantClasses =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:bg-primary/90"
      : "bg-secondary text-secondary-foreground hover:bg-secondary/90";
  const classes = cn(baseClasses, variantClasses, className);

  if (asChild && React.isValidElement(children)) {
    // Clone the child and merge className
    return React.cloneElement(children, {
      className: cn(children.props.className, classes),
      ...props,
    });
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
