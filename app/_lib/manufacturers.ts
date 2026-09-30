/* Every manufacturer AMZ Energy Systems represents, tagged to the system-type category
   it's most associated with (see systemTypes.ts) so the two pages can cross-link. Eight
   of these have a logo mark in /public/images/partners; the rest render as a monogram. */

export type Manufacturer = {
  name: string;
  category: string;
  categorySlug: string | null; // matches a SystemCategory["slug"], or null if it doesn't map cleanly
  logo?: string;
};

export const MANUFACTURERS: Manufacturer[] = [
  { name: "Aermec", category: "Chillers & Boilers", categorySlug: "chillers-boilers", logo: "/images/partners/aermec.png" },
  { name: "Epocha", category: "VRF, Splits & VTACs", categorySlug: "vrf-splits-vtacs" },
  { name: "Compu-Aire", category: "DX & Heat Recovery", categorySlug: "dx-heat-recovery" },
  { name: "Innovative Air", category: "Humidity Control", categorySlug: "humidity-control" },
  { name: "Dunham-Bush", category: "Chillers & Boilers", categorySlug: "chillers-boilers", logo: "/images/partners/dunham-bush.png" },
  { name: "Galletti", category: "Heat Pumps", categorySlug: "heat-pumps", logo: "/images/partners/galletti.png" },
  { name: "American Cooling Tower", category: "Heat Rejection & Heat Exchangers", categorySlug: "heat-rejection-heat-exchangers", logo: "/images/partners/american-cooling-tower.png" },
  { name: "XNRGY", category: "Air Handlers & Fan Coils", categorySlug: "air-handlers-fan-coils", logo: "/images/partners/xnrgy.png" },
  { name: "Superior Rex", category: "Air Handlers & Fan Coils", categorySlug: "air-handlers-fan-coils", logo: "/images/partners/superior-rex.png" },
  { name: "Unilux HVAC", category: "Air Handlers & Fan Coils", categorySlug: "air-handlers-fan-coils", logo: "/images/partners/unilux.png" },
  { name: "NEXGEN DOAS", category: "DX & Heat Recovery", categorySlug: "dx-heat-recovery" },
  { name: "Hisense VRF", category: "VRF, Splits & VTACs", categorySlug: "vrf-splits-vtacs", logo: "/images/partners/hisense.png" },
  { name: "Wilo Pumps", category: "Pumps", categorySlug: null },
  { name: "ZAMBA HVAC", category: "Terminal Heating & Cooling", categorySlug: "terminal-heating-cooling" },
  { name: "S&P Fans", category: "Coils, Dampers & Fans", categorySlug: "coils-dampers-fans" },
  { name: "Kelvion", category: "Heat Rejection & Heat Exchangers", categorySlug: "heat-rejection-heat-exchangers" },
  { name: "Vents-US", category: "Coils, Dampers & Fans", categorySlug: "coils-dampers-fans" },
  { name: "Enertech", category: "Heat Pumps", categorySlug: "heat-pumps" },
  { name: "Thermoplus", category: "DX & Heat Recovery", categorySlug: "dx-heat-recovery" },
  { name: "Direct Coil", category: "Coils, Dampers & Fans", categorySlug: "coils-dampers-fans" },
  { name: "Mainstream Fans", category: "Coils, Dampers & Fans", categorySlug: "coils-dampers-fans" },
  { name: "Warren HVAC", category: "Terminal Heating & Cooling", categorySlug: "terminal-heating-cooling" },
  { name: "ACE Heaters", category: "Chillers & Boilers", categorySlug: "chillers-boilers" },
  { name: "Engineered Air", category: "Air Handlers & Fan Coils", categorySlug: "air-handlers-fan-coils" },
  { name: "King Electric", category: "Terminal Heating & Cooling", categorySlug: "terminal-heating-cooling" },
  { name: "Thermo2000", category: "Chillers & Boilers", categorySlug: "chillers-boilers" },
  { name: "Rosemex", category: "Air Handlers & Fan Coils", categorySlug: "air-handlers-fan-coils" },
  { name: "Floaire", category: "Coils, Dampers & Fans", categorySlug: "coils-dampers-fans" },
  { name: "Schwank", category: "Terminal Heating & Cooling", categorySlug: "terminal-heating-cooling" },
  { name: "General Water Systems", category: "Air and Water Treatment", categorySlug: "air-water-treatment" },
  { name: "Blue Frontier", category: "Humidity Control", categorySlug: "humidity-control" },
  { name: "Steamovap", category: "Humidity Control", categorySlug: "humidity-control" },
  { name: "EB Air Control", category: "Coils, Dampers & Fans", categorySlug: "coils-dampers-fans" },
  { name: "Go Fog", category: "Air and Water Treatment", categorySlug: "air-water-treatment" },
  { name: "Sterling HVAC", category: "Terminal Heating & Cooling", categorySlug: "terminal-heating-cooling" },
  { name: "Nu-Air", category: "DX & Heat Recovery", categorySlug: "dx-heat-recovery" },
];

export const MANUFACTURER_CATEGORIES = Array.from(new Set(MANUFACTURERS.map((m) => m.category))).sort();
