export type InsightSection = { heading: string; body: string[] };

export type InsightArticle = {
  slug: string;
  title: string;
  dek: string;
  readTime: string;
  category: string;
  image: string;
  imageAlt: string;
  resource: { label: string; href: string };
  sections: InsightSection[];
};

export const INSIGHT_ARTICLES: InsightArticle[] = [
  {
    slug: "what-is-decarbonization",
    resource: { label: "DOE Decarb roadmap", href: "https://www.energy.gov/sites/default/files/2022-09/Industrial%20Decarbonization%20Roadmap.pdf" },
    category: "Decarbonization",
    image: "/hero/poster-03-chillers.jpg",
    imageAlt: "Commercial chiller equipment serving a building",
    title: "What Is Decarbonization?",
    dek: "The term shows up in every ESG report and utility rebate form now. Here's what it actually means for a mechanical system.",
    readTime: "4 min read",
    sections: [
      {
        heading: "The Short Definition",
        body: [
          "Decarbonization is the process of removing or avoiding carbon dioxide production to reduce global warming potential. For a building, that mostly comes down to two levers: use less energy to do the same job, and shift the energy you do use away from combustion and toward the electric grid as it gets cleaner.",
          "Both levers run straight through the mechanical room. Heating and cooling are usually a commercial building's largest energy draw, which is why a decarbonization plan that skips the HVAC system isn't really a plan.",
        ],
      },
      {
        heading: "Efficiency First, Electrification Second",
        body: [
          "The order matters. Replacing an inefficient gas boiler with an equally inefficient electric one doesn't decarbonize much if the building is still losing half its heat through an undersized envelope or an air handler running against its design curve. The U.S. Department of Energy's Industrial Decarbonization Roadmap frames it the same way for industrial process heat: efficiency gains reduce the total energy that has to be decarbonized in the first place, which makes every later step, electrification, on-site generation, grid-cleaning, cheaper and more effective.",
          "In practice, that means we look at load reduction and system efficiency before we quote an electrified replacement. A right-sized heat pump on a building that's already tight is a very different conversation than the same heat pump trying to make up for years of duct leakage and a chiller running twenty years past its efficient service life.",
        ],
      },
      {
        heading: "What This Looks Like in a Selection",
        body: [
          "On a chiller or boiler replacement, that's the difference between specifying against a measured load and specifying against the nameplate of the equipment coming out. On a rooftop unit, it's deciding whether a heat-recovery DOAS pays for itself in the energy it isn't buying twice. None of this is abstract policy, it shows up directly in the equipment schedule and the commissioning numbers we hand over at the end of a job.",
        ],
      },
    ],
  },
  {
    slug: "philadelphia-carbon-neutral-playbook",
    resource: { label: "Go to playbook", href: "https://www.phila.gov/media/20210113125627/Philadelphia-Climate-Action-Playbook.pdf" },
    category: "Policy & planning",
    image: "/hero/poster-01-hero.jpg",
    imageAlt: "City skyline and commercial buildings beside a river",
    title: "The Philadelphia Carbon Neutral Playbook, and What It Means for Building Owners",
    dek: "The city set a 2050 target under Mayor Jim Kenney. Buildings are the largest single piece of that target, which makes this a mechanical-systems story, not just a policy one.",
    readTime: "5 min read",
    sections: [
      {
        heading: "The Target",
        body: [
          "Philadelphia's Carbon Neutral Playbook, adopted under Mayor Jim Kenney, commits the city to carbon neutrality by 2050. That's a long horizon for a policy document, but a short one for a building that just had its chiller replaced, a piece of central plant installed today is very likely still running when that deadline arrives.",
        ],
      },
      {
        heading: "Why Buildings Carry Most of the Weight",
        body: [
          "The Playbook's own accounting puts buildings at over 75% of all carbon emissions in the city. That's not evenly distributed across every building type, a data center and a garden-style apartment building get to that number through completely different equipment, but it does mean that any citywide reduction has to come substantially from mechanical retrofits, not just vehicle electrification or grid cleanup, both of which matter but neither of which touches the biggest slice of the pie on its own.",
          "For an owner, the practical reading is: building-level decarbonization isn't a side project running alongside normal capital planning, it's going to be woven into normal capital planning, because that's where three-quarters of the city's emissions actually live.",
        ],
      },
      {
        heading: "What We Do Differently Because of It",
        body: [
          "When we scope a replacement in Philadelphia, we price the all-electric or hybrid-electric option alongside the conventional one as a matter of course, even when the client hasn't asked for it, because a plant that's already been evaluated against a 2050 target is a plant that doesn't need a second retrofit in fifteen years. We also flag where a utility incentive (see our piece on PECO's stacking rules) can offset a chunk of that first cost, since the honest trade-off between upfront price and long-run compliance is usually the real decision an owner is making.",
        ],
      },
    ],
  },
  {
    slug: "peco-utility-incentives-hvac-upgrades",
    resource: { label: "See PECO energy incentives", href: "https://pecobizsavings.com/" },
    category: "Utility incentives",
    image: "/images/specifier.webp",
    imageAlt: "Outdoor HVAC units installed alongside a commercial building",
    title: "PECO Utility Incentives Available for HVAC Upgrades",
    dek: "Rebates exist for lighting, HVAC, insulation and smart thermostats, and stacking measures earns a meaningful bonus on top. Here's how the stacking actually works.",
    readTime: "4 min read",
    sections: [
      {
        heading: "What's on the Table",
        body: [
          "PECO's incentive program covers a handful of measure categories that show up on almost every commercial retrofit: lighting upgrades, HVAC equipment, insulation improvements and smart thermostats. Depending on the measure, that comes back as a rebate, a grant, or a straight discount on qualifying equipment, and PECO will run a free energy audit or assessment as the starting point, which is useful even on its own before a single dollar of incentive is involved.",
        ],
      },
      {
        heading: "The Part Most Owners Miss: Stacking",
        body: [
          "The detail worth knowing is that these measures stack. Combine up to three eligible conservation measures on the same project and the program adds a 40% bonus on top of the individual incentives, not 40% of the whole job, but a meaningful bump on the incentive value itself. That's usually the difference between a rebate that barely covers the paperwork to file for it and one that actually moves the project's payback period.",
          "In practice, stacking means we're not just pricing the chiller replacement in isolation. If the insulation and the thermostat controls are close enough to the mechanical scope to bundle into one application, we say so before the proposal goes out, not after the incentive window has already been decided.",
        ],
      },
      {
        heading: "Where This Fits With What We Do",
        body: [
          "This is the same territory covered in more process detail on our Utility Incentive Management page, free assessment, eligibility check, application and documentation, filed alongside the mechanical proposal rather than after it's signed. This piece is the why; that page is the how.",
        ],
      },
    ],
  },
  {
    slug: "decarbonization-in-multifamily-buildings",
    resource: { label: "Roadmap to Decarb in Multifamily", href: "https://be-exchange.org/report/hpd-ll97-decarbonization-roadmap/" },
    category: "Building strategy",
    image: "/images/verticals/office.webp",
    imageAlt: "Exterior of a large building",
    title: "Decarbonization in Multifamily Buildings",
    dek: "Roughly 30% of Philadelphia's greenhouse gas emissions come from multifamily buildings, a sector with its own specific retrofit constraints that a single-family playbook doesn't solve.",
    readTime: "5 min read",
    sections: [
      {
        heading: "The Scale of It",
        body: [
          "Multifamily properties account for roughly 30% of the greenhouse gas emissions in Philadelphia, which puts the sector in an unusual position: large enough that it can't be decarbonized as an afterthought to single-family retrofit programs, but structured differently enough, shared central plant, mixed ownership, tenants who don't control the capital budget, that the standard residential playbook doesn't transfer cleanly.",
        ],
      },
      {
        heading: "The Specific Constraints",
        body: [
          "A central chiller plant serving forty or four hundred units can't come offline for a season the way a single-family furnace swap can. Tenant turnover means the building has to keep functioning through a staged replacement, not a shutdown. And unlike an owner-occupied building, the capital decision-maker (an owner or a condo board) isn't always the party paying the utility bill, which changes how an efficiency upgrade gets justified financially.",
          "The Building Energy Exchange's decarbonization roadmap for multifamily housing goes into this in more depth, it's a useful read for a board or asset manager trying to sequence a retrofit without disrupting a fully occupied building.",
        ],
      },
      {
        heading: "How We Sequence It",
        body: [
          "On our own multifamily work, that means staged replacement through two or three seasons rather than one, condenser water and riser work planned around which floors can tolerate an outage window, and a heat pump or electrification scope evaluated against the building's existing electrical service before it's priced, because the mechanical upgrade is only half the job if the panel can't carry it.",
        ],
      },
    ],
  },
];
