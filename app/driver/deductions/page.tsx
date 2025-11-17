"use client";

import React from "react";

export default function DriverDeductionsPage() {
  // TEMP hard-coded info – later this will come from TransPlus
  const driverName = "Driver Name";
  const drvCode = "DRV1234";

  const rows = [
    {
      description: "DISABILITY INSURANCE",
      type: "Deduction",
      status: "Active",
      effective: "2018-01-29",
      payPerPeriod: "$56.50",
      deductedSoFar: "$2,316.50",
      remaining: "$0.00",
      comments: "—",
    },
    {
      description: "PLATES",
      type: "Deduction",
      status: "On Hold",
      effective: "2018-01-29",
      payPerPeriod: "$50.00",
      deductedSoFar: "$3,392.33",
      remaining: "$364.00",
      comments: "$500 IN ARCHIVE",
    },
    {
      description: "HOLDBACK",
      type: "Advance",
      status: "Active",
      effective: "2018-01-29",
      payPerPeriod: "$100.00",
      deductedSoFar: "$750.00",
      remaining: "$11,500.00",
      comments: "—",
    },
  ];

  const activeCount = rows.filter((r) => r.status === "Active").length;
  const totalRemaining = "$11,864.00"; // sample only

  return (
    <div
      style={{
        minHeight: "100dvh",
        background: "#ffffff",
      }}
    >
      {/* full-width content with padding */}
      <div
        style={{
          padding: "24px 32px 40px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* TOP STRIP WITH LOGO + BACK BUTTON */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <img
              src="/images/logo.jpeg"
              alt="Trans 99 Logistics"
              style={{
                height: 40,
                width: "auto",
                borderRadius: 8,
                background: "#ffffff",
                boxShadow: "0 4px 10px rgba(15,23,42,0.18)",
              }}
            />
            <div>
              <div
                style={{
                  fontSize: 12,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  color: "#6b7280",
                }}
              >
                Trans99 Logistics • Driver Portal
              </div>
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 800,
                  color: "#111827",
                }}
              >
                Ongoing Deductions &amp; Advances
              </div>
            </div>
          </div>

          <a
            href="/driver/dashboard"
            style={{
              fontSize: 13,
              color: "#0ea5e9",
              textDecoration: "none",
              fontWeight: 600,
              border: "1px solid #d1d5db",
              padding: "8px 14px",
              borderRadius: 999,
              whiteSpace: "nowrap",
              background: "#ffffff",
            }}
          >
            ← Back to Dashboard
          </a>
        </div>

        {/* MAIN CARD */}
        <div
          style={{
            borderRadius: 0,
            border: "1px solid #e5e7eb",
            boxShadow: "0 14px 40px rgba(15,23,42,0.08)",
            padding: 9,
          }}
        >
          {/* driver summary inside card */}
          <div style={{ marginBottom: 10 }}>
            <div
              style={{
                fontSize: 11,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "#9ca3af",
                marginBottom: 4,
              }}
            >
              Driver summary
            </div>
            <div
              style={{
                fontSize: 22,
                fontWeight: 800,
                color: "#111827",
              }}
            >
              {driverName}{" "}
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#6b7280",
                }}
              >
                ({drvCode})
              </span>
            </div>
          </div>

          <p
            style={{
              fontSize: 13,
              color: "#4b5563",
              marginBottom: 18,
              maxWidth: 650,
            }}
          >
            This page shows the deductions and advances currently on your file.
            Amounts are for reference only – final payroll numbers come from
            the office system.
          </p>

          {/* stat boxes */}
          <div
            style={{
              display: "flex",
              gap: 16,
              marginBottom: 18,
              flexWrap: "wrap",
            }}
          >
            <div style={statBoxStyle}>
              <div style={statLabelStyle}>Active items</div>
              <div style={statValueStyle}>{activeCount}</div>
            </div>
            <div style={statBoxStyle}>
              <div style={statLabelStyle}>Total remaining</div>
              <div style={statValueStyle}>{totalRemaining}</div>
            </div>
          </div>

          {/* TABLE */}
          <div
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: 13,
              }}
            >
              <thead>
                <tr style={{ background: "#f3f4f6" }}>
                  {[
                    "Description",
                    "Type",
                    "Status",
                    "Effective",
                    "Pay / period",
                    "Deducted so far",
                    "Remaining",
                    "Comments",
                  ].map((head) => (
                    <th
                      key={head}
                      style={{
                        textAlign: "left",
                        padding: "10px 12px",
                        borderBottom: "1px solid #e5e7eb",
                        fontWeight: 700,
                        color: "#111827",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, idx) => (
                  <tr
                    key={idx}
                    style={{
                      background: idx % 2 === 0 ? "#ffffff" : "#f9fafb",
                    }}
                  >
                    <td style={tdStyle}>{row.description}</td>
                    <td style={tdStyle}>{row.type}</td>
                    <td style={tdStyle}>
                      <StatusPill status={row.status} />
                    </td>
                    <td style={tdStyle}>{row.effective}</td>
                    <td style={tdStyleRight}>{row.payPerPeriod}</td>
                    <td style={tdStyleRight}>{row.deductedSoFar}</td>
                    <td style={tdStyleRight}>{row.remaining}</td>
                    <td style={tdStyle}>{row.comments}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p
            style={{
              marginTop: 12,
              fontSize: 12,
              color: "#6b7280",
            }}
          >
            * This is a front-end demo only. Amounts and items will come
            directly from the TransPlus / SQL database in the next phase.
          </p>
        </div>
      </div>
    </div>
  );
}

/* --- small components & shared styles --- */

function StatusPill({ status }: { status: string }) {
  let bg = "#e5e7eb";
  let color = "#374151";

  if (status === "Active") {
    bg = "#dcfce7";
    color = "#166534";
  } else if (status === "On Hold") {
    bg = "#fef9c3";
    color = "#854d0e";
  }

  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 10px",
        borderRadius: 999,
        background: bg,
        color,
        fontSize: 11,
        fontWeight: 600,
      }}
    >
      {status}
    </span>
  );
}

const tdStyle: React.CSSProperties = {
  padding: "10px 12px",
  borderBottom: "1px solid #e5e7eb",
  color: "#111827",
};

const tdStyleRight: React.CSSProperties = {
  ...tdStyle,
  textAlign: "right",
};

const statBoxStyle: React.CSSProperties = {
  borderRadius: 10,
  border: "1px solid #e5e7eb",
  padding: "10px 16px",
  minWidth: 180,
  background: "#f9fafb",
};

const statLabelStyle: React.CSSProperties = {
  fontSize: 11,
  textTransform: "uppercase",
  letterSpacing: 1,
  color: "#6b7280",
  marginBottom: 4,
};

const statValueStyle: React.CSSProperties = {
  fontSize: 18,
  fontWeight: 800,
  color: "#111827",
};
