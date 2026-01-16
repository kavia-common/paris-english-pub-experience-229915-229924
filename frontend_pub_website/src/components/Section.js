import React from "react";

// PUBLIC_INTERFACE
export function Section({ kicker, title, subtitle, actions, children }) {
  return (
    <section className="section">
      <div className="container">
        {(kicker || title || subtitle || actions) && (
          <header className="section__header">
            <div>
              {kicker ? <div className="section__kicker">{kicker}</div> : null}
              {title ? <h2 className="section__title">{title}</h2> : null}
              {subtitle ? <p className="section__subtitle">{subtitle}</p> : null}
            </div>
            {actions ? <div>{actions}</div> : null}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
