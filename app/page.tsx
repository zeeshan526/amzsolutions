"use client";

import { useEffect, useRef, useState } from "react";

import ArrowIcon from "./_components/ArrowIcon";
import QuoteForm from "./_components/QuoteForm";
import SiteFooter from "./_components/SiteFooter";
import SiteHeader from "./_components/SiteHeader";
import TechnologyServices from "./_components/TechnologyServices";
import { AMZ_PHONE_DISPLAY, AMZ_PHONE_HREF } from "./_lib/contact";
import { LINE_CARD_HREF } from "./_lib/lineCard";
import { TIMELINE, HERO_OVERLAYS, HERO_VIDEO, HERO_HEIGHT, HERO_FADE, progressToTime, type HeroOverlay } from "./_lib/hero";

/* ---------------------------------------------------------------------- */
/*  Static content                                                        */
/* ---------------------------------------------------------------------- */


const PARTNER_LOGOS = [
  { src: "/images/partners/unilux.png", alt: "Unilux HVAC Industries", href: "https://uniluxhvac.com/" },
  { src: "/images/partners/xnrgy.png", alt: "XNRGY", href: "https://www.xnrgy.com/" },
  { src: "/images/partners/galletti.png", alt: "Galletti", href: "https://www.galletti-na.com/" },
  { src: "/images/partners/american-cooling-tower.png", alt: "American Cooling Tower, Inc", href: "https://www.americancoolingtower.com/" },
  { src: "/images/partners/aermec.png", alt: "Aermec air conditioning", href: "https://aermec-na.com/" },
  { src: "/images/partners/dunham-bush.png", alt: "Dunham-Bush", href: "https://dbamericas.com/" },
  { src: "/images/partners/hisense.png", alt: "Hisense", href: "https://hisensecomfort.com/" },
  { src: "/images/partners/superior-rex.png", alt: "Superior Rex", href: "https://www.superiorrex.com/" },
];

const STEPS = [
  { n: "01", title: "Walk The Building", text: "Plant room, risers, the zones that complain. Before any selection is made." },
  { n: "02", title: "Measure And Model", text: "Metered load where it exists, modelled where it doesn’t, and we always say which." },
  { n: "03", title: "Specify Together", text: "Options priced side by side, with the trade-off stated in plain terms." },
  { n: "04", title: "Commission And Hand Over", text: "Start-up attended, readings documented, one name to call afterwards." },
];

