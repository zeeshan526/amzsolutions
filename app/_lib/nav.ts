/* Shared site navigation — the header, mobile menu and footer all read from here so a
   link only ever needs to change in one place. Anchors are rooted at "/" so they still
   resolve correctly from pages other than the homepage. */

export const AMZ_TECH_MENU = [
  { label: "Products by System Type", href: "/products-by-system-type" },
  { label: "Products by Manufacturer", href: "/manufacturers" },
  { label: "Installation Services", href: "/installation-services" },
  { label: "Utility Incentive Management", href: "/utility-incentive-management" },
] as const;

/* Title Case throughout — these are labels, not sentences. */
export const AMZ_NAV_LINKS = [
  { label: "Markets", href: "/#verticals" },
  { label: "Partners", href: "/#partners" },
  { label: "How We Work", href: "/#positioning" },
  { label: "Impact", href: "/#impact" },
] as const;

export const AMZ_FOOTER_COLUMNS = [
  {
    heading: "Technologies & Services",
    links: [
      { label: "Products by System Type", href: "/products-by-system-type" },
      { label: "Products by Manufacturer", href: "/manufacturers" },
      { label: "Installation Services", href: "/installation-services" },
      { label: "Utility Incentive Management", href: "/utility-incentive-management" },
    ],
  },
  {
    heading: "Markets",
    links: [
      { label: "High-Rise Office & Residential", href: "/#verticals" },
      { label: "Hospitals", href: "/#verticals" },
      { label: "Data Centres", href: "/#verticals" },
      { label: "Schools", href: "/#verticals" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "How we work", href: "/#positioning" },
      { label: "Social impact", href: "/#impact" },
      { label: "Reviews", href: "/#testimonials" },
      { label: "Contact", href: "/#contact" },
    ],
  },
] as const;
