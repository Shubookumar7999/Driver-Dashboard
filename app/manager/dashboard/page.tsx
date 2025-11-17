// app/manager/dashboard/page.tsx
"use client";

import React, { useState } from "react";

type Tab = "overview" | "requests" | "drivers" | "ongoing" | "alerts";

export default function ManagerDashboard() {
  const managerName = "Manager Name"; // later: get from backend
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  return (
    <div
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        background: "#f8fafc",
      }}
    >
      {/* TOP NAVBAR */}
      <header
        style={{
          height: 64,
          background: "#0f172a",
          color: "white",
          display: "flex",
          alignItems: "center",
          padding: "0 28px",
          boxShadow: "0 4px 16px rgba(15,23,42,0.7)",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img
            src="/images/logo.jpeg"
            alt="Trans 99 Logistics"
            style={{
              height: 32,
              width: "auto",
              borderRadius: 6,
              background: "white",
            }}
          />
          <div>
            <div style={{ fontWeight: 800, fontSize: 16 }}>Trans99 Manager</div>
            <div style={{ fontSize: 12, color: "#cbd5e1" }}>
              Logged in as <strong>{managerName}</strong>
            </div>
          </div>
        </div>

        {/* Tabs / navigation */}
        <nav
          style={{
            display: "flex",
            gap: 16,
            alignItems: "center",
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          <TabButton
            label="Overview"
            active={activeTab === "overview"}
            onClick={() => setActiveTab("overview")}
          />
          <TabButton
            label="Requests"
            active={activeTab === "requests"}
            onClick={() => setActiveTab("requests")}
          />
          <TabButton
            label="Drivers"
            active={activeTab === "drivers"}
            onClick={() => setActiveTab("drivers")}
          />
          <TabButton
            label="Ongoing Deductions"
            active={activeTab === "ongoing"}
            onClick={() => setActiveTab("ongoing")}
          />
          <TabButton
            label="Alerts"
            active={activeTab === "alerts"}
            onClick={() => setActiveTab("alerts")}
          />

          <a
            href="/"
            style={{
              marginLeft: 16,
              padding: "6px 10px",
              borderRadius: 999,
              border: "1px solid rgba(148,163,184,0.6)",
              color: "#e5e7eb",
              textDecoration: "none",
              fontSize: 12,
            }}
          >
            Go to Driver Portal
          </a>
        </nav>
      </header>

      {/* PAGE CONTENT */}
      <main
        style={{
          flex: 1,
          maxWidth: 1200,
          width: "100%",
          margin: "0 auto",
          padding: "22px 20px 32px",
        }}
      >
        {activeTab === "overview" && <OverviewTab />}
        {activeTab === "requests" && <RequestsTab />}
        {activeTab === "drivers" && <DriversTab />}
        {activeTab === "ongoing" && <OngoingTab />}
        {activeTab === "alerts" && <AlertsTab />}
      </main>
    </div>
  );
}

/* ---------- Small components ---------- */

function TabButton(props: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={props.onClick}
      style={{
        padding: "6px 10px",
        borderRadius: 999,
        border: "none",
        background: props.active ? "#e5e7eb" : "transparent",
        color: props.active ? "#0f172a" : "#cbd5e1",
        cursor: "pointer",
      }}
    >
      {props.label}
    </button>
  );
}

/* ---------- TAB: Overview ---------- */

function OverviewTab() {
  return (
    <div>
      <h1 style={{ fontSize: 22, fontWeight: 800, marginBottom: 14 }}>
        Dashboard Overview
      </h1>
      <p style={{ color: "#64748b", marginBottom: 20 }}>
        High-level snapshot of driver advances, pause requests and deductions.
        All numbers below are dummy placeholders – later you’ll connect to your
        database and TransPlus.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 16,
        }}
      >
        <OverviewCard title="Pending Advance Requests" value="12" />
        <OverviewCard title="Pending Pause Requests" value="5" />
        <OverviewCard title="Active Deductions" value="87" />
        <OverviewCard title="Upcoming Resume Dates (7 days)" value="9" />
      </div>
    </div>
  );
}