const VERTICALS = [
  {
    n: "01",
    tag: "Commercial",
    title: "High-Rise Office & Residential",
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
    title: "Data Centres",
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
    href: "https://aermec-na.com/",
    category: "Chillers · heat pumps",
    text: "Air- and water-cooled chillers, reversible heat pumps, fan coils. Our default for mid-size plant rooms with tight acoustic limits.",
  },
  {
    logo: "/images/partners/dunham-bush.png",
    alt: "Dunham-Bush",
    href: "https://dbamericas.com/",
    category: "Chillers · air handling",
    text: "Screw and centrifugal chillers, custom air handling. Where a long service life and rebuildable plant matter more than first cost.",
  },
  {
    logo: "/images/partners/american-cooling-tower.png",
    alt: "American Cooling Tower",
    href: "https://www.americancoolingtower.com/",
    category: "Heat rejection",
    text: "Field-erected and factory cooling towers, basin and fill rebuilds. Retrofits into existing structures where the footprint cannot change.",
  },
  {
    logo: "/images/partners/galletti.png",
    alt: "Galletti",
    href: "https://www.galletti-na.com/",
    category: "Terminal units",
    text: "Fan coils, unit ventilators and terminal heat pumps. Classroom and guest-room applications where sound power drives the selection.",
  },
  {
    logo: "/images/partners/hisense.png",
    alt: "Hisense",
    href: "https://hisensecomfort.com/",
    category: "VRF · light commercial",
    text: "VRF, mini-splits and light commercial packaged equipment. Tenant fit-outs and additions with no room for central plant.",
  },
  {
    logo: "/images/partners/superior-rex.png",
    alt: "Superior Rex",
    href: "https://www.superiorrex.com/",
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

/* Organisations the crew gives time to, shown as a ribbon under the Social impact mosaic.
   Same shape as PARTNER_LOGOS. Left empty the ribbon does not render at all, so this can be
   filled in as names and marks are confirmed without touching the section markup. */
const VOLUNTEER_LOGOS: { src: string; alt: string }[] = [];

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

/* Scroll-scrubbed hero video.

   The section is a tall scroll "track"; the panel inside it sticks to the viewport
   while you scroll past it, and both the video's currentTime and the copy overlays are
   driven by how far through the track you are. Everything is a pure function of scroll
   progress, so scrolling back up rewinds exactly rather than replaying an animation.
   The video is never played; it is only seeked. */

const HERO_OVERLAY_FADE = HERO_FADE;
const HERO_OVERLAY_LIFT = 16;

/** Opacity and vertical offset for one block at a given scroll progress. Pure: the same
 *  progress always yields the same frame, which is what makes reverse scrolling exact. */
function heroOverlayState(block: HeroOverlay, progress: number) {
  // The first block must be fully up at rest, and the last must not blank out as the
  // section unpins, so those outer edges get no ramp.
  const fadeIn = block.start > 0 ? HERO_OVERLAY_FADE : 0;
  const fadeOut = block.end < 1 ? HERO_OVERLAY_FADE : 0;

  let raw = 0;
  if (progress >= block.start && progress <= block.end) {
    const rising = fadeIn > 0 ? (progress - block.start) / fadeIn : 1;
    const falling = fadeOut > 0 ? (block.end - progress) / fadeOut : 1;
    raw = Math.min(1, Math.max(0, Math.min(rising, falling)));
  }
  const opacity = raw * raw * (3 - 2 * raw); // smoothstep

  // Rise from below on the way in, leave upward on the way out.
  const midpoint = (block.start + block.end) / 2;
  const lift = (1 - opacity) * HERO_OVERLAY_LIFT * (progress < midpoint ? 1 : -1);
  return { opacity, lift };
}

function HeroScrollStage() {
  const trackRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);
  const posterRefs = useRef<(HTMLImageElement | null)[]>([]);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const loadingRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    const stage = stageRef.current;
    const video = videoRef.current;
    if (!track || !stage || !video) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const narrow = window.matchMedia("(max-width: 768px)");
    let disposed = false;
    let ready = false;
    let failed = false;
    let objectUrl: string | undefined;
    let controller: AbortController | undefined;
    let generation = 0;
    let frame = 0;
    let visible = false;
    let dirty = true;
    let target = 0;
    let paintedTime = 0;
    let stageHeight = stage.clientHeight;
    let trackHeight = track.offsetHeight;

    const load = async () => {
      const version = ++generation;
      controller?.abort();
      video.pause();
      video.removeAttribute("src");
      video.load();
      if (objectUrl) URL.revokeObjectURL(objectUrl);
      objectUrl = undefined;
      ready = false;
      failed = false;
      video.style.opacity = "0";
      if (loadingRef.current) loadingRef.current.style.opacity = motion.matches ? "0" : "1";
      if (motion.matches) return;
      const src = narrow.matches ? HERO_VIDEO.mobile : HERO_VIDEO.desktop;
      controller = new AbortController();
      try {
        const response = await fetch(src, { signal: controller.signal });
        if (!response.ok) throw new Error("Video fetch failed");
        const blob = await response.blob();
        if (disposed || version !== generation) return;
        objectUrl = URL.createObjectURL(blob);
        video.src = objectUrl;
      } catch {
        if (disposed || version !== generation) return;
        // Native loading can still work when blob fetching is unavailable.
        video.src = src;
      }
      video.load();
    };
    const onReady = () => {
      if (!video.getAttribute("src") || motion.matches) return;
      ready = true;
      video.style.opacity = "1";
      if (loadingRef.current) loadingRef.current.style.opacity = "0";
    };
    const onError = () => {
      if (!video.getAttribute("src")) return;
      failed = true;
      ready = false;
      video.style.opacity = "0";
      if (loadingRef.current) loadingRef.current.style.opacity = "0";
    };
    video.addEventListener("loadeddata", onReady);
    video.addEventListener("error", onError);
    let unlocked = false;
    const unlock = () => {
      const ios = /iP(?:hone|ad|od)/.test(navigator.userAgent) || (navigator.maxTouchPoints > 1 && /Macintosh/.test(navigator.userAgent));
      if (!ios || unlocked || !ready || motion.matches || failed) return;
      unlocked = true;
      void video.play().then(() => video.pause()).catch(() => { unlocked = false; });
    };
    window.addEventListener("touchstart", unlock, { passive: true });

    const tick = () => {
      frame = 0;
      if (!visible || disposed) return;
      if (dirty) {
        const top = track.getBoundingClientRect().top;
        target = Math.max(0, Math.min(1, -top / Math.max(1, trackHeight - stageHeight)));
        dirty = false;
      }
      const targetTime = progressToTime(target);
      paintedTime += (targetTime - paintedTime) * 0.12;
      if (ready && !failed && !motion.matches && Number.isFinite(video.duration)) {
        const at = Math.max(0, Math.min(paintedTime, video.duration - 0.001));
        if (!video.seeking && Math.abs(at - video.currentTime) > 1 / 60) video.currentTime = at;
      }
      // Match the text to the eased camera position, including when reversing.
      let copyProgress = target;
      if (ready && !failed && !motion.matches) {
        for (let i = 0; i < TIMELINE.length - 1; i++) {
          const [p0, t0] = TIMELINE[i];
          const [p1, t1] = TIMELINE[i + 1];
          if (paintedTime <= t1) {
            copyProgress = p0 + (p1 - p0) * Math.max(0, (paintedTime - t0) / (t1 - t0));
            break;
          }
        }
      }
      let posterIndex = 0;
      HERO_OVERLAYS.forEach((block, i) => {
        if (target >= block.start) posterIndex = i;
        const node = overlayRefs.current[i];
        if (!node) return;
        const { opacity, lift } = heroOverlayState(block, copyProgress);
        node.style.opacity = String(opacity);
        node.style.transform = `translate3d(0,${lift}px,0)`;
        const active = opacity > 0.6;
        node.style.pointerEvents = active ? "auto" : "none";
        node.querySelectorAll("a").forEach(a => { a.tabIndex = active ? 0 : -1; });
      });
      posterRefs.current.forEach((node, i) => {
        if (node) node.style.opacity = i === posterIndex ? "1" : "0";
      });
      if (progressRef.current) progressRef.current.style.width = `${target * 100}%`;
      frame = requestAnimationFrame(tick);
    };
    const onScroll = () => { dirty = true; };
    const onResize = () => {
      stageHeight = stage.clientHeight;
      trackHeight = track.offsetHeight;
      dirty = true;
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) {
        dirty = true;
        if (!frame) frame = requestAnimationFrame(tick);
      } else {
        cancelAnimationFrame(frame);
        frame = 0;
      }
    });
    observer.observe(track);
    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(stage);
    resizeObserver.observe(track);
    const onEnvironment = () => { void load(); dirty = true; };
    motion.addEventListener("change", onEnvironment);
    narrow.addEventListener("change", onEnvironment);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    void load();
    return () => {
      disposed = true;
      generation++;
      controller?.abort();
      cancelAnimationFrame(frame);
      observer.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("touchstart", unlock);
      motion.removeEventListener("change", onEnvironment);
      narrow.removeEventListener("change", onEnvironment);
      video.removeEventListener("loadeddata", onReady);
      video.removeEventListener("error", onError);
      video.pause();
      video.removeAttribute("src");
      video.load();
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, []);

  return (
    <section data-screen-label="Hero" ref={trackRef} style={{ position: "relative", background: "#0F4E85", height: HERO_HEIGHT }}>
      <div ref={stageRef} className="amz-hero-stage">
        {HERO_OVERLAYS.map((block, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={block.poster} ref={el => { posterRefs.current[i] = el; }} src={block.poster} alt="" aria-hidden="true" className="amz-hero-media amz-hero-poster" style={{ opacity: i === 0 ? 1 : 0 }} />
        ))}
        <video ref={videoRef} poster={HERO_OVERLAYS[0].poster} muted playsInline preload="auto" disablePictureInPicture aria-hidden="true" tabIndex={-1} className="amz-hero-media" style={{ opacity: 0 }} />
        <div aria-hidden="true" className="amz-hero-media amz-hero-shade" />
        <span ref={loadingRef} className="amz-hero-loading" role="status">Preparing your view…</span>
        <div className="amz-hero-copy">
          {HERO_OVERLAYS.map((block, i) => (
            <div key={block.heading} ref={el => { overlayRefs.current[i] = el; }} className="amz-hero-overlay" style={{ gridArea: "1 / 1", alignSelf: "end", justifySelf: block.align === "center" ? "center" : "start", width: "100%", maxWidth: block.align === "center" ? 880 : "min(52rem, max(58%, 380px))", textAlign: block.align === "center" ? "center" : "left", opacity: i === 0 ? 1 : 0, pointerEvents: i === 0 ? "auto" : "none" }}>
              <HeroOverlayCopy block={block} tabbable={i === 0} headingLevel={i === 0 ? "h1" : "h2"} />
            </div>
          ))}
        </div>
        <div className="amz-hero-progress" aria-hidden="true"><div ref={progressRef} /></div>
      </div>
    </section>
  );
}

