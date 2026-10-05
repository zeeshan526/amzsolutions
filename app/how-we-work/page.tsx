import type { Metadata } from "next";
import Link from "next/link";

import PageMasthead from "../_components/PageMasthead";
import SiteFooter from "../_components/SiteFooter";
import SiteHeader from "../_components/SiteHeader";

export const metadata: Metadata = {
  title: "How We Work — AMZ Energy Systems",
  description:
    "From walking the building to handing over the commissioning readings — the four-step process AMZ Energy Systems runs on every mechanical project, and what it gives the specifying engineer to check.",
};

const STEPS = [
  { n: "01", title: "Walk the building", text: "Plant room, risers, the zones that complain. Before any selection is made, we look at what's actually there — not what the as-builts say should be there." },
  { n: "02", title: "Measure and model", text: "Metered load where it exists, modelled where it doesn't — and we always say which. A selection built on an assumption gets the assumption labelled, not hidden." },
  { n: "03", title: "Specify together", text: "Options priced side by side, with the trade-off stated in plain terms: first cost against part-load efficiency, sound power against footprint, service life against lead time." },
  { n: "04", title: "Commission and hand over", text: "Start-up attended by the person who sized it, readings documented, one name to call afterwards — not a service desk ticket number." },
] as const;

const CHECKS = [
  {
    title: "Assumptions attached",
    text: "Every selection arrives with its load basis, part-load curve and sound data. Where we modelled instead of measured, the copy says so.",
  },
  {
    title: "In the design meeting, not just the bid",
    text: "We sit in the review while the scheme is still moving. If a cheaper line meets your spec, you hear it before submittals, not after.",
  },
  {
    title: "Schedules that stay current",
    text: "Equipment moves, spec sections don't. We keep the schedule and the blocks current, so today's spec still matches what lands on site.",
  },
  {
    title: "One engineer, start to finish",
    text: "The person who sized it attends start-up and signs the readings — one named contact, no handover to a service desk halfway through the job.",
  },
] as const;

export default function HowWeWorkPage() {
  return (
    <div style={{ fontFamily: "var(--font-body)", color: "#191C1F", background: "#FFFFFF" }}>
      <SiteHeader />
      <main id="main">
        <PageMasthead
          eyebrow="How We Work"
          title="We solve the mechanical problem with you, not for you"
          intro="Most mechanical problems arrive already half-diagnosed. The useful work happens in the room where the engineer, the contractor and the owner are all looking at the same numbers — so we start on the drawings, not the catalogue."
          stats={[
            { label: "Process steps", value: "4" },
            { label: "Named contact", value: "Start to finish" },
          ]}
        />

        <section style={{ padding: "clamp(56px,8vw,88px) 0" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
            <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,232px),1fr))", gap: 20 }}>
              {STEPS.map((s) => (
                <li key={s.n} className="amz-step-card" style={{ background: "#FFFFFF", border: "1px solid #E3E5E8", borderRadius: 16, padding: "30px 26px 26px" }}>
                  <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 34, lineHeight: 1, letterSpacing: "-.02em", fontVariantNumeric: "tabular-nums", color: "#AFD3F3", margin: "0 0 22px" }}>{s.n}</p>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 20, lineHeight: 1.35, margin: "0 0 10px" }}>{s.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: "#444444", margin: 0 }}>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section style={{ padding: "clamp(64px,9vw,96px) 0", background: "#191C1F", color: "#FFFFFF" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
            <div style={{ maxWidth: 660, margin: "0 auto clamp(40px,5vw,60px)", textAlign: "center" }}>
              <p style={{ fontFamily: "var(--font-display)", fontStretch: "75%", fontWeight: 700, fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", color: "#7DB9ED", margin: "0 0 16px" }}>
                For the design community
              </p>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.75rem,1.2rem + 2.2vw,2.75rem)", lineHeight: 1.1, letterSpacing: "-.016em", margin: "0 0 18px", color: "#FFFFFF" }}>
                Why mechanical engineers choose AMZ
              </h2>
              <p style={{ fontSize: "clamp(1.0625rem,.98rem + .35vw,1.25rem)", lineHeight: 1.6, color: "rgba(255,255,255,.78)", margin: 0 }}>
                Four things a specifier can check. Each one is something you receive, not something we claim.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: "clamp(16px,1.8vw,24px)" }}>
              {CHECKS.map((c, i) => (
                <article key={c.title} style={{ background: "#0F1418", border: "1px solid rgba(255,255,255,.10)", borderRadius: 16, padding: "26px 24px" }}>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, color: "#7DB9ED", margin: "0 0 14px" }}>{String(i + 1).padStart(2, "0")}</p>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 18, lineHeight: 1.35, margin: "0 0 10px", color: "#FFFFFF" }}>{c.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,.72)", margin: 0 }}>{c.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: "#0F4E85", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "relative", maxWidth: 1080, margin: "0 auto", padding: "clamp(48px,7vw,72px) clamp(20px,4vw,40px)", textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.5rem,1.2rem + 1.2vw,2rem)", lineHeight: 1.2, color: "#FFFFFF", margin: "0 0 16px" }}>
              Bring us the drawings, not just the equipment list
            </h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.6, color: "rgba(255,255,255,.86)", margin: "0 0 28px", maxWidth: "52ch", marginInline: "auto" }}>
              We&rsquo;d rather be in the design meeting than the bid pile.
            </p>
            <Link
              href="/#contact"
              className="amz-btn-accent"
              style={{ display: "inline-flex", alignItems: "center", gap: 10, height: 56, padding: "0 32px", borderRadius: 999, background: "#F99615", color: "#191C1F", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16, textDecoration: "none" }}
            >
              Start a project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#191C1F" strokeWidth="2.4" strokeLinecap="butt" strokeLinejoin="miter" aria-hidden="true">
                <path d="M4 12h16M14 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