function OverviewCard({ title, value }: { title: string; value: string }) {
  return (
    <div
      style={{
        padding: 16,
        borderRadius: 12,
        background: "white",
        border: "1px solid #e2e8f0",
        boxShadow: "0 4px 12px rgba(148,163,184,0.35)",
      }}
    >
      <div style={{ fontSize: 13, color: "#64748b", marginBottom: 6 }}>
        {title}
      </div>
      <div style={{ fontSize: 24, fontWeight: 800, color: "#0f172a" }}>
        {value}
      </div>
      <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 4 }}>
        (demo – will be dynamic later)
      </div>
    </div>
  );
}

/* ---------- TAB: Requests ---------- */

function RequestsTab() {
  const [subTab, setSubTab] = useState<"advance" | "pause">("advance");

  return (
    <div>
      <h1 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>
        Driver Requests
      </h1>
      <p style={{ color: "#64748b", marginBottom: 12 }}>
        Review and approve driver requests for advances and deduction pauses.
      </p>

      <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
        <button
          onClick={() => setSubTab("advance")}
          style={{
            padding: "6px 12px",
            borderRadius: 999,
            border: "1px solid #cbd5e1",
            background: subTab === "advance" ? "#0f172a" : "white",
            color: subTab === "advance" ? "white" : "#0f172a",
            fontSize: 13,
            cursor: "pointer",
          }}
        >
          Advance Requests
        </button>
        <button
          onClick={() => setSubTab("pause")}
          style={{
            padding: "6px 12px",
            borderRadius: 999,
            border: "1px solid #cbd5e1",
            background: subTab === "pause" ? "#0f172a" : "white",
            color: subTab === "pause" ? "white" : "#0f172a",
            fontSize: 13,
            cursor: "pointer",
          }}
        >
          Pause Deduction Requests
        </button>
      </div>

      {subTab === "advance" ? <AdvanceRequestsTable /> : <PauseRequestsTable />}
    </div>
  );
}

