import React from "react";
import { Button } from "./Button";

// PUBLIC_INTERFACE
export function Hero() {
  return (
    <section className="hero" aria-label="Welcome">
      <div className="container">
        <div className="hero__card">
          <div className="hero__inner">
            <div>
              <div className="badge" aria-label="Neighborhood vibe">
                🇬🇧 English hospitality • 🇫🇷 Paris energy
              </div>
              <h1 className="hero__title">Welcome to Paris English Pub</h1>
              <p className="hero__lead">
                A vibrant, cozy home for pints, pub classics, and live nights—where local regulars
                and curious travelers meet for a proper English pub atmosphere with a Parisian
                twist.
              </p>

              <div className="hero__actions">
                <Button as="a" href="/booking" variant="primary">
                  Book a Table
                </Button>
                <Button as="a" href="/menu" variant="secondary">
                  Explore the Menu
                </Button>
                <Button as="a" href="/events" variant="ghost">
                  See Events
                </Button>
              </div>
            </div>

            <div className="hero__media" role="img" aria-label="Hero background image placeholder">
              <div className="hero__mediaText">
                Background image placeholder
                <br />
                (warm pub interior / street-front in Paris)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
