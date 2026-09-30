/* Product lines organised by system type — the same grouping used on the live site's
   Technologies & Services menu. Manufacturer names and product lines are real; the
   framing copy is ours. */

export type ProductLine = { brand: string; products: string };

export type SystemCategory = {
  slug: string;
  title: string;
  short: string;
  blurb: string;
  lines: ProductLine[];
};

export const SYSTEM_CATEGORIES: SystemCategory[] = [
  {
    slug: "air-handlers-fan-coils",
    title: "Air Handlers & Fan Coils",
    short: "Air handling",
    blurb: "Custom and semi-custom AHUs down to stock fan coils — sized from the load, not the catalogue page.",
    lines: [
      { brand: "XNRGY", products: "Custom AHUs, fan arrays" },
      { brand: "Dunham-Bush", products: "Semi-custom AHUs" },
      { brand: "Unilux HVAC", products: "Vertical stack FCUs, horizontal FCUs" },
      { brand: "Superior Rex", products: "Fan coils, blower coils, air handlers" },
      { brand: "Rosemex", products: "Fan coil units, induction units, custom AHUs" },
      { brand: "Multiaqua", products: "Stock FCUs" },
      { brand: "Engineered Air", products: "Nesbitt Aire unit ventilators" },
    ],
  },
  {
    slug: "coils-dampers-fans",
    title: "Coils, Dampers & Fans",
    short: "Coils & fans",
    blurb: "The parts inside the box: replacement and custom coils, fan arrays, dampers and exhaust.",
    lines: [
      { brand: "Direct Coil", products: "Standard and custom coils (CHW, HW, DX)" },
      { brand: "Mainstream", products: "Fan array retrofits, custom fan solutions, coils" },
      { brand: "Floaire", products: "Make-up air systems, kitchen exhaust, exhaust fans, gravity vents" },
      { brand: "Vents-US", products: "Bathroom exhaust fans" },
      { brand: "S&P", products: "General exhaust fans, utility set fans" },
      { brand: "EB Air Control", products: "Dampers, induction units, venturi valves" },
    ],
  },
  {
    slug: "chillers-boilers",
    title: "Chillers & Boilers",
    short: "Chillers & boilers",
    blurb: "Central plant equipment — air- and water-cooled chillers through to modular and condensing boilers.",
    lines: [
      { brand: "Dunham-Bush", products: "Air-cooled chillers, water-cooled chillers" },
      { brand: "AERMEC", products: "Air-cooled chillers, modular water-cooled chillers" },
      { brand: "Galletti", products: "Air-source heat pumps" },
      { brand: "Thermo2000", products: "Electric boilers, domestic hot water heaters, storage tanks" },
      { brand: "ACE Heaters", products: "Modular boilers, Ajax condensing boilers" },
    ],
  },
  {
    slug: "heat-rejection-heat-exchangers",
    title: "Heat Rejection & Heat Exchangers",
    short: "Heat rejection",
    blurb: "Cooling towers, fluid coolers and plate heat exchangers — including rebuilds into an existing footprint.",
    lines: [
      { brand: "American Cooling Tower", products: "Cooling towers, custom replacements, OEM tower parts" },
      { brand: "Kelvion", products: "Plate heat exchangers, fluid coolers, adiabatic coolers" },
      { brand: "Direct Coil", products: "Dry coolers" },
      { brand: "ACE Heaters", products: "Steam-to-hot-water heat exchangers, HX tube bundles" },
    ],
  },
  {
    slug: "vrf-splits-vtacs",
    title: "VRF, Splits & VTACs",
    short: "VRF & splits",
    blurb: "Variable refrigerant flow and packaged terminal equipment for tenant fit-outs and additions.",
    lines: [
      { brand: "Hisense VRF", products: "VRF systems, mini-splits, integrated domestic hot water" },
      { brand: "Epocha", products: "Heat pump VTACs, heat pump PTACs" },
    ],
  },
  {
    slug: "dx-heat-recovery",
    title: "DX & Heat Recovery",
    short: "DX & recovery",
    blurb: "Packaged DOAS, precision cooling and energy recovery ventilation.",
    lines: [
      { brand: "NEXGEN", products: "DOAS rooftops, split systems, heat recovery" },
      { brand: "Dunham-Bush", products: "Packaged rooftop units, water-cooled DX" },
      { brand: "Compu-Aire", products: "Precision cooling systems, CRAC units" },
      { brand: "Vents-US", products: "ERVs — core and wheel, single-room or ducted" },
      { brand: "Thermoplus", products: "Water-cooled DX DOAS, heat recovery option" },
      { brand: "Nu-Air", products: "Energy recovery ventilators" },
    ],
  },
  {
    slug: "terminal-heating-cooling",
    title: "Terminal Heating & Cooling",
    short: "Terminal units",
    blurb: "Unit heaters, radiant panels and chilled beams for spaces a central system doesn't reach well.",
    lines: [
      { brand: "Sterling", products: "Unit heaters, make-up air units, infrared heaters" },
      { brand: "Schwank", products: "Radiant tube heaters, air curtains, HVLS fans" },
      { brand: "ZAMBA HVAC", products: "Environmental wall panels, chilled beams" },
      { brand: "Rosemex", products: "Trench heaters, baseboard heat, cabinet heaters, unit heaters" },
      { brand: "King Electric", products: "Electric heaters, heat trace" },
      { brand: "Warren", products: "VAV boxes, electric duct heaters" },
      { brand: "Engineered Air", products: "Radiant panels" },
    ],
  },
  {
    slug: "heat-pumps",
    title: "Heat Pumps",
    short: "Heat pumps",
    blurb: "Air-source and water-source heat pumps, from vertical-stack retrofit chassis to air-to-water plant.",
    lines: [
      { brand: "AERMEC", products: "Air-source heat pumps, water-cooled heat pumps" },
      { brand: "Unilux HVAC", products: "Vertical stack WSHPs, integral ERV, retrofit chassis" },
      { brand: "Galletti", products: "Air-source heat pumps" },
      { brand: "Enertech", products: "WSHPs horizontal/vertical, split/console, air-to-water heat pump" },
      { brand: "Thermoplus", products: "Water-cooled DX, modular units" },
    ],
  },
  {
    slug: "humidity-control",
    title: "Humidity Control",
    short: "Humidity control",
    blurb: "Desiccant dehumidification and humidification for spaces where the setpoint that matters is RH, not temperature.",
    lines: [
      { brand: "Innovative Air", products: "Desiccant dehumidifiers" },
      { brand: "NEXGEN DOAS", products: "DOAS units" },
      { brand: "Steamovap", products: "In-duct humidifier systems" },
      { brand: "Blue Frontier", products: "Liquid desiccant DOAS system" },
      { brand: "Thermoplus", products: "Pool dehumidifier units, ice rink defoggers" },
    ],
  },
  {
    slug: "air-water-treatment",
    title: "Air and Water Treatment",
    short: "Water treatment",
    blurb: "Filtration and water treatment that protects the chiller and boiler plant it feeds.",
    lines: [
      { brand: "General Water Systems", products: "Sand filters, separator systems, pot feeders, non-chemical water treatment" },
      { brand: "Go Fog", products: "Humidification solutions" },
      { brand: "Steamovap", products: "Electric humidifiers, steam humidifiers" },
    ],
  },
];
