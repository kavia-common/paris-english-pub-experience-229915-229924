import React from "react";
import { Card } from "../components/Card";
import { Hero } from "../components/Hero";
import { Section } from "../components/Section";
import { Button } from "../components/Button";

// PUBLIC_INTERFACE
export function HomePage() {
  return (
    <div>
      <Hero />

      <Section
        kicker="Highlights"
        title="What’s on at the pub"
        subtitle="A quick taste of what we’re serving this week—events, menu favorites, and easy booking."
      >
        <div className="grid grid--3">
          <Card clickable>
            <h3 style={{ marginTop: 0 }}>Upcoming Event</h3>
            <p style={{ color: "var(--color-muted)", lineHeight: 1.6 }}>
              Quiz Night (every Wednesday) — team prizes, great banter, and pints on tap.
            </p>
            <Button as="a" href="/events" variant="link" aria-label="View events">
              View events →
            </Button>
          </Card>

          <Card clickable>
            <h3 style={{ marginTop: 0 }}>Menu Favorites</h3>
            <p style={{ color: "var(--color-muted)", lineHeight: 1.6 }}>
              Pub classics, craft ales, and signature cocktails—something for every mood.
            </p>
            <Button as="a" href="/menu" variant="link" aria-label="Browse menu">
              Browse menu →
            </Button>
          </Card>

          <Card clickable>
            <h3 style={{ marginTop: 0 }}>Book a Table</h3>
            <p style={{ color: "var(--color-muted)", lineHeight: 1.6 }}>
              Planning a date, a birthday, or a match night? Reserve in under a minute.
            </p>
            <Button as="a" href="/booking" variant="link" aria-label="Go to booking">
              Book now →
            </Button>
          </Card>
        </div>
      </Section>

      <Section
        kicker="Hours"
        title="Opening hours"
        subtitle="Drop in for a pint after work or settle in for a late night."
      >
        <div className="grid grid--2">
          <Card>
            <h3 style={{ marginTop: 0 }}>This week</h3>
            <ul style={{ margin: 0, paddingLeft: 18, color: "var(--color-muted)", lineHeight: 1.75 }}>
              <li>Mon–Thu: 16:00–00:00</li>
              <li>Fri–Sat: 12:00–02:00</li>
              <li>Sun: 12:00–23:00</li>
            </ul>
          </Card>
          <Card>
            <h3 style={{ marginTop: 0 }}>Happy hour</h3>
            <p style={{ margin: 0, color: "var(--color-muted)", lineHeight: 1.6 }}>
              Weekdays 17:00–19:00 — selected ales & house cocktails (pricing placeholder).
            </p>
          </Card>
        </div>
      </Section>

      <Section
        kicker="Location"
        title="Find us in Paris"
        subtitle="A short walk from central metro lines—easy to reach, hard to leave."
        actions={
          <Button as="a" href="/contact" variant="secondary" aria-label="Contact and directions">
            Contact & directions
          </Button>
        }
      >
        <div className="helpSurface" role="img" aria-label="Map placeholder">
          Map placeholder (embedded map can be added later).<br />
          Address: 12 Rue de Example, 75002 Paris.
        </div>
      </Section>
    </div>
  );
}
