import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "../_components/LegalPage";
import { AMZ_PHONE_DISPLAY } from "../_lib/contact";

export const metadata: Metadata = {
  title: "Terms of Use — AMZ Energy Systems",
  description:
    "The terms that apply when you use the AMZ Energy Systems website, including how to treat the technical guidance, selection tools and product information published here.",
};

const UPDATED = "20 September 2026";

const SECTIONS: LegalSection[] = [
  {
    heading: "About these terms",
    body: [
      "These terms apply to your use of this website, operated by AMZ Energy Systems. By browsing the site, submitting an enquiry or using any tool published here, you accept them. If you do not accept them, please do not use the site.",
      "These terms cover the website only. Work we carry out for you — supply, installation, commissioning, service or incentive administration — is governed by the quote, proposal or contract we sign with you. Where those documents and this page disagree, the signed documents control.",
    ],
  },
  {
    heading: "Nothing here is a design",
    body: [
      "The technical material on this site — selection guidance, capacity and performance figures, sequences, schematics, specifier tools and line-card information — is published to help you shortlist equipment and frame a conversation with our engineers. It is general reference, not engineering advice for your building.",
      "No page on this site constitutes a design, a stamped submittal, a load calculation or a commissioning certificate for any specific project. Sizing and selection depend on measured load, site conditions, controls, the applicable code edition and the rest of the mechanical system. Always have a qualified engineer of record confirm any selection before it is specified, purchased or installed.",
    ],
  },
  {
    heading: "Product and availability information",
    body: [
      "Manufacturers change specifications, model numbers, ratings, certifications and availability without notifying us. Product information here may be superseded at any time, and inclusion of a manufacturer or product is not a commitment that we can supply it, or supply it at a given price or lead time.",
      "Prices, lead times and incentive values shown or discussed on this site are indicative. Only a written quote from us is binding, and only for the period and on the conditions that quote states.",
    ],
  },
  {
    heading: "Utility incentives and rebates",
    body: [
      "Incentive and rebate information is summarised from utility and programme documentation that changes frequently. Eligibility, funding availability, measure lists and payment amounts are set by the programme administrator, not by us. We will tell you what we understand a programme to offer and, where you engage us to, administer the application — but we cannot guarantee approval, timing or the amount paid.",
    ],
  },
  {
    heading: "Using this site",
    body: [
      "You may read this site and download or print pages for your own reference or for a project you are working on. You may not:",
      {
        list: [
          "Copy, republish or redistribute substantial parts of the site as your own material, or present our content as another party's work.",
          "Use the site or any tool on it to develop a competing product, service or dataset.",
          "Scrape, harvest or bulk-download content, or use automated means that place an unreasonable load on the site.",
          "Interfere with the site's operation or security, or attempt to gain access to systems or data you are not authorised to reach.",
          "Submit anything unlawful, misleading, infringing or malicious through a form on this site.",
        ],
      },
    ],
  },
  {
    heading: "Intellectual property",
    body: [
      "The content, layout, graphics and code of this site belong to AMZ Energy Systems or our licensors, and are protected by copyright and other intellectual property law. Manufacturer names, product names and logos belong to their respective owners and appear here to identify the lines we carry — their presence does not imply their endorsement of us, or ours of them, beyond the distribution and partnership arrangements we describe.",
    ],
  },
  {
    heading: "Enquiries and material you send us",
    body: [
      "Please keep enquiries to what we need in order to help: the building, the problem and how to reach you. Do not send confidential, proprietary or personal information through this website that you would not want handled by email — call us instead and we will arrange a suitable route.",
      "Information you submit through this site is handled as described in our Privacy Policy. Sending an enquiry does not by itself create a contract, a professional engagement or a duty of care on our part; those begin when we agree work in writing.",
    ],
  },
  {
    heading: "Availability of the site",
    body: [
      "We aim to keep this site available and current, but we do not guarantee that it will be uninterrupted, error-free or up to date at any given moment. We may change, suspend or withdraw any part of it without notice. Our 24/7 emergency line, not this website, is the route for urgent service.",
    ],
  },
  {
    heading: "Links to other sites",
    body: [
      "We link to manufacturers, utility programmes, standards bodies and other third parties for your convenience. We do not control those sites and are not responsible for their content, accuracy or availability. A link is not an endorsement of everything on the site it points to.",
    ],
  },
  {
    heading: "Limitation of liability",
    body: [
      "To the fullest extent permitted by law, this site and its content are provided \"as is\", without warranties of any kind, express or implied, including any implied warranty of merchantability, fitness for a particular purpose or non-infringement.",
      "To the fullest extent permitted by law, AMZ Energy Systems will not be liable for any indirect, incidental, special or consequential loss, or for lost profits, lost savings, business interruption or equipment damage, arising from your use of this site or from reliance on information published here. Nothing in these terms limits liability that cannot be limited under applicable law, and nothing here affects the terms of any contract we have signed with you.",
    ],
  },
  {
    heading: "Governing law",
    body: [
      "These terms are governed by the laws of the Commonwealth of Pennsylvania, without regard to its conflict-of-law rules, and the courts of Pennsylvania have jurisdiction over any dispute about this website.",
    ],
  },
  {
    heading: "Changes to these terms",
    body: [
      "We may revise these terms as the site and our services change. The date at the top shows when they last changed, and the version published here is the one that applies to your use of the site.",
    ],
  },
];

export default function TermsOfUsePage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Use"
      intro="The rules for using this website, and the limits of the technical information published on it."
      updated={UPDATED}
      sections={SECTIONS}
      contactHeading="Questions about these terms"
      contactIntro={`If anything here is unclear, or you want to confirm whether guidance on this site applies to your building, call us on ${AMZ_PHONE_DISPLAY} or write to the address below.`}
    />
  );
}
