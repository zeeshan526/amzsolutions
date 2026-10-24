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

/* Shown alphabetically everywhere they're listed. */
MANUFACTURERS.sort((a, b) => a.name.localeCompare(b.name));

export const MANUFACTURER_CATEGORIES = Array.from(new Set(MANUFACTURERS.map((m) => m.category))).sort();

/* Official sites, checked October 2026. General Water Systems and Rosemex are left out
   until a working URL is confirmed, so their cards stay unlinked rather than pointing at
   a guess. */
const WEBSITES: Record<string, string> = {
  "ACE Heaters": "https://aceheaters.com/",
  Aermec: "https://aermec-na.com/",
  "American Cooling Tower": "https://www.americancoolingtower.com/",
  "Blue Frontier": "https://bluefrontierac.com/",
  "Compu-Aire": "https://www.compu-aire.com/",
  "Direct Coil": "https://directcoil.com/",
  "Dunham-Bush": "https://dbamericas.com/",
  "EB Air Control": "https://ebaircontrol.com/",
  Enertech: "https://enertechusa.com/",
  "Engineered Air": "https://www.engineeredair.com/",
  Floaire: "https://www.floaire.com/",
  Galletti: "https://www.galletti-na.com/",
  "Go Fog": "https://www.gofoginc.com/",
  "Hisense VRF": "https://hisensecomfort.com/",
  "Innovative Air": "https://www.dehumidifiers.com/",
  Kelvion: "https://www.kelvion.com/",
  "King Electric": "https://king-electric.com/",
  "Mainstream Fans": "https://mainstream-corp.com/",
  Multiaqua: "https://multiaqua.com/",
  "NEXGEN DOAS": "https://www.nexgendoas.com/",
  "Nu-Air": "https://nu-airventilation.com/",
  "S&P Fans": "https://www.solerpalau-usa.com/",
  Schwank: "https://www.schwankgroup.com/",
  Steamovap: "https://steamovap.com/",
  "Sterling HVAC": "https://www.sterlinghvac.com/",
  "Superior Rex": "https://www.superiorrex.com/",
  Thermo2000: "https://www.thermo2000.com/en/",
  Thermoplus: "https://thermoplus.com/",
  "Unilux HVAC": "https://uniluxhvac.com/",
  "Vents-US": "https://vents-us.com/",
  "Warren HVAC": "https://www.warrenhvac.com/",
  "Wilo Pumps": "https://wilo.com/us/en_us/",
  XNRGY: "https://www.xnrgy.com/",
  "ZAMBA HVAC": "https://www.zambahvac.com/",
};

/* systemTypes.ts uses shorter brand names in places; map them onto the names above. */
const ALIASES: Record<string, string> = {
  AERMEC: "Aermec",
  Mainstream: "Mainstream Fans",
  NEXGEN: "NEXGEN DOAS",
  "S&P": "S&P Fans",
  Sterling: "Sterling HVAC",
  Warren: "Warren HVAC",
};

export function manufacturerWebsite(name: string): string | undefined {
  return WEBSITES[ALIASES[name] ?? name];
}
