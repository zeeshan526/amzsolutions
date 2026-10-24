/* Shared site navigation, the header, mobile menu and footer all read from here so a
   link only ever needs to change in one place. Anchors are rooted at "/" so they still
   resolve correctly from pages other than the homepage. */

export const AMZ_TECH_MENU = [
  { label: "Products by System Type", href: "/products-by-system-type" },
  { label: "Products by Manufacturer", href: "/manufacturers" },
  { label: "Installation Services", href: "/installation-services" },
  { label: "Utility Incentive Management", href: "/utility-incentive-management" },
] as const;

/* The header ribbon lists the four Technologies & Services pages directly, followed by
   About; Markets Served, Insights and Contact were taken out of it at the client's request
   (contact now lives behind the "Contact Us" button). The rest stay reachable from the
   footer. */
export const AMZ_NAV_LINKS = [...AMZ_TECH_MENU, { label: "About", href: "/about" }] as const;

export const AMZ_CONTACT_HREF = "/contact";

export const AMZ_FOOTER_COLUMNS = [
  {
    heading: "Technologies & Services",
    links: [
      { label: "Overview", href: "/technologies-services" },
      { label: "Products by System Type", href: "/products-by-system-type" },
      { label: "Products by Manufacturer", href: "/manufacturers" },
      { label: "Installation Services", href: "/installation-services" },
      { label: "Utility Incentive Management", href: "/utility-incentive-management" },
    ],
  },
  {
    heading: "Markets Served",
    links: [
      { label: "Data Centers", href: "/#verticals" },
      { label: "Healthcare", href: "/#verticals" },
      { label: "High-Rise Residential", href: "/#verticals" },
      { label: "Education", href: "/#verticals" },
      { label: "Industrial & Manufacturing", href: "/#verticals" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "How We Work", href: "/how-we-work" },
      { label: "Social Impact", href: "/impact" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Insights", href: "/insights" },
      { label: "Line Card", href: "/line-card" },
      { label: "COSTARS Program", href: "/costars-program" },
    ],
  },
] as const;
