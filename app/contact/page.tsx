import type { Metadata } from "next";

import ContactSection from "../_components/ContactSection";
import SiteFooter from "../_components/SiteFooter";
import SiteHeader from "../_components/SiteHeader";

export const metadata: Metadata = {
  title: "Contact Us | AMZ Energy Systems",
  description:
    "Send AMZ Energy Systems a message about your building, for engineers, building owners and contractors across Eastern Pennsylvania, South Jersey and Delaware.",
};

/* The page is the same Contact Us band the homepage ends on, padded down to clear the
   fixed header. */
export default function ContactPage() {
  return (
    <div style={{ fontFamily: "var(--font-body)", color: "#191C1F", background: "#0F4E85" }}>
      <SiteHeader />
      <main id="main" style={{ paddingTop: 96 }}>
        <ContactSection headingLevel="h1" />
      </main>
      <SiteFooter />
    </div>
  );
}
