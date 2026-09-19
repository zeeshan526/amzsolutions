import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "../_components/LegalPage";
import { AMZ_PHONE_DISPLAY } from "../_lib/contact";

export const metadata: Metadata = {
  title: "Accessibility Statement — AMZ Energy Systems",
  description:
    "How AMZ Energy Systems works to keep this website usable for everyone, what we have built in, where we know we fall short, and how to tell us about a barrier.",
};

const UPDATED = "20 September 2026";

const SECTIONS: LegalSection[] = [
  {
    heading: "Our commitment",
    body: [
      "AMZ Energy Systems wants this website to be usable by as many people as possible, including people who browse with a screen reader, navigate by keyboard, rely on captions, or need larger text and stronger contrast. Accessibility is treated as part of building the site, not as a pass at the end.",
      "We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA. That standard is our working target as we continue to develop the site.",
    ],
  },
  {
    heading: "What we have built in",
    body: [
      "Across this site we have worked to provide:",
      {
        list: [
          "A structure built from real headings and landmarks, so screen reader users can move through a page by section rather than reading it end to end.",
          "Full keyboard operation, with a visible focus outline on every link, button and form field.",
          "Text and interface colours chosen to meet WCAG AA contrast against their backgrounds.",
          "Text labels on form fields, rather than placeholder text standing in for a label.",
          "Text alternatives for meaningful images, and decorative graphics hidden from assistive technology so they do not add noise.",
          "Layouts that reflow for narrow screens and for zoom, without requiring horizontal scrolling to read body text.",
          "Respect for the operating system's \"reduce motion\" setting — animation, including the scroll-driven video on the home page, is reduced or replaced with a still image when that setting is on.",
        ],
      },
    ],
  },
  {
    heading: "Where we know we fall short",
    body: [
      "Being honest about the gaps is more useful than claiming full conformance. We are currently aware that:",
      {
        list: [
          "Some manufacturer datasheets and submittal documents we link to are third-party PDFs that are not fully tagged for screen readers.",
          "A few technical diagrams convey information visually that is not yet fully described in text.",
          "Content on pages hosted by manufacturers, utility programmes and other third parties is outside our control and may not meet the same standard.",
        ],
      },
      "If you need information that sits behind one of these barriers, contact us and we will supply it in a format that works for you — including reading a datasheet over the phone or sending the figures as plain text.",
    ],
  },
  {
    heading: "Getting the information another way",
    body: [
      "Nothing on this site is the only route to what we do. If any page, document or tool is difficult for you to use, call us and a person will walk you through it, take your enquiry directly, or send the material in a different format. There is no separate process and no charge for this.",
    ],
  },
  {
    heading: "Tell us about a barrier",
    body: [
      "We would rather hear about a problem than leave it in place. When you get in touch, it helps if you can tell us the page address, what you were trying to do, and the browser or assistive technology you were using — though please do report a barrier even if you cannot supply those details.",
      "We aim to respond to accessibility reports within two business days, and to tell you either what we have fixed or when we expect to fix it.",
    ],
  },
  {
    heading: "How we assess the site",
    body: [
      "We review this site against WCAG 2.1 Level AA using a combination of automated checks and manual testing, including keyboard-only navigation and screen reader spot checks. Assessment is carried out by AMZ Energy Systems; the site has not yet been audited by an independent third party. New pages and features are checked before they go live, and feedback from visitors is treated as a defect report like any other.",
    ],
  },
  {
    heading: "Our buildings and our work",
    body: [
      "This statement covers this website. Accessibility in the buildings we work on is governed by the applicable building codes and the Americans with Disabilities Act, and is handled as part of the design and installation for each project. If you have an accessibility requirement relating to a site visit, a service call or a meeting with our team, tell us in advance and we will make arrangements.",
    ],
  },
  {
    heading: "Changes to this statement",
    body: [
      "We update this page as the site changes and as we close the gaps listed above. The date at the top shows when it last changed.",
    ],
  },
];

export default function AccessibilityPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Accessibility Statement"
      intro="What we have done to keep this site usable for everyone, where we know it still falls short, and how to reach a person if something gets in your way."
      updated={UPDATED}
      sections={SECTIONS}
      contactHeading="Report an accessibility barrier"
      contactIntro={`Call us on ${AMZ_PHONE_DISPLAY} or write to the address below. Tell us the page and what went wrong, and we will get you the information another way while we fix it.`}
    />
  );
}