/** Semantic HTML shared by the video and poster presentations. */
function HeroOverlayCopy({
  block,
  tabbable,
  headingLevel,
}: {
  block: HeroOverlay;
  tabbable: boolean;
  headingLevel: "h1" | "h2";
}) {
  const Heading = headingLevel;
  return (
    <>
      {block.eyebrow && (
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontStretch: "75%",
            fontWeight: 700,
            fontSize: 12,
            lineHeight: 1.2,
            letterSpacing: ".22em",
            textTransform: "uppercase",
            color: "#7DB9ED",
            margin: "0 0 18px",
          }}
        >
          {block.eyebrow}
        </p>
      )}
      <Heading
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "clamp(2.25rem,1.05rem + 5.2vw,4.5rem)",
          lineHeight: 1.03,
          letterSpacing: "-.022em",
          color: "#FFFFFF",
          margin: "0 0 20px",
          // Off-centre blocks let the heading run the full column width so its edge lines
          // up with the body's, that shared edge is what reads as the alignment.
          maxWidth: block.align === "center" ? "20ch" : undefined,
          marginInline: block.align === "center" ? "auto" : undefined,
        }}
      >
        {block.heading}
      </Heading>
      <p
        style={{
          fontSize: "clamp(1rem,.95rem + .32vw,1.1875rem)",
          lineHeight: 1.6,
          color: "rgba(255,255,255,.9)",
          margin: 0,
          maxWidth: block.align === "center" ? "62ch" : undefined,
          marginInline: block.align === "center" ? "auto" : undefined,
        }}
      >
        {block.body}
      </p>
      {block.ctas && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 14,
            marginTop: 32,
            justifyContent: block.align === "center" ? "center" : "flex-start",
          }}
        >
          {block.ctas.map((cta) =>
            cta.variant === "primary" ? (
              <a
                key={cta.label}
                href={cta.href}
                tabIndex={tabbable ? 0 : -1}
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
                {cta.label}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#191C1F" strokeWidth="2" strokeLinecap="butt" strokeLinejoin="miter" aria-hidden="true">
                  <path d="M4 12h16M14 6l6 6-6 6" />
                </svg>
              </a>
            ) : (
              <a
                key={cta.label}
                href={cta.href}
                tabIndex={tabbable ? 0 : -1}
                className="amz-hero-text-link"
                target={cta.href === LINE_CARD_HREF ? "_blank" : undefined}
                rel={cta.href === LINE_CARD_HREF ? "noopener noreferrer" : undefined}
                style={{ display: "inline-flex", alignItems: "center", gap: 10, minHeight: 44, color: "#FFFFFF", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16, letterSpacing: ".01em", textDecoration: "none" }}
              >
                {cta.label} <ArrowIcon />
                {cta.href === LINE_CARD_HREF && <span className="sr-only"> (opens in a new tab)</span>}
              </a>
            )
          )}
        </div>
      )}
    </>
  );
}

