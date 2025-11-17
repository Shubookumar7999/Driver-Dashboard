"use client";

import React from "react";
import { useState } from "react";

type Tab = "home" | "about" | "contact";

export default function DriverDashboard() {
  // For now we hard-code driver info – later we’ll get it from DB / query params
  const driverName = "Driver Name";
  const drvCode = "DRV1234";

  const [activeTab, setActiveTab] = useState<Tab>("home");
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        background: "#f8fafc",
      }}
    >
        {/* NAVBAR */}
        <nav
        style={{
            height: 72,
            background: "linear-gradient(90deg,#020617,#020617,#020617,#0b1120)",
            color: "white",
            display: "flex",
            alignItems: "center",
            padding: "0 40px",
            boxShadow: "0 10px 28px rgba(15,23,42,0.65)",
            position: "sticky",
            top: 0,
            zIndex: 20,
            borderBottom: "1px solid rgba(148,163,184,0.25)",
        }}
        >
        {/* Logo + title */}
        <div
            style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            minWidth: 260,
            }}
        >
            <img
            src="/images/logo.jpeg"
            alt="Trans 99 Logistics"
            style={{
                height: 40,
                width: "auto",
                borderRadius: 12,
                background: "white",
                padding: 4,
                boxShadow: "0 4px 10px rgba(15,23,42,0.45)",
            }}
            />
            <span
            style={{
                fontWeight: 800,
                fontSize: 20,
                letterSpacing: 0.4,
            }}
            >
            Driver Dashboard
            </span>
        </div>

        {/* Center navigation */}
        <div
            style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            gap: 32,
            fontSize: 15,
            fontWeight: 600,
            }}
        >
            <NavItem
            label="Home"
            active={activeTab === "home"}
            onClick={() => setActiveTab("home")}
            />
            <NavItem
            label="About us"
            active={activeTab === "about"}
            onClick={() => setActiveTab("about")}
            />
            <NavItem
            label="Contact us"
            active={activeTab === "contact"}
            onClick={() => setActiveTab("contact")}
            />
        </div>

        {/* Profile button */}
        <button
            onClick={() => setProfileOpen(true)}
            style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "8px 18px",
            borderRadius: 999,
            border: "1px solid rgba(148,163,184,0.7)",
            background:
                "radial-gradient(circle at 0 0,rgba(56,189,248,0.35),transparent 55%), rgba(15,23,42,0.9)",
            color: "white",
            cursor: "pointer",
            boxShadow: "0 6px 18px rgba(15,23,42,0.55)",
            }}
        >
            <div
            style={{
                height: 34,
                width: 34,
                borderRadius: "50%",
                background:
                "radial-gradient(circle at 30% 20%,#e0f2fe,#38bdf8 60%,#0284c7 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 900,
                fontSize: 16,
            }}
            >
            {driverName.charAt(0).toUpperCase()}
            </div>
            <span style={{ fontSize: 14, fontWeight: 600 }}>Profile</span>
        </button>
        </nav>


      {/* PAGE CONTENT */}
      <main
        style={{
          flex: 1,
          padding: "28px 24px 40px",
          maxWidth: 1100,
          width: "100%",
          margin: "0 auto",
        }}
      >
        {activeTab === "home" && <HomeSection driverName={driverName} />}
        {activeTab === "about" && <AboutSection />}
        {activeTab === "contact" && <ContactSection />}
      </main>

      {/* BIG FOOTER (Trans99-style) */}
      <footer
        style={{
          background: "#020617",
          color: "#e5e7eb",
          marginTop: "auto",
          padding: "32px 24px 16px",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          {/* top 4 columns */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
              gap: 32,
              marginBottom: 24,
            }}
          >
            {/* About column */}
            <div>
              <h3
                style={{
                  fontSize: 14,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  fontWeight: 800,
                  marginBottom: 12,
                }}
              >
                About Trans99 Logistics
              </h3>
              <div style={{ marginBottom: 12 }}>
                <img
                  src="/images/logo.jpeg"
                  alt="Trans 99 Logistics"
                  style={{ height: 40, width: "auto", borderRadius: 4, background: "white" }}
                />
              </div>
              <p style={{ fontSize: 13, lineHeight: 1.5, color: "#cbd5e1" }}>
                Trans99 is a full-service transportation and logistics company providing
                truckload, warehousing and dedicated services with a focus on safety and
                professional customer service.
              </p>
              <button
                style={{
                  marginTop: 10,
                  padding: "8px 14px",
                  borderRadius: 6,
                  border: "none",
                  background: "#ef4444",
                  color: "white",
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Read More →
              </button>
            </div>

            {/* Quick links */}
            <div>
              <h3
                style={{
                  fontSize: 14,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  fontWeight: 800,
                  marginBottom: 12,
                }}
              >
                Quick Links
              </h3>
              {/* TODO: you can replace these hrefs with exact URLs from your main site */}
              <FooterLink label="About Us" href="https://www.trans99.net/about-us/" /> {/* need to edit */}
              <FooterLink label="Company Overview" href="https://www.trans99.net/company-overview/" />
              <FooterLink label="Our Certifications" href="https://www.trans99.net/our-certifications/" />
              <FooterLink label="Our Team" href="https://www.trans99.net/our-team/" />
              <FooterLink label="Technology" href="https://www.trans99.net/technology/" />
              <FooterLink label="Career" href="https://www.trans99.net/career/" />
              <FooterLink label="Safety and Compliance" href="https://www.trans99.net/safety-and-compliance/" />
              <FooterLink label="Online driver application" href="https://www.trans99.net/driver-application/" />
            </div>

            {/* Services */}
            <div>
              <h3
                style={{
                  fontSize: 14,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  fontWeight: 800,
                  marginBottom: 12,
                }}
              >
                Our Services
              </h3>
              <FooterLink label="Truckload Operations" href="https://www.trans99.net/truckload-operations/" />
              <FooterLink label="Dedicated Operations" href="https://www.trans99.net/dedicated-operations/" />
              <FooterLink label="Dry Van" href="https://www.trans99.net/dry-van/" />
              <FooterLink label="Expedited Services" href="https://www.trans99.net/expedited-services/" />
              <FooterLink label="Cross-border" href="https://www.trans99.net/cross-border/" />
              <FooterLink label="Refrigerated Transportation Services" href="https://www.trans99.net/refrigerated-transportation-services/" />
              <FooterLink label="Warehousing & Value Added" href="https://www.trans99.net/warehousing-value-added/" />
            </div>

            {/* Contact */}
            <div>
              <h3
                style={{
                  fontSize: 14,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  fontWeight: 800,
                  marginBottom: 12,
                }}
              >
                Contact Us
              </h3>
              <p style={{ fontSize: 13, marginBottom: 8 }}>
                367 Speedvale Ave. W, Guelph ON N1H 1C7 Canada
              </p>
              <p style={{ fontSize: 13, marginBottom: 4 }}>
                <strong>Phone:</strong> (519) 265-5161
              </p>
              <p style={{ fontSize: 13, marginBottom: 12 }}>
                <strong>Fax:</strong> 519-265-6757
              </p>

              {/* 🔗 Social links (clickable) */}
              <div style={{ display: "flex", gap: 8, fontSize: 12 }}>
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/trans-99-logistics"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    padding: "6px 8px",
                    borderRadius: 4,
                    background: "#0ea5e9",
                    color: "white",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  in
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/trans99.ca/"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    padding: "6px 8px",
                    borderRadius: 4,
                    background: "#3b82f6",
                    color: "white",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  f
                </a>

                {/* Twitter – placeholder link for now */}
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    padding: "6px 8px",
                    borderRadius: 4,
                    background: "#0ea5e9",
                    color: "white",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  T
                </a>

                {/* Email / Gmail icon – mailto link */}
                <a
                  href="info@trans99.net"
                  style={{
                    padding: "6px 8px",
                    borderRadius: 4,
                    background: "#ef4444",
                    color: "white",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  ✉
                </a>
              </div>
            </div>
          </div>

          {/* bottom bar */}
          <div
            style={{
              borderTop: "1px solid #111827",
              paddingTop: 10,
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 8,
              fontSize: 12,
              color: "#9ca3af",
            }}
          >
            <span>
              Trans99 Logistics. © {new Date().getFullYear()} All Rights Reserved
            </span>
          </div>
        </div>
      </footer>

      {/* PROFILE SIDE POPUP */}
      {profileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(15,23,42,0.55)",
            zIndex: 30,
            display: "flex",
            justifyContent: "flex-end",
          }}
          onClick={() => setProfileOpen(false)}
        >
          <div
            style={{
              width: 320,
              maxWidth: "80%",
              background: "white",
              height: "100%",
              padding: 20,
              boxShadow: "-8px 0 24px rgba(15,23,42,0.6)",
              color:'#0d0d0dff'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 18 ,color:'#0d0d0dff'}}>
              <div>
                <div style={{ fontWeight: 800, fontSize: 18 }}>{driverName}</div>
                <div style={{ fontSize: 13, color: "#0d0d0dff" }}>({drvCode})</div>
              </div>
              <button
                onClick={() => setProfileOpen(false)}
                style={{
                  border: "none",
                  background: "transparent",
                  fontSize: 18,
                  cursor: "pointer",
                  color: "#64748b",
                }}
              >
                ✕
              </button>
            </div>

            <hr style={{ borderColor: "#e2e8f0", marginBottom: 16 }} />

            <p style={{ fontSize: 13, color: "#0d0d0dff", marginBottom: 10 }}>
              Choose what you want to do:
            </p>

            <ProfileAction
            label="Request for advance"
            href="/driver/request-advance"
            />
            <ProfileAction
            label="Pause Deduction"
            href="/driver/pause-deduction"
            />
            <ProfileAction
            label="See Ongoing deduction and advance"
            href="/driver/deductions"
            />


            <hr style={{ borderColor: "#e2e8f0", margin: "18px 0" }} />

            <button
              style={{
                width: "100%",
                padding: "10px 0",
                borderRadius: 8,
                border: "1px solid #e2e8f0",
                background: "#f8fafc",
                cursor: "pointer",
                fontSize: 13,
                color:'#0d0d0dff'
              }}
              onClick={() => {
                alert("Front-end demo only – real logout will come after backend is added.");
              }}
            >
              Log out (demo)
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------- Small reusable components ---------- */

function NavItem(props: { label: string; active: boolean; onClick: () => void }) {
  const { label, active, onClick } = props;

  return (
    <button
      onClick={onClick}
      style={{
        position: "relative",
        background: active ? "rgba(15,23,42,0.9)" : "transparent",
        border: "none",
        color: active ? "#38bdf8" : "#e5e7eb",
        padding: "8px 18px",
        borderRadius: 999,
        cursor: "pointer",
        transition: "all 0.18s ease-out",
        fontSize: 15,
      }}
    >
      {label}
      {/* underline accent */}
      <span
        style={{
          position: "absolute",
          left: "50%",
          bottom: -3,
          transform: "translateX(-50%)",
          width: active ? 32 : 0,
          height: 2,
          borderRadius: 999,
          background: "#38bdf8",
          transition: "width 0.18s ease-out",
        }}
      />
    </button>
  );
}

function ProfileAction(props: { label: string; href?: string }) {
  const handleClick = () => {
    if (props.href) {
      window.location.href = props.href;   // navigate to another page
    } else {
      alert(`UI only right now: "${props.label}" will be implemented later.`);
    }
  };

  return (
    <button
      style={{
        width: "100%",
        textAlign: "left",
        padding: "10px 12px",
        borderRadius: 10,
        border: "1px solid #e2e8f0",
        background: "#f8fafc",
        cursor: "pointer",
        fontSize: 14,
        fontWeight: 500,
        marginBottom: 10,
      }}
      onClick={handleClick}
    >
      {props.label}
    </button>
  );
}



/** Footer link now supports label + href */
function FooterLink({ label, href }: { label: string; href: string }) {
  return (
    <div style={{ fontSize: 13, marginBottom: 4 }}>
      ›{" "}
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        style={{ marginLeft: 4, color: "#e2e8ebff", textDecoration: "none" }}
      >
        {label}
      </a>
    </div>
  );
}

/* ---------- Sections for tabs ---------- */

function HomeSection({ driverName }: { driverName: string }) {
  return (
    <div style={{ width: "100%", position: "relative" }}>
      
      {/* ----------- WELCOME SECTION ---------- */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 20px 20px 20px",
        }}
      >
        <h1
          style={{
            fontSize: 36,
            fontWeight: 900,
            marginBottom: 10,
            color: "#0f172a",
            textAlign: "center", // <-- CHANGE to "left" if you want left aligned
          }}
        >
          Welcome, {driverName}
        </h1>

        <p
          style={{
            color: "#111827",
            fontSize: 16,
            fontWeight: 500,
            lineHeight: 1.6,
            maxWidth: 820,
            margin: "0 auto",
            textAlign: "center", // <-- ALIGN paragraph too
          }}
        >
          This is your Driver Dashboard. From here you’ll be able to request advances,
          pause deductions and see all your ongoing deductions and reimbursements
          once the backend is connected.
        </p>
      </div>

      {/* ----------- FULL-WIDTH IMAGE ---------- */}
      <div
        style={{
          width: "100vw",
          marginLeft: "50%",
          transform: "translateX(-50%)",
          marginTop: 30,
          position: "relative",
        }}
      >
        <img
          src="/images/home-banner.jpg"
          alt="Trans99 Fleet"
          style={{
            width: "100%",
            height: 420,
            objectFit: "cover",
            display: "block",
          }}
        />

        {/* ----------- OVERLAPPING PANEL FIXED ---------- */}
        <div
        style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: -70,
            background: "#020617",
            color: "white",
            padding: "28px 40px",
            borderRadius: 0,
            width: "100%",
            boxShadow: "0 14px 34px rgba(15,23,42,0.45)",
            margin: "0 auto",
        }}
>

          <h2
            style={{
              fontSize: 20,
              fontWeight: 800,
              margin: 0,
              marginBottom: 6,
            }}
          >
            Providing first class transportation services across North America.
          </h2>

          <p
            style={{
              margin: 0,
              fontSize: 14,
              lineHeight: 1.6,
              color: "#e5e7eb",
            }}
          >
            Trans99 is a full-service transportation and logistics company that offers a
            range of Asset-Based Truckload, fulfillment, and warehousing services.
          </p>
        </div>
      </div>

      {/* ----------- FEATURE CARDS BELOW PANEL ---------- */}
      <div
        style={{
          marginTop: 120,
          maxWidth: 1100,
          marginLeft: "auto",
          marginRight: "auto",
          padding: "0 20px",
          display: "grid",
          gap: 20,
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        }}
      >
        <FeatureCard
          title="Request Advance"
          description="Ask for an advance payment with a simple form. Your request goes to management for approval."
        />
        <FeatureCard
          title="Pause Deduction"
          description="Need to pause a deduction temporarily? Send a pause request with start & resume dates."
        />
        <FeatureCard
          title="View Ongoing Deductions"
          description="Clearly see all your active deductions and advances so there are no surprises in payroll."
        />
      </div>
    </div>
  );
}

/* ---------- Feature Card ---------- */

function FeatureCard(props: { title: string; description: string }) {
  return (
    <div
      style={{
        padding: 22,
        borderRadius: 14,
        border: "1px solid #e2e8f0",
        background: "white",
        boxShadow: "0 6px 20px rgba(148,163,184,0.25)",
        transition: "all 0.25s ease",
        cursor: "pointer",
        color:'#0d0d0dff'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 12px 26px rgba(15,23,42,0.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 6px 20px rgba(148,163,184,0.25)";
      }}
    >
      <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>{props.title}</h3>
      <p
        style={{
          marginTop: 8,
          fontSize: 14,
          color: "#64748b",
          lineHeight: 1.5,
        }}
      >
        {props.description}
      </p>
    </div>
  );
}


// --------- ABOUT TAB CONTENT ONLY ---------

function AboutSection() {
  // 🔹 Put your 9 certification image paths here
  const certImages = [
    "/images/cert1.png",
    "/images/cert2.png",
    "/images/cert3.png",
    "/images/cert4.png",
    "/images/cert5.png",
    "/images/cert6.png",
    "/images/cert7.png",
    "/images/cert8.png",
    "/images/cert9.png",
  ];

  return (
    <div style={{ marginTop: 24 }}>
      {/* HERO / BANNER – full width, image behind text */}
      <section
        style={{
          position: "relative",
          width: "100vw",                // full viewport width
          left: "50%",
          transform: "translateX(-50%)", // center the full-width section
          minHeight: 260,
          marginBottom: 32,
          boxShadow: "0 10px 30px rgba(15,23,42,0.25)",
          backgroundImage: 'url("/images/about-banner.jpg")', // <- change path if needed
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* dark overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(15,23,42,0.90), rgba(15,23,42,0.35))",
          }}
        />

        {/* text on top of image */}
        <div
          style={{
            position: "relative",
            padding: "48px 6vw 40px", // left/right padding in vw so it feels like rest of page
            maxWidth: 900,
            color: "white",
          }}
        >
          <h1
            style={{
              fontSize: 32,
              fontWeight: 900,
              margin: 0,
              marginBottom: 12,
              letterSpacing: 0.5,
            }}
          >
            Company Overview
          </h1>
          <p style={{ fontSize: 15, lineHeight: 1.7, opacity: 0.96 }}>
            Trans 99 Logistics is a 3PL logistics company offering a full
            complement of transportation and value-added services across North
            America.
          </p>
        </div>
      </section>

      {/* MAIN ABOUT TEXT – stays inside normal content width */}
      <section style={{ marginBottom: 32 }}>
        <p style={{ color: "#1e293b", lineHeight: 1.7, marginBottom: 14 }}>
          Due to many unpredictable factors and variables, practicing sound
          transportation can at times seem like an overwhelming struggle.
          Trans99 has a combined 50+ years of transportation and logistics
          experience, building a strong reputation along the way.
        </p>
        <p style={{ color: "#1e293b", lineHeight: 1.7, marginBottom: 14 }}>
          We help ease the challenges associated with transportation needs by
          providing truckload, cross-border, warehousing and value-added
          logistics services. Our unmatched work ethic and deep industry
          knowledge allows us to minimize transportation challenges for our
          customers.
        </p>
        <p style={{ color: "#1e293b", lineHeight: 1.7 }}>
          Trans99 is committed to streamlining the entire transportation
          process, from acquiring freight to delivering it safely to its final
          destination. We do this through a range of services designed to
          navigate the real-world challenges drivers and shippers face every
          day.
        </p>
      </section>

      {/* OUR CERTIFICATIONS – 9 cards, aligned nicely */}
{/* OUR CERTIFICATIONS */}
        <section style={{ marginBottom: 16 }}>
        <h2
            style={{
            fontSize: 24,
            fontWeight: 800,
            marginBottom: 18,
            color: "#0f172a",
            }}
        >
            Our Certifications
        </h2>

        <div
            style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", // smaller width
            gap: 20,
            }}
        >
            {certImages.map((src, idx) => (
            <div
                key={idx}
                style={{
                background: "#ffffff",
                borderRadius: 0,            // 🔥 RECTANGLE BOX (NO RADIUS)
                padding: 14,
                border: "1px solid #d4d4d8",
                boxShadow: "0 4px 14px rgba(15,23,42,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 60,                // 🔥 Smaller height
                }}
            >
                <img
                src={src}
                alt={`Certification ${idx + 1}`}
                style={{
                    maxWidth: "100%",
                    maxHeight: 70,
                    objectFit: "contain",
                }}
                />
            </div>
            ))}
        </div>

        <button
            onClick={() => window.open("https://www.trans99.net/our-certifications/", "_blank")}
            style={{
            marginTop: 22,
            padding: "10px 22px",
            borderRadius: 999,
            border: "none",
            background: "#0284c7",
            color: "white",
            fontSize: 13,
            fontWeight: 600,
            cursor: "pointer",
            }}
        >
            View certification details
        </button>
        </section>
    </div>
  );
}

