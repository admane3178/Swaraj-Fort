import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Additional Tailwind classes */
  className?: string;
  /** Children rendered inside the card */
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className, children, ...rest }) => {
  const baseClasses = "bg-card rounded-sm border border-border shadow-heritage overflow-hidden";
  return (
    <div className={cn(baseClasses, className)} {...rest}>
      {children}
    </div>
  );
};
