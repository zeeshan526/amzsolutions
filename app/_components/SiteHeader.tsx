"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { AMZ_CONTACT_HREF, AMZ_NAV_LINKS } from "../_lib/nav";

/* Shared chrome for every page: the fixed header, the mobile slide-over menu, and the
   accessibility skip link. Extracted
   from the homepage so the same nav, and the same condense-on-scroll behaviour,
   works identically on the service pages that link off it. */

export default function SiteHeader() {
  const [open, setOpen] = useState(false); // mobile menu
  const [stuck, setStuck] = useState(false); // header scrolled state

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
          <Link href="/" aria-label="AMZ Energy Systems | home" style={{ flex: "none", display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
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
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", alignItems: "center", gap: "clamp(14px,1.6vw,28px)" }}>
              {AMZ_NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="amz-nav-a" style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, textDecoration: "none", whiteSpace: "nowrap", color: "#FFFFFF" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="amz-w" style={{ flex: "none", display: "flex", alignItems: "center", gap: 18 }}>
            <Link
              href={AMZ_CONTACT_HREF}
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
              Contact Us
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#191C1F" strokeWidth="2.4" strokeLinecap="butt" strokeLinejoin="miter" aria-hidden="true">
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </Link>
          </div>

          <div className="amz-n" style={{ flex: "1 1 auto" }} />
          <Link
            href={AMZ_CONTACT_HREF}
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
            Contact Us
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
              {AMZ_NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="amz-mobile-item"
                    style={{ display: "flex", alignItems: "center", minHeight: 56, padding: "0 24px", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, color: "#FFFFFF", textDecoration: "none" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div style={{ flex: "none", padding: "20px 24px 28px", borderTop: "1px solid rgba(255,255,255,.12)", display: "flex", flexDirection: "column", gap: 12 }}>
              <Link
                href={AMZ_CONTACT_HREF}
                onClick={() => setOpen(false)}
                className="amz-btn-accent"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 52, borderRadius: 999, background: "#F99615", color: "#191C1F", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16, textDecoration: "none" }}
              >
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
