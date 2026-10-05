/* The five segments from the live site's Markets Served page — four already had a
   homepage teaser and an image in /public/images/verticals; "Industrial & Manufacturing"
   is new here, so it gets an icon treatment instead of a stock photo we don't have. */

export type MarketSegment = {
  slug: string;
  title: string;
  short: string;
  img?: string;
  imgAlt?: string;
  summary: string;
  considerations: string[];
  relatedCategorySlug: string; // links into /products-by-system-type?category=
};

export const MARKET_SEGMENTS: MarketSegment[] = [
  {
    slug: "data-center",
    title: "Data Centers",
    short: "Data centers",
    img: "/images/verticals/datacenter.webp",
    imgAlt: "Data centre CRAH row",
    summary:
      "Cooling is the constraint that decides how much compute a data hall can actually carry — not the rack spec sheet. Redundancy has to be real rather than nominal, and the plant is judged on its worst hour, not its average one.",
    considerations: [
      "Energy efficiency at partial load, since most halls rarely run at design capacity",
      "N+1 or 2N redundancy on cooling, matched honestly to the electrical redundancy already committed to",
      "Rising rack density from AI and high-performance computing loads outpacing the original cooling design",
      "Operational cost reduction — PUE improvements that hold up in summer design conditions, not just shoulder-season weather",
    ],
    relatedCategorySlug: "dx-heat-recovery",
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    short: "Healthcare",
    img: "/images/verticals/hospital.webp",
    imgAlt: "Hospital air handling room",
    summary:
      "Pressure relationships, air-change rates and filtration aren't comfort features in a hospital — they're patient-safety and regulatory requirements that have to hold continuously and be provable on inspection.",
    considerations: [
      "Positive and negative pressure rooms maintained through equipment staging and phased replacement",
      "Air-change rates and filtration sized to the specific space class, not a single building-wide standard",
      "Pathogen and infection control designed into the air-side, not bolted on afterwards",
      "Zero-downtime phasing, since a hospital floor is rarely a candidate for a shutdown window",
    ],
    relatedCategorySlug: "humidity-control",
  },
  {
    slug: "high-rise-residential",
    title: "High-Rise Residential",
    short: "High-rise residential",
    img: "/images/verticals/office.webp",
    imgAlt: "High-rise office and residential chiller plant",
    summary:
      "Multifamily buildings carry a central plant, tenant turnover, and increasingly a decarbonization mandate from the city or the owner's own ESG targets — all at once, without emptying occupied floors to get there.",
    considerations: [
      "Heat pump technologies sized for all-electric or hybrid operation as gas-free targets phase in",
      "Radiant heating and cooling panels where duct space or floor-to-floor height won't allow ductwork",
      "Passive house and high-performance envelope coordination on new construction and deep retrofits",
      "Condenser water system upgrades that keep serving occupied units through a staged replacement",
    ],
    relatedCategorySlug: "heat-pumps",
  },
  {
    slug: "education",
    title: "Education",
    short: "Education",
    img: "/images/verticals/schools.webp",
    imgAlt: "School rooftop units",
    summary:
      "Indoor air quality now sits alongside test scores as something a district is measured on — inside a summer-shutdown window, a public budget cycle, and classrooms where noise matters as much as capacity.",
    considerations: [
      "Indoor air quality and ventilation rates tied to measurable student health and academic performance",
      "Noise floors low enough that a unit swap doesn't become the thing a teacher has to talk over",
      "A hard summer-shutdown window, with every trade sequenced to be done before the first day of school",
      "Public procurement timelines — where COSTARS membership shortens the path from approval to installed",
    ],
    relatedCategorySlug: "air-handlers-fan-coils",
  },
  {
    slug: "industrial-manufacturing",
    title: "Industrial & Manufacturing",
    short: "Industrial",
    summary:
      "Process load, not comfort load, usually drives the mechanical design here — so carbon reduction has to come from genuine efficiency gains and heat recovery, not from derating the system the plant actually depends on.",
    considerations: [
      "Heat pump technology applied to process or space heating where the economics support electrification",
      "Radiant heating solutions for high-bay spaces where forced air wastes energy heating the roof, not the floor",
      "Heat recovery from process exhaust rather than rejecting it and buying the equivalent energy back as heat",
      "Carbon-reduction upgrades phased around production schedules, not around a convenient shutdown that doesn't exist",
    ],
    relatedCategorySlug: "heat-rejection-heat-exchangers",
  },
];
