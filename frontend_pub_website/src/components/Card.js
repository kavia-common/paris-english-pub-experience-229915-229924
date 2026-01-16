import React from "react";

// PUBLIC_INTERFACE
export function Card({ className = "", clickable = false, children, ...props }) {
  const clickableClass = clickable ? "card card--clickable" : "card";
  return (
    <div className={`${clickableClass} ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}
