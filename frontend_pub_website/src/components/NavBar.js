import React, { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./Button";

function getNavLinkClass({ isActive }) {
  return isActive ? "navlink navlink--active" : "navlink";
}

// PUBLIC_INTERFACE
export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = useMemo(
    () => [
      { to: "/", label: "Home", end: true },
      { to: "/menu", label: "Menu" },
      { to: "/events", label: "Events" },
      { to: "/gallery", label: "Gallery" },
      { to: "/booking", label: "Booking" },
      { to: "/contact", label: "Contact" },
    ],
    []
  );

  return (
    <div className="navbar" role="banner">
      <div className="container">
        <div className="navbar__inner">
          <NavLink
            to="/"
            className="brand"
            aria-label="Paris English Pub, go to Home"
            onClick={() => setIsOpen(false)}
          >
            <div className="brand__mark" aria-hidden="true" />
            <div className="brand__text">
              <div className="brand__name">Paris English Pub</div>
              <div className="brand__tagline">Classic English warmth • Parisian twist</div>
            </div>
          </NavLink>

          <div className="navbar__menuButton">
            <Button
              variant="ghost"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((v) => !v)}
            >
              {isOpen ? "Close" : "Menu"}
            </Button>
          </div>

          <nav className={`navlinks ${isOpen ? "navlinks--open" : ""}`} aria-label="Primary">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={getNavLinkClass}
                onClick={() => setIsOpen(false)}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
