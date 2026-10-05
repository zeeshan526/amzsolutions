/* Shared site navigation — the header, mobile menu and footer all read from here so a
   link only ever needs to change in one place. Anchors are rooted at "/" so they still
   resolve correctly from pages other than the homepage. */

export const AMZ_TECH_MENU = [
  { label: "Products by System Type", href: "/products-by-system-type" },
  { label: "Products by Manufacturer", href: "/manufacturers" },
  { label: "Installation Services", href: "/installation-services" },
  { label: "Utility Incentive Management", href: "/utility-incentive-management" },
] as const;

/* These four mirror the live site's own primary nav (Home / About Us / Technologies &
   Services / Markets Served / Insights / Contact / Line Card / COSTARS Program) — the
   four highest-traffic destinations after Technologies & Services get a header slot;
   the rest live in the footer so the header doesn't have to grow past its tested width.
   "Partners" was dropped entirely: it duplicated Products by Manufacturer, which is
   already one click away under Technologies & Services. */
export const AMZ_NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Markets Served", href: "/markets-served" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
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
    heading: "Markets Served",
    links: [
      { label: "Data Centers", href: "/markets-served?segment=data-center" },
      { label: "Healthcare", href: "/markets-served?segment=healthcare" },
      { label: "High-Rise Residential", href: "/markets-served?segment=high-rise-residential" },
      { label: "Education", href: "/markets-served?segment=education" },
      { label: "Industrial & Manufacturing", href: "/markets-served?segment=industrial-manufacturing" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "How We Work", href: "/how-we-work" },
      { label: "Social Impact", href: "/impact" },
      { label: "Reviews", href: "/#testimonials" },
      { label: "Contact", href: "/contact" },
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
