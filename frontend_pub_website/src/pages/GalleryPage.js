import React, { useMemo } from "react";
import { Section } from "../components/Section";

// PUBLIC_INTERFACE
export function GalleryPage() {
  const images = useMemo(
    () =>
      Array.from({ length: 9 }).map((_, idx) => ({
        id: idx + 1,
        label: `Gallery image placeholder ${idx + 1}`,
      })),
    []
  );

  return (
    <div className="container">
      <header className="pageHeader">
        <h1 className="pageTitle">Gallery</h1>
        <p className="pageLead">
          A glimpse of the atmosphere—warm lighting, friendly faces, and a proper pub feel (placeholders for now).
        </p>
      </header>

      <Section
        kicker="Snapshots"
        title="Inside the pub"
        subtitle="Placeholder tiles—swap with real photography when available."
      >
        <div className="imageGrid" aria-label="Gallery grid">
          {images.map((img) => (
            <div key={img.id} className="imagePlaceholder" role="img" aria-label={img.label}>
              {img.label}
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
