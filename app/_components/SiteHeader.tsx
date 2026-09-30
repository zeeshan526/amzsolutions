"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { AMZ_NAV_LINKS, AMZ_TECH_MENU } from "../_lib/nav";
import { AMZ_PHONE_DISPLAY, AMZ_PHONE_HREF } from "../_lib/contact";

/* Shared chrome for every page: the fixed header (with its Technologies & Services
   mega-menu), the mobile slide-over menu, and the accessibility skip link. Extracted
   from the homepage so the same nav — and the same condense-on-scroll behaviour —
   works identically on the service pages that link off it. */

const EASE_MOVE = "cubic-bezier(0.36,0,0.24,1)";

export default function SiteHeader() {
  const [open, setOpen] = useState(false); // mobile menu
  const [navOpen, setNavOpen] = useState(false); // technologies dropdown
  const [stuck, setStuck] = useState(false); // header scrolled state

  const navTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const menuPanelRef = useRef<HTMLUListElement | null>(null);
  const menuTriggerRef = useRef<HTMLButtonElement | null>(null);

  // Escape/outside-click for the Technologies & Services dropdown.
  useEffect(() => {
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
    return () => {
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

  return (
    <>
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

      {/* Header */}
      <header className={`amz-hdr${stuck ? " amz-stuck" : ""}`} style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, padding: 0, pointerEvents: "none" }}>
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
          {/* Two lockups, one visible at a time. Over the hero the bar is transparent, so the
              all-white logo carries it alone. Once the header condenses onto its white pill the
              white artwork would vanish, so the full-colour logo takes over and the name sits
              beside it, "AMZ" stacked over "Energy Systems". */}
          <Link href="/" aria-label="AMZ Energy Systems — home" style={{ flex: "none", display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <span className="amz-logo-slot">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="amz-logo-hero" src="/images/logo/amz-logo-white.png" alt="" width={471} height={574} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="amz-logo-stuck" src="/images/logo/amz-logo.png" alt="" width={471} height={574} />
            </span>
            <span className="amz-logo-t amz-logo-words" style={{ flexDirection: "column", justifyContent: "center", gap: 2, color: "#FFFFFF" }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 19, lineHeight: 1, letterSpacing: "-.01em" }}>AMZ</span>
              <span style={{ fontFamily: "var(--font-display)", fontStretch: "75%", fontWeight: 700, fontSize: 10, lineHeight: 1, letterSpacing: ".13em", textTransform: "uppercase" }}>
                Energy Systems
              </span>
            </span>
          </Link>

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
                    {AMZ_TECH_MENU.map((item) => (
                      <li key={item.label}>
                        <Link
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
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              {AMZ_NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="amz-nav-a" style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, textDecoration: "none", whiteSpace: "nowrap", color: "#FFFFFF" }}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="amz-w" style={{ flex: "none", display: "flex", alignItems: "center", gap: 18 }}>
            <Link
              href="/#contact"
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
            </Link>
          </div>

          <div className="amz-n" style={{ flex: "1 1 auto" }} />
          <Link
            href="/#contact"
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
          </Link>
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
              <span style={{ display: "flex", alignItems: "center", gap: 7 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/logo/amz-mark-small.png" alt="" width={298} height={278} style={{ display: "block", height: 30, width: "auto" }} />
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 21, letterSpacing: "-.01em", color: "#FFFFFF" }}>AMZ</span>
              </span>
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
              {AMZ_TECH_MENU.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="amz-mobile-item"
                    style={{ display: "flex", alignItems: "center", minHeight: 50, padding: "0 24px", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 17, color: "rgba(255,255,255,.86)", textDecoration: "none" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li aria-hidden style={{ height: 1, background: "rgba(255,255,255,.12)", margin: "12px 24px" }} />
              {AMZ_NAV_LINKS.map((l) => (
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
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="amz-btn-accent"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 52, borderRadius: 999, background: "#F99615", color: "#191C1F", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16, textDecoration: "none" }}
              >
                Request a quote
              </Link>
              <a
                href={AMZ_PHONE_HREF}
                className="amz-btn-outline-light"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 52, borderRadius: 999, border: "1.5px solid rgba(255,255,255,.4)", color: "#FFFFFF", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16, textDecoration: "none" }}
              >
                {AMZ_PHONE_DISPLAY}
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
