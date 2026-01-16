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
  if (!values.message.trim()) errors.message = "Message is required.";
  return errors;
}

// PUBLIC_INTERFACE
export function ContactPage() {
  const initial = useMemo(
    () => ({
      name: "",
      email: "",
      message: "",
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

    if (Object.keys(errors).length > 0) return;

    // eslint-disable-next-line no-console
    console.log("Contact submitted (no-op):", values);
    setValues(initial);
    setTouched({});
  }

  const showError = (key) => (touched[key] || submitted ? errors[key] : "");

  return (
    <div className="container">
      <header className="pageHeader">
        <h1 className="pageTitle">Contact</h1>
        <p className="pageLead">
          Questions, private bookings, or a quick hello—drop us a message. This form is a no-op (logs to console).
        </p>
      </header>

      <Section
        kicker="Get in touch"
        title="Contact details"
        subtitle="Placeholder details for now—update with real address/phone/email when ready."
      >
        <div className="grid grid--2">
          <Card>
            <h3 style={{ marginTop: 0 }}>Visit</h3>
            <p style={{ margin: 0, color: "var(--color-muted)", lineHeight: 1.7 }}>
              12 Rue de Example, 75002 Paris
              <br />
              Metro nearby (placeholder).
            </p>

            <h3 style={{ marginTop: 22 }}>Call</h3>
            <p style={{ margin: 0, color: "var(--color-muted)", lineHeight: 1.7 }}>
              +33 1 23 45 67 89 (placeholder)
            </p>

            <h3 style={{ marginTop: 22 }}>Email</h3>
            <p style={{ margin: 0, color: "var(--color-muted)", lineHeight: 1.7 }}>
              hello@parisenglishpub.example (placeholder)
            </p>

            <div className="helpSurface" style={{ marginTop: 18 }} role="img" aria-label="Embedded map placeholder">
              Embedded map placeholder.
              <br />
              (Add a real map embed later.)
            </div>
          </Card>

          <Card>
            <h3 style={{ marginTop: 0 }}>Send a message</h3>
            <form className="form" onSubmit={onSubmit} noValidate aria-label="Contact form">
              <FormField label="Name" htmlFor="contactName" required error={showError("name")}>
                <input
                  id="contactName"
                  name="name"
                  className="input"
                  value={values.name}
                  onChange={onChange}
                  onBlur={onBlur}
                  required
                  autoComplete="name"
                />
              </FormField>

              <FormField label="Email" htmlFor="contactEmail" required error={showError("email")}>
                <input
                  id="contactEmail"
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

              <FormField label="Message" htmlFor="contactMessage" required error={showError("message")}>
                <textarea
                  id="contactMessage"
                  name="message"
                  className="textarea"
                  value={values.message}
                  onChange={onChange}
                  onBlur={onBlur}
                  required
                />
              </FormField>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Button type="submit" variant="primary">
                  Send message
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
        </div>
      </Section>
    </div>
  );
}