function AdvanceRequestsTable() {
  return (
    <div
      style={{
        borderRadius: 12,
        border: "1px solid #e2e8f0",
        overflow: "hidden",
        background: "white",
      }}
    >
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
        <thead style={{ background: "#f1f5f9" }}>
          <tr>
            <Th>Date</Th>
            <Th>DrvCode</Th>
            <Th>Driver</Th>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Installment</Th>
            <Th>Status</Th>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {/* Dummy rows for now */}
          <tr>
            <Td>2025-11-10</Td>
            <Td>HARVAR1123</Td>
            <Td>Harvar Singh</Td>
            <Td>Fuel Advance</Td>
            <Td>$500</Td>
            <Td>$100 x 5</Td>
            <Td style={{ color: "#b45309", fontWeight: 600 }}>Pending</Td>
            <Td>
              <ActionButtons />
            </Td>
          </tr>
          <tr>
            <Td>2025-11-11</Td>
            <Td>JAS1234</Td>
            <Td>Jaspreet K.</Td>
            <Td>Personal</Td>
            <Td>$300</Td>
            <Td>$50 x 6</Td>
            <Td style={{ color: "#b45309", fontWeight: 600 }}>Pending</Td>
            <Td>
              <ActionButtons />
            </Td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function PauseRequestsTable() {
  return (
    <div
      style={{
        borderRadius: 12,
        border: "1px solid #e2e8f0",
        overflow: "hidden",
        background: "white",
      }}
    >
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
        <thead style={{ background: "#f1f5f9" }}>
          <tr>
            <Th>Date</Th>
            <Th>DrvCode</Th>
            <Th>Driver</Th>
            <Th>Deduction Type</Th>
            <Th>Pause From</Th>
            <Th>Resume On</Th>
            <Th>Status</Th>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>2025-11-12</Td>
            <Td>KAMAL198</Td>
            <Td>Kamal G.</Td>
            <Td>Truck Damage</Td>
            <Td>2025-12-01</Td>
            <Td>2026-01-01</Td>
            <Td style={{ color: "#b45309", fontWeight: 600 }}>Pending</Td>
            <Td>
              <ActionButtons />
            </Td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

/* Reusable table cell components */

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th
      style={{
        textAlign: "left",
        padding: "8px 10px",
        borderBottom: "1px solid #e2e8f0",
        fontWeight: 700,
        fontSize: 12,
        color: "#475569",
      }}
    >
      {children}
    </th>
  );
}

function Td({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <td
      style={{
        padding: "8px 10px",
        borderBottom: "1px solid #e2e8f0",
        color: "#0f172a",
        // allow overrides from caller (e.g. green/orange text)
        ...style,
      }}
    >
      {children}
    </td>
  );
}


function ActionButtons() {
  return (
    <div style={{ display: "flex", gap: 6 }}>
      <button
        style={{
          padding: "4px 8px",
          borderRadius: 999,
          border: "none",
          background: "#16a34a",
          color: "white",
          fontSize: 11,
          cursor: "pointer",
        }}
        onClick={() => alert("Demo only – later will approve in database.")}
      >
        Approve
      </button>
      <button
        style={{
          padding: "4px 8px",
          borderRadius: 999,
          border: "none",
          background: "#b91c1c",
          color: "white",
          fontSize: 11,
          cursor: "pointer",
        }}
        onClick={() => alert("Demo only – later will reject in database.")}
      >
        Reject
      </button>
    </div>
  );
}

/* ---------- TAB: Drivers ---------- */

function DriversTab() {
  return (
    <div>
      <h1 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>
        Drivers
      </h1>
      <p style={{ color: "#64748b", marginBottom: 12 }}>
        Search for a driver by DrvCode or name to view their current deductions
        and advances.
      </p>

      <div
        style={{
          display: "flex",
          gap: 10,
          marginBottom: 16,
          flexWrap: "wrap",
        }}
      >
        <input
          placeholder="Search by DrvCode or name…"
          style={{
            flex: 1,
            minWidth: 220,
            padding: 8,
            borderRadius: 8,
            border: "1px solid #cbd5e1",
            outline: "none",
            fontSize: 13,
          }}
        />
        <select
          defaultValue="all"
          style={{
            padding: 8,
            borderRadius: 8,
            border: "1px solid #cbd5e1",
            fontSize: 13,
          }}
        >
          <option value="all">All Types</option>
          <option value="company">Company</option>
          <option value="owner">Owner Operator</option>
        </select>
        <button
          style={{
            padding: "8px 14px",
            borderRadius: 8,
            border: "none",
            background: "#0f172a",
            color: "white",
            fontSize: 13,
            cursor: "pointer",
          }}
        >
          Search (demo)
        </button>
      </div>

      {/* Dummy driver summary */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(260px, 1fr) 2fr",
          gap: 16,
        }}
      >
        {/* Driver card */}
        <div
          style={{
            background: "white",
            borderRadius: 12,
            border: "1px solid #e2e8f0",
            padding: 16,
            boxShadow: "0 4px 12px rgba(148,163,184,0.35)",
          }}
        >
          <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 6 }}>
            Harvar Singh
          </h2>
          <p style={{ margin: 0, fontSize: 13, color: "#64748b" }}>
            DrvCode: <strong>HARVAR1123</strong>
          </p>
          <p style={{ margin: "6px 0 0", fontSize: 13, color: "#64748b" }}>
            Type: <strong>Company Driver</strong>
          </p>
        </div>

        {/* Deductions table (dummy) */}
        <div
          style={{
            background: "white",
            borderRadius: 12,
            border: "1px solid #e2e8f0",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              padding: "10px 12px",
              borderBottom: "1px solid #e2e8f0",
              fontWeight: 700,
              fontSize: 13,
              color: "#0f172a",
            }}
          >
            Current Deductions &amp; Advances (demo)
          </div>
          <table
            style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}
          >
            <thead style={{ background: "#f8fafc" }}>
              <tr>
                <Th>Description</Th>
                <Th>Type</Th>
                <Th>Installment</Th>
                <Th>Balance</Th>
                <Th>Status</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>Fuel Advance – Oct</Td>
                <Td>Advance</Td>
                <Td>$100 / week</Td>
                <Td>$300</Td>
                <Td style={{ color: "#15803d", fontWeight: 600 }}>Active</Td>
              </tr>
              <tr>
                <Td>Phone Plan</Td>
                <Td>Recurring</Td>
                <Td>$25 / week</Td>
                <Td>-</Td>
                <Td style={{ color: "#15803d", fontWeight: 600 }}>Active</Td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ---------- TAB: Ongoing Deductions ---------- */

