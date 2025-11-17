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

export default function RequestAdvancePage() {
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
              color: "#38bdf8",
              fontWeight: 700,
              marginBottom: 4,
            }}
          >
            Driver finance request
          </div>
          <h1
            style={{
              fontSize: 28,
              fontWeight: 900,
              margin: 0,
              color: "#020617",
            }}
          >
            Request for Advance
          </h1>
          <p
            style={{
              marginTop: 6,
              fontSize: 13,
              color: "#64748b",
              maxWidth: 520,
            }}
          >
            Fill in the details below to request an advance. This is a{" "}
            <strong>front-end demo only</strong> – data is not being sent to a
            real backend yet.
          </p>
        </header>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert(
              'Demo only: your "Request for advance" form would be submitted here.'
            );
          }}
          style={{ display: "flex", flexDirection: "column", gap: 18 }}
        >
          {/* Driver code & type */}
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
              <label style={labelStyle}>Driver Type</label>
              <select style={inputBase} name="type" required>
                <option value="">Select…</option>
                <option value="Company">Company</option>
                <option value="Owner Operator">Owner Operator</option>
              </select>
            </div>
          </div>

          {/* Amount + repayment */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 16,
            }}
          >
            <div>
              <label style={labelStyle}>Amount Requested (CAD)</label>
              <input
                style={inputBase}
                placeholder="e.g. 500"
                type="number"
                min={0}
                name="amount"
                required
              />
            </div>

            <div>
              <label style={labelStyle}>Preferred repayment</label>
              <select style={inputBase} name="repayment" required>
                <option value="">Select…</option>
                <option value="next-settlement">Next settlement</option>
                <option value="two-settlements">Over next 2 settlements</option>
                <option value="four-settlements">
                  Over next 4 settlements
                </option>
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
              <label style={labelStyle}>When do you need the funds?</label>
              <input
                style={inputBase}
                type="date"
                name="neededOn"
                required
              />
            </div>

            <div>
              <label style={labelStyle}>Urgency</label>
              <select style={inputBase} name="urgency" required>
                <option value="">Select…</option>
                <option value="normal">Standard</option>
                <option value="high">High – this week</option>
                <option value="critical">Critical – next 24–48 hours</option>
              </select>
            </div>
          </div>

          {/* Reason */}
          <div>
            <label style={labelStyle}>Reason for advance</label>
            <textarea
              style={{
                ...inputBase,
                minHeight: 90,
                resize: "vertical",
                lineHeight: 1.5,
              }}
              placeholder="Explain briefly why you need this advance…"
              name="reason"
              required
            />
          </div>

          {/* Extra details */}
          <div>
            <label style={labelStyle}>Additional notes (optional)</label>
            <textarea
              style={{
                ...inputBase,
                minHeight: 70,
                resize: "vertical",
                lineHeight: 1.5,
              }}
              placeholder="Anything else the manager should know…"
              name="notes"
            />
          </div>

          {/* Disclaimer */}
          <div
            style={{
              marginTop: 2,
              padding: "10px 12px",
              borderRadius: 12,
              background: "#f1f5f9",
              border: "1px solid #e2e8f0",
              fontSize: 12,
              color: "#64748b",
            }}
          >
            This request will be reviewed by management. Final approval and
            timing of payment will be communicated separately.
          </div>

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
                  "linear-gradient(to right, #0284c7, #22c55e, #0ea5e9)",
                color: "white",
                fontWeight: 700,
                fontSize: 14,
                cursor: "pointer",
                boxShadow: "0 10px 30px rgba(14,165,233,0.45)",
              }}
            >
              Submit advance request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
