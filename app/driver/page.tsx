export default function DriverDashboard() {
  return (
    <div
      style={{
        minHeight: '100dvh',
        display: 'grid',
        placeItems: 'center',
        background: '#f8fafc',
        padding: 16,
        position: 'relative',
      }}
    >
      {/* 🔹 Transparent background logo (watermark) */}
      <img
        src="/images/logo.jpeg"
        alt="Trans 99 Logistics Logo"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: 'auto',
          opacity: 0.05,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          width: '100%',
          maxWidth: 480,
          background: 'white',
          border: '1px solid #e5e7eb',
          borderRadius: 14,
          padding: 28,
          boxShadow: '0 10px 28px rgba(0,0,0,0.06)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* 🔹 Logo */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
          <img
            src="/images/logo.jpeg"
            alt="Trans 99 Logistics Logo"
            style={{ width: 150, height: 'auto', borderRadius: 8 }}
          />
        </div>

        {/* 🔹 Title */}
        <h2
          style={{
            margin: 0,
            fontSize: 26,
            fontWeight: 800,
            color: '#0f172a',
            textAlign: 'center',
          }}
        >
          Driver Dashboard
        </h2>

        {/* 🔹 Form */}
        <form
          action="/driver/dashboard" 
          method="get"
          style={{
            display: 'grid',
            gap: 14,
            marginTop: 16,
          }}
        >
          <label style={{ display: 'grid', gap: 6, textAlign: 'left' ,color:'#0d0d0dff'}}>
            <span style={{ fontWeight: 500, color: '#0f172a' }}>DrvCode (Unique Driver Code)</span>
            <input
              name="drvcode"
              placeholder="e.g., HARVAR1123"
              required
              style={{
                padding: 12,
                border: '1px solid #cbd5e1',
                borderRadius: 10,
                outline: 'none',
              }}
            />
          </label>

          <label style={{ display: 'grid', gap: 6, textAlign: 'left', color: '#0d0d0dff' }}>
            <span style={{ fontWeight: 500, color: '#0f172a' }}>Driver Type</span>
            <select
              name="type"
              required
              style={{
                padding: 12,
                border: '1px solid #cbd5e1',
                borderRadius: 10,
                outline: 'none',
              }}
            >
              <option value="">Select…</option>
              <option value="Company">Company</option>
              <option value="Owner Operator">Owner Operator</option>
            </select>
          </label>

          {/* 🔹 Button */}
          <button
            type="submit"
            style={{
              padding: '12px 16px',
              borderRadius: 10,
              border: 0,
              background: '#111827',
              color: 'white',
              fontWeight: 800,
              cursor: 'pointer',
            }}
          >
            View My Details
          </button>

          {/* 🔹 Back Link */}
          <a
            href="/"
            style={{
              textAlign: 'center',
              color: '#0ea5e9',
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            ← Back to Home
          </a>
        </form>
      </div>
    </div>
  );
}