function OngoingTab() {
  return (
    <div>
      <h1 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>
        Ongoing Deductions
      </h1>
      <p style={{ color: "#64748b", marginBottom: 12 }}>
        View all active deductions across drivers. Later this will join your
        portal data with TransPlus read-only tables.
      </p>

      <div
        style={{
          marginBottom: 12,
          display: "flex",
          gap: 10,
          flexWrap: "wrap",
        }}
      >
        <input
          placeholder="Filter by DrvCode…"
          style={{
            padding: 8,
            borderRadius: 8,
            border: "1px solid #cbd5e1",
            fontSize: 13,
          }}
        />
        <select
          defaultValue="all"
          style={{
            padding: 8,
            borderRadius: 8,
            border: "1px solid #cbd5e1",
            fontSize: 13,
          }}
        >
          <option value="all">All Types</option>
          <option value="advance">Advance</option>
          <option value="recurring">Recurring</option>
        </select>
      </div>

      <div
        style={{
          borderRadius: 12,
          border: "1px solid #e2e8f0",
          background: "white",
          overflow: "hidden",
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
          <thead style={{ background: "#f1f5f9" }}>
            <tr>
              <Th>DrvCode</Th>
              <Th>Driver</Th>
              <Th>Type</Th>
              <Th>Description</Th>
              <Th>Installment</Th>
              <Th>Balance</Th>
              <Th>Status</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>HARVAR1123</Td>
              <Td>Harvar Singh</Td>
              <Td>Advance</Td>
              <Td>Fuel Advance – Oct</Td>
              <Td>$100 / week</Td>
              <Td>$300</Td>
              <Td style={{ color: "#15803d", fontWeight: 600 }}>Active</Td>
            </tr>
            <tr>
              <Td>JAS1234</Td>
              <Td>Jaspreet K.</Td>
              <Td>Recurring</Td>
              <Td>Phone Plan</Td>
              <Td>$25 / week</Td>
              <Td>-</Td>
              <Td style={{ color: "#15803d", fontWeight: 600 }}>Active</Td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ---------- TAB: Alerts (Upcoming resume dates) ---------- */

function AlertsTab() {
  return (
    <div>
      <h1 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>
        Alerts – Upcoming Resume Dates
      </h1>
      <p style={{ color: "#64748b", marginBottom: 12 }}>
        When deductions are paused, they will show up here as their resume dates
        get closer. For now this is sample data.
      </p>

      <div
        style={{
          borderRadius: 12,
          border: "1px solid #e2e8f0",
          background: "white",
          overflow: "hidden",
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
          <thead style={{ background: "#f1f5f9" }}>
            <tr>
              <Th>Resume Date</Th>
              <Th>DrvCode</Th>
              <Th>Driver</Th>
              <Th>Deduction Type</Th>
              <Th>Paused From</Th>
              <Th>Paused To</Th>
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>2026-01-01</Td>
              <Td>KAMAL198</Td>
              <Td>Kamal G.</Td>
              <Td>Truck Damage</Td>
              <Td>2025-12-01</Td>
              <Td>2026-01-01</Td>
              <Td>
                <button
                  style={{
                    padding: "4px 8px",
                    borderRadius: 999,
                    border: "1px solid #cbd5e1",
                    background: "white",
                    fontSize: 11,
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    alert("Later this will mark the deduction as resumed.")
                  }
                >
                  Mark as Resumed (demo)
                </button>
              </Td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
