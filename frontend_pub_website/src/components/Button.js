import React from "react";

/**
 * Maps a variant name to CSS class names.
 * Keeping this local avoids any external UI libraries and centralizes styling.
 */
function getVariantClass(variant) {
  switch (variant) {
    case "secondary":
      return "btn btn--secondary";
    case "ghost":
      return "btn btn--ghost";
    case "link":
      return "btn btn--link";
    case "primary":
    default:
      return "btn btn--primary";
  }
}

// PUBLIC_INTERFACE
export function Button({
  as = "button",
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  /**
   * A small polymorphic button:
   * - as="button" (default)
   * - as="a" for links (e.g., tel:, mailto:, external)
   */
  const Component = as;
  const variantClass = getVariantClass(variant);

  return (
    <Component className={`${variantClass} ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
}
