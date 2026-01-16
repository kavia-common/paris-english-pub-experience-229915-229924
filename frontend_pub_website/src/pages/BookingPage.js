import React, { useMemo, useState } from "react";
import { Card } from "../components/Card";
import { Section } from "../components/Section";
import { FormField } from "../components/FormField";
import { Button } from "../components/Button";

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Name is required.";
  if (!values.email.trim()) errors.email = "Email is required.";
  if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) errors.email = "Enter a valid email.";
  if (!values.phone.trim()) errors.phone = "Phone is required.";
  if (!values.date) errors.date = "Date is required.";
  if (!values.time) errors.time = "Time is required.";
  if (!values.partySize) errors.partySize = "Party size is required.";
  return errors;
}

// PUBLIC_INTERFACE
export function BookingPage() {
  const initial = useMemo(
    () => ({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      partySize: "2",
      notes: "",
    }),
    []
  );

  const [values, setValues] = useState(initial);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const errors = validate(values);

  function onChange(e) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  }

  function onBlur(e) {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
  }

  function onSubmit(e) {
    e.preventDefault();
    setSubmitted(true);

    if (Object.keys(errors).length > 0) {
      // Keep it simple: show errors and do nothing else.
      return;
    }

    // No backend call per requirements.
    // eslint-disable-next-line no-console
    console.log("Booking submitted (no-op):", values);
    setValues(initial);
    setTouched({});
  }

  const showError = (key) => (touched[key] || submitted ? errors[key] : "");

  return (
    <div className="container">
      <header className="pageHeader">
        <h1 className="pageTitle">Booking</h1>
        <p className="pageLead">
          Reserve a table for drinks, dinner, or match night. This form is a no-op (logs to console).
        </p>
      </header>

      <Section
        kicker="Reservations"
        title="Book a table"
        subtitle="Fields marked with * are required."
      >
        <div className="grid grid--2">
          <Card>
            <form className="form" onSubmit={onSubmit} noValidate aria-label="Booking form">
              <FormField label="Name" htmlFor="name" required error={showError("name")}>
                <input
                  id="name"
                  name="name"
                  className="input"
                  value={values.name}
                  onChange={onChange}
                  onBlur={onBlur}
                  required
                  autoComplete="name"
                />
              </FormField>

              <div className="formRow">
                <FormField label="Email" htmlFor="email" required error={showError("email")}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="input"
                    value={values.email}
                    onChange={onChange}
                    onBlur={onBlur}
                    required
                    autoComplete="email"
                  />
                </FormField>

                <FormField label="Phone" htmlFor="phone" required error={showError("phone")}>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="input"
                    value={values.phone}
                    onChange={onChange}
                    onBlur={onBlur}
                    required
                    autoComplete="tel"
                  />
                </FormField>
              </div>

              <div className="formRow">
                <FormField label="Date" htmlFor="date" required error={showError("date")}>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    className="input"
                    value={values.date}
                    onChange={onChange}
                    onBlur={onBlur}
                    required
                  />
                </FormField>

                <FormField label="Time" htmlFor="time" required error={showError("time")}>
                  <input
                    id="time"
                    name="time"
                    type="time"
                    className="input"
                    value={values.time}
                    onChange={onChange}
                    onBlur={onBlur}
                    required
                  />
                </FormField>
              </div>

              <FormField label="Party size" htmlFor="partySize" required error={showError("partySize")}>
                <select
                  id="partySize"
                  name="partySize"
                  className="select"
                  value={values.partySize}
                  onChange={onChange}
                  onBlur={onBlur}
                  required
                >
                  {["1", "2", "3", "4", "5", "6", "7", "8+"].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </FormField>

              <FormField
                label="Notes"
                htmlFor="notes"
                hint="Allergies, accessibility needs, or a special occasion (optional)."
              >
                <textarea
                  id="notes"
                  name="notes"
                  className="textarea"
                  value={values.notes}
                  onChange={onChange}
                  onBlur={onBlur}
                />
              </FormField>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Button type="submit" variant="primary">
                  Submit booking
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => {
                    setValues(initial);
                    setTouched({});
                    setSubmitted(false);
                  }}
                >
                  Reset
                </Button>
              </div>
            </form>
          </Card>

          <Card>
            <h3 style={{ marginTop: 0 }}>Booking notes</h3>
            <p style={{ color: "var(--color-muted)", lineHeight: 1.7, marginTop: 0 }}>
              This SPA uses static data only. When a backend is added, we’ll wire this form to send
              reservations and show confirmation.
            </p>
            <div className="helpSurface" style={{ marginTop: 16 }}>
              Tip: for larger groups or private hire, use the Contact page and include your preferred
              date/time.
            </div>
          </Card>
        </div>
      </Section>
    </div>
  );
}
