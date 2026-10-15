import { LINE_CARD_HREF } from "./lineCard";

export type HeroOverlay = {
  start: number; end: number; eyebrow: string; heading: string; body: string;
  align: "left" | "center"; poster: string;
  ctas: { label: string; href: string; variant: "primary" | "text" }[];
};

// Load only the appropriate encode: 1080p desktop, 720p at widths up to 768px.
export const HERO_VIDEO = { desktop: "/hero/amz-hero-1080.mp4", mobile: "/hero/amz-hero-720.mp4" };
export const HERO_HEIGHT = "1000vh";
export const HERO_FADE = 0.02;
export const TIMELINE: readonly (readonly [number, number])[] = [
  [0, 0], [0.05, 0.6], [0.14, 2.9], [0.23, 5.2], [0.32, 11.6],
  [0.40, 12.5], [0.49, 18.4], [0.57, 18.9], [0.66, 28.9],
  [0.72, 29.7], [0.78, 33], [0.85, 34.7], [0.93, 41], [1, 46.7],
];
export function progressToTime(progress: number) {
  const p = Math.max(0, Math.min(1, progress));
  for (let i = 0; i < TIMELINE.length - 1; i++) {
    const [p0, t0] = TIMELINE[i];
    const [p1, t1] = TIMELINE[i + 1];
    if (p <= p1) return t0 + (t1 - t0) * ((p - p0) / (p1 - p0));
  }
  return TIMELINE[TIMELINE.length - 1][1];
}
export const HERO_OVERLAYS: HeroOverlay[] = [
  {
    start: 0, end: 0.05, align: "center", poster: "/hero/poster-01-hero.jpg",
    eyebrow: "COMMERCIAL MECHANICAL SYSTEMS", heading: "Making Buildings and Communities Better",
    body: "High-efficiency HVAC solutions that reduce the carbon footprint of the built environment across the Greater Philadelphia area.",
    ctas: [{ label: "Explore Our Solutions", href: "/technologies-services", variant: "primary" }],
  },
  {
    start: 0.13, end: 0.24, align: "left", poster: "/hero/poster-02-collaboration.jpg",
    eyebrow: "HOW WE WORK", heading: "Solved Together",
    body: "Collaborative problem solving with engineers, contractors, and owners to provide high-efficiency HVAC solutions for any commercial built environment.",
    ctas: [{ label: "About AMZ", href: "/about", variant: "primary" }],
  },
  {
    start: 0.31, end: 0.41, align: "left", poster: "/hero/poster-03-chillers.jpg",
    eyebrow: "HIGH-RISE COMMERCIAL OFFICES", heading: "Chiller Plants",
    body: "High-efficiency chilled water solutions for commercial office towers, featuring our partner Dunham-Bush, with over 125 years of HVAC manufacturing.",
    ctas: [{ label: "View Chiller Solutions", href: "/technologies-services#chillers", variant: "primary" }],
  },
  {
    start: 0.48, end: 0.58, align: "left", poster: "/hero/poster-04-healthcare.jpg",
    eyebrow: "HEALTHCARE", heading: "Custom Air Handlers",
    body: "We design and support air handling unit installations, from catalogue to fully custom with XNRGY, to deliver consistent airflow, comfort, and indoor air quality.",
    ctas: [{ label: "Explore Air Handling", href: "/technologies-services#air-handling", variant: "primary" }],
  },
  {
    start: 0.65, end: 0.86, align: "left", poster: "/hero/poster-05-datacenter-hall.jpg",
    eyebrow: "DATA CENTERS", heading: "Mission-Critical Cooling",
    body: "A wide range of solutions for mission-critical and hyperscale cooling, built to reduce energy use and achieve the lowest power usage effectiveness (PUE).",
    ctas: [{ label: "View Data Center Solutions", href: "/markets-served#data-centers", variant: "primary" }],
  },
  {
    start: 0.92, end: 1, align: "left", poster: "/hero/poster-07-education.jpg",
    eyebrow: "EDUCATION", heading: "Cooling Towers",
    body: "Efficient, reliable cooling towers from American Cooling Tower, with installation services and utility incentive support that help schools invest in energy-saving upgrades.",
    ctas: [{ label: "Start a Project", href: "/contact", variant: "primary" }, { label: "Download Line Card", href: LINE_CARD_HREF, variant: "text" }],
  },
];