/* ---------------------------------------------------------------------- */
/*  Page                                                                  */
/* ---------------------------------------------------------------------- */

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const [pct, setPct] = useState(0);
  const [active, setActive] = useState(0); // testimonial index
  const [cookie, setCookie] = useState<"hidden" | "notice" | "prefs">("hidden");
  const [consent, setConsent] = useState({ analytics: false, functional: false, marketing: false });

  const pausedRef = useRef(false);

  const COOKIE_KEY = "amz-cookie-consent";
  const saveChoice = (c: { analytics: boolean; functional: boolean; marketing: boolean }) => {
    setConsent(c);
    setCookie("hidden");
    try {
      localStorage.setItem(COOKIE_KEY, JSON.stringify(c));
    } catch {}
  };

  // Loading sequence + cookie notice delay + testimonial rotation.
  useEffect(() => {
    const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let tick: ReturnType<typeof setInterval> | undefined;
    let done: ReturnType<typeof setTimeout> | undefined;
    let hide: ReturnType<typeof setTimeout> | undefined;
    let cookieT: ReturnType<typeof setTimeout> | undefined;
    let skip: ReturnType<typeof setTimeout> | undefined;
    let leave: ReturnType<typeof setTimeout> | undefined;

    let consentRestore: ReturnType<typeof setTimeout> | undefined;
    let saved = false;
    try {
      const raw = localStorage.getItem("amz-cookie-consent");
      if (raw) {
        saved = true;
        const storedConsent = JSON.parse(raw);
        consentRestore = setTimeout(() => setConsent(storedConsent), 0);
      }
    } catch {}
    const showNotice = (ms: number) => {
      if (!saved) cookieT = setTimeout(() => setCookie("notice"), ms);
    };

    if (reduced) {
      skip = setTimeout(() => {
        setLoading(false);
        setPct(100);
      }, 0);
      showNotice(400);
    } else {
      tick = setInterval(() => {
        setPct((p) => Math.min(100, p + Math.max(2, Math.round((100 - p) * 0.16))));
      }, 90);
      done = setTimeout(() => {
        if (tick) clearInterval(tick);
        setPct(100);
        hide = setTimeout(() => {
          // Fade the curtain out instead of cutting it, then unmount.
          setLeaving(true);
          leave = setTimeout(() => {
            setLoading(false);
            showNotice(500);
          }, 700);
        }, 300);
      }, 1700);
    }

    const rotate = setInterval(() => {
      if (pausedRef.current) return;
      setActive((a) => (a + 1) % 6);
    }, 6000);

    return () => {
      if (consentRestore) clearTimeout(consentRestore);
      if (skip) clearTimeout(skip);
      if (tick) clearInterval(tick);
      if (done) clearTimeout(done);
      if (hide) clearTimeout(hide);
      if (leave) clearTimeout(leave);
      if (cookieT) clearTimeout(cookieT);
      clearInterval(rotate);
    };
  }, []);

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
      <SiteHeader />

      {/* Loading overlay */}
      {loading && (
        <div
          role="status"
          aria-label="Loading"
          aria-live="polite"
          className={leaving ? "amz-load-out" : undefined}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 900,
            overflow: "hidden",
            background: "radial-gradient(ellipse 70% 55% at 50% 46%, #11324F 0%, #0A1017 70%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 24px",
          }}
        >
          <div aria-hidden="true" className="amz-load-grid" />
          <svg viewBox="0 0 1600 900" preserveAspectRatio="none" aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.5 }}>
            <path className="amz-swoosh" pathLength={1} d="M-160,760 A2400,2400 0 0 1 1760,300" fill="none" stroke="rgba(125,185,237,.22)" strokeWidth="22" />
          </svg>
          <div className="amz-load-mark" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo/amz-logo-white.png"
              alt="AMZ Energy Systems"
              width={471}
              height={574}
              className="amz-load-logo"
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
            <div style={{ width: "min(340px,60vw)", height: 3, borderRadius: 3, background: "rgba(255,255,255,.18)", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, borderRadius: 3, background: "linear-gradient(90deg,#7DB9ED 0%,#FFFFFF 100%)", transformOrigin: "left center", transition: "transform 320ms cubic-bezier(0.22,0.8,0.3,1)", transform: `scaleX(${pct / 100})` }} />
            </div>
          </div>
        </div>
      )}

      <main id="main">
        {/* Hero */}
        <HeroScrollStage />

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
                <a key={i} href={p.href} target="_blank" rel="noopener noreferrer" className="amz-partner-logo" aria-label={`${p.alt} (opens in a new tab)`} aria-hidden={i >= PARTNER_LOGOS.length} tabIndex={i >= PARTNER_LOGOS.length ? -1 : undefined}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.src} alt={p.alt} style={{ display: "block", height: "clamp(30px,3.6vw,44px)", width: "auto" }} />
                </a>
              ))}
            </div>
          </div>
        </section>

        <TechnologyServices />

        {/* Positioning / How we work */}
        <section className="amz-clip-x" id="positioning" data-screen-label="Positioning" style={{ padding: "clamp(64px,9vw,96px) 0", borderBottom: "1px solid #E3E5E8" }}>
          <svg className="amz-deco amz-drift-l" aria-hidden="true" viewBox="0 0 400 400" style={{ top: "6%", left: -140, width: 380, height: 380, opacity: 0.5 }}>
            <circle cx="200" cy="200" r="150" fill="none" stroke="#AFD3F3" strokeWidth="2" strokeDasharray="4 10" />
            <circle cx="200" cy="200" r="96" fill="none" stroke="#D6E8F8" strokeWidth="18" />
          </svg>
          <svg className="amz-deco amz-drift-r" aria-hidden="true" viewBox="0 0 400 400" style={{ bottom: "4%", right: -150, width: 420, height: 420, opacity: 0.5 }}>
            <circle cx="200" cy="200" r="160" fill="none" stroke="#D6E8F8" strokeWidth="22" />
            <circle cx="200" cy="200" r="104" fill="none" stroke="#AFD3F3" strokeWidth="2" strokeDasharray="4 10" />
          </svg>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
            <div className="amz-head" style={{ maxWidth: 760, margin: "0 auto 56px", textAlign: "center" }}>
              <Eyebrow>How We Work</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.625rem,1.17rem + 1.94vw,2.4375rem)", lineHeight: 1.15, letterSpacing: "-.012em", margin: "0 0 20px" }}>
                We Solve The Mechanical Problem <span className="amz-accent">With You,</span> Not For You
              </h2>
              <p style={{ fontSize: "clamp(1.0625rem,.98rem + .35vw,1.25rem)", lineHeight: 1.6, color: "#444444", margin: 0 }}>
                Most mechanical problems arrive already half-diagnosed. The useful work happens in the room where the engineer, the contractor and the owner are all looking at the same numbers, so we start on the drawings, not the catalogue.
              </p>
            </div>
            <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,232px),1fr))", gap: 20 }}>
              {STEPS.map((s, i) => (
                <li key={s.n} className={`amz-step-card amz-reveal amz-leaf ${["amz-tint-1", "", "amz-tint-3", "amz-tint-2"][i % 4]}`} style={{ background: "#FFFFFF", border: "1px solid #E3E5E8", borderRadius: 16, padding: "30px 26px 26px", position: "relative", overflow: "hidden" }}>
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
        <section className="amz-clip-x" id="verticals" data-screen-label="Verticals" style={{ padding: "clamp(64px,9vw,96px) 0", background: "#F9FAFB", borderBottom: "1px solid #E3E5E8" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
            <div className="amz-head" style={{ maxWidth: 680, margin: "0 auto 56px", textAlign: "center" }}>
              <Eyebrow>Markets We Serve</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.625rem,1.17rem + 1.94vw,2.4375rem)", lineHeight: 1.15, letterSpacing: "-.012em", margin: "0 0 20px" }}>
                Four Buildings, <span className="amz-accent">Four Different Problems</span>
              </h2>
              <p style={{ fontSize: "clamp(1.0625rem,.98rem + .35vw,1.25rem)", lineHeight: 1.6, color: "#444444", margin: 0 }}>The equipment overlaps. The constraints do not, and the constraint is what decides the selection.</p>
            </div>
            <div className="amz-mkt amz-row" style={{ display: "grid", gap: "clamp(20px,2.4vw,32px)" }}>
              {VERTICALS.map((v, vi) => (
                <article key={v.n} className={vi < 2 ? "amz-slide-l" : "amz-slide-r"} style={{ display: "flex", flexDirection: "column" }}>
                  <a href="#contact" aria-label={`${v.title}, see the market`} className="amz-vert-link amz-reveal amz-leaf" style={{ position: "relative", display: "block", aspectRatio: "3 / 4", background: "#E3E5E8", borderRadius: 18, overflow: "hidden", textDecoration: "none" }}>
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
              <Eyebrow dark>For The Design Community</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.75rem,1.2rem + 2.2vw,2.75rem)", lineHeight: 1.1, letterSpacing: "-.016em", margin: "0 0 18px", color: "#FFFFFF" }}>
                Why Mechanical Engineers Choose AMZ
              </h2>
              <p style={{ fontSize: "clamp(1.0625rem,.98rem + .35vw,1.25rem)", lineHeight: 1.6, color: "rgba(255,255,255,.78)", margin: 0 }}>Four things a specifier can check. Each one is something you receive, not something we claim.</p>
            </div>

            <div className="amz-bento" style={{ display: "grid", gap: "clamp(16px,1.8vw,24px)" }}>
              {/* Card 1, assumptions attached */}
              <article className="amz-bcard" style={{ background: "#0F1418", border: "1px solid rgba(255,255,255,.10)", borderRadius: 20, overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div style={{ padding: "clamp(24px,2.6vw,32px) clamp(24px,2.6vw,32px) 0" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(19px,2vw,23px)", lineHeight: 1.3, letterSpacing: "-.006em", margin: "0 0 10px", color: "#FFFFFF" }}>Assumptions Attached</h3>
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

              {/* Card 2, in the design meeting */}
              <article className="amz-bcard" style={{ background: "#0F1418", border: "1px solid rgba(255,255,255,.10)", borderRadius: 20, overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div style={{ padding: "clamp(24px,2.6vw,32px) clamp(24px,2.6vw,32px) 0" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(19px,2vw,23px)", lineHeight: 1.3, letterSpacing: "-.006em", margin: "0 0 10px", color: "#FFFFFF" }}>In The Design Meeting, Not Just The Bid</h3>
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

              {/* Card 3, schedules that stay current */}
              <article className="amz-bcard" style={{ background: "#0F1418", border: "1px solid rgba(255,255,255,.10)", borderRadius: 20, overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div style={{ padding: "clamp(24px,2.6vw,32px) clamp(24px,2.6vw,32px) 0" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(19px,2vw,23px)", lineHeight: 1.3, letterSpacing: "-.006em", margin: "0 0 10px", color: "#FFFFFF" }}>Schedules That Stay Current</h3>
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

              {/* Card 4, one engineer */}
              <article className="amz-bcard" style={{ background: "#0F1418", border: "1px solid rgba(255,255,255,.10)", borderRadius: 20, overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div style={{ padding: "clamp(24px,2.6vw,32px) clamp(24px,2.6vw,32px) 0" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(19px,2vw,23px)", lineHeight: 1.3, letterSpacing: "-.006em", margin: "0 0 10px", color: "#FFFFFF" }}>One Engineer, Start To Finish</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: "rgba(255,255,255,.72)", margin: 0, maxWidth: "42ch" }}>
                    The person who sized it attends start-up and signs the readings, one named contact, no handover to a service desk halfway through the job.
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
            <div className="amz-head" style={{ maxWidth: 680, margin: "0 auto 56px", textAlign: "center" }}>
              <Eyebrow>Premier Partners</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.625rem,1.17rem + 1.94vw,2.4375rem)", lineHeight: 1.15, letterSpacing: "-.012em", margin: "0 0 20px" }}>
                <a
                  className="amz-linecard-link"
                  href={LINE_CARD_HREF}
                  target="_blank"
                  rel="noopener"
                  style={{ display: "inline-flex", alignItems: "center", gap: 12, color: "inherit", textDecoration: "none" }}
                >
                  Our Line Card
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1462A7" strokeWidth="2" strokeLinecap="butt" strokeLinejoin="miter" aria-hidden="true" style={{ flex: "none" }}>
                    <path d="M4 12h16M14 6l6 6-6 6" />
                  </svg>
                  <span className="sr-only">(Opens In A New Tab)</span>
                </a>
              </h2>
              <p style={{ fontSize: "clamp(1.0625rem,.98rem + .35vw,1.25rem)", lineHeight: 1.6, color: "#444444", margin: 0 }}>
                The manufacturers we represent most often, and what we specify them for. Every line links straight to the product pages and selection data.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,290px),1fr))", gap: "clamp(16px,1.8vw,24px)" }}>
              {PARTNER_CARDS.map((p, i) => (
                <a key={p.alt} href={p.href} target="_blank" rel="noopener noreferrer" aria-label={`${p.alt} product range (opens in a new tab)`} className="amz-partner-card amz-quick amz-leaf" style={{ display: "flex", flexDirection: "column", background: "#FFFFFF", border: "1px solid #E3E5E8", borderRadius: 16, padding: 26, color: "inherit", textDecoration: "none" }}>
                  <div className="amz-pcard-logo" style={{ position: "relative" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.logo} alt={p.alt} style={{ maxHeight: 40, maxWidth: 170, width: "auto", height: "auto" }} />
                    <span aria-hidden className="amz-pcard-num" style={{ position: "absolute", top: 12, left: 14 }}>{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <p style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "var(--font-display)", fontStretch: "75%", fontWeight: 700, fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", color: "#5A6068", margin: "0 0 12px" }}>
                    <span aria-hidden style={{ width: 18, height: 1, background: "#1462A7", flex: "none" }} />
                    {p.category}
                  </p>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: "#444444", margin: "0 0 22px" }}>{p.text}</p>
                  <span className="amz-link-arrow" style={{ marginTop: "auto", display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14, color: "#1462A7", textDecoration: "none" }}>
                    Product range
                    <span className="amz-arrow-slide"><ArrowIcon /></span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials ring, temporarily hidden until reviews are ready. */}
        <section hidden id="testimonials" data-screen-label="Testimonials" style={{ padding: "clamp(64px,9vw,96px) 0", background: "#F9FAFB", borderBottom: "1px solid #E3E5E8", overflow: "hidden" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
            <div className="amz-head" style={{ maxWidth: 640, margin: "0 auto 56px", textAlign: "center" }}>
              <Eyebrow>In Their Words</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.625rem,1.17rem + 1.94vw,2.4375rem)", lineHeight: 1.15, letterSpacing: "-.012em", margin: 0 }}>Every Side <span className="amz-accent">Of The Work</span></h2>
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
                      <p className="amz-quote-mark" aria-hidden="true">&ldquo;</p>
                    )}
                    <blockquote className="amz-quote-serif" style={{ margin: "0 0 20px", fontSize: "clamp(1.125rem,1.02rem + .55vw,1.75rem)", lineHeight: 1.42, letterSpacing: "-.006em", color: "#191C1F", maxWidth: "26ch", marginInline: "auto" }}>
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
            <div className="amz-head" style={{ maxWidth: 700, margin: "0 auto 56px", textAlign: "center" }}>
              <Eyebrow>Social Impact</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.625rem,1.17rem + 1.94vw,2.4375rem)", lineHeight: 1.15, letterSpacing: "-.012em", margin: "0 0 20px" }}>
                The Second Half Of <span className="amz-accent">&ldquo;Buildings And Communities&rdquo;</span>
              </h2>
              <p style={{ fontSize: "clamp(1.0625rem,.98rem + .35vw,1.25rem)", lineHeight: 1.6, color: "#444444", margin: 0 }}>
                Crew time, equipment and know-how given to organisations in the counties we work in. Hours and partners are published, not estimated.
              </p>
            </div>
            <div className="amz-mosaic" style={{ display: "grid", gap: "clamp(10px,1.2vw,16px)", gridAutoFlow: "dense", marginBottom: "clamp(36px,5vw,56px)" }}>
              {MOSAIC.map((m, i) => (
                <figure key={m.alt} className={`amz-tile amz-wipe${i % 2 === 0 ? " amz-leaf" : ""}`} style={{ ["--i" as string]: i, gridColumn: m.span.split(" / ")[0], gridRow: m.span.split(" / ")[1], margin: 0, position: "relative", borderRadius: 16, overflow: "hidden", background: "#E3E5E8" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.img} alt={m.alt} loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: m.pos }} />
                  <figcaption aria-hidden="true" className="amz-tile-cap">{m.alt}</figcaption>
                </figure>
              ))}
            </div>
          </div>
          {VOLUNTEER_LOGOS.length > 0 && (
            <>
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
                Organisations we volunteer with
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
                  {[...VOLUNTEER_LOGOS, ...VOLUNTEER_LOGOS].map((v, i) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img key={i} src={v.src} alt={i < VOLUNTEER_LOGOS.length ? v.alt : ""} aria-hidden={i >= VOLUNTEER_LOGOS.length} loading="lazy" style={{ height: "clamp(30px,3.6vw,44px)", width: "auto", flex: "none" }} />
                  ))}
                </div>
              </div>
            </>
          )}
        </section>

        {/* CTA band */}
        <section id="contact" data-screen-label="CTA band" style={{ background: "#0F4E85", position: "relative", overflow: "hidden" }}>
          <svg viewBox="0 0 1600 340" preserveAspectRatio="none" aria-hidden="true" style={{ position: "absolute", inset: 0, width: "130%", height: "100%", opacity: 0.13 }}>
            <path className="amz-swoosh" pathLength={1} d="M-160,300 A1900,1900 0 0 1 1740,120" fill="none" stroke="#FFFFFF" strokeWidth="28" />
          </svg>
          <svg viewBox="0 0 1600 340" preserveAspectRatio="none" aria-hidden="true" style={{ position: "absolute", inset: 0, width: "130%", height: "100%" }}>
            <path className="amz-swoosh-glint" pathLength={1} d="M-160,300 A1900,1900 0 0 1 1740,120" fill="none" strokeWidth="4" />
          </svg>
          <div className="amz-contact-grid" style={{ position: "relative", maxWidth: 1080, margin: "0 auto", padding: "clamp(56px,8vw,88px) clamp(20px,4vw,40px)" }}>
            <div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.625rem,1.17rem + 1.94vw,2.4375rem)", lineHeight: 1.15, letterSpacing: "-.012em", margin: "0 0 16px", color: "#FFFFFF" }}>
              Tell Us What The Building Is <span className="amz-accent amz-accent-light">Doing</span>
            </h2>
            <p style={{ fontSize: "clamp(1.0625rem,.98rem + .35vw,1.25rem)", lineHeight: 1.6, color: "rgba(255,255,255,.86)", margin: "0 0 32px", maxWidth: "36ch" }}>We&rsquo;ll come and measure. We reply to every request within one business day.</p>
            <address style={{ fontStyle: "normal", display: "flex", alignItems: "center", gap: 10, fontSize: 15, lineHeight: 1.6, color: "rgba(255,255,255,.80)", margin: "0 0 28px" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.62)" strokeWidth="2" strokeLinecap="butt" strokeLinejoin="miter" aria-hidden="true" style={{ flex: "none" }}>
                <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
                <circle cx="12" cy="10" r="2.6" />
              </svg>
              100 W Oxford Street, Suite W1200, Philadelphia, PA 19122
            </address>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center" }}>
              <a
                href={AMZ_PHONE_HREF}
                className="amz-btn-outline-light"
                style={{ display: "inline-flex", alignItems: "center", gap: 10, height: 58, padding: "0 28px", borderRadius: 999, border: "1.5px solid rgba(255,255,255,.56)", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16, color: "#FFFFFF", textDecoration: "none" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="butt" strokeLinejoin="miter" aria-hidden="true">
                  <path d="M4 3h5l2 5-3 2a12 12 0 0 0 6 6l2-3 5 2v5h-2A15 15 0 0 1 4 5z" />
                </svg>
                {AMZ_PHONE_DISPLAY}
              </a>
            </div>
            </div>
            <div>
              <QuoteForm />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

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
                  onClick={() => saveChoice({ analytics: true, functional: true, marketing: true })}
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
                <button type="button" onClick={() => saveChoice(consent)} className="amz-cookie-primary" style={{ flex: "1 1 auto", height: 44, padding: "0 20px", border: 0, borderRadius: 999, background: "#1462A7", color: "#FFFFFF", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, cursor: "pointer", whiteSpace: "nowrap" }}>
                  Save choices
                </button>
                <button
                  type="button"
                  onClick={() => saveChoice({ analytics: false, functional: false, marketing: false })}
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
