import React, { useMemo } from "react";
import { Card } from "../components/Card";
import { Section } from "../components/Section";

function Price({ value }) {
  return (
    <span style={{ fontWeight: 900, color: "var(--color-text)" }}>
      {value} <span style={{ fontWeight: 700, color: "var(--color-muted)" }}>€</span>
    </span>
  );
}

// PUBLIC_INTERFACE
export function MenuPage() {
  const data = useMemo(
    () => ({
      drinks: [
        { name: "Ales", items: [{ n: "London Pride (pint)", p: "8" }, { n: "ESB (pint)", p: "9" }] },
        { name: "Lagers", items: [{ n: "Premium Lager (pint)", p: "8" }, { n: "Helles (pint)", p: "8" }] },
        { name: "Ciders", items: [{ n: "Dry Apple Cider (pint)", p: "8" }, { n: "Pear Cider (pint)", p: "9" }] },
      ],
      spirits: [
        { n: "Whisky (single)", p: "7" },
        { n: "Gin (single)", p: "7" },
        { n: "Vodka (single)", p: "7" },
        { n: "Rum (single)", p: "7" },
      ],
      cocktails: [
        { n: "Espresso Martini", p: "12" },
        { n: "Old Fashioned", p: "12" },
        { n: "Negroni", p: "12" },
        { n: "Pimm’s Cup (seasonal)", p: "11" },
      ],
      food: [
        { n: "Fish & Chips", p: "16" },
        { n: "Bangers & Mash", p: "15" },
        { n: "Steak & Ale Pie", p: "17" },
        { n: "Ploughman’s Board", p: "14" },
      ],
    }),
    []
  );

  return (
    <div className="container">
      <header className="pageHeader">
        <h1 className="pageTitle">Menu</h1>
        <p className="pageLead">
          A curated selection of drinks and pub classics. Items and prices are placeholders for now.
        </p>
      </header>

      <Section
        kicker="Drinks"
        title="On tap & in bottles"
        subtitle="Ales, lagers, and ciders — served with proper pub care."
      >
        <div className="grid grid--3">
          {data.drinks.map((section) => (
            <Card key={section.name}>
              <h3 style={{ marginTop: 0 }}>{section.name}</h3>
              <ul style={{ margin: 0, paddingLeft: 18, color: "var(--color-muted)", lineHeight: 1.8 }}>
                {section.items.map((i) => (
                  <li key={i.n} style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                    <span>{i.n}</span>
                    <Price value={i.p} />
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        kicker="Spirits"
        title="House spirits"
        subtitle="The essentials—perfect for simple serves or classic mixers."
      >
        <div className="grid grid--2">
          {data.spirits.map((i) => (
            <Card key={i.n}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                <strong>{i.n}</strong>
                <Price value={i.p} />
              </div>
              <p style={{ margin: "10px 0 0", color: "var(--color-muted)", lineHeight: 1.6 }}>
                Served with your choice of mixer (placeholder).
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        kicker="Cocktails"
        title="Signature pours"
        subtitle="Balanced, bright, and a little bit bold."
      >
        <div className="grid grid--2">
          {data.cocktails.map((i) => (
            <Card key={i.n}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                <strong>{i.n}</strong>
                <Price value={i.p} />
              </div>
              <p style={{ margin: "10px 0 0", color: "var(--color-muted)", lineHeight: 1.6 }}>
                Ask our team for today’s twist (placeholder).
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        kicker="Food"
        title="Pub classics"
        subtitle="Comforting favorites—made for sharing and match nights."
      >
        <div className="grid grid--2">
          {data.food.map((i) => (
            <Card key={i.n}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                <strong>{i.n}</strong>
                <Price value={i.p} />
              </div>
              <p style={{ margin: "10px 0 0", color: "var(--color-muted)", lineHeight: 1.6 }}>
                Served with seasonal sides (placeholder).
              </p>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
