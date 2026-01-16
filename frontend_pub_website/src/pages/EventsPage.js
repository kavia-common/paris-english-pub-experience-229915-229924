import React, { useMemo } from "react";
import { Card } from "../components/Card";
import { Section } from "../components/Section";
import { Button } from "../components/Button";

// PUBLIC_INTERFACE
export function EventsPage() {
  const events = useMemo(
    () => [
      {
        title: "Quiz Night",
        when: "Every Wednesday • 20:00",
        detail: "Bring a team (or join one). Prizes and pub glory await. (Details placeholder)",
      },
      {
        title: "Live Music",
        when: "Fridays • 21:30",
        detail: "Acoustic sets and upbeat covers—perfect with a pint. (Line-up placeholder)",
      },
      {
        title: "Premier League Screenings",
        when: "Weekends • kick-off times vary",
        detail: "Big screen, big atmosphere, and classic match-day snacks. (Schedule placeholder)",
      },
      {
        title: "Seasonal Specials",
        when: "Monthly • dates TBA",
        detail: "Rotating themed nights (St. Patrick’s, Oktoberfest, etc.). (Dates placeholder)",
      },
    ],
    []
  );

  return (
    <div className="container">
      <header className="pageHeader">
        <h1 className="pageTitle">Events</h1>
        <p className="pageLead">
          There’s always something on—recurring nights, seasonal celebrations, and big match
          screenings.
        </p>
      </header>

      <Section
        kicker="Calendar"
        title="Recurring & seasonal events"
        subtitle="Dates/times are placeholders. Check back soon for the live schedule."
        actions={
          <Button as="a" href="/booking" variant="secondary" aria-label="Book for an event night">
            Book for an event
          </Button>
        }
      >
        <div className="grid grid--2">
          {events.map((e) => (
            <Card key={e.title} clickable>
              <div className="badge" style={{ marginBottom: 12 }}>
                {e.when}
              </div>
              <h3 style={{ marginTop: 0 }}>{e.title}</h3>
              <p style={{ margin: 0, color: "var(--color-muted)", lineHeight: 1.6 }}>{e.detail}</p>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
