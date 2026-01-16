import React from "react";

// PUBLIC_INTERFACE
export function FormField({
  label,
  htmlFor,
  required = false,
  hint,
  error,
  children,
}) {
  return (
    <div>
      <label className="fieldLabel" htmlFor={htmlFor}>
        {label} {required ? <span aria-hidden="true">*</span> : null}
      </label>
      {children}
      {hint ? <div className="fieldHint">{hint}</div> : null}
      {error ? (
        <div className="fieldError" role="alert">
          {error}
        </div>
      ) : null}
    </div>
  );
}
