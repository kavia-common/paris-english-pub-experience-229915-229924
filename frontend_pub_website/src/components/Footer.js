import React, { useMemo } from "react";

function getEnv(name) {
  // CRA exposes env vars via process.env.REACT_APP_*
  // If missing, we fall back to placeholders.
  return (process.env && process.env[name]) || "";
}

// PUBLIC_INTERFACE
export function Footer() {
  const links = useMemo(() => {
    const instagram = getEnv("REACT_APP_INSTAGRAM_URL") || "#";
    const facebook = getEnv("REACT_APP_FACEBOOK_URL") || "#";
    const tripadvisor = getEnv("REACT_APP_TRIPADVISOR_URL") || "#";

    return [
      { href: instagram, label: "Instagram" },
      { href: facebook, label: "Facebook" },
      { href: tripadvisor, label: "Tripadvisor" },
    ];
  }, []);

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__inner">
          <div>
            <h3 className="footer__title">Paris English Pub</h3>
            <p className="footer__text">
              A cozy English-style pub in the heart of Paris—pints, classics, and a friendly crowd.
            </p>
          </div>

          <div>
            <h3 className="footer__title">Visit</h3>
            <ul className="footer__list">
              <li className="footer__text">📍 12 Rue de Example, 75002 Paris</li>
              <li className="footer__text">🕒 Mon–Thu: 16:00–00:00</li>
              <li className="footer__text">🕒 Fri–Sat: 12:00–02:00</li>
              <li className="footer__text">🕒 Sun: 12:00–23:00</li>
            </ul>
          </div>

          <div>
            <h3 className="footer__title">Social</h3>
            <ul className="footer__list">
              {links.map((l) => (
                <li key={l.label}>
                  <a className="footer__link" href={l.href} target="_blank" rel="noreferrer">
                    {l.label} <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="footer__text" style={{ marginTop: 12 }}>
              Links are placeholders unless configured via environment variables.
            </p>
          </div>
        </div>

        <div className="footer__bottom">
          © {new Date().getFullYear()} Paris English Pub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
