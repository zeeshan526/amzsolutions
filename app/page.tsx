"use client";

import { useEffect, useRef, useState } from "react";

/* ---------------------------------------------------------------------- */
/*  Static content                                                        */
/* ---------------------------------------------------------------------- */

const TECH_MENU = [
  { label: "Products by System Type", href: "#partners" },
  { label: "Products by Manufacturer", href: "#partners" },
  { label: "Installation Services", href: "#positioning" },
  { label: "Utility Incentive Management", href: "#engineers" },
];

const NAV_LINKS = [
  { label: "Markets", href: "#verticals" },
  { label: "For engineers", href: "#engineers" },
  { label: "Partners", href: "#partners" },
  { label: "How we work", href: "#positioning" },
  { label: "Impact", href: "#impact" },
];

const HERO_STATS = [
  { label: "Markets served", value: "4" },
  { label: "Premier lines", value: "6" },
  { label: "Reply within", value: "1 day" },
  { label: "Emergency line", value: "24/7" },
];

const PARTNER_LOGOS = [
  { src: "/images/partners/unilux.png", alt: "Unilux HVAC Industries" },
  { src: "/images/partners/xnrgy.png", alt: "XNRGY" },
  { src: "/images/partners/galletti.png", alt: "Galletti" },
  { src: "/images/partners/american-cooling-tower.png", alt: "American Cooling Tower, Inc" },
  { src: "/images/partners/aermec.png", alt: "Aermec air conditioning" },
  { src: "/images/partners/dunham-bush.png", alt: "Dunham-Bush" },
  { src: "/images/partners/hisense.png", alt: "Hisense" },
  { src: "/images/partners/superior-rex.png", alt: "Superior Rex" },
];

const STEPS = [
  { n: "01", title: "Walk the building", text: "Plant room, risers, the zones that complain. Before any selection is made." },
  { n: "02", title: "Measure and model", text: "Metered load where it exists, modelled where it doesn’t — and we always say which." },
  { n: "03", title: "Specify together", text: "Options priced side by side, with the trade-off stated in plain terms." },
  { n: "04", title: "Commission and hand over", text: "Start-up attended, readings documented, one name to call afterwards." },
];

const VERTICALS = [
  {
    n: "01",
    tag: "Commercial",
    title: "High-rise office",
    text: "Central chiller plant, tenant churn, and no tolerance for downtime on occupied floors. Staged replacement without emptying the building.",
    img: "/images/verticals/office.webp",
    alt: "High-rise office chiller plant",
  },
  {
    n: "02",
    tag: "Healthcare",
    title: "Hospitals",
    text: "Pressure relationships, air-change rates and filtration that must hold continuously and be provable on inspection.",
    img: "/images/verticals/hospital.webp",
    alt: "Hospital air handling room",
  },
  {
    n: "03",
    tag: "Mission critical",
    title: "Data centres",
    text: "Rising rack density, redundancy that must be real rather than nominal, and a cooling plant judged on its worst hour.",
    img: "/images/verticals/datacenter.webp",
    alt: "Data centre CRAH row",
  },
  {
    n: "04",
    tag: "Education",
    title: "Schools",
    text: "A summer-shutdown window, a public budget cycle, and classrooms where noise and fresh air matter as much as capacity.",
    img: "/images/verticals/schools.webp",
    alt: "School rooftop units",
  },
];

const PARTNER_CARDS = [
  {
    logo: "/images/partners/aermec.png",
    alt: "Aermec",
    category: "Chillers · heat pumps",
    text: "Air- and water-cooled chillers, reversible heat pumps, fan coils. Our default for mid-size plant rooms with tight acoustic limits.",
  },
  {
    logo: "/images/partners/dunham-bush.png",
    alt: "Dunham-Bush",
    category: "Chillers · air handling",
    text: "Screw and centrifugal chillers, custom air handling. Where a long service life and rebuildable plant matter more than first cost.",
  },
  {
    logo: "/images/partners/american-cooling-tower.png",
    alt: "American Cooling Tower",
    category: "Heat rejection",
    text: "Field-erected and factory cooling towers, basin and fill rebuilds. Retrofits into existing structures where the footprint cannot change.",
  },
  {
    logo: "/images/partners/galletti.png",
    alt: "Galletti",
    category: "Terminal units",
    text: "Fan coils, unit ventilators and terminal heat pumps. Classroom and guest-room applications where sound power drives the selection.",
  },
  {
    logo: "/images/partners/hisense.png",
    alt: "Hisense",
    category: "VRF · light commercial",
    text: "VRF, mini-splits and light commercial packaged equipment. Tenant fit-outs and additions with no room for central plant.",
  },
  {
    logo: "/images/partners/superior-rex.png",
    alt: "Superior Rex",
    category: "Coils · heat transfer",
    text: "Replacement and custom coils, condensers and heat-transfer products. Same-geometry replacements for plant that is otherwise sound.",
  },
];

type Testimonial = {
  avatar: string | null;
  video: boolean;
  quote: string;
  name: string;
  role: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    avatar: "/images/testimonials/contractor.webp",
    video: false,
    quote: "They caught a pump-head error in our submittal review before it went to the field. That call saved us a week of rework.",
    name: "Mechanical contractor",
    role: "Project manager · office tower retrofit",
  },
  {
    avatar: null,
    video: true,
    quote: "I get the selection with the part-load data and the sound power attached, and a straight answer on what was modelled.",
    name: "Mechanical engineer",
    role: "Consulting engineer · healthcare practice",
  },
  {
    avatar: null,
    video: false,
    quote: "We replaced the plant over two summers without closing a floor, and I was handed the commissioning readings rather than a promise.",
    name: "Building owner",
    role: "Director of facilities · multi-tenant portfolio",
  },
  {
    avatar: null,
    video: false,
    quote: "They scoped the whole job around our summer window and hit it. The classrooms were quieter than the units we took out.",
    name: "Facilities director",
    role: "K-12 district · four campuses",
  },
  {
    avatar: null,
    video: true,
    quote: "They showed us the worst-hour case before we signed, not after. The redundancy we bought is the redundancy we have.",
    name: "Project engineer",
    role: "Data centre operator",
  },
  {
    avatar: "/images/testimonials/chief-engineer.webp",
    video: false,
    quote: "Pressure relationships held through the phasing, and every reading was documented for the inspection.",
    name: "Chief engineer",
    role: "Hospital campus",
  },
];

const MOSAIC = [
  { span: "span 4 / span 2", img: "/images/impact/tree-planting.jpg", alt: "Three AMZ staff beside a newly planted sapling on a restored creek bank", pos: "center 42%" },
  { span: "span 2 / span 3", img: "/images/impact/meal-prep.jpg", alt: "Volunteers assembling sandwich trays on a commercial kitchen line", pos: "center 46%" },
  { span: "span 2 / span 2", img: "/images/impact/every-home.jpg", alt: "Two crew members in safety glasses on a neighbourhood housing build", pos: "center 34%" },
  { span: "span 2 / span 2", img: "/images/impact/shelter-visit-pair.jpg", alt: "Two staff with a shelter dog beside donated supplies", pos: "center 40%" },
  { span: "span 2 / span 1", img: "/images/impact/shelter-visit-team.jpg", alt: "Four staff delivering supplies at an animal shelter", pos: "center 44%" },
];

const FOOTER_COLUMNS = [
  {
    heading: "Markets",
    links: [
      { label: "High-rise office", href: "#verticals" },
      { label: "Hospitals", href: "#verticals" },
      { label: "Data centres", href: "#verticals" },
      { label: "Schools", href: "#verticals" },
    ],
  },
  {
    heading: "For specifiers",
    links: [
      { label: "Specifier tool", href: "#engineers" },
      { label: "Line card", href: "#partners" },
      { label: "Submittal review", href: "#partners" },
      { label: "Talk to an engineer", href: "#engineers" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "How we work", href: "#positioning" },
      { label: "Social impact", href: "#impact" },
      { label: "Reviews", href: "#testimonials" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

/* ---------------------------------------------------------------------- */
/*  Small shared bits                                                     */
/* ---------------------------------------------------------------------- */

const EASE_MOVE = "cubic-bezier(0.36,0,0.24,1)";

function Eyebrow({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
        fontFamily: "var(--font-display)",
        fontStretch: "75%",
        fontWeight: 700,
        fontSize: 13,
        lineHeight: 1.2,
        letterSpacing: ".12em",
        textTransform: "uppercase",
        color: dark ? "#7DB9ED" : "#1462A7",
        margin: "0 0 14px",
      }}
    >
      <span aria-hidden style={{ width: 28, height: 1, background: "currentColor", opacity: dark ? 0.5 : 0.42, flex: "none" }} />
      {children}
      <span aria-hidden style={{ width: 28, height: 1, background: "currentColor", opacity: dark ? 0.5 : 0.42, flex: "none" }} />
    </p>
  );
}

function ArrowIcon({ color = "#1462A7" }: { color?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="butt" strokeLinejoin="miter" aria-hidden="true">
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  );
}

function PlaceholderAvatar() {
  return (
    <span
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#E3E5E8",
        color: "#9CA2AB",
      }}
    >
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" />
      </svg>
    </span>
  );
}

