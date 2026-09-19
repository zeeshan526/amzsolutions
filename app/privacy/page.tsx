import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "../_components/LegalPage";
import { AMZ_PHONE_DISPLAY } from "../_lib/contact";

export const metadata: Metadata = {
  title: "Privacy Policy — AMZ Energy Systems",
  description:
    "How AMZ Energy Systems collects, uses and protects the information you share with us when you request a quote, contact our engineers or use this website.",
};

const UPDATED = "20 September 2026";

const SECTIONS: LegalSection[] = [
  {
    heading: "Who we are",
    body: [
      "AMZ Energy Systems supplies, installs and services commercial HVAC and mechanical systems for buildings across Eastern Pennsylvania, South Jersey and Delaware. This policy explains what we do with personal information when you use this website or get in touch with us about a project.",
      "In this policy, \"we\", \"us\" and \"our\" mean AMZ Energy Systems. \"You\" means anyone using this website or contacting us — building owners, facility teams, specifying engineers, contractors and anyone enquiring about our work.",
    ],
  },
  {
    heading: "Information we collect",
    body: [
      "We only ask for what we need to answer your enquiry and deliver work you have asked us to do. That falls into three groups:",
      {
        list: [
          "Information you give us directly — your name, company, job title, email address, phone number, site address, and whatever project detail you choose to include in an enquiry, a quote request, a submittal review or a newsletter sign-up.",
          "Project and service records — equipment schedules, load calculations, commissioning readings, site notes, service history and utility incentive paperwork produced while we work on your building.",
          "Technical information collected automatically — your IP address, browser type and the pages you visit here, gathered so we can keep the site working and understand which pages are useful.",
        ],
      },
      "We do not ask for sensitive categories of personal information, and we do not want you to send them. Please do not include payment card details, government identifiers or health information in an enquiry form or email.",
    ],
  },
  {
    heading: "How we use it",
    body: [
      "We use the information described above to:",
      {
        list: [
          "Respond to your enquiry, prepare quotes and answer specification questions.",
          "Deliver, install, commission and service the systems you engage us for.",
          "Apply for and administer utility incentives and rebates on your behalf, where you have asked us to.",
          "Keep records of the work we have performed on a building, including warranty and compliance documentation.",
          "Send occasional selection notes and specification updates, if you asked to receive them.",
          "Maintain the security of this website and improve how it works.",
        ],
      },
      "We do not sell personal information, and we do not rent or trade contact lists.",
    ],
  },
  {
    heading: "Marketing email",
    body: [
      "Our newsletter goes out a few times a year and carries selection notes and spec changes — not sales mail. You only receive it if you asked for it, and every message includes an unsubscribe link. Unsubscribing stops the newsletter; it does not stop us replying to an active enquiry or contacting you about work in progress.",
    ],
  },
  {
    heading: "Who we share it with",
    body: [
      "We share personal information only where it is needed to do the work or where the law requires it:",
      {
        list: [
          "Manufacturers and distributors, when a quote, order, warranty claim or technical escalation requires it.",
          "Utilities and programme administrators, when we are processing an incentive or rebate application you have asked us to handle.",
          "Subcontractors and service partners working with us on your site, limited to what they need to do their part of the job.",
          "Professional advisers, insurers and authorities, where we are legally obliged or need to establish or defend a legal claim.",
          "Service providers who host this website, deliver our email or keep our business records — acting on our instructions, not their own.",
        ],
      },
    ],
  },
  {
    heading: "How long we keep it",
    body: [
      "Enquiries that do not become projects are kept for a reasonable period while the opportunity is live, and then removed. Project records — drawings, schedules, commissioning data, incentive paperwork and service history — are kept for as long as we support the installed equipment and for as long afterwards as warranty, tax, insurance and legal obligations require. Newsletter subscriptions are kept until you unsubscribe.",
    ],
  },
  {
    heading: "How we protect it",
    body: [
      "We use reasonable administrative, technical and physical safeguards appropriate to the sensitivity of the information, and we limit access to staff and partners who need it for their work. No website or email system is perfectly secure, so please do not send confidential material to us through an unsecured channel — call us and we will arrange a better route.",
    ],
  },
  {
    heading: "Cookies and analytics",
    body: [
      "This site uses essential cookies so that pages load and your preferences — such as dismissing the cookie notice — are remembered. Where we use analytics, it is to understand which pages are read and where visitors run into trouble, not to build advertising profiles.",
      "You can block or delete cookies in your browser settings. Essential cookies cannot be switched off from within the site without affecting how it works, and blocking them in your browser may break parts of it.",
    ],
  },
  {
    heading: "Your choices and rights",
    body: [
      "You can ask us to tell you what personal information we hold about you, correct it if it is wrong, delete it where we are not required to keep it, or stop using it for marketing. Contact us using the details below and tell us what you would like done. We may need to confirm who you are before we act, and we will tell you if a legal or contractual obligation means we have to keep something.",
      "Depending on where you live, state law may give you additional rights over your personal information. We apply the choices described here to everyone who asks, regardless of where they are.",
    ],
  },
  {
    heading: "Children",
    body: [
      "This is a business-to-business website for commercial building work. It is not directed at children, and we do not knowingly collect personal information from anyone under 13. If you believe a child has sent us personal information, contact us and we will delete it.",
    ],
  },
  {
    heading: "Other websites",
    body: [
      "This site links to manufacturers, utility programmes and other third parties. Those organisations run their own websites under their own privacy policies, and we are not responsible for how they handle your information. Read their policies before sharing anything with them.",
    ],
  },
  {
    heading: "Changes to this policy",
    body: [
      "We will update this page when our practices change. The date at the top shows when it last changed. If a change materially affects how we use information you have already given us, we will take reasonable steps to tell you directly.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="What we collect when you contact us about a building, why we collect it, and what you can ask us to do with it."
      updated={UPDATED}
      sections={SECTIONS}
      contactHeading="Questions about your information"
      contactIntro={`To ask what we hold, correct it, delete it or opt out of marketing, call us on ${AMZ_PHONE_DISPLAY} or write to us at the address below. Tell us what you would like done and we will come back to you.`}
    />
  );
}
