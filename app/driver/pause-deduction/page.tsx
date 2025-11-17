"use client";

import React from "react";

const pageWrapper: React.CSSProperties = {
  minHeight: "100dvh",
  background:
    "linear-gradient(to bottom, #020617 0, #020617 220px, #f1f5f9 220px)",
  padding: "32px 16px 40px",
};

const cardStyle: React.CSSProperties = {
  maxWidth: 900,
  margin: "0 auto",
  background: "white",
  borderRadius: 24,
  boxShadow: "0 24px 60px rgba(15,23,42,0.35)",
  padding: "28px 28px 32px",
  border: "1px solid #e2e8f0",
};

const labelStyle: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 600,
  color: "#0f172a",
  marginBottom: 6,
};

const inputBase: React.CSSProperties = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: 10,
  border: "1px solid #cbd5e1",
  outline: "none",
  fontSize: 14,
  color: "#0f172a",
  background: "#f8fafc",
};

export default function PauseDeductionPage() {
  return (
    <div style={pageWrapper}>
      <div style={cardStyle}>
        {/* Header */}
        <header style={{ marginBottom: 18 }}>
          <div
            style={{
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: 1.4,
              color: "#f97316",
              fontWeight: 700,
              marginBottom: 4,
            }}
          >
            Deduction change request
          </div>
          <h1
            style={{
              fontSize: 28,
              fontWeight: 900,
              margin: 0,
              color: "#020617",
            }}
          >
            Pause Deduction
          </h1>
          <p
            style={{
              marginTop: 6,
              fontSize: 13,
              color: "#64748b",
              maxWidth: 560,
            }}
          >
            Use this form to request a temporary pause on a deduction. Management
            will review and confirm. This is a{" "}
            <strong>front-end only demo</strong> – nothing is stored yet.
          </p>
        </header>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert(
              'Demo only: your "Pause deduction" request would be submitted here.'
            );
          }}
          style={{ display: "flex", flexDirection: "column", gap: 18 }}
        >
          {/* Driver + deduction type */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 16,
            }}
          >
            <div>
              <label style={labelStyle}>Driver Code</label>
              <input
                style={inputBase}
                placeholder="e.g. DRV1234"
                name="drvcode"
                required
              />
            </div>

            <div>
              <label style={labelStyle}>Deduction type</label>
              <select style={inputBase} name="deductionType" required>
                <option value="">Select…</option>
                <option value="truck-payment">Truck payment</option>
                <option value="fuel-advance">Fuel advance recovery</option>
                <option value="insurance">Insurance / plates</option>
                <option value="other">Other deduction</option>
              </select>
            </div>
          </div>

          {/* Dates */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 16,
            }}
          >
            <div>
              <label style={labelStyle}>Pause from</label>
              <input
                style={inputBase}
                type="date"
                name="pauseFrom"
                required
              />
            </div>

            <div>
              <label style={labelStyle}>Resume on</label>
              <input
                style={inputBase}
                type="date"
                name="resumeOn"
                required
              />
            </div>
          </div>

          {/* Reason */}
          <div>
            <label style={labelStyle}>Reason</label>
            <textarea
              style={{
                ...inputBase,
                minHeight: 90,
                resize: "vertical",
                lineHeight: 1.5,
              }}
              placeholder="Explain why you need this deduction paused…"
              name="reason"
              required
            />
          </div>

          {/* Impact / notes */}
          <div>
            <label style={labelStyle}>Additional notes for management</label>
            <textarea
              style={{
                ...inputBase,
                minHeight: 70,
                resize: "vertical",
                lineHeight: 1.5,
              }}
              placeholder="For example: expected duration of issue, impact on settlements, etc."
              name="notes"
            />
          </div>

          {/* Confirmation */}
          <label
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 8,
              fontSize: 12,
              color: "#475569",
              background: "#f8fafc",
              borderRadius: 12,
              padding: "10px 12px",
              border: "1px solid #e2e8f0",
            }}
          >
            <input type="checkbox" required style={{ marginTop: 2 }} />
            <span>
              I confirm that the information provided is accurate and I
              understand this request is subject to management review and
              approval.
            </span>
          </label>

          {/* Actions */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 12,
              marginTop: 8,
            }}
          >
            <a
              href="/driver/dashboard"
              style={{
                fontSize: 13,
                color: "#64748b",
                textDecoration: "none",
              }}
            >
              ← Back to Driver Dashboard
            </a>

            <button
              type="submit"
              style={{
                padding: "11px 24px",
                borderRadius: 999,
                border: "none",
                background:
                  "linear-gradient(to right, #f97316, #fb923c, #f97316)",
                color: "white",
                fontWeight: 700,
                fontSize: 14,
                cursor: "pointer",
                boxShadow: "0 10px 30px rgba(248,113,113,0.35)",
              }}
            >
              Submit pause request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