/* ---------------------------------------------------------------------- */
/*  Page                                                                  */
/* ---------------------------------------------------------------------- */

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [pct, setPct] = useState(0);
  const [open, setOpen] = useState(false); // mobile menu
  const [navOpen, setNavOpen] = useState(false); // technologies dropdown
  const [stuck, setStuck] = useState(false); // header scrolled state
  const [active, setActive] = useState(0); // testimonial index
  const [cookie, setCookie] = useState<"hidden" | "notice" | "prefs">("hidden");
  const [consent, setConsent] = useState({ analytics: false, functional: false, marketing: false });

  const pausedRef = useRef(false);
  const navTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const menuPanelRef = useRef<HTMLUListElement | null>(null);
  const menuTriggerRef = useRef<HTMLButtonElement | null>(null);

  // Loading sequence + cookie notice delay + Escape/outside-click for nav + testimonial rotation.
  useEffect(() => {
    const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let tick: ReturnType<typeof setInterval> | undefined;
    let done: ReturnType<typeof setTimeout> | undefined;
    let hide: ReturnType<typeof setTimeout> | undefined;
    let cookieT: ReturnType<typeof setTimeout> | undefined;
    let skip: ReturnType<typeof setTimeout> | undefined;

    if (reduced) {
      skip = setTimeout(() => {
        setLoading(false);
        setPct(100);
      }, 0);
      cookieT = setTimeout(() => setCookie("notice"), 400);
    } else {
      tick = setInterval(() => {
        setPct((p) => Math.min(100, p + Math.max(2, Math.round((100 - p) * 0.16))));
      }, 90);
      done = setTimeout(() => {
        if (tick) clearInterval(tick);
        setPct(100);
        hide = setTimeout(() => {
          setLoading(false);
          cookieT = setTimeout(() => setCookie("notice"), 900);
        }, 420);
      }, 1900);
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setNavOpen(false);
    };
    const onDocClick = (e: MouseEvent) => {
      const panel = menuPanelRef.current;
      const trigger = menuTriggerRef.current;
      const target = e.target as Node;
      if (panel && panel.contains(target)) return;
      if (trigger && trigger.contains(target)) return;
      setNavOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onDocClick);

    const rotate = setInterval(() => {
      if (pausedRef.current) return;
      setActive((a) => (a + 1) % 6);
    }, 6000);

    return () => {
      if (skip) clearTimeout(skip);
      if (tick) clearInterval(tick);
      if (done) clearTimeout(done);
      if (hide) clearTimeout(hide);
      if (cookieT) clearTimeout(cookieT);
      clearInterval(rotate);
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onDocClick);
    };
  }, []);

  // Header scroll state: read-driven, not event-latched.
  useEffect(() => {
    const sync = () => {
      const el = document.scrollingElement || document.documentElement;
      const y = el.scrollTop || window.scrollY || document.body.scrollTop || 0;
      setStuck(y > 80);
    };
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    const poll = setInterval(sync, 200);
    sync();
    return () => {
      window.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
      clearInterval(poll);
    };
  }, []);

  const navEnter = () => {
    clearTimeout(navTimerRef.current);
    navTimerRef.current = setTimeout(() => setNavOpen(true), 120);
  };
  const navLeave = () => {
    clearTimeout(navTimerRef.current);
    navTimerRef.current = setTimeout(() => setNavOpen(false), 240);
  };

  const pick = (i: number) => {
    pausedRef.current = true;
    setActive(i);
  };

  const toggleConsent = (key: keyof typeof consent) => {
    setConsent((c) => ({ ...c, [key]: !c[key] }));
  };

  const ring = -active * (360 / 6);
  const ringT = `rotate(${ring}deg)`;
  const upAngle = (i: number) => `rotate(${-ring - i * 60}deg)`;

  const track = (on: boolean) => (on ? "#1462A7" : "#C7CBD1");
  const knob = (on: boolean) => (on ? "translateX(20px)" : "translateX(0)");

  return (
    <div style={{ fontFamily: "var(--font-body)", color: "#191C1F", background: "#FFFFFF", position: "relative" }}>
      <a
        href="#main"
        style={{
          position: "absolute",
          left: -9999,
          top: 16,
          zIndex: 700,
          background: "#1462A7",
          color: "#FFFFFF",
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          fontSize: 16,
          padding: "0 20px",
          height: 44,
          display: "inline-flex",
          alignItems: "center",
          borderRadius: 4,
          textDecoration: "none",
        }}
      >
        Skip to main content
      </a>

      {/* Loading overlay */}
      {loading && (
        <div
          role="status"
          aria-live="polite"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 900,
            background: "#0A1017",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 24px",
          }}
        >
          <div style={{ position: "absolute", top: 24, left: 0, right: 0, display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
            <svg className="amz-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.72)" strokeWidth="1.5" strokeLinecap="butt" aria-hidden="true">
              <circle cx="12" cy="12" r="9" strokeDasharray="42 14" />
            </svg>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontStretch: "75%",
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: ".16em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,.72)",
              }}
            >
              Measuring the building&hellip;
            </span>
          </div>
          <div className="amz-load-mark" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo/amz-logo-white.png"
              alt="AMZ Energy Systems"
              width={471}
              height={574}
              style={{ display: "block", height: "clamp(120px,20vw,188px)", width: "auto" }}
            />
          </div>
          <div style={{ position: "absolute", left: 0, right: 0, bottom: "clamp(48px,10vh,104px)", display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "clamp(28px,4vw,44px)",
                lineHeight: 1,
                fontVariantNumeric: "tabular-nums",
                color: "#FFFFFF",
                margin: 0,
              }}
            >
              {pct}%
            </p>
            <div style={{ width: "min(340px,60vw)", height: 2, background: "rgba(255,255,255,.22)", position: "relative" }}>
              <div style={{ position: "absolute", inset: "0 auto 0 0", background: "#FFFFFF", transition: "width 200ms linear", width: `${pct}%` }} />
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className={`amz-hdr${stuck ? " amz-stuck" : ""}`} style={{ position: "sticky", top: 0, zIndex: 200, padding: 0, pointerEvents: "none" }}>
        <div
          className="amz-bar"
          style={{
            pointerEvents: "auto",
            maxWidth: "100%",
            margin: "0 auto",
            background: "transparent",
            border: "1px solid transparent",
            borderRadius: 0,
            boxShadow: "none",
            minHeight: 76,
            display: "flex",
            alignItems: "center",
            gap: 16,
            padding: "10px clamp(14px,1.8vw,24px)",
          }}
        >
          <a href="#main" aria-label="AMZ Energy Systems — home" style={{ flex: "none", display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <span className="amz-plate" style={{ flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: 38, height: 38, borderRadius: 999, background: "#FFFFFF" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo/amz-mark-small.png" alt="" width={298} height={278} style={{ display: "block", height: 26, width: "auto" }} />
            </span>
            <span className="amz-logo-t" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 21, letterSpacing: "-.01em", color: "#FFFFFF" }}>
              AMZ
            </span>
          </a>

          <nav aria-label="Main" className="amz-w" style={{ flex: "1 1 auto", minWidth: 0, display: "flex", justifyContent: "center" }}>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", alignItems: "center", gap: "clamp(16px,2.2vw,34px)" }}>
              <li style={{ position: "relative" }} onMouseEnter={navEnter} onMouseLeave={navLeave}>
                <button
                  ref={menuTriggerRef}
                  type="button"
                  className="amz-nav-a"
                  onClick={() => setNavOpen((v) => !v)}
                  aria-expanded={navOpen}
                  aria-controls="amz-tech-menu"
                  style={{
                    position: "relative",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 7,
                    padding: "6px 0",
                    background: "transparent",
                    border: 0,
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: 15,
                    whiteSpace: "nowrap",
                    cursor: "pointer",
                    color: "#FFFFFF",
                  }}
                >
                  Technologies &amp; Services
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.6"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    aria-hidden="true"
                    style={{ transition: `transform 160ms ${EASE_MOVE}`, transform: navOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  >
                    <path d="M5 9l7 7 7-7" />
                  </svg>
                  <span aria-hidden style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 2, background: "currentColor", transition: `opacity 160ms ${EASE_MOVE}`, opacity: navOpen ? 1 : 0 }} />
                </button>
                {navOpen && (
                  <ul
                    ref={menuPanelRef}
                    id="amz-tech-menu"
                    style={{
                      listStyle: "none",
                      margin: 0,
                      padding: 8,
                      position: "absolute",
                      top: "calc(100% + 14px)",
                      left: -12,
                      zIndex: 300,
                      minWidth: 286,
                      background: "#FFFFFF",
                      border: "1px solid rgba(25,28,31,.10)",
                      borderRadius: 14,
                      boxShadow: "0 4px 8px rgba(25,28,31,.06),0 12px 28px rgba(25,28,31,.10)",
                    }}
                  >
                    {TECH_MENU.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          onClick={() => setNavOpen(false)}
                          className="amz-menu-item"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            minHeight: 48,
                            padding: "0 16px",
                            borderRadius: 10,
                            fontFamily: "var(--font-display)",
                            fontWeight: 600,
                            fontSize: 15,
                            color: "#444444",
                            textDecoration: "none",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="amz-nav-a" style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, textDecoration: "none", whiteSpace: "nowrap", color: "#FFFFFF" }}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="amz-w" style={{ flex: "none", display: "flex", alignItems: "center", gap: 18 }}>
            <a
              href="#contact"
              className="amz-btn-accent"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                height: 46,
                padding: "0 24px",
                borderRadius: 999,
                background: "#F99615",
                color: "#191C1F",
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: 16,
                letterSpacing: ".01em",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Start a project
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#191C1F" strokeWidth="2.4" strokeLinecap="butt" strokeLinejoin="miter" aria-hidden="true">
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </a>
          </div>

          <div className="amz-n" style={{ flex: "1 1 auto" }} />
          <a
            href="#contact"
            className="amz-n amz-btn-accent"
            style={{
              flex: "none",
              display: "inline-flex",
              alignItems: "center",
              height: 44,
              padding: "0 20px",
              borderRadius: 999,
              background: "#F99615",
              color: "#191C1F",
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: 15,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Start a project
          </a>
          <button
            type="button"
            className="amz-n amz-burger"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            style={{
              flex: "none",
              width: 44,
              height: 44,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255,255,255,.18)",
              border: 0,
              borderRadius: 999,
              cursor: "pointer",
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="butt" strokeLinejoin="miter" aria-hidden="true">
              <path d="M3 7h18M3 12h18M3 17h18" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {open && (
        <div style={{ position: "fixed", inset: 0, zIndex: 400, display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "20px clamp(16px,3vw,32px)", overflowY: "auto", overscrollBehavior: "contain" }}>
          <div onClick={() => setOpen(false)} style={{ position: "absolute", inset: 0, background: "rgba(10,16,23,.72)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)" }} />
          <nav
            aria-label="Menu"
            style={{
              position: "relative",
              flex: "none",
              width: "min(560px,100%)",
              maxHeight: "calc(100dvh - 40px)",
              display: "flex",
              flexDirection: "column",
              background: "#191C1F",
              borderRadius: 28,
              boxShadow: "0 8px 16px rgba(25,28,31,.18),0 24px 56px rgba(25,28,31,.30)",
              overflow: "hidden",
            }}
          >
            <div style={{ flex: "none", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 24px", borderBottom: "1px solid rgba(255,255,255,.12)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo/amz-logo-white.png" alt="AMZ Energy Systems" width={471} height={574} style={{ display: "block", height: 52, width: "auto" }} />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                style={{ width: 44, height: 44, display: "inline-flex", alignItems: "center", justifyContent: "center", background: "transparent", border: "1px solid rgba(255,255,255,.24)", borderRadius: 999, cursor: "pointer" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="butt" strokeLinejoin="miter" aria-hidden="true">
                  <path d="M5 5l14 14M19 5L5 19" />
                </svg>
              </button>
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: "12px 0", flex: "1 1 auto", minHeight: 0, overflowY: "auto", overscrollBehavior: "contain" }}>
              <li style={{ padding: "14px 24px 6px" }}>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    fontFamily: "var(--font-display)",
                    fontStretch: "75%",
                    fontWeight: 700,
                    fontSize: 11,
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,.52)",
                    margin: "0 0 6px",
                  }}
                >
                  <span aria-hidden style={{ width: 16, height: 1, background: "currentColor", flex: "none" }} />
                  Technologies &amp; Services
                </p>
              </li>
              {TECH_MENU.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="amz-mobile-item"
                    style={{ display: "flex", alignItems: "center", minHeight: 50, padding: "0 24px", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 17, color: "rgba(255,255,255,.86)", textDecoration: "none" }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li aria-hidden style={{ height: 1, background: "rgba(255,255,255,.12)", margin: "12px 24px" }} />
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="amz-mobile-item"
                    style={{ display: "flex", alignItems: "center", minHeight: 56, padding: "0 24px", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 24, color: "#FFFFFF", textDecoration: "none" }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div style={{ flex: "none", padding: "20px 24px 28px", borderTop: "1px solid rgba(255,255,255,.12)", display: "flex", flexDirection: "column", gap: 12 }}>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="amz-btn-accent"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 52, borderRadius: 999, background: "#F99615", color: "#191C1F", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16, textDecoration: "none" }}
              >
                Request a quote
              </a>
              <a
                href="tel:0000000000"
                className="amz-btn-outline-light"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 52, borderRadius: 999, border: "1.5px solid rgba(255,255,255,.4)", color: "#FFFFFF", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16, textDecoration: "none" }}
              >
                000-000-0000
              </a>
            </div>
          </nav>
        </div>
      )}

      <main id="main">
        {/* Hero */}
        <section data-screen-label="Hero" style={{ background: "#0F4E85", position: "relative", overflow: "hidden", marginTop: -76, paddingTop: 76 }}>
          <svg viewBox="0 0 1600 760" preserveAspectRatio="none" aria-hidden="true" style={{ position: "absolute", inset: 0, width: "130%", height: "100%", opacity: 0.13 }}>
            <path d="M-160,690 A1900,1900 0 0 1 1740,350" fill="none" stroke="#FFFFFF" strokeWidth="32" />
            <path d="M820,410 A1900,1900 0 0 1 1700,312" fill="none" stroke="#FFFFFF" strokeWidth="18" />
          </svg>
          <div style={{ position: "relative", maxWidth: 1000, margin: "0 auto", padding: "clamp(72px,11vw,140px) clamp(20px,4vw,40px) clamp(72px,10vw,120px)", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <p
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontFamily: "var(--font-display)",
                fontStretch: "75%",
                fontWeight: 700,
                fontSize: 12,
                lineHeight: 1.2,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "#FFFFFF",
                margin: "0 0 28px",
                padding: "8px 16px",
                border: "1px solid rgba(255,255,255,.34)",
                borderRadius: 999,
              }}
            >
              <span style={{ width: 6, height: 6, background: "#F99615", borderRadius: 999 }} />
              Commercial mechanical systems
            </p>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "clamp(2.5rem,1.09rem + 6.01vw,4.75rem)",
                lineHeight: 1.02,
                letterSpacing: "-.022em",
                color: "#FFFFFF",
                margin: "0 0 28px",
                maxWidth: "22ch",
              }}
            >
              Making buildings and communities better
            </h1>
            <p style={{ fontSize: "clamp(1.0625rem,.98rem + .35vw,1.25rem)", lineHeight: 1.6, color: "rgba(255,255,255,.88)", margin: "0 0 40px", maxWidth: "58ch" }}>
              Integrated HVAC solutions for efficient, reliable, high-performing commercial buildings — specified from measured load, commissioned with the readings handed over.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
              <a
                href="#verticals"
                className="amz-btn-accent"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  height: 58,
                  padding: "0 34px",
                  borderRadius: 999,
                  background: "#F99615",
                  color: "#191C1F",
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: 16,
                  letterSpacing: ".01em",
                  textDecoration: "none",
                }}
              >
                Explore our solutions
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#191C1F" strokeWidth="2" strokeLinecap="butt" strokeLinejoin="miter" aria-hidden="true">
                  <path d="M4 12h16M14 6l6 6-6 6" />
                </svg>
              </a>
              <a
                href="#positioning"
                className="amz-btn-outline-light"
                style={{ display: "inline-flex", alignItems: "center", height: 58, padding: "0 34px", borderRadius: 999, border: "1.5px solid rgba(255,255,255,.56)", color: "#FFFFFF", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16, letterSpacing: ".01em", textDecoration: "none" }}
              >
                See how we work
              </a>
            </div>
            <dl
              style={{
                margin: "clamp(56px,8vw,88px) 0 0",
                padding: 0,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
                gap: 1,
                width: "100%",
                maxWidth: 820,
                background: "rgba(255,255,255,.18)",
              }}
            >
              {HERO_STATS.map((s) => (
                <div key={s.label} style={{ background: "#0F4E85", padding: "24px 16px" }}>
                  <dt style={{ fontFamily: "var(--font-display)", fontStretch: "75%", fontWeight: 700, fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.66)", margin: "0 0 10px" }}>{s.label}</dt>
                  <dd style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(28px,3.4vw,40px)", lineHeight: 1, fontVariantNumeric: "tabular-nums", color: "#FFFFFF", margin: 0 }}>{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div style={{ height: 4, background: "linear-gradient(96deg,#0F4E85 0%,#1879CD 100%)" }} />
        </section>

        {/* Trusted partners marquee */}
        <section data-screen-label="Trusted partners" style={{ padding: "clamp(40px,5vw,56px) 0", background: "#FFFFFF" }}>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              fontFamily: "var(--font-display)",
              fontStretch: "75%",
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: ".14em",
              textTransform: "uppercase",
              color: "#5A6068",
              margin: "0 0 32px",
            }}
          >
            <span aria-hidden style={{ width: 28, height: 1, background: "currentColor", opacity: 0.42, flex: "none" }} />
            Trusted manufacturer partners
            <span aria-hidden style={{ width: 28, height: 1, background: "currentColor", opacity: 0.42, flex: "none" }} />
          </p>
          <div
            className="amz-marquee-wrap"
            style={{
              position: "relative",
              overflow: "hidden",
              maskImage: "linear-gradient(to right,transparent 0,#000 8%,#000 92%,transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right,transparent 0,#000 8%,#000 92%,transparent 100%)",
            }}
          >
            <div className="amz-marquee" style={{ display: "flex", width: "max-content", alignItems: "center", gap: "clamp(48px,6vw,88px)", padding: "0 clamp(24px,3vw,44px)" }}>
              {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((p, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={i} src={p.src} alt={i < PARTNER_LOGOS.length ? p.alt : ""} aria-hidden={i >= PARTNER_LOGOS.length} style={{ height: "clamp(30px,3.6vw,44px)", width: "auto", flex: "none" }} />
              ))}
            </div>
          </div>
        </section>

        {/* Positioning / How we work */}
        <section id="positioning" data-screen-label="Positioning" style={{ padding: "clamp(64px,9vw,96px) 0", borderBottom: "1px solid #E3E5E8" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
            <div style={{ maxWidth: 760, margin: "0 auto 56px", textAlign: "center" }}>
              <Eyebrow>How we work</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.625rem,1.17rem + 1.94vw,2.4375rem)", lineHeight: 1.15, letterSpacing: "-.012em", margin: "0 0 20px" }}>
                We solve the mechanical problem with you, not for you
              </h2>
              <p style={{ fontSize: "clamp(1.0625rem,.98rem + .35vw,1.25rem)", lineHeight: 1.6, color: "#444444", margin: 0 }}>
                Most mechanical problems arrive already half-diagnosed. The useful work happens in the room where the engineer, the contractor and the owner are all looking at the same numbers — so we start on the drawings, not the catalogue.
              </p>
            </div>
            <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,232px),1fr))", gap: 20 }}>
              {STEPS.map((s) => (
                <li key={s.n} className="amz-step-card" style={{ background: "#FFFFFF", border: "1px solid #E3E5E8", borderRadius: 16, padding: "30px 26px 26px", position: "relative", overflow: "hidden" }}>
                  <svg viewBox="0 0 200 60" preserveAspectRatio="none" aria-hidden="true" style={{ position: "absolute", top: 0, right: 0, width: 130, height: 60, opacity: 0.16 }}>
                    <path d="M-10,52 A240,240 0 0 1 210,16" fill="none" stroke="#1462A7" strokeWidth="8" />
                  </svg>
                  <p style={{ position: "relative", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 34, lineHeight: 1, letterSpacing: "-.02em", fontVariantNumeric: "tabular-nums", color: "#AFD3F3", margin: "0 0 22px" }}>{s.n}</p>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 20, lineHeight: 1.35, margin: "0 0 10px" }}>{s.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: "#444444", margin: 0 }}>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Verticals / markets */}
        <section id="verticals" data-screen-label="Verticals" style={{ padding: "clamp(64px,9vw,96px) 0", background: "#F9FAFB", borderBottom: "1px solid #E3E5E8" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
            <div style={{ maxWidth: 680, margin: "0 auto 56px", textAlign: "center" }}>
              <Eyebrow>Markets we serve</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.625rem,1.17rem + 1.94vw,2.4375rem)", lineHeight: 1.15, letterSpacing: "-.012em", margin: "0 0 20px" }}>
                Four buildings, four different problems
              </h2>
              <p style={{ fontSize: "clamp(1.0625rem,.98rem + .35vw,1.25rem)", lineHeight: 1.6, color: "#444444", margin: 0 }}>The equipment overlaps. The constraints do not — and the constraint is what decides the selection.</p>
            </div>
            <div className="amz-mkt amz-row" style={{ display: "grid", gap: "clamp(20px,2.4vw,32px)" }}>
              {VERTICALS.map((v) => (
                <article key={v.n} style={{ display: "flex", flexDirection: "column" }}>
                  <a href="#contact" aria-label={`${v.title} — see the market`} className="amz-vert-link" style={{ position: "relative", display: "block", aspectRatio: "3 / 4", background: "#E3E5E8", borderRadius: 18, overflow: "hidden", textDecoration: "none" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={v.img} alt={v.alt} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                    <span aria-hidden style={{ position: "absolute", top: 16, left: 16, zIndex: 2, display: "inline-flex", alignItems: "center", height: 28, padding: "0 12px", borderRadius: 999, background: "rgba(10,16,23,.78)", color: "#FFFFFF", fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: ".06em" }}>
                      {v.n}
                    </span>
                  </a>
                  <div style={{ padding: "22px 2px 0" }}>
                    <p style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "var(--font-display)", fontStretch: "75%", fontWeight: 700, fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", color: "#5A6068", margin: "0 0 10px" }}>
                      <span aria-hidden style={{ width: 18, height: 1, background: "#1462A7", flex: "none" }} />
                      {v.tag}
                    </p>
                    <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(20px,2vw,25px)", lineHeight: 1.3, letterSpacing: "-.004em", margin: "0 0 10px" }}>{v.title}</h3>
                    <p style={{ fontSize: 14, lineHeight: 1.65, color: "#444444", margin: 0 }}>{v.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Engineers bento */}
        <section id="engineers" data-screen-label="Why engineers choose AMZ" style={{ padding: "clamp(64px,9vw,104px) 0", background: "#191C1F", color: "#FFFFFF", position: "relative", overflow: "hidden" }}>
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.05,
              backgroundImage: "linear-gradient(to right,#FFFFFF 1px,transparent 1px),linear-gradient(to bottom,#FFFFFF 1px,transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
            <div style={{ maxWidth: 660, margin: "0 auto clamp(40px,5vw,60px)", textAlign: "center" }}>
              <Eyebrow dark>For the design community</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.75rem,1.2rem + 2.2vw,2.75rem)", lineHeight: 1.1, letterSpacing: "-.016em", margin: "0 0 18px", color: "#FFFFFF" }}>
                Why mechanical engineers choose AMZ
              </h2>
              <p style={{ fontSize: "clamp(1.0625rem,.98rem + .35vw,1.25rem)", lineHeight: 1.6, color: "rgba(255,255,255,.78)", margin: 0 }}>Four things a specifier can check. Each one is something you receive, not something we claim.</p>
            </div>

            <div className="amz-bento" style={{ display: "grid", gap: "clamp(16px,1.8vw,24px)" }}>
              {/* Card 1 — assumptions attached */}
              <article className="amz-bcard" style={{ background: "#0F1418", border: "1px solid rgba(255,255,255,.10)", borderRadius: 20, overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div style={{ padding: "clamp(24px,2.6vw,32px) clamp(24px,2.6vw,32px) 0" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(19px,2vw,23px)", lineHeight: 1.3, letterSpacing: "-.006em", margin: "0 0 10px", color: "#FFFFFF" }}>Assumptions attached</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: "rgba(255,255,255,.72)", margin: 0, maxWidth: "42ch" }}>
                    Every selection arrives with its load basis, part-load curve and sound data. Where we modelled instead of measured, the copy says so.
                  </p>
                </div>
                <div aria-hidden style={{ position: "relative", flex: "1 1 auto", minHeight: 228, overflow: "hidden" }}>
                  <svg viewBox="0 0 400 200" preserveAspectRatio="none" style={{ position: "absolute", left: 0, right: 0, bottom: 0, width: "100%", height: "52%" }}>
                    <path d="M16,182 H384" stroke="rgba(255,255,255,.18)" strokeWidth="1" fill="none" />
                    <path d="M16,182 V26" stroke="rgba(255,255,255,.18)" strokeWidth="1" fill="none" />
                    <path d="M16,148 H384 M16,114 H384 M16,80 H384" stroke="rgba(255,255,255,.07)" strokeWidth="1" fill="none" />
                    <path d="M100,182 V26 M196,182 V26 M292,182 V26" stroke="rgba(255,255,255,.05)" strokeWidth="1" fill="none" />
                    <path className="amz-draw" d="M16,178 C96,172 132,146 196,128 C258,110 312,94 384,74" stroke="#7DB9ED" strokeWidth="2.5" fill="none" strokeLinecap="butt" />
                    <path className="amz-draw amz-draw-2" d="M16,186 C104,183 148,170 210,158 C270,146 320,136 384,124" stroke="rgba(255,255,255,.34)" strokeWidth="2" strokeDasharray="7 5" fill="none" />
                  </svg>
                  <span style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: "52%" }}>
                    <span className="amz-cursor" style={{ position: "absolute", left: "4%", top: 0, bottom: 0, width: 1, background: "linear-gradient(to bottom,rgba(125,185,237,0),rgba(125,185,237,.62))" }} />
                  </span>
                  <div style={{ position: "absolute", top: "clamp(14px,2vw,22px)", left: "clamp(24px,2.6vw,32px)", right: "clamp(24px,2.6vw,32px)", display: "flex", flexDirection: "column", gap: 7 }}>
                    <span className="amz-rise" style={{ display: "flex", justifyContent: "space-between", gap: 16, padding: "9px 13px", borderRadius: 9, background: "#151B21", border: "1px solid rgba(255,255,255,.12)", fontFamily: "var(--font-mono)", fontSize: 12, color: "rgba(255,255,255,.62)" }}>
                      Load basis<span style={{ color: "#FFFFFF" }}>metered</span>
                    </span>
                    <span className="amz-rise amz-rise-2" style={{ display: "flex", justifyContent: "space-between", gap: 16, padding: "9px 13px", borderRadius: 9, background: "#151B21", border: "1px solid rgba(255,255,255,.12)", fontFamily: "var(--font-mono)", fontSize: 12, color: "rgba(255,255,255,.62)" }}>
                      Part load 50%<span style={{ color: "#FFFFFF" }}>IPLV 0.42</span>
                    </span>
                    <span className="amz-rise amz-rise-3" style={{ display: "flex", justifyContent: "space-between", gap: 16, padding: "9px 13px", borderRadius: 9, background: "#10283C", border: "1px solid rgba(125,185,237,.40)", fontFamily: "var(--font-mono)", fontSize: 12, color: "#AFD3F3" }}>
                      Sound at line<span style={{ color: "#FFFFFF" }}>62 dBA</span>
                    </span>
                  </div>
                </div>
              </article>

              {/* Card 2 — in the design meeting */}
              <article className="amz-bcard" style={{ background: "#0F1418", border: "1px solid rgba(255,255,255,.10)", borderRadius: 20, overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div style={{ padding: "clamp(24px,2.6vw,32px) clamp(24px,2.6vw,32px) 0" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(19px,2vw,23px)", lineHeight: 1.3, letterSpacing: "-.006em", margin: "0 0 10px", color: "#FFFFFF" }}>In the design meeting, not just the bid</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: "rgba(255,255,255,.72)", margin: 0, maxWidth: "42ch" }}>
                    We sit in the review while the scheme is still moving. If a cheaper line meets your spec you hear it before submittals, not after.
                  </p>
                </div>
                <div aria-hidden style={{ position: "relative", flex: "1 1 auto", minHeight: 228, overflow: "hidden" }}>
                  <div style={{ position: "absolute", inset: "clamp(14px,2vw,20px) clamp(24px,2.6vw,32px) 0", borderRadius: "10px 10px 0 0", background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.10)", borderBottom: 0, overflow: "hidden" }}>
                    <div style={{ position: "absolute", inset: 0, padding: "16px 18px", display: "flex", flexDirection: "column", gap: 9 }}>
                      <span style={{ display: "block", height: 7, width: "56%", borderRadius: 2, background: "rgba(255,255,255,.26)" }} />
                      <span style={{ display: "block", height: 5, width: "88%", borderRadius: 2, background: "rgba(255,255,255,.12)" }} />
                      <span style={{ display: "block", height: 5, width: "74%", borderRadius: 2, background: "rgba(255,255,255,.12)" }} />
                      <span style={{ display: "block", height: 5, width: "82%", borderRadius: 2, background: "rgba(255,255,255,.12)" }} />
                      <span className="amz-mark" style={{ display: "block", height: 5, width: "46%", borderRadius: 2, background: "#7DB9ED" }} />
                      <span style={{ display: "block", height: 5, width: "78%", borderRadius: 2, background: "rgba(255,255,255,.12)" }} />
                      <span style={{ display: "block", height: 5, width: "62%", borderRadius: 2, background: "rgba(255,255,255,.12)" }} />
                      <span className="amz-mark amz-mark-2" style={{ display: "block", height: 5, width: "38%", borderRadius: 2, background: "#F99615" }} />
                      <span style={{ display: "block", height: 5, width: "70%", borderRadius: 2, background: "rgba(255,255,255,.12)" }} />
                    </div>
                    <div className="amz-scan" style={{ position: "absolute", left: 0, right: 0, height: 64, background: "linear-gradient(to bottom,rgba(125,185,237,0),rgba(125,185,237,.16),rgba(125,185,237,0))" }} />
                  </div>
                  <span className="amz-pop" style={{ position: "absolute", right: "clamp(16px,2vw,26px)", top: "34%", display: "inline-flex", alignItems: "center", gap: 7, padding: "7px 11px", borderRadius: 999, background: "#0A1017", border: "1px solid rgba(125,185,237,.42)", fontFamily: "var(--font-mono)", fontSize: 11, color: "#AFD3F3", whiteSpace: "nowrap" }}>
                    Pump head &minus;12 ft
                  </span>
                  <span className="amz-stamp" style={{ position: "absolute", right: "clamp(16px,2vw,26px)", bottom: "12%", display: "inline-flex", alignItems: "center", gap: 7, padding: "7px 12px", borderRadius: 999, background: "#0A1017", border: "1px solid rgba(255,255,255,.22)", fontFamily: "var(--font-display)", fontStretch: "75%", fontWeight: 700, fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "#FFFFFF", whiteSpace: "nowrap" }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#7DB9ED" strokeWidth="3.2" strokeLinecap="butt" strokeLinejoin="miter" aria-hidden="true">
                      <path d="M4 12l5 5L20 6" />
                    </svg>
                    Reviewed pre-issue
                  </span>
                  <span className="amz-pop amz-pop-2" style={{ position: "absolute", left: "clamp(16px,2vw,26px)", bottom: "30%", display: "inline-flex", alignItems: "center", gap: 7, padding: "7px 11px", borderRadius: 999, background: "#0A1017", border: "1px solid rgba(249,150,21,.42)", fontFamily: "var(--font-mono)", fontSize: 11, color: "#FBB356", whiteSpace: "nowrap" }}>
                    Alt line meets spec
                  </span>
                </div>
              </article>

              {/* Card 3 — schedules that stay current */}
              <article className="amz-bcard" style={{ background: "#0F1418", border: "1px solid rgba(255,255,255,.10)", borderRadius: 20, overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div style={{ padding: "clamp(24px,2.6vw,32px) clamp(24px,2.6vw,32px) 0" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(19px,2vw,23px)", lineHeight: 1.3, letterSpacing: "-.006em", margin: "0 0 10px", color: "#FFFFFF" }}>Schedules that stay current</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: "rgba(255,255,255,.72)", margin: 0, maxWidth: "42ch" }}>
                    Equipment moves, spec sections don&rsquo;t. We keep the schedule and the blocks current, so today&rsquo;s spec still matches what lands on site.
                  </p>
                </div>
                <div aria-hidden style={{ position: "relative", flex: "1 1 auto", minHeight: 228, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span className="amz-glow" style={{ position: "absolute", left: "50%", top: "50%", width: "min(300px,86%)", aspectRatio: "1 / 1", marginLeft: "min(-150px,-43%)", transform: "translateY(-50%)", borderRadius: 999, background: "radial-gradient(circle,rgba(24,121,205,.42) 0%,rgba(20,98,167,.18) 42%,rgba(20,98,167,0) 72%)" }} />
                  <span className="amz-wave" style={{ position: "absolute", left: "50%", top: "50%", width: "min(268px,78%)", aspectRatio: "1 / 1", margin: "min(-134px,-39%) 0 0 min(-134px,-39%)", borderRadius: 999, border: "1px solid rgba(125,185,237,.50)" }} />
                  <span className="amz-wave amz-wave-2" style={{ position: "absolute", left: "50%", top: "50%", width: "min(268px,78%)", aspectRatio: "1 / 1", margin: "min(-134px,-39%) 0 0 min(-134px,-39%)", borderRadius: 999, border: "1px solid rgba(125,185,237,.34)" }} />
                  <span className="amz-wave amz-wave-3" style={{ position: "absolute", left: "50%", top: "50%", width: "min(268px,78%)", aspectRatio: "1 / 1", margin: "min(-134px,-39%) 0 0 min(-134px,-39%)", borderRadius: 999, border: "1px solid rgba(249,150,21,.30)" }} />
                  <div style={{ position: "relative", zIndex: 2, width: "min(146px,44%)", aspectRatio: "1 / 1" }}>
                    <span className="amz-orbit" style={{ position: "absolute", inset: "-14%", borderRadius: 999, border: "1px solid rgba(255,255,255,.10)", borderTopColor: "#7DB9ED", borderRightColor: "rgba(125,185,237,.48)" }} />
                    <span className="amz-orbit amz-orbit-rev" style={{ position: "absolute", inset: "-26%", borderRadius: 999, border: "1px dashed rgba(255,255,255,.12)", borderBottomColor: "rgba(249,150,21,.60)" }} />
                    <span style={{ position: "absolute", inset: 0, borderRadius: 999, background: "radial-gradient(circle at 50% 34%,#1B77C6 0%,#0F4E85 52%,#08304F 100%)", boxShadow: "inset 0 1px 0 rgba(255,255,255,.28),0 0 0 1px rgba(125,185,237,.34),0 10px 34px rgba(20,98,167,.46)" }} />
                    <span style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4 }}>
                      <span style={{ position: "relative", display: "inline-flex", fontFamily: "var(--font-mono)", fontSize: "clamp(19px,2.2vw,25px)", color: "#FFFFFF", letterSpacing: ".02em" }}>
                        <span className="amz-rev-a">REV 03</span>
                        <span className="amz-rev-b" style={{ position: "absolute", left: 0, top: 0, whiteSpace: "nowrap" }}>REV 04</span>
                      </span>
                      <span style={{ fontFamily: "var(--font-display)", fontStretch: "75%", fontWeight: 700, fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "#AFD3F3" }}>Schedule synced</span>
                    </span>
                  </div>
                  <span className="amz-sheet" style={{ position: "absolute", left: "clamp(16px,2vw,24px)", top: "14%", display: "flex", flexDirection: "column", gap: 5, padding: "9px 12px", borderRadius: 10, background: "#141A21", border: "1px solid rgba(255,255,255,.12)", boxShadow: "0 8px 20px rgba(0,0,0,.36)" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "rgba(255,255,255,.52)", letterSpacing: ".06em" }}>AHU-2 &middot; supersedes</span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "rgba(255,255,255,.44)", textDecoration: "line-through" }}>1,200 CFM</span>
                  </span>
                  <span className="amz-sheet amz-sheet-2" style={{ position: "absolute", right: "clamp(16px,2vw,24px)", bottom: "22%", display: "flex", flexDirection: "column", gap: 5, padding: "9px 12px", borderRadius: 10, background: "#0E2B45", border: "1px solid rgba(125,185,237,.42)", boxShadow: "0 8px 20px rgba(0,0,0,.36)" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#AFD3F3", letterSpacing: ".06em" }}>AHU-2 &middot; current</span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "#FFFFFF" }}>1,450 CFM</span>
                  </span>
                  <div style={{ position: "absolute", left: "clamp(24px,2.6vw,32px)", right: "clamp(24px,2.6vw,32px)", bottom: "clamp(16px,2vw,22px)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
                    <span style={{ display: "flex", gap: 6, flex: "none" }}>
                      <span className="amz-tick" style={{ display: "block", width: 22, height: 3, borderRadius: 2, background: "#7DB9ED" }} />
                      <span className="amz-tick amz-tick-2" style={{ display: "block", width: 22, height: 3, borderRadius: 2, background: "#7DB9ED" }} />
                      <span className="amz-tick amz-tick-3" style={{ display: "block", width: 22, height: 3, borderRadius: 2, background: "#7DB9ED" }} />
                      <span className="amz-tick amz-tick-4" style={{ display: "block", width: 22, height: 3, borderRadius: 2, background: "#7DB9ED" }} />
                    </span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "rgba(255,255,255,.46)", whiteSpace: "nowrap" }}>Revit &middot; CAD &middot; 3-part</span>
                  </div>
                </div>
              </article>

              {/* Card 4 — one engineer */}
              <article className="amz-bcard" style={{ background: "#0F1418", border: "1px solid rgba(255,255,255,.10)", borderRadius: 20, overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div style={{ padding: "clamp(24px,2.6vw,32px) clamp(24px,2.6vw,32px) 0" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(19px,2vw,23px)", lineHeight: 1.3, letterSpacing: "-.006em", margin: "0 0 10px", color: "#FFFFFF" }}>One engineer, start to finish</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: "rgba(255,255,255,.72)", margin: 0, maxWidth: "42ch" }}>
                    The person who sized it attends start-up and signs the readings — one named contact, no handover to a service desk halfway through the job.
                  </p>
                </div>
                <div aria-hidden style={{ position: "relative", flex: "1 1 auto", minHeight: 228, overflow: "hidden", display: "flex", alignItems: "center" }}>
                  <div style={{ position: "relative", width: "100%", padding: "0 clamp(24px,2.6vw,32px)" }}>
                    <span style={{ position: "absolute", left: "clamp(24px,2.6vw,32px)", right: "clamp(24px,2.6vw,32px)", top: 23, height: 2, background: "rgba(255,255,255,.12)" }} />
                    <span className="amz-fill" style={{ position: "absolute", left: "clamp(24px,2.6vw,32px)", right: "clamp(24px,2.6vw,32px)", top: 23, height: 2, background: "linear-gradient(90deg,#0F4E85,#7DB9ED 62%,#F99615)" }} />
                    <div style={{ position: "relative", display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                      {[
                        { label: "Survey", cls: "", path: "M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z M9.6 10h4.8M12 7.6v4.8" },
                        { label: "Select", cls: "-2", path: "M6 3h9l4 4v14H6z M15 3v4h4 M9 12h6M9 16h4" },
                        { label: "Start-up", cls: "-3", path: "M3 20V10l5-3v13 M8 20V6l7 3v11h6 M18 14h1M18 17h1" },
                        { label: "Sign-off", cls: "-4", path: "M4 12l5 5L20 6 M4 20h16" },
                      ].map((n, idx) => (
                        <span key={n.label} className={`amz-node${n.cls}`} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 11 }}>
                          <span
                            style={{
                              position: "relative",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: 46,
                              height: 46,
                              borderRadius: 999,
                              background: "#0F1418",
                              border: `1px solid ${idx === 3 ? "rgba(249,150,21,.44)" : "rgba(125,185,237,.40)"}`,
                              boxShadow: "0 0 0 5px #0F1418",
                            }}
                          >
                            <span style={{ position: "absolute", inset: 4, borderRadius: 999, background: idx === 3 ? "rgba(249,150,21,.13)" : "rgba(125,185,237,.12)" }} />
                            <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="butt" strokeLinejoin="miter" aria-hidden="true" style={{ position: "relative", color: idx === 3 ? "#F99615" : "#7DB9ED" }}>
                              <path d={n.path} />
                            </svg>
                            <span className={`amz-ping${n.cls}`} style={{ position: "absolute", left: "50%", top: "50%", width: 64, height: 64, margin: "-32px 0 0 -32px", border: `1px solid ${idx === 3 ? "#F99615" : "#7DB9ED"}`, borderRadius: 999 }} />
                          </span>
                          <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "rgba(255,255,255,.72)", whiteSpace: "nowrap" }}>{n.label}</span>
                        </span>
                      ))}
                    </div>
                    <span aria-hidden style={{ position: "absolute", left: "clamp(24px,2.6vw,32px)", right: "clamp(24px,2.6vw,32px)", top: 23, height: 0 }}>
                      <span className="amz-carrier" style={{ position: "absolute", left: 0, top: 0, width: 34, height: 34, margin: "-17px 0 0 -17px", borderRadius: 999, background: "radial-gradient(circle,rgba(125,185,237,.50),rgba(125,185,237,0) 70%)" }} />
                    </span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Premier partners */}
        <section id="partners" data-screen-label="Premier partners" style={{ padding: "clamp(64px,9vw,96px) 0", borderBottom: "1px solid #E3E5E8" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
            <div style={{ maxWidth: 680, margin: "0 auto 56px", textAlign: "center" }}>
              <Eyebrow>Premier partners</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.625rem,1.17rem + 1.94vw,2.4375rem)", lineHeight: 1.15, letterSpacing: "-.012em", margin: "0 0 20px" }}>Front of the line card</h2>
              <p style={{ fontSize: "clamp(1.0625rem,.98rem + .35vw,1.25rem)", lineHeight: 1.6, color: "#444444", margin: 0 }}>
                The manufacturers we represent most often, and what we specify them for. Every line links straight to the product pages and selection data.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,290px),1fr))", gap: "clamp(16px,1.8vw,24px)" }}>
              {PARTNER_CARDS.map((p) => (
                <article key={p.alt} className="amz-partner-card" style={{ display: "flex", flexDirection: "column", background: "#FFFFFF", border: "1px solid #E3E5E8", borderRadius: 16, padding: 26 }}>
                  <div style={{ height: 52, display: "flex", alignItems: "center", marginBottom: 22 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.logo} alt={p.alt} style={{ maxHeight: 40, maxWidth: 170, width: "auto", height: "auto" }} />
                  </div>
                  <p style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "var(--font-display)", fontStretch: "75%", fontWeight: 700, fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", color: "#5A6068", margin: "0 0 12px", paddingTop: 18, borderTop: "1px solid #E3E5E8" }}>
                    <span aria-hidden style={{ width: 18, height: 1, background: "#1462A7", flex: "none" }} />
                    {p.category}
                  </p>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: "#444444", margin: "0 0 22px" }}>{p.text}</p>
                  <a href="#partners" className="amz-link-arrow" style={{ marginTop: "auto", display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14, color: "#1462A7", textDecoration: "none" }}>
                    Product range
                    <ArrowIcon />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials ring */}
        <section id="testimonials" data-screen-label="Testimonials" style={{ padding: "clamp(64px,9vw,96px) 0", background: "#F9FAFB", borderBottom: "1px solid #E3E5E8", overflow: "hidden" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
            <div style={{ maxWidth: 640, margin: "0 auto 56px", textAlign: "center" }}>
              <Eyebrow>In their words</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.625rem,1.17rem + 1.94vw,2.4375rem)", lineHeight: 1.15, letterSpacing: "-.012em", margin: 0 }}>Every side of the same job</h2>
            </div>

            <div className="amz-ring" style={{ position: "relative", width: "min(100%,calc(var(--r) * 2 + var(--av) + 24px))", margin: "0 auto", aspectRatio: "1 / 1", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div className="amz-ring-track" aria-hidden style={{ position: "absolute", top: "50%", left: "50%", width: "calc(var(--r) * 2)", height: "calc(var(--r) * 2)", margin: "calc(var(--r) * -1) 0 0 calc(var(--r) * -1)", border: "1px dashed #C7CBD1", borderRadius: 999 }} />
              <div
                className="amz-ring-track"
                aria-hidden
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: "calc(var(--r) * 2)",
                  height: "calc(var(--r) * 2)",
                  margin: "calc(var(--r) * -1) 0 0 calc(var(--r) * -1)",
                  borderRadius: 999,
                  background: "conic-gradient(from -105deg, rgba(20,98,167,.13) 0deg, rgba(20,98,167,0) 90deg, rgba(20,98,167,0) 360deg)",
                  transition: `transform 640ms ${EASE_MOVE}`,
                  transform: ringT,
                }}
              />

              <div className="amz-ring-track" style={{ position: "absolute", inset: 0, transition: `transform 640ms ${EASE_MOVE}`, transform: ringT }}>
                {TESTIMONIALS.map((t, i) => {
                  const isActive = active === i;
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => pick(i)}
                      aria-label={`Show the review from ${t.name.toLowerCase()}`}
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        width: "var(--av)",
                        height: "var(--av)",
                        margin: "calc(var(--av) / -2) 0 0 calc(var(--av) / -2)",
                        padding: 0,
                        border: 0,
                        background: "transparent",
                        cursor: "pointer",
                        transform: `rotate(${i * 60}deg) translateY(calc(var(--r) * -1))`,
                      }}
                    >
                      <span
                        className={isActive ? "amz-av-on" : ""}
                        style={{
                          display: "block",
                          width: "var(--av)",
                          height: "var(--av)",
                          borderRadius: 999,
                          overflow: "hidden",
                          background: "#E3E5E8",
                          boxShadow: "0 2px 4px rgba(25,28,31,.05),0 6px 14px rgba(25,28,31,.07)",
                          transition: `box-shadow 240ms ${EASE_MOVE},transform 240ms ${EASE_MOVE}`,
                          position: "relative",
                          transform: `${upAngle(i)} ${isActive ? "scale(1.12)" : "scale(1)"}`,
                        }}
                      >
                        {t.avatar ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={t.avatar} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                        ) : (
                          <PlaceholderAvatar />
                        )}
                        {t.video && (
                          <span aria-hidden style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(10,16,23,.42)" }}>
                            <svg width="26" height="26" viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden="true">
                              <path d="M8 5l11 7-11 7z" />
                            </svg>
                          </span>
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div style={{ position: "relative", zIndex: 2, width: "min(100%,420px)", minHeight: 320, display: "flex", alignItems: "center", justifyContent: "center", padding: 8 }}>
                {TESTIMONIALS.map((t, i) => (
                  <figure
                    key={i}
                    className={`amz-tq${active === i ? " amz-tq-on" : ""}`}
                    style={{ margin: 0, position: "absolute", textAlign: "center", transition: "opacity 400ms cubic-bezier(0.16,0.84,0.24,1)" }}
                  >
                    {t.video ? (
                      <p
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 8,
                          fontFamily: "var(--font-display)",
                          fontStretch: "75%",
                          fontWeight: 700,
                          fontSize: 11,
                          letterSpacing: ".14em",
                          textTransform: "uppercase",
                          color: "#1462A7",
                          margin: "0 0 16px",
                          padding: "6px 12px",
                          border: "1px solid #AFD3F3",
                          borderRadius: 999,
                        }}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="#1462A7" aria-hidden="true">
                          <path d="M8 5l11 7-11 7z" />
                        </svg>
                        Video review
                      </p>
                    ) : (
                      <div style={{ height: 4, width: 44, background: "linear-gradient(96deg,#0F4E85 0%,#1879CD 100%)", margin: "0 auto 22px" }} />
                    )}
                    <blockquote style={{ margin: "0 0 20px", fontSize: "clamp(1.125rem,1.02rem + .55vw,1.75rem)", lineHeight: 1.42, letterSpacing: "-.006em", color: "#191C1F", maxWidth: "26ch", marginInline: "auto" }}>
                      {t.quote}
                    </blockquote>
                    <figcaption>
                      <p style={{ fontWeight: 600, fontSize: 14, margin: 0, color: "#191C1F" }}>{t.name}</p>
                      <p style={{ fontSize: 13, lineHeight: 1.5, color: "#444444", margin: 0 }}>{t.role}</p>
                    </figcaption>
                    {t.video && (
                      <a href="#testimonials" className="amz-link-arrow" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 18, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14, color: "#1462A7", textDecoration: "none" }}>
                        Watch the full review
                        <ArrowIcon />
                      </a>
                    )}
                  </figure>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 4, justifyContent: "center", marginTop: 24 }}>
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => pick(i)}
                  aria-label={`Review ${i + 1} of 6`}
                  style={{ width: 44, height: 44, padding: 0, border: 0, background: "transparent", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
                >
                  <span
                    className={active === i ? "amz-dot-on" : ""}
                    style={{ display: "block", width: 9, height: 9, borderRadius: 999, background: "#C7CBD1", transition: "background-color 160ms,transform 160ms", transform: active === i ? "scale(1.7)" : "scale(1)" }}
                  />
                </button>
              ))}
            </div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 13, lineHeight: 1.6, color: "#5A6068", margin: "20px 0 0", textAlign: "center" }}>
              Quote copy and attributions are placeholders pending client-supplied, consented testimonials.
            </p>
          </div>
        </section>

        {/* Social impact mosaic */}
        <section id="impact" data-screen-label="Social impact" style={{ padding: "clamp(64px,9vw,96px) 0", borderBottom: "1px solid #E3E5E8" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
            <div style={{ maxWidth: 700, margin: "0 auto 56px", textAlign: "center" }}>
              <Eyebrow>Social impact</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.625rem,1.17rem + 1.94vw,2.4375rem)", lineHeight: 1.15, letterSpacing: "-.012em", margin: "0 0 20px" }}>
                The second half of &ldquo;buildings and communities&rdquo;
              </h2>
              <p style={{ fontSize: "clamp(1.0625rem,.98rem + .35vw,1.25rem)", lineHeight: 1.6, color: "#444444", margin: 0 }}>
                Crew time, equipment and know-how given to organisations in the counties we work in. Hours and partners are published, not estimated.
              </p>
            </div>
            <div className="amz-mosaic" style={{ display: "grid", gap: "clamp(10px,1.2vw,16px)", gridAutoFlow: "dense", marginBottom: "clamp(36px,5vw,56px)" }}>
              {MOSAIC.map((m) => (
                <figure key={m.alt} className="amz-tile" style={{ gridColumn: m.span.split(" / ")[0], gridRow: m.span.split(" / ")[1], margin: 0, position: "relative", borderRadius: 16, overflow: "hidden", background: "#E3E5E8" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.img} alt={m.alt} loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: m.pos }} />
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* CTA band */}
        <section id="contact" data-screen-label="CTA band" style={{ background: "#0F4E85", position: "relative", overflow: "hidden" }}>
          <svg viewBox="0 0 1600 340" preserveAspectRatio="none" aria-hidden="true" style={{ position: "absolute", inset: 0, width: "130%", height: "100%", opacity: 0.13 }}>
            <path d="M-160,300 A1900,1900 0 0 1 1740,120" fill="none" stroke="#FFFFFF" strokeWidth="28" />
          </svg>
          <div style={{ position: "relative", maxWidth: 820, margin: "0 auto", padding: "clamp(56px,8vw,88px) clamp(20px,4vw,40px)", textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.625rem,1.17rem + 1.94vw,2.4375rem)", lineHeight: 1.15, letterSpacing: "-.012em", margin: "0 0 16px", color: "#FFFFFF" }}>
              Tell us what the building is doing
            </h2>
            <p style={{ fontSize: "clamp(1.0625rem,.98rem + .35vw,1.25rem)", lineHeight: 1.6, color: "rgba(255,255,255,.86)", margin: "0 0 32px" }}>We&rsquo;ll come and measure. We reply to every request within one business day.</p>
            <address style={{ fontStyle: "normal", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, fontSize: 15, lineHeight: 1.6, color: "rgba(255,255,255,.80)", margin: "0 0 28px" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.62)" strokeWidth="2" strokeLinecap="butt" strokeLinejoin="miter" aria-hidden="true" style={{ flex: "none" }}>
                <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
                <circle cx="12" cy="10" r="2.6" />
              </svg>
              100 W Oxford Street, Philadelphia, PA 19122
            </address>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center", alignItems: "center" }}>
              <a href="#contact" className="amz-btn-accent" style={{ display: "inline-flex", alignItems: "center", height: 58, padding: "0 34px", borderRadius: 999, background: "#F99615", color: "#191C1F", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16, textDecoration: "none" }}>
                Request a quote
              </a>
              <a
                href="tel:0000000000"
                className="amz-btn-outline-light"
                style={{ display: "inline-flex", alignItems: "center", gap: 10, height: 58, padding: "0 28px", borderRadius: 999, border: "1.5px solid rgba(255,255,255,.56)", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16, color: "#FFFFFF", textDecoration: "none" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="butt" strokeLinejoin="miter" aria-hidden="true">
                  <path d="M4 3h5l2 5-3 2a12 12 0 0 0 6 6l2-3 5 2v5h-2A15 15 0 0 1 4 5z" />
                </svg>
                000-000-0000
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ background: "#0A1017", color: "#FFFFFF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "clamp(56px,8vw,88px) clamp(20px,4vw,40px) 0" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", gap: "clamp(32px,4vw,56px)", paddingBottom: "clamp(40px,5vw,56px)", borderBottom: "1px solid rgba(255,255,255,.14)" }}>
            <div style={{ minWidth: 0 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo/amz-logo-white.png" alt="AMZ Energy Systems" width={471} height={574} style={{ display: "block", height: 76, width: "auto", marginBottom: 24 }} />
              <p style={{ fontSize: "clamp(1.0625rem,.98rem + .35vw,1.25rem)", lineHeight: 1.6, color: "#FFFFFF", margin: 0, maxWidth: "36ch" }}>
                We engineer, install and maintain the mechanical systems that decide whether a building performs — and hand over the numbers that prove it.
              </p>
            </div>
            <div style={{ minWidth: 0, display: "flex", flexDirection: "column", justifyContent: "center", gap: 2 }}>
              <a href="tel:0000000000" className="amz-footer-tel" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, padding: "18px 0", borderBottom: "1px solid rgba(255,255,255,.12)", textDecoration: "none" }}>
                <span style={{ fontFamily: "var(--font-display)", fontStretch: "75%", fontWeight: 700, fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.56)" }}>Main line</span>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(18px,2vw,22px)", color: "#FFFFFF", fontVariantNumeric: "tabular-nums" }}>000-000-0000</span>
              </a>
              <a href="tel:0000000000" className="amz-footer-tel" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, padding: "18px 0", borderBottom: "1px solid rgba(255,255,255,.12)", textDecoration: "none" }}>
                <span style={{ fontFamily: "var(--font-display)", fontStretch: "75%", fontWeight: 700, fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", color: "#F0A9A4" }}>24/7 emergency</span>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(18px,2vw,22px)", color: "#F0A9A4", fontVariantNumeric: "tabular-nums" }}>000-000-0000</span>
              </a>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 20, padding: "18px 0" }}>
                <span style={{ fontFamily: "var(--font-display)", fontStretch: "75%", fontWeight: 700, fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.56)", paddingTop: 3 }}>Office</span>
                <address style={{ fontStyle: "normal", textAlign: "right", fontSize: 15, lineHeight: 1.6, color: "#FFFFFF", margin: 0 }}>
                  100 W Oxford Street
                  <br />
                  Philadelphia, PA 19122
                </address>
              </div>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,180px),1fr))", gap: "clamp(28px,3vw,44px)", padding: "clamp(40px,5vw,56px) 0" }}>
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.heading}>
                <p style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "var(--font-display)", fontStretch: "75%", fontWeight: 700, fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.56)", margin: "0 0 20px" }}>
                  <span aria-hidden style={{ width: 18, height: 1, background: "#7DB9ED", flex: "none" }} />
                  {col.heading}
                </p>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="amz-footer-link" style={{ fontSize: 15, color: "rgba(255,255,255,.80)", textDecoration: "none" }}>
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div style={{ minWidth: 0 }}>
              <p style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "var(--font-display)", fontStretch: "75%", fontWeight: 700, fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.56)", margin: "0 0 20px" }}>
                <span aria-hidden style={{ width: 18, height: 1, background: "#7DB9ED", flex: "none" }} />
                Newsletter
              </p>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,.72)", margin: "0 0 16px", maxWidth: "32ch" }}>Selection notes and spec changes, a few times a year. No sales mail.</p>
              <form
                onSubmit={(e) => e.preventDefault()}
                style={{ display: "flex", alignItems: "center", gap: 8, border: "1px solid rgba(255,255,255,.28)", borderRadius: 999, padding: "6px 6px 6px 18px" }}
              >
                <label htmlFor="amz-news" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>
                  Your email address
                </label>
                <input id="amz-news" type="email" placeholder="Your email address" style={{ flex: "1 1 auto", minWidth: 0, height: 40, background: "transparent", border: 0, color: "#FFFFFF", fontFamily: "var(--font-body)", fontSize: 15, outline: "none" }} />
                <button type="submit" aria-label="Subscribe" style={{ flex: "none", width: 40, height: 40, borderRadius: 999, background: "#FFFFFF", border: 0, cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  <ArrowIcon color="#0A1017" />
                </button>
              </form>
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,.14)", padding: "24px 0 32px", display: "flex", flexWrap: "wrap", gap: 20, justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ fontSize: 13, lineHeight: 1.5, color: "rgba(255,255,255,.56)", margin: 0 }}>&copy; 2026 AMZ Energy Systems &middot; Licence no. pending client fact</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
              <a href="#contact" style={{ fontSize: 13, color: "rgba(255,255,255,.56)" }}>Privacy</a>
              <a href="#contact" style={{ fontSize: 13, color: "rgba(255,255,255,.56)" }}>Terms</a>
              <a href="#contact" style={{ fontSize: 13, color: "rgba(255,255,255,.56)" }}>Accessibility</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Cookie consent */}
      {cookie !== "hidden" && (
        <div
          role="region"
          aria-label="Cookie notice"
          style={{
            position: "fixed",
            right: "clamp(12px,2vw,24px)",
            bottom: "clamp(12px,2vw,24px)",
            zIndex: 600,
            width: "min(440px,calc(100vw - 24px))",
            maxHeight: "calc(100dvh - 32px)",
            display: "flex",
            flexDirection: "column",
            background: "rgba(255,255,255,.82)",
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
            border: "1px solid rgba(255,255,255,.70)",
            borderRadius: 16,
            boxShadow: "inset 0 1px 0 rgba(255,255,255,.92),0 8px 16px rgba(25,28,31,.10),0 24px 56px rgba(25,28,31,.18)",
            overflow: "hidden",
          }}
        >
          {cookie === "notice" && (
            <div style={{ padding: 20 }}>
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16, lineHeight: 1.4, margin: "0 0 8px", color: "#191C1F" }}>Cookies on this site</p>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "#444444", margin: "0 0 16px" }}>
                Essential cookies run the site. Everything else is off until you say otherwise. <a href="#contact">How we handle your details</a>
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                <button
                  type="button"
                  onClick={() => {
                    setConsent({ analytics: true, functional: true, marketing: true });
                    setCookie("hidden");
                  }}
                  className="amz-cookie-primary"
                  style={{ flex: "1 1 auto", height: 44, padding: "0 20px", border: 0, borderRadius: 999, background: "#1462A7", color: "#FFFFFF", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, cursor: "pointer", whiteSpace: "nowrap" }}
                >
                  Accept all
                </button>
                <button
                  type="button"
                  onClick={() => setCookie("prefs")}
                  aria-expanded={false}
                  className="amz-cookie-outline"
                  style={{ flex: "1 1 auto", height: 44, padding: "0 20px", border: "1.5px solid #9CA2AB", borderRadius: 999, background: "rgba(255,255,255,.46)", color: "#444444", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, cursor: "pointer", whiteSpace: "nowrap" }}
                >
                  Manage cookies
                </button>
              </div>
            </div>
          )}

          {cookie === "prefs" && (
            <>
              <div style={{ flex: "none", display: "flex", alignItems: "center", gap: 12, padding: "18px 20px", borderBottom: "1px solid rgba(25,28,31,.10)" }}>
                <button
                  type="button"
                  onClick={() => setCookie("notice")}
                  aria-label="Back to the cookie notice"
                  className="amz-cookie-back"
                  style={{ flex: "none", width: 32, height: 32, display: "inline-flex", alignItems: "center", justifyContent: "center", background: "transparent", border: "1px solid #E3E5E8", borderRadius: 999, cursor: "pointer" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#444444" strokeWidth="2.2" strokeLinecap="butt" strokeLinejoin="miter" aria-hidden="true">
                    <path d="M20 12H4M10 6l-6 6 6 6" />
                  </svg>
                </button>
                <p style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16, lineHeight: 1.4, margin: 0, color: "#191C1F" }}>Cookie permissions</p>
              </div>
              <ul style={{ listStyle: "none", margin: 0, padding: "6px 20px", flex: "1 1 auto", minHeight: 0, overflowY: "auto", overscrollBehavior: "contain" }}>
                <li style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "14px 0", borderBottom: "1px solid rgba(25,28,31,.10)" }}>
                  <span style={{ flex: "none", display: "inline-flex", alignItems: "center", height: 24, padding: "0 10px", borderRadius: 999, background: "#F1F2F4", color: "#444444", fontFamily: "var(--font-display)", fontStretch: "75%", fontWeight: 700, fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", marginTop: 2 }}>
                    Always on
                  </span>
                  <span style={{ minWidth: 0 }}>
                    <span style={{ display: "block", fontWeight: 600, fontSize: 14, color: "#191C1F", marginBottom: 3 }}>Strictly necessary</span>
                    <span style={{ display: "block", fontSize: 13, lineHeight: 1.55, color: "#444444" }}>Page delivery, security and your cookie choice. Cannot be switched off.</span>
                  </span>
                </li>
                {(
                  [
                    { key: "analytics" as const, label: "Analytics", text: "Which pages and spec downloads get used, aggregated. No cross-site tracking." },
                    { key: "functional" as const, label: "Functional", text: "Remembers the specifier-tool inputs and your last-viewed market so you don’t re-enter them." },
                    { key: "marketing" as const, label: "Marketing", text: "Measures which campaigns bring engineers here. Set by third parties." },
                  ]
                ).map((row) => (
                  <li key={row.key} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "14px 0", borderBottom: "1px solid rgba(25,28,31,.10)" }}>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={consent[row.key]}
                      onClick={() => toggleConsent(row.key)}
                      aria-label={`${row.label} cookies`}
                      style={{ flex: "none", width: 44, height: 24, marginTop: 2, padding: 2, border: 0, borderRadius: 999, cursor: "pointer", background: track(consent[row.key]), transition: "background-color 240ms cubic-bezier(0.32,0,0.68,1)" }}
                    >
                      <span aria-hidden style={{ display: "block", width: 20, height: 20, borderRadius: 999, background: "#FFFFFF", boxShadow: "0 1px 2px rgba(25,28,31,.24)", transition: "transform 240ms cubic-bezier(0.32,0,0.68,1)", transform: knob(consent[row.key]) }} />
                    </button>
                    <span style={{ minWidth: 0 }}>
                      <span style={{ display: "block", fontWeight: 600, fontSize: 14, color: "#191C1F", marginBottom: 3 }}>{row.label}</span>
                      <span style={{ display: "block", fontSize: 13, lineHeight: 1.55, color: "#444444" }}>{row.text}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <div style={{ flex: "none", padding: "16px 20px 20px", borderTop: "1px solid rgba(25,28,31,.10)", display: "flex", flexWrap: "wrap", gap: 10 }}>
                <button type="button" onClick={() => setCookie("hidden")} className="amz-cookie-primary" style={{ flex: "1 1 auto", height: 44, padding: "0 20px", border: 0, borderRadius: 999, background: "#1462A7", color: "#FFFFFF", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, cursor: "pointer", whiteSpace: "nowrap" }}>
                  Save choices
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setConsent({ analytics: false, functional: false, marketing: false });
                    setCookie("hidden");
                  }}
                  className="amz-cookie-outline"
                  style={{ flex: "1 1 auto", height: 44, padding: "0 20px", border: "1.5px solid #9CA2AB", borderRadius: 999, background: "rgba(255,255,255,.46)", color: "#444444", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, cursor: "pointer", whiteSpace: "nowrap" }}
                >
                  Reject non-essential
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