function ContactSection() {
  return (
    <div style={{ marginTop: 24 }}>
      {/* Top text block */}
      <section style={{ marginBottom: 20 }}>
        <h1
          style={{
            fontSize: 28,
            fontWeight: 900,
            marginBottom: 10,
            color: "#0f172a",
          }}
        >
          Contact Us
        </h1>

        <p style={{ color: "#475569", lineHeight: 1.7, marginBottom: 8 }}>
          We very much look forward to connecting with you. Please reach out to
          us with the information below and we&apos;ll discuss how we can meet
          all of your needs.
        </p>

        <p style={{ color: "#475569", lineHeight: 1.7 }}>
          Mail us on{" "}
          <a
            href="mailto:info@trans99.net"
            style={{ color: "#0284c7", fontWeight: 600, textDecoration: "none" }}
          >
            info@trans99.net
          </a>{" "}
          or call us at{" "}
          <a
            href="tel:+15192655161"
            style={{ color: "#0284c7", fontWeight: 600, textDecoration: "none" }}
          >
            (519) 265-5161
          </a>
          .
        </p>
      </section>

      {/* Map card */}
      <section
        style={{
          borderRadius: 18,
          overflow: "hidden",
          boxShadow: "0 18px 40px rgba(15,23,42,0.25)",
          background: "white",
        }}
      >
        <iframe
          title="Trans 99 Logistics Location"
          src="https://www.google.com/maps?q=Trans%2099%20Logistic%20367%20Speedvale%20Ave%20W%20Guelph%20ON&output=embed"
          style={{ border: 0, width: "100%", height: 420 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}
